import {config as sharedConfig} from './wdio.shared.conf';
import {testDownloadDir} from './test/testDownloadDir';

if (process.env.CUSTOM_CHROME_PATH) {
  console.info(
    '=== using custom chrome path: ' + process.env.CUSTOM_CHROME_PATH
  );
} else {
  console.info('=== not using custom chrome path');
}

export const config: WebdriverIO.Config = {
  ...sharedConfig,
  ...{
    capabilities: [
      {
        browserName: 'chrome',
        'goog:chromeOptions': {
          // If this is undefined it will default to launching Chrome from the existing path.
          // See .github/workflows/main.yml for a deterministic configuration of this value.
          binary: process.env.CUSTOM_CHROME_PATH,
          prefs: {
            directory_upgrade: true,
            prompt_for_download: false,
            'download.default_directory': testDownloadDir,
          },
          args: [
            '--headless',
            '--disable-gpu',
            '--disable-features=NetworkService',
            '--no-sandbox',
            '--disable-dev-shm-usage',
            '--window-size=1366,2160',
          ],
        },
      },
    ],
  },
};
