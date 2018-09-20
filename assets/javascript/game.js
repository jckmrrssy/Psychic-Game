



// Defining various game statistics and create shell array to store guesses
var stats = {
    winCount: 0,
    lossCount: 0,
    guessLeft: 9,
    taken: [];
};

    




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


// Array of alphabet letters
var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m'
                ,'o','p','q','r','s','t','u','v','w','x','y','z'];
// Random letter picker
var randomLetter = letters[Math.floor(Math.random() * letters.length)]

// Key-up event listener 
document.onkeyup = function(event) {
    var keyPressed = event.key;
    if (randomLetter === keyPressed) {

};

