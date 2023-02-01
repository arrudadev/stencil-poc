import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'my-input',
  styleUrl: 'my-input.css',
  shadow: true
})
export class MyInput {
  @Prop() placeholder?: string

  @Event() changeInput?: EventEmitter<string>

  render() {
    return (
      <Host id="my-input">
        <input type="text" placeholder={this.placeholder} onInput={(event) => this.changeInput.emit((event.target as HTMLInputElement).value)} />
      </Host>
    );
  }

}
