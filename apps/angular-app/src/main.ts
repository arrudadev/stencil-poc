import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import { applyPolyfills, defineCustomElements } from '@stencil-ui/stencil/loader';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

applyPolyfills().then(() => {
  defineCustomElements();
});

