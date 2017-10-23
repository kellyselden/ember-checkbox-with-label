import Component from '@ember/component';
import { get } from '@ember/object';
import layout from '../templates/components/checkbox-with-label';

const MyComponent = Component.extend({
  layout,

  tagName: 'label',

  classNames: ['checkbox-with-label'],

  actions: {
    toggleChecked() {
      let checked = get(this, 'checked');

      this.sendAction('update', !checked);
    }
  }
});

MyComponent.reopenClass({
  positionalParams: ['checked', 'text']
});

export default MyComponent;
