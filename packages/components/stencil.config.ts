import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'components',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'www',
      serviceWorker: null,
    }
  ],
  globalStyle: "src/styles/global.css",
};
