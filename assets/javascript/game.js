
document.getElementById("win-number").textContent = 10;

document.getElementById("lose-number").textContent = 24;

    //Computer chooses a random letter.
    var computerChoices = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z];
	var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

	//The user types in a letter.
	 document.onkeyup = function(event) {
	 	var userGuess = event.key;
	 

	//The user guess is displayed on the screen:   	"Your Gueses so far".

	//The user gets 9 guesses.

	//After each guess the 'Guesses Left' goes down by one.

	//The game resets after 9 guesses and the computer chooses a new number or, when the user gueses the right number before the 9 guesses.

	//The Wins go up by one with each win.

	//The Loses go up by one with each loss. 
}