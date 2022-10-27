import * as Constants from './constants';
import fs from 'fs';

export const config: WebdriverIO.Config = {
  runner: 'local',
  specs: ['./test/specs/**/*.ts'],
  exclude: [],
  maxInstances: 1,
  capabilities: [
    {
      maxInstances: 5,
      browserName: 'chrome',
      'goog:chromeOptions': {
        prefs: {
          directory_upgrade: true,
          prompt_for_download: false,
          'download.default_directory': Constants.TEST_DOWNLOAD_DIR,
        },
        args: ['--window-size=1366,2160'],
      },
      acceptInsecureCerts: true,
    },
  ],
  logLevel: 'info',
  bail: 0,
  baseUrl: 'http://localhost:4001',
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: ['chromedriver'],
  framework: 'mocha',
  reporters: ['spec'],
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000,
  },
  onPrepare: async function () {
    if (!fs.existsSync(Constants.TEST_DOWNLOAD_DIR)) {
      console.info(
        'Creating download directory: ' + Constants.TEST_DOWNLOAD_DIR
      );
      fs.mkdirSync(Constants.TEST_DOWNLOAD_DIR);
    }
  },
  onComplete: async function () {
    fs.rm(Constants.TEST_DOWNLOAD_DIR, {recursive: true}, err => {
      if (err) {
        throw err;
      }
      console.log(
        `Download directory ${Constants.TEST_DOWNLOAD_DIR} was deleted.`
      );
    });
  },
};
