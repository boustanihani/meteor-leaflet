# Leaflet for Meteor

[Leaflet.js](http://leafletjs.com/), a Javascript library for mobile-friendly interactive maps. 

Current Version: 0.7.3

## How to install 
1. meteor add boustanihani:meteor-leaflet
2. write the map code in Template.myTemplate.rendered
3. set in your client code the default image path 
4. optional - set your free tile provider - [Read Docs](https://github.com/leaflet-extras/leaflet-providers)

step 3 
```coffeescript
L.Icon.Default.imagePath = 'packages/boustanihani_meteor-leaflet/images'
```

step 4 - example
```coffeescript
L.tileLayer.provider('Stamen.Watercolor').addTo(map)
```

## Plugins
If you want to add Leaflet plugins to your project - include them in your client folder - I prefer using the client/lib folder.

## GeoJSON 
I suggest the free web service - [Orge Web Service](http://ogre.adc4gis.com/) 

## License
MIT/X11
