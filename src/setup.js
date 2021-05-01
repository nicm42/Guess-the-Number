const { generateRandomNumber } = require('./generateRandomNumber');
const { heat } = require('./heat');
const { outputHeat } = require('./outputHeat');

function setup() {
  const guess = document.getElementById('guess');
  const guessing = document.getElementById('guessing');

  let guesses = 0;
  const minNumber = 1;
  const maxNumber = 100;

  //Generate random number
  const number = generateRandomNumber(minNumber, maxNumber);
  console.log('number to guess = ' + number);

  //Get the guess
  guessing.addEventListener('submit', (event) => {
    event.preventDefault();
    let heating = heat(guess.value, number);
    guesses++;
    outputHeat(heating, guesses);
  });
}

exports.setup = setup;
