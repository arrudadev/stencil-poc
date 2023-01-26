import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import '@stencil-ui/stencil/dist/components/components.css';

import { applyPolyfills, defineCustomElements } from '@stencil-ui/stencil/loader';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

applyPolyfills().then(() => {
  defineCustomElements();
});

