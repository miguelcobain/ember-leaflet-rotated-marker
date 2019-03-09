'use strict';

const FASTBOOT_TRANSFORMATION_OPTION = {
  using: [
    {
      transformation: 'fastbootShim',
    }
  ]
};

module.exports = {
  name: require('./package').name,
  included(app) {
    this._super.included(app);

    let hasFastboot = this.project.findAddonByName('ember-cli-fastboot');
    let importOptions = hasFastboot ? FASTBOOT_TRANSFORMATION_OPTION : {};
    app.import('node_modules/leaflet-rotatedmarker/leaflet.rotatedMarker.js', importOptions);
  }
};
