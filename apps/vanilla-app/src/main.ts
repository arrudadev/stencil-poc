import './style.css'

import '@stencil-ui/stencil/dist/components/components.css';

import { applyPolyfills, defineCustomElements } from '@stencil-ui/stencil/loader';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <my-heading>Vite + JS Vanila + Web components</my-heading>

    <my-text>Type your name:</my-text>

    <my-input id="my-input" placeholder='Type...'></my-input>

    <div style="margin-top: 10px;">
      <my-component id="my-component"></my-component>
    </div>
  </div>
`

applyPolyfills().then(() => {
  defineCustomElements();
});
