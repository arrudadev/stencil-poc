import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'

import '@stencil-ui/stencil/dist/components/components.css';

import { applyPolyfills, defineCustomElements } from '@stencil-ui/stencil/loader';

const app = createApp(App)

app.use(router)

app.mount('#app')

applyPolyfills().then(() => {
  defineCustomElements();
});
