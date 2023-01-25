import { Config } from '@stencil/core';

import { reactOutputTarget as react } from '@stencil/react-output-target';
import { vueOutputTarget as vue } from '@stencil/vue-output-target';

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
    vue({
      componentCorePackage: '@stencil-ui/stencil',
      proxiesFile: '../vue/src/components/index.ts',
    }),
  ],
  globalStyle: "src/styles/global.css",
};
