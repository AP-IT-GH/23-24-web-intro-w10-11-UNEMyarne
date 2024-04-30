let customIcon = L.icon({
    iconUrl: 'assets/coffee-icon-shadow.png',
    iconSize: [38, 38], // Absolute grootte in pixels
    iconAnchor: [19, 38], // De helft van de breedte en de volledige hoogte
    popupAnchor: [-3, -76]
});

let map = L.map('apMap').setView([51.23009, 4.41616], 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let apMarker = L.marker([51.23009, 4.41616], { icon: customIcon }).addTo(map);

