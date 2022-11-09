//shuffle function
//create cards function
//create flipping effect on click
//

const anArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const cardsDiv = document.getElementById("cards-div");
let arrayOfCards = [];



class Card {
    constructor(id) {
      this.id = id;
      this.isVisible = false;
      this.isFound = false;
    }
    setVisibility(boolean){
        this.isVisible = boolean;
    }
    makeFound(){
        this.isFound = true;
    }
};  

for (let i = 1; i < 11; i++) {
    let newCard = new Card(i);
    arrayOfCards.push(newCard);
}



//takes an array as parameter, doubles the array
function doubleArray(theArray){
    let newArray = theArray.concat(theArray);
    return newArray
};

// creates the division for one card. Passes a number as a parameter and returns the card
function makeCardDiv(num){
    let card = document.createElement('div');
    card.classList.add('card', num);
    card.textContent = num;
    cardsDiv.appendChild(card);
    return card
};

// Takes two cards as paramters,
// If they have the same id, makes them found, else, sets them invisible
function compareCards(card1, card2){
    if(card1.id==card2.id){
        card1.makeFound;
        card1.makeFound;
    }else{
        card1.setVisibility(false);
        card2.setVisibility(false);
    }
}

function getRandomInt(max = 10){
    return Math.floor(Math.random() *max)
};

// takes an array as a parameter, returns the shuffled array
function shuffle(theArray){
    
    let length = theArray.length;
    let shuffledArray = [];

    for(let  i = 0; i<length; i++){
        randInt = getRandomInt(theArray.length);
        shuffledArray.push(theArray[randInt]);
        theArray.splice(randInt, 1);
    }

    return shuffledArray
};

let shuffledArray = shuffle(doubleArray(anArray));


shuffledArray.forEach(makeCardDiv);
let myCard = new Card(2);
console.log(myCard.id);
console.log(myCard.isFound);
console.log(myCard.isVisible);
console.log(arrayOfCards);