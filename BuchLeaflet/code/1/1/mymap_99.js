window.addEventListener('load', function() { // not DOMContentLoaded
var map = L.map('map',
{
center: [50.27264, 7.26469],
zoom: 10
});
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(map);
}, false);
alert('test');

