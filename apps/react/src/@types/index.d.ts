// import * as React from 'react'

// // declare global {
// //   namespace JSX {
// //     interface IntrinsicElements {
// //       item: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
// //     }
// //   }
// // }

// import { JSX as LocalJSX } from 'stencil-library/dist/loader';
// import { HTMLAttributes, DetailedHTMLProps } from 'react';
// import { Omit } from 'types';

// type StencilToReact<T> = {
//   [P in keyof T]?: Omit<DetailedHTMLProps<HTMLAttributes<T[P]>, T[P]>, 'className'> & {
//     class?: string;
//   } & T[P];
// } ;

// declare global {
//   export namespace JSX {
//     interface IntrinsicElements extends StencilToReact<LocalJSX.IntrinsicElements> {
//       'my-component': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
//     }
//   }
// }
