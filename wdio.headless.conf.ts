import * as Constants from './constants';
import {config as sharedConfig} from './wdio.shared.conf';

export const config: WebdriverIO.Config = {
  ...sharedConfig,
  ...{
    capabilities: [
      {
        browserName: 'chrome',
        'goog:chromeOptions': {
          prefs: {
            directory_upgrade: true,
            prompt_for_download: false,
            'download.default_directory': Constants.TEST_DOWNLOAD_DIR,
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
