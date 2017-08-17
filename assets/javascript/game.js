//Computer chooses a random letter.
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
var wins = 0;
var losses = 0;
var maxGuessNumber = 9;
document.getElementById("guesses-left-number").textContent = maxGuessNumber;
console.log("computer guess was:", computerGuess);
//The user types in a letter.
document.onkeyup = function(event) {
    var userGuess = event.key;
    console.log("user guess was:", userGuess);
    document.getElementById("user-guess").textContent = userGuess;

    maxGuessNumber--;
   	document.getElementById("guesses-left-number").textContent = maxGuessNumber;
    // for (userGuess===computerGuess; )


    //The user guess is displayed on the screen:   	"Your Gueses so far".
    if (userGuess === computerGuess) {
        console.log("You are correct!");
        wins++; //wins = wins + 1;
        document.getElementById("win-number").textContent = wins;
        //The Wins go up by one with each win.

    } else {
        console.log(userGuess + " is not correct");
    }

     //The user gets 9 guesses.
    if (maxGuessNumber === 0) {
        console.log("You have reached the maximum number of guesses");
        alert("Game over");

	    //The Loses go up by one with each loss. 
    }
   

    //After each guess the 'Guesses Left' goes down by one.

    //The game resets after 9 guesses and the computer chooses a new number or, when the user gueses the right number before the 9 guesses.


};