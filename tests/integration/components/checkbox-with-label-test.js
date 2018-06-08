import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click, find } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | checkbox with label', function(hooks) {
  setupRenderingTest(hooks);

  test('it has a class', async function(assert) {
    await render(hbs`{{checkbox-with-label}}`);

    assert.ok(find('.checkbox-with-label'));
  });

  test('it renders your text', async function(assert) {
    await render(hbs`
      {{checkbox-with-label
        text="my test text"
      }}
    `);

    assert.strictEqual(find('*').textContent.trim(), 'my test text');
  });

  test('it renders your text as block', async function(assert) {
    await render(hbs`
      {{#checkbox-with-label}}
        my test text
      {{/checkbox-with-label}}
    `);

    assert.strictEqual(find('*').textContent.trim(), 'my test text');
  });

  test('clicking updates a bool', async function(assert) {
    await render(hbs`
      {{checkbox-with-label
        update=(action (mut checked))
      }}
    `);

    assert.notOk(this.get('checked'));

    await click('input[type=checkbox]');

    assert.strictEqual(this.get('checked'), true);
  });

  test('clicking the label clicks the checkbox', async function(assert) {
    await render(hbs`
      {{checkbox-with-label
        update=(action (mut checked))
      }}
    `);

    assert.notOk(this.get('checked'));

    await click('label');

    assert.strictEqual(this.get('checked'), true);
  });

  test('it renders a bool', async function(assert) {
    this.set('checked', true);

    await render(hbs`
      {{checkbox-with-label
        checked
      }}
    `);

    assert.ok(find('input[type=checkbox]:checked'));
  });

  test('it renders an updated bool', async function(assert) {
    await render(hbs`
      {{checkbox-with-label
        checked
        update=(action (mut checked))
      }}
    `);

    await click('input[type=checkbox]');

    assert.ok(find('input[type=checkbox]:checked'));
  });

  test('it can disable the checkbox', async function(assert) {
    await render(hbs`
      {{checkbox-with-label
        disabled=true
      }}
    `);

    assert.ok(find('input[type=checkbox]').hasAttribute('disabled'));
  });

  test('updates disabling of the checkbox when the disabled attr changes', async function(assert) {
    this.set('isDisabled', false);

    await render(hbs`
      {{checkbox-with-label
        disabled=isDisabled
      }}
    `);

    assert.notOk(find('input[type=checkbox]').hasAttribute('disabled'));

    this.set('isDisabled', true);

    assert.ok(find('input[type=checkbox]').hasAttribute('disabled'));
  });

  test('clicking does not update the checkbox when disabled', async function(assert) {
    await render(hbs`
      {{checkbox-with-label
        checked
        disabled=true
        update=(action (mut checked))
      }}
    `);

    await click('input[type=checkbox]');

    assert.notOk(find('input[type=checkbox]:checked'));
    assert.notOk(this.get('checked'));
  });
});
