import generateRandomNumber from './generateRandomNumber';
import heat from './heat';
import outputHeat from './outputHeat';

export default function setup(): void {
  const guess = <HTMLInputElement>document.getElementById('guess');
  const guessing = document.getElementById('guessing');

  let guesses: number = 0;
  const minNumber: number = 1;
  const maxNumber: number = 100;

  //Generate random number
  const numberToGuess: number = generateRandomNumber(minNumber, maxNumber);
  console.log('number to guess = ' + numberToGuess);

  //Get the guess
  guessing.addEventListener('submit', (event) => {
    event.preventDefault();
    let heating = heat(parseInt(guess.value), numberToGuess);
    guesses++;
    outputHeat(heating, guesses);
  });
}
