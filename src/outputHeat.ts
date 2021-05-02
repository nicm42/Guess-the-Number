export default function outputHeat(heating: string, guesses: number): void {
  const guess = <HTMLInputElement>document.querySelector('.guess');
  const submitGuess = <HTMLInputElement>document.querySelector('.submit-guess');
  const temperature = document.querySelector('.temperature');

  const newTemperature = document.createElement('li');
  newTemperature.classList.add('history');

  //Also give it a class based on the heating, so we can style it in different colours
  let tempClass: string = heating.toLowerCase();
  newTemperature.classList.add(tempClass);

  if (guesses === 1) {
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
    const endMessage = <HTMLInputElement>document.querySelector('.congrats');
    const guessOrGuesses = guesses === 1 ? 'guess' : 'guesses';
    endMessage.innerHTML = `Well done! You found the number in ${guesses} ${guessOrGuesses}. <br>Refresh the page to play again.`;
    endMessage.style.opacity = '1';
  }

  guess.value = '';
}
