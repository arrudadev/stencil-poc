import Component from '@glimmer/component';

import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class CounterComponent extends Component {
  @tracked name = 'EmberJs';

  @action
  changeName(event) {
    const value = event.detail;

    this.name = value;
  }
}
