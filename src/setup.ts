import generateRandomNumber from './generateRandomNumber';
import heat from './heat';
import outputHeat from './outputHeat';

export default function setup(): void {
  const guess = <HTMLInputElement>document.querySelector('.guess');
  const guessing = <HTMLElement>document.querySelector('.guessing');

  let guesses: number = 0;
  const minNumber: number = 1;
  const maxNumber: number = 100;

  //Set the instructions to include this min and max number
  const minSpan = <HTMLElement>document.querySelector('.min');
  const maxSpan = <HTMLElement>document.querySelector('.max');
  minSpan.innerHTML = minNumber.toString();
  maxSpan.innerHTML = maxNumber.toString();

  //And update the input
  guess.setAttribute('min', minNumber.toString());
  guess.setAttribute('max', maxNumber.toString());
  guess.setAttribute('size', (maxNumber.toString().length + 1).toString());

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
