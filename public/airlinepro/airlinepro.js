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
areYouAdmin();

function welcome() {
  let insertName = prompt("Please insert your name: ");
  insertName = insertName.replace(/\s+/g, "");
  if (insertName !== "") {
    console.log(
      `Welcome to Airline application ${insertName}, the flight information is:`
    );
  } else {
    console.log("name incorrect, your name cannot be blank");
    welcome();
  }
}

function availableFlights() {
  for (let key in flights) {
    if (!flights[key].scale) {
      console.log(
        "The flight from: " +
          flights[key].from +
          ", and destination: " +
          flights[key].to +
          " has a cost of " +
          flights[key].cost +
          "€ with no stopovers"
      );
    } else {
      console.log(
        "The flight from: " +
          flights[key].from +
          ", and destination: " +
          flights[key].to +
          " has a cost of " +
          flights[key].cost +
          "€ and has stopovers"
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
    `The flight average cost of the  ${flights.length} flights is ${averageFlightCost}€`
  );
}

function flightStops() {
  flightStopsCount = 0;
  for (let key in flights) {
    if (flights[key].scale) {
      flightStopsCount++;
    }
  }
  console.log(`${flightStopsCount} flights make stopover`);
}

function lastFiveFlights() {
  console.log(`The five last destination for today are: `);
  let lastFive = flights.slice(Math.max(flights.length - 5, 0));
  for (let key in lastFive) {
    console.log(lastFive[key].to);
  }
}

function areYouAdmin() {
  let answer = prompt("Are you admin ? y/n ");
  switch (answer.toLowerCase()) {
    case "y":
      iAmAdmin();
      break;

    case "n":
      iAmUser();
      break;

    default:
      console.log("Wrong option the program has stopped ");
      break;
  }
  console.log("End of program");
}

function iAmAdmin() {
  let optionAdmin = prompt(
    "As ADMIN you can add flights (press 1) or delete flights (press 2)"
  );
  switch (optionAdmin) {
    case "1":
      let howManyFlights = +prompt(
        "1. ADD FLIGHTS: How many flights do you want to add?"
      );
      for (let loop = 1; loop <= howManyFlights; loop++) {
        let flightId = flights.length;
        let flightTo = prompt(
          "Insert flight destination for flight " + flights.length + ":"
        );
        let flightFrom = prompt(
          "Insert flight origin for flight  " + flights.length + ":"
        );
        let flightCost = +prompt(
          "Insert flight cost for flight  " + flights.length + ":"
        );
        let flightScale = prompt(
          "Confirm if flight " +
            flights.length +
            " has stopovers: (press ENTER for no stopovers or press Y if flights has any stopover) "
        );

        if (flightScale == false) {
          let flightScaleConfirm = false;
          lastFlight = {
            id: flightId,
            to: flightTo,
            from: flightFrom,
            cost: flightCost,
            scale: flightScaleConfirm,
          };
          flights.push(lastFlight);
        } else if (flightScale == "Y") {
          let flightScaleConfirm = true;
          lastFlight = {
            id: flightId,
            to: flightTo,
            from: flightFrom,
            cost: flightCost,
            scale: flightScaleConfirm,
          };
          flights.push(lastFlight);
        }

        if (loop >= 15) {
          alert("You reached the maximum number of flights to add");
          break;
        }
      }
      break;

    case "2":
      console.log("-----------------");
      availableFlightstoDelete();
      let whichFlightDelete = prompt(
        "2. DELETE FLIGHTS: Which flight do you want to delete? (type flight ID number) there are " +
          flights.length +
          " flights"
      );

      console.log("The following flight has been deleted: ");
      //console.log(flights[whichFlightDelete]);
      console.log(
        "flight ID: " +
          flights[whichFlightDelete].id +
          " from: " +
          flights[whichFlightDelete].from +
          ", and destination: " +
          flights[whichFlightDelete].to +
          " and a cost of " +
          flights[whichFlightDelete].cost +
          "€ with no stopovers"
      );
      flights.splice(whichFlightDelete, 1);
      break;

    default:
      console.log("wrong option, program has finished");
      break;
  }
}

function availableFlightstoDelete() {
  console.log("Flights available to delete:");
  for (let key in flights) {
    if (!flights[key].scale) {
      console.log(
        "flight ID: " +
          flights[key].id +
          " from: " +
          flights[key].from +
          ", and destination: " +
          flights[key].to +
          " and a cost of " +
          flights[key].cost +
          "€ with no stopovers"
      );
    } else {
      console.log(
        "flight ID: " +
          flights[key].id +
          " from: " +
          flights[key].from +
          ", and destination: " +
          flights[key].to +
          " has a cost of " +
          flights[key].cost +
          "€ and has stopovers"
      );
    }
  }
}

function iAmUser() {
  console.log(
    "As USER you can search by price (max 1000€) , we'll search all flights having equal or cheaper price"
  );
  let searchByPrice;
  do {
    searchByPrice = +prompt("Please insert price in €");
  } while (searchByPrice < 0 || searchByPrice > 1000 || isNaN(searchByPrice));

  console.log(
    "These are the flights with a maximum price of " + searchByPrice + " €"
  );
  for (let i = 0; i < flights.length; i++) {
    if (flights[i].cost <= searchByPrice) {
      if (flights[i].scale) {
        console.log(
          "Flight ID: " +
            flights[i].id +
            " - To " +
            flights[i].from +
            " From " +
            flights[i].to +
            " with a cost of: " +
            flights[i].cost +
            "€" +
            " and has stopovers"
        );
      } else {
        console.log(
          "Flight ID: " +
            flights[i].id +
            " - To " +
            flights[i].from +
            " From " +
            flights[i].to +
            " with a cost of: " +
            flights[i].cost +
            "€" +
            " and doesn't have stopovers"
        );
      }
    }
  }
}

function endProgram() {
  console.log("program ends here, thank you!");
}
