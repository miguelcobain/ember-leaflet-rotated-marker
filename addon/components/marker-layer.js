import MarkerLayer from 'ember-leaflet/components/marker-layer';

export default class RotatedMarketLayer extends MarkerLayer {
  leafletOptions = [...this.leafletOptions, 'rotationAngle', 'rotationOrigin'];

  leafletDescriptors = [
    ...this.leafletDescriptors,
    'rotationAngle',
    'rotationOrigin',
  ];
}
