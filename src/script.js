//TODO:
//check there's something in the form before allowing submit
//and only allow a valid number

document.addEventListener('DOMContentLoaded', function () {
  const guess = document.getElementById('guess');
  const submit = document.getElementById('submit');

  let guesses = 0;
  const minNumber = 1;
  const maxNumber = 100;

  //Generate random number
  const number = generateRandomNumber(minNumber, maxNumber);
  console.log("number to guess = " + number);

  //Enable the submit button once you start typing in the input box
  //TODO what if the first thing they press is one of the up/down buttons
  /* guess.addEventListener('keypress', () => {
    submit.disabled = false;
    //And for every character typed, check it's a number
    //And it's between min and max
    //typeof data === 'number' && !isNaN(data);
    console.log(Number.isInteger(guess.value))
    if (typeof guess.value !== 'number' || isNan(guess.value))   {
      console.log('Please enter a number')
    }
  }); */

  //Get the guess
  submit.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('Submitting')
    //Check number is valid first
    //if (guess.value.match(regex)) {
      //it is, so now check if it's between min and max
      //if (guess.value >= minNumber && guess.value <= maxNumber) {
        let heating = heat(guess.value, number);
        guesses++;
        outputHeat(heating, guesses);
        //return false;
      //}
    //}
  });
});

function generateRandomNumber(min, max){
  //return Math.floor(Math.random() * (max - min + 1)) + min;
  return 100;
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
  const temperature = document.querySelector('.temperature');
  const newTemperature = document.createElement('li');
  newTemperature.classList.add('history');
  if(guesses === 1){
    temperature.appendChild(newTemperature);
  } else {
    //Find first li
    const firstLI = document.querySelector('.history');
    temperature.insertBefore(newTemperature, firstLI);
  }
  newTemperature.innerHTML = `<span class="history-number">${guesses}</span> <span class="guess-history">${guess.value}</span> <span class="heating-history">${heating}</span>`;

  if (heating === 'Correct') {
    guess.disabled = true;
    submit.disabled = true;
    const endMessage = document.createElement('p');
    endMessage.textContent = 'Congrats! Refresh the page to play again';
    endMessage.classList.add('congrats');
    document.querySelector('main').insertBefore(endMessage, temperature);
  }

  guess.value = '';
}

exports.outputHeat = outputHeat;