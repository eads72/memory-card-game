//shuffle function
//create cards function
//create flipping effect on click
//

const anArray = [1, 2, 3, 4, 5,]

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

console.log(shuffle(anArray));