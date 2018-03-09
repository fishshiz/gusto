import axios from "axios";
import mapboxgl from "mapbox-gl";
var MapboxGeocoder = require("mapbox-gl-geocoder");
let key;
var geocoder;
let coordinates = [];
let markerArr = [];
function initMap(mapDiv) {
  axios.get("api/token").then(res => {
    mapboxgl.accessToken = res.data;

    makeMap(mapDiv);
  });
}

function loadPlaces(map, lat = 43.2, lng = -79.8) {
  axios.get(`/api/stores/near?lat=${lat}&lng=${lng}`).then(res => {
    const places = res.data;
    if (!places.length) {
      alert("no places found :(");
      return;
    } else if (coordinates.length > 0) {
      markerArr.forEach(m => m.remove());
      coordinates = [];
    }

    const markers = places.map(place => {
      const [placeLng, placeLat] = place.location.coordinates;
      coordinates.push(place.location.coordinates);
      const position = { lat: placeLat, lng: placeLng };
      var el = document.createElement("div");
      el.className = "marker";
      let marker = new mapboxgl.Marker(el)
        .setLngLat(place.location.coordinates)
        .setPopup(
          new mapboxgl.Popup({ offset: 25 }) // add popups
            .setHTML(
              `<a href="/stores/${
                place.slug
              }"><img src="/uploads/${place.photo || "store.png"}" alt="${
                place.name
              }" /><p>` +
                place.name +
                "-" +
                place.location.address +
                "</p></a>"
            )
        )
        .addTo(map);
      markerArr.push(marker);
    });
    let bounds = coordinates.reduce(function(bounds, coord) {
      return bounds.extend(coord);
    }, new mapboxgl.LngLatBounds(coordinates[0], coordinates[0]));
    map.fitBounds(bounds, {
      padding: 30
    });
  });
}

function makeMap(mapDiv) {
  if (!mapDiv) return;
  const map = new mapboxgl.Map({
    container: "map", // container id
    style: "mapbox://styles/mapbox/streets-v9", // stylesheet location
    center: [-79.8, 43.2], // starting position [lng, lat]
    zoom: 9
  });
  loadPlaces(map);
  const autocomplete = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    placeholder: "Search for a location"
  });
  map.addControl(autocomplete);
  autocomplete.on("result", ev => {
    loadPlaces(
      map,
      ev.result.geometry.coordinates[1],
      ev.result.geometry.coordinates[0]
    );
  });
}

export default initMap;
