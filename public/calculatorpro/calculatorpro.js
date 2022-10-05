//CALCULATOR PRO
function mainMenu() {
  const numbers = [];
  let i = 0,
    number,
    squareroot;
  while (number !== null) {
    number = prompt(
      "Insert number to calculate: (press ESC to proceed with the calculation) "
    );
    numbers[i] = number;
    let notANumber = isNaN(numbers[i]);
    if (notANumber == true || numbers[i] === " " || !Number(number)) {
      console.log("You are not inserting a number, try again ...");
      numbers.pop();
      i--;
    }
    i++;
  }
  if (numbers.length === 1) {
    console.log(
      "you only introduced one number, it's square root is: " +
        Math.sqrt(numbers[0]).toFixed(3)
    );
  } else if (numbers.length === 0) {
    console.log("there are not enough numbers to perform the operations");
  } else {
    console.log(numbers);
    console.log("The results are:");
    addNumbers(numbers);
    substractNumbers(numbers);
    multiplyNumbers(numbers);
    divideNumbers(numbers);
    goodBye();
  }
}

function addNumbers(numbers) {
  let addTotal = 0;
  for (let i = 0; i < numbers.length; i++) {
    addTotal += +numbers[i];
  }
  console.log(`The add result is: ${addTotal}`);
}

function substractNumbers(numbers) {
  let substractTotal = 0;
  for (let i = 0; i < numbers.length; i++) {
    substractTotal = substractTotal - numbers[i];
  }
  console.log(`The substract result is: ${substractTotal}`);
}

function multiplyNumbers(numbers) {
  let multiplyTotal = 1;
  for (let i = 0; i < numbers.length; i++) {
    multiplyTotal = multiplyTotal * numbers[i];
  }
  console.log(`The multiply result is: ${multiplyTotal}`);
}

function divideNumbers(numbers) {
  let divideTotal = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] == " ") {
    } else {
      divideTotal /= numbers[i];
    }
  }
  console.log(`The division result is: ${divideTotal.toFixed(3)}`);
}

function goodBye() {
  console.log("Calculator Pro ends here, Thank you!");
}

function mainCalculator() {
  let pleaseContinue = "n";
  do {
    mainMenu();
    pleaseContinue = prompt("Press any key to continue or press n to finish)");
  } while (pleaseContinue !== "n");
}

mainCalculator();
