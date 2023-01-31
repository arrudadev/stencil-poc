import { Component, Host, h, } from '@stencil/core';

@Component({
  tag: 'my-heading',
  styleUrl: 'my-heading.css',
  shadow: true,
})
export class MyHeading {
  render() {
    return (
      <Host>
        <h1 class="my-heading">
          <slot></slot>
        </h1>
      </Host>
    );
  }

}
