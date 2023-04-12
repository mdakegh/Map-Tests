// Create a map object.
var myMap = L.map("map", {
  center: [42.27, -84.43],
  zoom: 10
});

// Add a tile layer.
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// An array containing each city's name, location, and population
var cities = [{
  location: [42.2459, -84.4013],
  name: "Jackson",
  Customers: 550405,
  Total: 5000000,
  Current: 3500000
},
{
  location: [41.8781, -87.6298],
  name: "Chicago",
  Customers: 2720546,
  Total: 10000000,
  Current: 8000000
},
{
  location: [42.33, -83.0458],
  name: "Detroit",
  Customers: 2296224,
  Total: 8000000,
  Current: 5000000
},
{
  location: [42.7325, -84.5555],
  name: "Lansing",
  Customers: 971883,
  Total: 7000000,
  Current: 5500000
},
{
  location: [42.2808, -83.7430],
  name: "Ann Arbor",
  Customers: 446599,
  Total: 6000000,
  Current: 4000000
}
];

// Looping through the cities array, create one marker for each city, bind a popup containing its name and population, and add it to the map.
for (var i = 0; i < cities.length; i++) {
  var city = cities[i];
  L.marker(city.location)
    .bindPopup(`<h1>${city.name}</h1> <hr> <h3>Customers : ${city.Customers.toLocaleString()}</h3> <h3>Total : $ ${city.Total.toLocaleString()}</h3> <h3>Current : $ ${city.Current.toLocaleString()}</h3>`)
    .addTo(myMap);
}

// green circle
L.circle([42.27, -84.43], {
  color: "green",
  fillColor: "green",
  fillOpacity: 0.50,
  radius: 5000
}).addTo(myMap);

// yellow polygon
L.polygon([
  [42.6757, -82.8121],
  [42.6260, -83.4506],
  [42.1147, -83.2472]
], {
  color: "yellow",
  fillColor: "yellow",
  fillOpacity: 0.50
}).addTo(myMap);