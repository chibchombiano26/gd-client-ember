import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('picture-effect', 'Integration | Component | picture effect', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{picture-effect}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#picture-effect}}
      template block text
    {{/picture-effect}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
