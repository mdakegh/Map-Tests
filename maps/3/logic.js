// A function to determine the marker size based on the population
function markerSize(balance) {
  return Math.sqrt(balance) * 20;
}

// An array that contains all the information needed to create city and state markers
// Population Data Source: U.S. 2020 Decennial Census
var locations = [
  {
    location: "Chicago",
    coordinates: [41.8781, -87.6298],
    state: {
      name: "Total",
      balance: 10000000
    },
    city: {
      name: "Current",
      balance: 8000000
    }
  },
  {
    location: "Detroit",
    coordinates: [42.33, -83.0458],
    state: {
      name: "Total",
      balance: 8000000
    },
    city: {
      name: "Current",
      balance: 5000000
    }
  },
  {
    location: "Lansing",
    coordinates: [42.7325, -84.5555],
    state: {
      name: "Total",
      balance: 7000000
    },
    city: {
      name: "Current",
      balance: 5500000
    }
  },
];

// Define arrays to hold the created city and state markers.
var cityMarkers = [];
var stateMarkers = [];

// Loop through locations, and create the city and state markers.
for (var i = 0; i < locations.length; i++) {
  // Setting the marker radius for the state by passing population into the markerSize function
  stateMarkers.push(
    L.circle(locations[i].coordinates, {
      stroke: false,
      fillOpacity: 0.25,
      color: "red",
      fillColor: "red",
      radius: markerSize(locations[i].state.balance)
    })
  );

  // Set the marker radius for the city by passing the population to the markerSize() function.
  cityMarkers.push(
    L.circle(locations[i].coordinates, {
      stroke: false,
      fillOpacity: 0.75,
      color: "green",
      fillColor: "green",
      radius: markerSize(locations[i].city.balance)
    })
  );
}

// Create the base layers.
var street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
})

var topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
	attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
});

// Create two separate layer groups: one for the city markers and another for the state markers.
var states = L.layerGroup(stateMarkers);
var cities = L.layerGroup(cityMarkers);

// Create a baseMaps object.
var baseMaps = {
  "Street Map": street,
  "Topographic Map": topo
};

// Create an overlay object.
var overlayMaps = {
  "Total": states,
  "Current": cities
};

// Define a map object.
var myMap = L.map("map", {
  center: [42.27, -84.43],
  zoom: 8,
  layers: [street, states, cities]
});

// Pass our map layers to our layer control.
// Add the layer control to the map.
L.control.layers(baseMaps, overlayMaps, {
  collapsed: false
}).addTo(myMap);
