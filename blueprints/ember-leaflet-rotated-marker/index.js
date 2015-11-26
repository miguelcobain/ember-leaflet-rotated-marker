/*jshint node:true*/
module.exports = {
  description: 'push bbecquet/Leaflet.RotatedMarker repo using bower',

  // locals: function(options) {
  //   // Return custom template variables here.
  //   return {
  //     foo: options.entity.options.foo
  //   };
  // }

  normalizeEntityName: function() {
   // this prevents an error when the entityName is
   // not specified (since that doesn't actually matter
   // to us
  },

  afterInstall: function(options) {
   return this.addBowerPackageToProject('bbecquet/Leaflet.RotatedMarker');
  }
};
