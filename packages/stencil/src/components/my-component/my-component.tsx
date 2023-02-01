import { Component, Prop, h, Host } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() name: string;

  render() {
    return (
      <Host id="my-component">
        <div class="token-green">Hello, World! I'm {this.name}</div>
      </Host>
    )
  }
}
