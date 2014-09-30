// meteor publish --create

Package.describe({
  name: "boustanihani:meteor-leaflet",
  summary: "Leaflet.js version 0.7.3, mobile-friendly interactive maps.",
  version: "0.7.4",
  git: "https://github.com/boustanihani/meteor-leaflet.git"
});

Package.on_use(function(api, where) {
  api.add_files('lib/leaflet.js', 'client');
  api.add_files('lib/leaflet_providers.js', 'client');
  api.add_files('styles/leaflet.css', 'client');
  api.add_files('images/layers-2x.png', 'client');
  api.add_files('images/layers.png', 'client');
  api.add_files('images/marker-icon-2x.png', 'client');
  api.add_files('images/marker-icon.png', 'client');
  api.add_files('images/marker-shadow.png', 'client');
});