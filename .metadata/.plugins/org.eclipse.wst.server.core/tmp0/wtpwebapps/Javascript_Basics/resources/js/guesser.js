function guesser(guess) {

  var attempts = 0;
  var correctGuess = false;
  var rfn = 0;

  while ( correctGuess === false) {

    attempts++;
    rfn = randomfn(10);
    if ( parseInt(guess) === rfn) {
      correctGuess = true;
    } else {
      prompt("Nope! " + rfn + ". Try again?");
    }
  }

  return attempts;
}

var myGuess = prompt("Guess a number between 1 and 10?");
alert("Good guess. Only took " + guesser(myGuess) + " tries.");