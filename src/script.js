const guess = document.getElementById('guess');
const submit = document.getElementById('submit');

function generateRandomNumber(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Generate random number
const number = generateRandomNumber(1, 100);
console.log("number to guess = " + number);

//Get the guess
if (process.env.NODE_ENV !== 'test') { //Ignore this in Jest
  submit.addEventListener('click', () => {
    console.log("guess = " + guess.value);
    console.log(heat(guess.value,number));
  });
}

function heat(guess,number) {
  if (Math.abs(guess - number) === 0) {
    return 'correct';
  }
  if (Math.abs(guess - number) === 1) {
    return 'boiling';
  }
  if (Math.abs(guess - number) <= 5) {
    return 'hot';
  }
  if (Math.abs(guess - number) <= 10) {
    return 'warm';
  }
  if (Math.abs(guess - number) <= 50) {
    return 'cold';
  }
  if (Math.abs(guess - number) >= 75) {
    return 'freezing';
  }
}
// eslint-disable-next-line no-undef
exports.heat = heat;

/*
Pick up guess from html
Output whether it's hot or cold:
  Correct = if correct guess
  Boiling = within 1%
  Hot = within 5%
  Warm = within 10%
  Cold = between 11 and 94%
  Freezing = 95% out
*/