var osm = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
});

var layer = L.leafletGeotiff("data/all2015_235_210_Cn0_0.50.tif", bounds=[[25.0001, 121.3747], [25.1249, 121.50035]]);

var map = L.map("map", {layers: [osm, layer]}).setView([23.5, 121], 7);

var baseMaps = {
    "OpenStreetMap": osm
};

var overlayMaps = {
    "Layer": layer
};
var layerControl = L.control.layers(baseMaps, overlayMaps).addTo(map);
