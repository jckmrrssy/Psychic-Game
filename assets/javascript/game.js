


// This function will update wins on the DOM
function updateWinCount () {
    var wins = document.getElementById('wins');
    wins.textContent = stats.winCount;
}
// This function will update losses on the DOM
function updateLossCount () {
    var losses = document.getElementById('losses');
    losses.textContent = stats.lossCount;
}
// This function will update gueses left on the DOM
function updateGuesses () {
    var guesses = document.getElementById('guessCount');
    guesses.textContent = stats.guessLeft;
}
// This function will update letters guessed to the DOM
function yourGuesses () {
    var soFar = document.getElementById('guesses');
    soFar.textContent = stats.taken;
}

var gameOver = function () {
    if (stats.guessLeft <= 1) {
        stats.lossCounter();
        reset();
    }
}



// Defining game statistics and shell array 
// with incremental counter functions
var stats = {
    winCount: 0,
    lossCount: 0,
    guessLeft: 9,
    taken: [],

    winCounter: function () {
        this.winCount = this.winCount + 1;
    },

    lossCounter: function () {
        this.lossCount = this.lossCount + 1;
    },

    guessesLeft: function () {
        this.guessLeft = this.guessLeft - 1;
    },
};


// Array of alphabet letters
var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m'
                ,'o','p','q','r','s','t','u','v','w','x','y','z'];

// Random letter picker
var randomLetter = letters[Math.floor(Math.random() * letters.length)]

function reset () {
    randomLetter = letters[Math.floor(Math.random() * letters.length)]
    stats.guessLeft = 10;
    stats.taken = [];   
}

// Key-up event listener 
document.onkeyup = function(event) {
    var keyPressed = event.key;
    if (stats.guessLeft < 10) {
        stats.taken.push(keyPressed)
    }
    
   
    // Win condition check
    if (randomLetter === keyPressed) {
        stats.winCounter();
        reset();
    }
    // Loss condition check
    else {
        
    }
    stats.guessesLeft();
    updateWinCount();
    updateLossCount();
    updateGuesses();
    yourGuesses();
    gameOver();
};

