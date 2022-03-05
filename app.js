const cardArray = [
  {
    name: "goro",
    img: "images/GoroIconSM.png",
  },
  {
    name: "jackie",
    img: "images/JackieIconSM.png",
  },
  {
    name: "johnny",
    img: "images/JohnnyIconSM.png",
  },
  {
    name: "kerry",
    img: "images/KerryIconSM.png",
  },
  {
    name: "panam",
    img: "images/PanamIconSM.png",
  },
  {
    name: "rogue",
    img: "images/RogueIconSM.png",
  },
  {
    name: "goro",
    img: "images/GoroIconSM.png",
  },
  {
    name: "jackie",
    img: "images/JackieIconSM.png",
  },
  {
    name: "johnny",
    img: "images/JohnnyIconSM.png",
  },
  {
    name: "kerry",
    img: "images/KerryIconSM.png",
  },
  {
    name: "panam",
    img: "images/PanamIconSM.png",
  },
  {
    name: "rogue",
    img: "images/RogueIconSM.png",
  },
];

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector("#grid");
const resultDisplay = document.querySelector("#result");
let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "images/SAMURAI_CardBack.png");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);
    gridDisplay.appendChild(card);
  }
}
createBoard();

function checkMatch() {
  const cards = document.querySelectorAll("img");
  const optionOneId = cardsChosenIds[0];
  const optionTwoId = cardsChosenIds[1];

  if (optionOneId === optionTwoId) {
    cards[optionOneId].setAttribute("src", "images/SAMURAI_CardBack.png");
    cards[optionTwoId].setAttribute("src", "images/SAMURAI_CardBack.png");
    alert("You have clicked the same image!");
  } else if (cardsChosen[0] == cardsChosen[1]) {
    alert("You found a match!");
    cards[optionOneId].setAttribute("src", "images/black.png");
    cards[optionTwoId].setAttribute("src", "images/black.png");
    cards[optionOneId].removeEventListener("click", flipCard);
    cards[optionTwoId].removeEventListener("click", flipCard);
    cardsWon.push(cardsChosen);
  } else {
    cards[optionOneId].setAttribute("src", "images/SAMURAI_CardBack.png");
    cards[optionTwoId].setAttribute("src", "images/SAMURAI_CardBack.png");
    alert("Sorry, try again!");
  }

  cardsChosen = [];
  cardsChosenIds = [];
  resultDisplay.textContent = cardsWon.length;

  if (cardsWon.length === cardArray.length / 2) {
    resultDisplay.textContent = "Preem job choom!";
  }
}

function flipCard() {
  const cardId = this.getAttribute("data-id");
  cardsChosen.push(cardArray[cardId].name);
  cardsChosenIds.push(cardId);
  this.setAttribute("src", cardArray[cardId].img);
  if (cardsChosen.length === 2) {
    setTimeout(checkMatch, 500);
  }
}
