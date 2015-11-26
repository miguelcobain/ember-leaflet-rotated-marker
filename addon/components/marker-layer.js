import MarkerLayerComponent from 'ember-leaflet/components/marker-layer';

export default MarkerLayerComponent.extend({
  leafletOptions: [
    'rotationAngle', 'rotationOrigin'
  ],

  leafletProperties: [
    'rotationAngle', 'rotationOrigin'
  ]
});
