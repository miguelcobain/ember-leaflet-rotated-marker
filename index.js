/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-leaflet-rotated-marker',
  included: function(app) {
   //import javascript
   app.import(app.bowerDirectory + '/Leaflet.RotatedMarker/leaflet.rotatedMarker.js');
  }
};
