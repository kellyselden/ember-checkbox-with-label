import Ember from 'ember';
import layout from '../templates/components/checkbox-with-label';

const {
  Component,
  get
} = Ember;

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
