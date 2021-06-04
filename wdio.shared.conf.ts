export const config: WebdriverIO.Config = {
  runner: 'local',
  specs: ['./test/specs/**/*.ts'],
  exclude: [],
  maxInstances: 10,
  capabilities: [
    {
      maxInstances: 5,
      browserName: 'chrome',
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
};
