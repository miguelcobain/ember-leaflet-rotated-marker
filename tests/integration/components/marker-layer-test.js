import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
/* global L */

// Needed to silence leaflet autodetection error
L.Icon.Default.imagePath = 'some-path';

module('Integration | Component | marker layer', function(hooks) {
  setupRenderingTest(hooks);

  test('rotation is set and updates', async function(assert) {

    this.set('rotationAngle', 30);

    await render(hbs`
      {{#leaflet-map lat=51.512983 lng=-0.138289 zoom=12}}
        {{marker-layer lat=51.512983 lng=-0.138289 rotationAngle=rotationAngle}}
      {{/leaflet-map}}
    `);

    assert.dom('.leaflet-marker-icon').hasAttribute('style', /rotateZ\(30deg\)/);

    this.set('rotationAngle', 45);

    assert.dom('.leaflet-marker-icon').hasAttribute('style', /rotateZ\(45deg\)/);
  });

  test('rotation origin is set and updates', async function(assert) {

    this.set('rotationOrigin', 'right top');

    await render(hbs`
      {{#leaflet-map lat=51.512983 lng=-0.138289 zoom=12}}
        {{marker-layer lat=51.512983 lng=-0.138289 rotationOrigin=rotationOrigin rotationAngle=90}}
      {{/leaflet-map}}
    `);

    assert.dom('.leaflet-marker-icon').hasAttribute('style', /transform-origin: right top/);

    this.set('rotationOrigin', '25% 25%');

    assert.dom('.leaflet-marker-icon').hasAttribute('style', /transform-origin: 25% 25%/);
  });
});
