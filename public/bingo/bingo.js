const bingoCard = [];
const numberAppearsAlready = [];
const numbersAppearedOnGame = [];
let randomnumber;
let continueYes = true;
let isBingo = false;
let lines = 0;
let totalLines = 0;
let line1 = false,
  line2 = false,
  line3 = false;
let twoLines = 0;

const askName = () => {
  const name = prompt("Bingo game, please insert your name?");
  alert(`Wellcome to de Bingo Game ${name}`);
  return name;
};

const generateCard = () => {
  i = 0;
  while (i < 15) {
    randomNumber = Math.floor(Math.random() * 89) + 1;
    if (!numberAppearsAlready.includes(randomNumber)) {
      bingoCard.push({ number: randomNumber, appeared: false });
      numberAppearsAlready.push(randomNumber);
      i++;
    }
  }
};

const showCard = () => {
  console.log(
    "Row 1: | " +
      bingoCard[0].number +
      " | " +
      bingoCard[1].number +
      " | " +
      bingoCard[2].number +
      " | " +
      bingoCard[3].number +
      " | " +
      bingoCard[4].number +
      " | "
  );
  console.log(
    "Row 2: | " +
      bingoCard[5].number +
      " | " +
      bingoCard[6].number +
      " | " +
      bingoCard[7].number +
      " | " +
      bingoCard[8].number +
      " | " +
      bingoCard[9].number +
      " | "
  );
  console.log(
    "Row 3: | " +
      bingoCard[10].number +
      " | " +
      bingoCard[11].number +
      " | " +
      bingoCard[12].number +
      " | " +
      bingoCard[13].number +
      " | " +
      bingoCard[14].number +
      " | "
  );
};

const bingoStart = () => {
  let countTurn = 0;
  do {
    if (confirm("Do you want to continue")) {
      countTurn++;
      newTurn();
      checkBingo();
      checkLines();
    } else {
      continueYes = false;
    }
  } while (!isBingo && continueYes);

  if (isBingo) {
    console.log("\n", `Bingo in ${countTurn} turns! congratulations!`);
  } else {
    console.log("The game ended, I'm sorry , you lose!");
  }
  return;
};

const newTurn = () => {
  randomNumber = Math.floor(Math.random() * 89) + 1;
  if (!numbersAppearedOnGame.includes(randomNumber)) {
    numbersAppearedOnGame.push(randomNumber);
    alert(`The number is: ${randomNumber}`);
    bingoCard.forEach((data) => {
      if (data.number === randomNumber) {
        data.appeared = true;
        data.number = data.number + "X";
        console.log("\n", `The number found is:  ${randomNumber}!`);
        console.log(showCard());
      }
    });
  } else {
    newTurn();
  }
};

const checkLines = () => {
  if (!isBingo) {
    if (line1 === false) {
      checkLine1();
    }
    if (line2 === false) {
      checkLine2();
    }
    if (line3 === false) {
      checkLine3();
    }
  }
};

const checkLine1 = () => {
  for (let i = 0; i < 5; i++) {
    let j = 0;
    if (bingoCard[i].appeared === false) {
      return;
    } else {
      j++;
    }
  }
  if ((j = 5)) {
    console.log("Linea 1 !!!!! ", "\n");
    line1 = true;
  }
};

const checkLine2 = () => {
  for (let i = 5; i < 10; i++) {
    let j = 0;
    if (bingoCard[i].appeared === false) {
      return;
    } else {
      j++;
    }
  }
  if ((j = 5)) {
    console.log("Linea 2 !!!!!", "\n");
    line2 = true;
  }
};

const checkLine3 = () => {
  for (let i = 10; i < 15; i++) {
    let j = 0;
    if (bingoCard[i].appeared === false) {
      return;
    } else {
      j++;
    }
  }
  if ((j = 5)) {
    console.log("Linea 3 !!!!!", "\n");
    line3 = true;
  }
};

const checkBingo = () => {
  for (let i = 0; i < bingoCard.length; i++) {
    if (bingoCard[i].appeared === false) {
      return;
    }
  }
  isBingo = true;
  console.log("\n", "BINGO!!!!!!!!");
  return;
};

const bingo = () => {
  askName();
  generateCard();
  showCard();
  bingoStart();
};

bingo();
