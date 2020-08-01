document.addEventListener('DOMContentLoaded', function () {
  const guess = document.getElementById('guess');
  const submit = document.getElementById('submit');

  let guesses = 0;

  //Generate random number
  const number = generateRandomNumber(1, 100);
  console.log("number to guess = " + number);

  //Get the guess
  submit.addEventListener('click', () => {
    let heating = heat(guess.value, number);
    guesses++;
    outputHeat(heating, guesses);
  });
});

function generateRandomNumber(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
  //return 100;
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
  console.log(heating);
  guess.value = '';
  const temperature = document.querySelector('.temperature');
  const newTemperature = document.createElement('li');
  newTemperature.textContent = heating;
  newTemperature.classList.add('history');
  if(guesses === 1){
    temperature.appendChild(newTemperature);
  } else {
    //Find first li
    const firstLI = document.querySelector('.history');
    console.log(firstLI);
    temperature.insertBefore(newTemperature, firstLI);
  }
  if (heating === 'Correct') {
    guess.disabled = true;
    submit.disabled = true;
    const endMessage = document.createElement('p');
    endMessage.textContent = 'Congrats! Refresh the page to play again';
    endMessage.classList.add('congrats');
    temperature.parentNode.insertBefore(endMessage, temperature.nextSibling);
  }
}
exports.outputHeat = outputHeat;