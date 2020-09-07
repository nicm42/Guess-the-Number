document.addEventListener('DOMContentLoaded', function () {
  const guess = document.getElementById('guess');
  const guessing = document.getElementById('guessing');

  let guesses = 0;
  const minNumber = 1;
  const maxNumber = 100;

  //Generate random number
  const number = generateRandomNumber(minNumber, maxNumber);
  console.log("number to guess = " + number);

  //Get the guess
  guessing.addEventListener('submit', (event) => {
    event.preventDefault();
    let heating = heat(guess.value, number);
    guesses++;
    outputHeat(heating, guesses);
  });
});

function generateRandomNumber(min, max){
  //return Math.floor(Math.random() * (max - min + 1)) + min;
  return 100; //for testing TODO
}
// eslint-disable-next-line no-undef
exports.generateRandomNumber = generateRandomNumber;

function heat(guess,number) {
  if (Math.abs(guess - number) === 0) {
    return 'Correct';
  }
  if (Math.abs(guess - number) === 1) {
    return 'Boiling';
  }
  if (Math.abs(guess - number) <= 5) {
    return 'Hot';
  }
  if (Math.abs(guess - number) <= 10) {
    return 'Warm';
  }
  if (Math.abs(guess - number) <= 74) {
    return 'Cold';
  }
  if (Math.abs(guess - number) >= 75) {
    return 'Freezing';
  }
}
// eslint-disable-next-line no-undef
exports.heat = heat;

function outputHeat(heating, guesses) {
  const submitGuess = document.getElementById('submit-guess');
  const temperature = document.querySelector('.temperature');
  const newTemperature = document.createElement('li');
  newTemperature.classList.add('history');
  //Also give it a class based on the heating, so we can style it in different colours
  let tempClass;
  if (heating === 'Correct') {
    tempClass = 'correct';
  }
  if (heating === 'Boiling') {
    tempClass = 'boiling';
  }
  if (heating === 'Hot') {
    tempClass = 'hot';
  }
  if (heating === 'Warm') {
    tempClass = 'warm';
  }
  if (heating === 'Cold') {
    tempClass = 'cold';
  }
  if (heating === 'Freezing') {
    tempClass = 'freezing';
  }
  newTemperature.classList.add(tempClass);

  if(guesses === 1){
    temperature.appendChild(newTemperature);
  } else {
    //Find first li
    const firstLI = document.querySelector('.history');
    temperature.insertBefore(newTemperature, firstLI);
  }
  newTemperature.innerHTML = `<span class="history-counter">${guesses}</span> <span class="history-guess">${guess.value}</span> <span class="history-heat">${heating}</span>`;

  if (heating === 'Correct') {
    guess.disabled = true;
    submitGuess.disabled = true;
    const endMessage = document.createElement('p');
    const guessOrGuesses = (guesses === 1) ? 'guess' : 'guesses';
    endMessage.innerHTML = `Well done! You found the number in ${guesses} ${guessOrGuesses}. <br>Refresh the page to play again.`;
    endMessage.classList.add('congrats');
    document.querySelector('main').insertBefore(endMessage, temperature);
  }

  guess.value = '';
}

exports.outputHeat = outputHeat;