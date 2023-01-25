import { Config } from '@stencil/core';

import { reactOutputTarget as react } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'components',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'www',
      serviceWorker: null,
    },
    react({
      componentCorePackage: '@stencil-ui/stencil',
      proxiesFile: '../react/src/components/index.ts'
    }),
  ],
  globalStyle: "src/styles/global.css",
};
