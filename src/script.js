const guess = document.getElementById('guess');
const submit = document.getElementById('submit');
const temperature = document.querySelector('.temperature');

function generateRandomNumber(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// eslint-disable-next-line no-undef
exports.generateRandomNumber = generateRandomNumber;

//Generate random number
const number = generateRandomNumber(1, 100);
console.log("number to guess = " + number);

//Get the guess
if (process.env.NODE_ENV !== 'test') { //Ignore this in Jest
  submit.addEventListener('click', () => {
    let heating = heat(guess.value,number);
    outputHeat(heating);
  });
}

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

function outputHeat(heating) {
  guess.value = '';  
  temperature.innerText = heating;
  if (heating === 'Correct') {
    guess.disabled = true;
    submit.disabled = true;
    const endMessage = document.createElement('p');
    const endText = document.createTextNode('Congrats! Refresh the page to play again');
    endMessage.appendChild(endText);
    temperature.parentNode.insertBefore(endMessage, temperature.nextSibling);
  }
}
