// Proyecto del tema 3

const flights = [
  { id: 00, to: "New York", from: "Barcelona", cost: 700, scale: false },
  { id: 01, to: "Los Angeles", from: "Madrid", cost: 1100, scale: true },
  { id: 02, to: "Paris", from: "Barcelona", cost: 210, scale: false },
  { id: 03, to: "Roma", from: "Barcelona", cost: 150, scale: false },
  { id: 04, to: "London", from: "Madrid", cost: 200, scale: false },
  { id: 05, to: "Madrid", from: "Barcelona", cost: 90, scale: false },
  { id: 06, to: "Tokyo", from: "Madrid", cost: 1500, scale: true },
  { id: 07, to: "Shangai", from: "Barcelona", cost: 800, scale: true },
  { id: 08, to: "Sydney", from: "Barcelona", cost: 150, scale: true },
  { id: 09, to: "Tel-Aviv", from: "Madrid", cost: 150, scale: false },
];

welcome();
availableFlights();
averageCost();
flightStops();
lastFiveFlights();

function welcome() {
  let introduceNombre = prompt("Por favor introduce tu nombre: ");
  let saludo = `Bienvenido a la aplicacion Airline ${introduceNombre}, a continuacion te mostraremos la informacion de los vuelos:`;
  console.log(saludo);
}

function availableFlights() {
  for (let key in flights) {
    if (!flights[key].scale) {
      console.log(
        "El vuelo con origen: " +
          flights[key].from +
          ", y destino: " +
          flights[key].to +
          " tiene un coste de " +
          flights[key].cost +
          "€ y no realiza ninguna escala"
      );
    } else {
      console.log(
        "El vuelo con origen: " +
          flights[key].from +
          ", y destino: " +
          flights[key].to +
          " tiene un coste de " +
          flights[key].cost +
          "€ y realiza escala"
      );
    }
  }
}

function averageCost() {
  let totalCost = 0;
  for (let key in flights) {
    totalCost += flights[key].cost;
  }
  let averageFlightCost = totalCost / flights.length;
  console.log(
    `El coste medio por vuelo de los ${flights.length} vuelos es ${averageFlightCost}€`
  );
}

function flightStops() {
  flightStopsCount = 0;
  for (let key in flights) {
    if (flights[key].scale) {
      flightStopsCount++;
    }
  }
  console.log(`${flightStopsCount} vuelos hacen escala`);
}

function lastFiveFlights() {
  console.log(`Los cinco ultimos destinos del dia son los siguientes: `);
  let lastFive = flights.slice(Math.max(flights.length - 5, 0));
  for (let key in lastFive) {
    console.log(lastFive[key].to);
  }
}
