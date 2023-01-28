import { useEffect } from 'react';

import type { AppProps } from 'next/app'

import '@/styles/globals.css'

import '@stencil-ui/stencil/dist/components/components.css';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const {
      applyPolyfills,
      defineCustomElements,
    } = require('@stencil-ui/stencil/loader');

    applyPolyfills().then(() => {
      defineCustomElements(window);
    });

    return () => {};
  }, []);

  return <Component {...pageProps} />
}


