//pasapalabra game
const questions = [
  {
    letter: "a",
    answer: "abducir",
    status: 0,
    question:
      "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien",
  },
  {
    letter: "b",
    answer: "bingo",
    status: 0,
    question:
      "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso",
  },
  {
    letter: "c",
    answer: "churumbel",
    status: 0,
    question: "CON LA C. Niño, crío, bebé",
  },
  {
    letter: "d",
    answer: "diarrea",
    status: 0,
    question:
      "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida",
  },
  {
    letter: "e",
    answer: "ectoplasma",
    status: 0,
    question:
      "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación",
  },
  {
    letter: "f",
    answer: "facil",
    status: 0,
    question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad",
  },
  {
    letter: "g",
    answer: "galaxia",
    status: 0,
    question:
      "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas",
  },
  {
    letter: "h",
    answer: "harakiri",
    status: 0,
    question: "CON LA H. Suicidio ritual japonés por desentrañamiento",
  },
  {
    letter: "i",
    answer: "iglesia",
    status: 0,
    question: "CON LA I. Templo cristiano",
  },
  {
    letter: "j",
    answer: "jabali",
    status: 0,
    question:
      "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba",
  },
  {
    letter: "k",
    answer: "kamikaze",
    status: 0,
    question:
      "CON LA K. Persona que se juega la vida realizando una acción temeraria",
  },
  {
    letter: "l",
    answer: "licantropo",
    status: 0,
    question: "CON LA L. Hombre lobo",
  },
  {
    letter: "m",
    answer: "misantropo",
    status: 0,
    question:
      "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas",
  },
  {
    letter: "n",
    answer: "necedad",
    status: 0,
    question: "CON LA N. Demostración de poca inteligencia",
  },
  {
    letter: "ñ",
    answer: "señal",
    status: 0,
    question:
      "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.",
  },
  {
    letter: "o",
    answer: "orco",
    status: 0,
    question:
      "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien",
  },
  {
    letter: "p",
    answer: "protoss",
    status: 0,
    question:
      "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft",
  },
  {
    letter: "q",
    answer: "queso",
    status: 0,
    question:
      "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche",
  },
  { letter: "r", answer: "raton", status: 0, question: "CON LA R. Roedor" },
  {
    letter: "s",
    answer: "stackoverflow",
    status: 0,
    question: "CON LA S. Comunidad salvadora de todo desarrollador informático",
  },
  {
    letter: "t",
    answer: "terminator",
    status: 0,
    question:
      "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984",
  },
  {
    letter: "u",
    answer: "unamuno",
    status: 0,
    question:
      "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914",
  },
  {
    letter: "v",
    answer: "vikingos",
    status: 0,
    question:
      "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa",
  },
  {
    letter: "w",
    answer: "sandwich",
    status: 0,
    question:
      "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso",
  },
  {
    letter: "x",
    answer: "botox",
    status: 0,
    question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética",
  },
  {
    letter: "y",
    answer: "peyote",
    status: 0,
    question:
      "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos",
  },
  {
    letter: "z",
    answer: "zen",
    status: 0,
    question:
      "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional",
  },
];

let userName;
let numberOfQuestions = questions.length;
let pasapalabraStatus = true;
let correctAnswers = 0;
let round = 0;
let participants = [];
let participantOrder = 0;
let continueYesNo = "no";

const pasaPalabra = () => {
  do {
    pasapalabraStatus = true;
    participantOrder++;
    correctAnswers = 0;
    askName();
    do {
      pasapalabraStatus == true;
      askQuestion();
    } while (pasapalabraStatus == true);
    endGame();
    resetQuestions();
  } while (prompt("Do you want to play again? y/n") === "y");
  showScoreCard();
};

const askName = () => {
  do {
    userName = prompt("Welcome to the Pasapalabra game!, what is your name?");
    userName = userName.replace(/\s+/g, "");
    if (userName === "" || userName.length < 2) {
      console.log("You must enter a name");
    }
  } while (userName === "" || userName.length < 2);
  console.log(`Welcome ${userName} !`);
  participants[participantOrder] = { name: userName, correctAnswers: 0 };
};

const askQuestion = () => {
  pasapalabraStatus = false;
  for (let i = 0; i < numberOfQuestions; i++) {
    if (questions[i].status == 0 || questions[i].status == 2) {
      pasapalabraStatus = true;
      const thisIsTheQuestion = prompt(questions[i].question);
      if (thisIsTheQuestion == questions[i].answer) {
        questions[i].status = 1;
        correctAnswers++;
        console.log(`The answer ${thisIsTheQuestion} is correct!`);
      } else if (thisIsTheQuestion == "pasapalabra") {
        questions[i].status = 2;
        console.log("pasapalabra!!!!");
      } else if (thisIsTheQuestion != questions[i].answer) {
        questions[i].status = 1;
        console.log(`The answer " ${thisIsTheQuestion}" is NOT correct!`);
      }
    }
  }
};

const endGame = () => {
  let wrongAnswers = numberOfQuestions - correctAnswers;
  console.log(
    `Game ended, ${userName} you finished the game with ${correctAnswers} correct answers and ${wrongAnswers} wrong answers`
  );
  console.log("");

  participants[participantOrder].correctAnswers = correctAnswers;
};

const showScoreCard = () => {
  let table = participants.sort((a, b) => b.correctAnswers - a.correctAnswers);
  console.log("Final scores by correct answers");
  console.log("-----------------------------------------");
  for (let i = 0; i < table.length - 1; i++) {
    console.log(
      `Position ${i + 1}: ${table[i].name} got ${
        table[i].correctAnswers
      } correct answers`
    );
  }
  console.log("-----------------------------------------");
};

const resetQuestions = () => {
  for (let i = 0; i < numberOfQuestions; i++) {
    questions[i].status = 0;
  }
};

pasaPalabra();
