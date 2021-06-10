"use strict";
const myToken = "pk.eyJ1IjoibmF0aGFuMjYyNiIsImEiOiJja3Bwb25yaTAwMnk4Mm9wZmI0cm5tN3dhIn0.9IfwPtXEFQggmoKXevQ0Aw";
var map;
mapboxgl.accessToken = myToken;
getMap();

function getMap(){
    map = new mapboxgl.Map({
        container: "map",
        center: [-98.482132, 29.494401],
        style: 'mapbox://styles/mapbox/streets-v11',
        zoom: 18
    })
}

function setMarker(point){
    return new mapboxgl.Marker().setLngLat(point).addTo(map);
}