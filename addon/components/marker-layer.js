import MarkerLayerComponent from 'ember-leaflet/components/marker-layer';

export default MarkerLayerComponent.extend({
  leafletOptions: Object.freeze([
    'rotationAngle', 'rotationOrigin'
  ]),

  leafletProperties: Object.freeze([
    'rotationAngle', 'rotationOrigin'
  ])
});
