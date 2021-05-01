function outputHeat(heating, guesses) {
  const guess = document.getElementById('guess');
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
    const endMessage = document.createElement('p');
    const guessOrGuesses = guesses === 1 ? 'guess' : 'guesses';
    endMessage.innerHTML = `Well done! You found the number in ${guesses} ${guessOrGuesses}. <br>Refresh the page to play again.`;
    endMessage.classList.add('congrats');
    document.querySelector('main').insertBefore(endMessage, temperature);
  }

  guess.value = '';
}

exports.outputHeat = outputHeat;