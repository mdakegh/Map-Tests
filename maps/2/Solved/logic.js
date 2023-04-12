// Create a map object.
var myMap = L.map("map", {
  center: [42.27, -84.43],
  zoom: 8
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

// Loop through the cities array, and create one marker for each city object.
for (var i = 0; i < cities.length; i++) {

  // Conditionals for country gdp_pc
  var color = "";
  if (cities[i].Current > 3000000) {
    color = "yellow";
  }
  else if (cities[i].Current > 10000) {
    color = "blue";
  }
  else if (cites[i].Current > 7000000) {
    color = "green";
  }
  else {
    color = "violet";
  }

  // Add circles to the map.
  L.circle(cities[i].location, {
    fillOpacity: 0.75,
    color: "white",
    fillColor: color,
    // Adjust the radius.
    radius: Math.sqrt(cities[i].Total) * 8
  }).bindPopup(`<h1>${cities[i].name}</h1> <hr> <h3>Total : ${cities[i].Total}</h3> <h3>Current : $ ${cities[i].Current}</h3>`).addTo(myMap);
}
