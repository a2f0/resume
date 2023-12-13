import {dirname} from 'path';

import {fileURLToPath} from 'url';

import fs from 'fs';
import os from 'os';
import path from 'path';
import {testDownloadDir} from './test/testDownloadDir';

const currentFileUrl = import.meta.url;
const currentFilePath = fileURLToPath(currentFileUrl);
const currentDirectory = dirname(currentFilePath);

const platform = os.platform();

let chromeDriverPath;
let chromePath;
if (platform === 'darwin') {
  chromeDriverPath = path.join(
    currentDirectory,
    `./chromedriver/mac_arm-${process.env.CHROME_VERSION}/chromedriver-mac-arm64/chromedriver`
  );
  chromePath = path.join(
    currentDirectory,
    `./chrome/mac_arm-${process.env.CHROME_VERSION}/chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing`
  );
} else {
  chromeDriverPath = path.join(
    currentDirectory,
    `./chromedriver/linux-${process.env.CHROME_VERSION}/chromedriver-linux64/chromedriver`
  );
  chromePath = path.join(
    currentDirectory,
    `./chrome/linux-${process.env.CHROME_VERSION}/chrome-linux64/chrome`
  );
}

export const chromeCapabilities = {
  maxInstances: 5,
  browserName: 'chrome',
  'wdio:chromedriverOptions': {
    binary: chromeDriverPath,
  },
  'goog:chromeOptions': {
    binary: chromePath,
    prefs: {
      directory_upgrade: true,
      prompt_for_download: false,
      'download.default_directory': testDownloadDir,
    },
    args: ['--window-size=1366,2160'],
  },
  acceptInsecureCerts: true,
};

export const config: WebdriverIO.Config = {
  runner: 'local',
  specs: ['./test/specs/**/*.ts'],
  exclude: [],
  maxInstances: 1,
  capabilities: [chromeCapabilities],
  logLevel: 'info',
  bail: 0,
  baseUrl: 'http://localhost:4001',
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  framework: 'mocha',
  reporters: ['spec'],
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000,
  },
  onPrepare: async function () {
    if (!fs.existsSync(testDownloadDir)) {
      console.info('Creating download directory: ' + testDownloadDir);
      fs.mkdirSync(testDownloadDir);
    }
  },
  onComplete: async function () {
    fs.rm(testDownloadDir, {recursive: true}, err => {
      if (err) {
        throw err;
      }
      console.log(`Download directory ${testDownloadDir} was deleted.`);
    });
  },
};
