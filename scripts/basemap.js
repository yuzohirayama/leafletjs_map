//const map = L.map("map").setView([35.669400214188606, 139.48343915372877], 15);
const map = L.map("map").setView([35.63122739784360, 139.650700004496], 12);

// 背景地図はOpenStreetMap
// Base map
const osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 18,
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
})
const googleMap = L.tileLayer('https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
  maxZoom: 18,
  subdomains:['mt0','mt1','mt2','mt3'],
  attribution: '&copy; Google'
});
const japanBaseMap = L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  maxZoom: 18,
  attribution: '&copy; <a href="https://maps.gsi.go.jp/development/ichiran.html">国土地理院</a>'
})

//const tiles = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
//  maxZoom: 19,
//  attribution:
//    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Linked Open Addresses Japan',
//}).addTo(map);

googleMap.addTo(map)

var marker = L.marker([35.63122739784360, 139.650700004496]).addTo(map);