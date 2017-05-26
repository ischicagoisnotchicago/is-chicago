var result;
var tally = 0;
var answer1 = prompt('What is 1+1?');
if ( parseInt(answer1) === 2) {
  tally++;
  result = "Correct!"
} else {
  result = "Incorrect!"
}
alert(result + " The answer is 2.");

var answer2 = prompt('What is 1+2?');
if ( parseInt(answer2) === 3) {
  tally++;
  result = "Correct!"
} else {
  result = "Incorrect!"
}
alert(result + " The answer is 3.");

var answer3 = prompt('What is 1+3?');
if ( parseInt(answer3) === 4) {
  tally++;
  result = "Correct!"
} else {
  result = "Incorrect!"
}
alert(result + " The answer is 4.");

if ( tally < 2) {
  document.write(tally + " right. You Lose!");
} else {
  document.write(tally + " right. You Win!");
}
