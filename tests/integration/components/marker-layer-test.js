import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
/* global L */

//Needed to silence leaflet autodetection error
L.Icon.Default.imagePath = 'some-path';

function getAngle(matrix) {
  let values = matrix.split('(')[1];
  values = values.split(')')[0];
  let [,b,,] = values.split(',');

  return Math.round(Math.asin(b) * (180 / Math.PI));
}

moduleForComponent('marker-layer', 'Integration | Component | marker layer', {
  integration: true
});

test('rotation is set', function(assert) {

  this.set('rotationAngle', 30);

  this.render(hbs`
    {{#leaflet-map lat=51.512983 lng=-0.138289 zoom=12}}
      {{marker-layer lat=51.512983 lng=-0.138289 rotationAngle=rotationAngle}}
    {{/leaflet-map}}
  `);

  let matrix = this.$('.leaflet-marker-icon').css('transform');

  let angle = getAngle(matrix);

  assert.equal(angle, 30);

  this.set('rotationAngle', 45);

  matrix = this.$('.leaflet-marker-icon').css('transform');

  angle = getAngle(matrix);

  assert.equal(angle, 45);
});
