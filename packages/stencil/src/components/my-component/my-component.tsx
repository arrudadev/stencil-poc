import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() name: string;

  render() {
    return <div class="token-green">Hello, World! I'm {this.name}</div>;
  }
}
