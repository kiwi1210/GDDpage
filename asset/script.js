var map = L.map("map").setView([23.5, 121], 7);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
}).addTo(map);

var layer = L.leafletGeotiff("data/all2015_235_210_Cn0_0.50.tif", bounds=[[25.0001, 121.3747], [25.1249, 121.50035]]).addTo(map);
