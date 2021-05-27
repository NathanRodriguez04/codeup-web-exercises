"use strict";
const myToken = "pk.eyJ1IjoibmF0aGFuMjYyNiIsImEiOiJja3Bwb25yaTAwMnk4Mm9wZmI0cm5tN3dhIn0.9IfwPtXEFQggmoKXevQ0Aw";
var map;
mapboxgl.accessToken = myToken;

getMap();

function getMap() {
    map = new mapboxgl.Map({
        container: "map",
        center: [-98.620298, 29.494076],
        style: 'mapbox://styles/mapbox/streets-v11',
        zoom: 10
    })
}


setZoom();

function setZoom() {
    var zoom = $('#zoom').val()
    console.log(zoom);
}

function setMarker(point) {
    return new mapboxgl.Marker().setLngLat(point).addTo(map);
}

let restaurants = [
    {
        name: "Zio's",
        marker: setMarker([-98.467386, 29.604742]),
        description: "This is my favorite restaurant,stared going there when i was a kid.",
    },
    {
        name: "Wingstop",
        marker: setMarker([-98.655706, 29.438699]),
        description: "This is my second favorite restaurant, their wings are fire.",

    },
    {
        name: "Alamo Cafe",
        marker: setMarker([-98.566273, 29.534000]),
        description: "This is my third favorite restaurant,but my family goes there to many times."
    }

];



setPopup(restaurants);
function setPopup(arr) {
    arr.forEach(function (object) {
        let popup = new mapboxgl.Popup().setHTML(`<div><h4>${object.name}</h4><p>${object.description}</p></div>`).addTo(map);
        object.marker.setPopup(popup);
        object.marker.togglePopup();  //grady told me to add for toggle popup
    })


}