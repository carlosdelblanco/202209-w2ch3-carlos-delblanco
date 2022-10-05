var numberA, numberB, operation;

function init() {
  var result = document.getElementById("result");
  var reset = document.getElementById("reset");
  var add = document.getElementById("add");
  var minus = document.getElementById("minus");
  var multiply = document.getElementById("multiply");
  var division = document.getElementById("division");
  var equal = document.getElementById("equal");
  var zero = document.getElementById("zero");
  var one = document.getElementById("one");
  var two = document.getElementById("two");
  var three = document.getElementById("three");
  var four = document.getElementById("four");
  var five = document.getElementById("five");
  var six = document.getElementById("six");
  var seven = document.getElementById("seven");
  var eight = document.getElementById("eight");
  var nine = document.getElementById("nine");

  zero.onclick = function (e) {
    result.textContent = result.textContent + "0";
  };
  one.onclick = function (e) {
    result.textContent = result.textContent + "1";
  };
  two.onclick = function (e) {
    result.textContent = result.textContent + "2";
  };
  three.onclick = function (e) {
    result.textContent = result.textContent + "3";
  };
  four.onclick = function (e) {
    result.textContent = result.textContent + "4";
  };
  five.onclick = function (e) {
    result.textContent = result.textContent + "5";
  };
  six.onclick = function (e) {
    result.textContent = result.textContent + "6";
  };
  seven.onclick = function (e) {
    result.textContent = result.textContent + "7";
  };
  eight.onclick = function (e) {
    result.textContent = result.textContent + "8";
  };
  nine.onclick = function (e) {
    result.textContent = result.textContent + "9";
  };

  reset.onclick = function (e) {
    resetScreen();
  };

  add.onclick = function (e) {
    numberA = result.textContent;
    operation = "+";
    clean();
  };

  minus.onclick = function (e) {
    numberA = result.textContent;
    operation = "-";
    result.textContent = result.textContent + "-";
    clean();
  };

  multiply.onclick = function (e) {
    numberA = result.textContent;
    operation = "*";
    clean();
  };

  division.onclick = function (e) {
    numberA = result.textContent;
    operation = "/";
    clean();
  };

  equal.onclick = function (e) {
    numberB = result.textContent;
    getResult();
  };
}

function clean() {
  result.textContent = "";
}

function resetScreen() {
  result.textContent = "";
  numberA = 0;
  numberB = 0;
  operation = "";
}

function getResult() {
  var res = 0;
  switch (operation) {
    case "+":
      res = parseFloat(numberA) + parseFloat(numberB);
      break;
    case "-":
      res = parseFloat(numberA) - parseFloat(numberB);
      break;
    case "*":
      res = parseFloat(numberA) * parseFloat(numberB);
      break;
    case "/":
      res = parseFloat(numberA) / parseFloat(numberB);
      break;
  }
  resetScreen();
  result.textContent = res;
}
