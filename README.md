# ember-leaflet-rotated-marker [![Build Status](https://travis-ci.org/miguelcobain/ember-leaflet-rotated-marker.svg)](https://travis-ci.org/miguelcobain/ember-leaflet-rotated-marker) [![Ember Observer Score](http://emberobserver.com/badges/ember-leaflet-rotated-marker.svg)](http://emberobserver.com/addons/ember-leaflet-rotated-marker) [![npm version](https://badge.fury.io/js/ember-leaflet-rotated-marker.svg)](https://badge.fury.io/js/ember-leaflet-rotated-marker)

This addon extends [ember-leaflet](http://www.ember-leaflet.com/)'s `{{marker-layer}}` component to support rotation.
This uses [this leaflet extension](https://github.com/bbecquet/Leaflet.RotatedMarker) to accomplish that. Doesn't work on IE < 9.

## Usage

```hbs
<LeafletMap @lat={{51.512983}} @lng={{-0.138289}} @zoom={{12}} as |layers|>
  <layers.marker @lat={{51.512983}} @lng=-{{0.138289}} @rotationAngle={{90}} @rotationOrigin="25% 25%">
</LeafletMap>
```

Argument | Type | Default | Description  
-------|------|---------|------------
**`@rotationAngle`** | `Number` | 0 | Rotation angle, in degrees, clockwise.
**`@rotationOrigin`** | `String` | `'bottom center'` | The rotation center, as a [`transform-origin`](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin) CSS rule.

## Installation

Run:
```bash
ember install ember-leaflet-rotated-marker
```

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
