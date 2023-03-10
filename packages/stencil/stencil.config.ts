import { Config } from '@stencil/core';

import { reactOutputTarget as react } from '@stencil/react-output-target';
import { vueOutputTarget as vue } from '@stencil/vue-output-target';
import { angularOutputTarget as angular } from '@stencil/angular-output-target';

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
      serviceWorker: null
    },
    {
      type: "dist-hydrate-script",
    },
    react({
      componentCorePackage: '@stencil-ui/stencil',
      proxiesFile: '../react/src/components/index.ts'
    }),
    vue({
      componentCorePackage: '@stencil-ui/stencil',
      proxiesFile: '../vue/src/components/index.ts',
    }),
    angular({
      componentCorePackage: '@stencil-ui/stencil',
      directivesProxyFile: '../angular/projects/component-library/src/lib/stencil-generated/components.ts',
      directivesArrayFile: '../angular/projects/component-library/src/lib/stencil-generated/index.ts'
    }),
  ],
  globalStyle: "src/styles/global.css",
};
