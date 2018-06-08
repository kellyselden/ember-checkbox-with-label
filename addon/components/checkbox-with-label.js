import Component from '@ember/component';
import { get } from '@ember/object';
import layout from '../templates/components/checkbox-with-label';

export default Component.extend({
  layout,

  tagName: 'label',

  classNames: ['checkbox-with-label'],

  actions: {
    toggleChecked() {
      let checked = get(this, 'checked');

      get(this, 'update')(!checked);
    }
  }
}).reopenClass({
  positionalParams: ['checked', 'text']
});
