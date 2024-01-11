import {defineConfig} from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['test/vitest.setup.ts'],
    // https://github.com/vitest-dev/vitest/issues/740
    maxWorkers: 1,
    minWorkers: 0,
  },
  plugins: [],
});
