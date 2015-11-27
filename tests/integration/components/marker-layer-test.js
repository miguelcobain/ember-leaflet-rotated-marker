import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
/* global L */

//Needed to silence leaflet autodetection error
L.Icon.Default.imagePath = 'some-path';

moduleForComponent('marker-layer', 'Integration | Component | marker layer', {
  integration: true
});

test('rotation is set and updates', function(assert) {

  this.set('rotationAngle', 30);

  this.render(hbs`
    {{#leaflet-map lat=51.512983 lng=-0.138289 zoom=12}}
      {{marker-layer lat=51.512983 lng=-0.138289 rotationAngle=rotationAngle}}
    {{/leaflet-map}}
  `);


  assert.ok(this.$('.leaflet-marker-icon').attr('style').indexOf('rotateZ(30deg)') !== -1);

  this.set('rotationAngle', 45);

  assert.ok(this.$('.leaflet-marker-icon').attr('style').indexOf('rotateZ(45deg)') !== -1);
});

test('rotation origin is set and updates', function(assert) {

  this.set('rotationOrigin', 'top right');

  this.render(hbs`
    {{#leaflet-map lat=51.512983 lng=-0.138289 zoom=12}}
      {{marker-layer lat=51.512983 lng=-0.138289 rotationOrigin=rotationOrigin rotationAngle=90}}
    {{/leaflet-map}}
  `);


  assert.ok(this.$('.leaflet-marker-icon').attr('style').indexOf('transform-origin: 100% 0%') !== -1);

  this.set('rotationOrigin', '25% 25%');

  assert.ok(this.$('.leaflet-marker-icon').attr('style').indexOf('transform-origin: 25% 25%') !== -1);
});
