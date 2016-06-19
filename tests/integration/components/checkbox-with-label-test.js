import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('checkbox-with-label', 'Integration | Component | checkbox with label', {
  integration: true
});

test('it has a class', function(assert) {
  this.render(hbs`{{checkbox-with-label}}`);

  assert.strictEqual(this.$('.checkbox-with-label').length, 1);
});

test('it renders your text', function(assert) {
  this.render(hbs`
    {{checkbox-with-label
      text="my test text"
    }}
  `);

  assert.strictEqual(this.$().text().trim(), 'my test text');
});

test('clicking updates a bool', function(assert) {
  this.render(hbs`
    {{checkbox-with-label
      update=(action (mut checked))
    }}
  `);

  this.$('input[type=checkbox]').click();

  assert.strictEqual(this.get('checked'), true);
});

test('clicking the label clicks the checkbox', function(assert) {
  this.render(hbs`
    {{checkbox-with-label
      update=(action (mut checked))
    }}
  `);

  this.$('label').click();

  assert.strictEqual(this.get('checked'), true);
});

test('it renders a bool', function(assert) {
  this.set('checked', true);

  this.render(hbs`
    {{checkbox-with-label
      checked
    }}
  `);

  assert.strictEqual(this.$('input[type=checkbox]:checked').length, 1);
});

test('it renders an updated bool', function(assert) {
  this.render(hbs`
    {{checkbox-with-label
      checked
      update=(action (mut checked))
    }}
  `);

  this.$('input[type=checkbox]').click();

  assert.strictEqual(this.$('input[type=checkbox]:checked').length, 1);
});
