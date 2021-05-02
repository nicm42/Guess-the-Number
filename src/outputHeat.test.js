import '@testing-library/jest-dom/extend-expect';
import outputHeat from './outputHeat';

describe('dom changes', () => {
  beforeEach(() => {
    // Set up our document body
    document.body.innerHTML = `<main>
      <input id="guess" value="33" />
      <button id="submit-guess" />
      <ul class="temperature"></ul>
      </main>`;
  });

  it('checks guess value is reset', () => {
    outputHeat('Freezing', 1);
    const guess = document.getElementById('guess');
    expect(guess.value).toBe('');
  });

  it('creates a new li element for freezing', () => {
    const temperature = document.querySelector('.temperature');
    outputHeat('Freezing', 1);
    expect(temperature.innerHTML).toBe(
      '<li class="history freezing"><span class="history-counter">1</span> <span class="history-guess">33</span> <span class="history-heat">Freezing</span></li>'
    );
  });

  it('creates a new li element for cold', () => {
    const temperature = document.querySelector('.temperature');
    outputHeat('Cold', 1);
    expect(temperature.innerHTML).toBe(
      '<li class="history cold"><span class="history-counter">1</span> <span class="history-guess">33</span> <span class="history-heat">Cold</span></li>'
    );
  });

  it('creates a new li element for warm', () => {
    const temperature = document.querySelector('.temperature');
    outputHeat('Warm', 1);
    expect(temperature.innerHTML).toBe(
      '<li class="history warm"><span class="history-counter">1</span> <span class="history-guess">33</span> <span class="history-heat">Warm</span></li>'
    );
  });

  it('creates a new li element for hot', () => {
    const temperature = document.querySelector('.temperature');
    outputHeat('Hot', 1);
    expect(temperature.innerHTML).toBe(
      '<li class="history hot"><span class="history-counter">1</span> <span class="history-guess">33</span> <span class="history-heat">Hot</span></li>'
    );
  });

  it('creates a new li element for boiling', () => {
    const temperature = document.querySelector('.temperature');
    outputHeat('Boiling', 1);
    expect(temperature.innerHTML).toBe(
      '<li class="history boiling"><span class="history-counter">1</span> <span class="history-guess">33</span> <span class="history-heat">Boiling</span></li>'
    );
  });

  it('creates a new li element for boiling for the second guess', () => {
    const temperature = document.querySelector('.temperature');
    outputHeat('Boiling', 2);
    expect(temperature.innerHTML).toBe(
      '<li class="history boiling"><span class="history-counter">2</span> <span class="history-guess">33</span> <span class="history-heat">Boiling</span></li>'
    );
  });
});

describe('guess is correct', () => {
  beforeEach(() => {
    // Set up our document body
    document.body.innerHTML = `<main>
      <input id="guess" value="33" />
      <button id="submit-guess" />
      <p class="congrats"></p>
      <ul class="temperature"></ul>
      </main>`;
  });

  it('creates a new li element for correct', () => {
    const temperature = document.querySelector('.temperature');
    const endMessage = document.querySelector('.congrats');
    outputHeat('Correct', 1);
    expect(temperature.innerHTML).toBe(
      '<li class="history correct"><span class="history-counter">1</span> <span class="history-guess">33</span> <span class="history-heat">Correct</span></li>'
    );
  });

  it('adds text for correct', () => {
    const temperature = document.querySelector('.temperature');
    const endMessage = document.querySelector('.congrats');
    outputHeat('Correct', 1);
    expect(endMessage.innerHTML).toBe(
      'Well done! You found the number in 1 guess. <br>Refresh the page to play again.'
    );
    outputHeat('Correct', 2);
    expect(endMessage.innerHTML).toBe(
      'Well done! You found the number in 2 guesses. <br>Refresh the page to play again.'
    );
  });

  it('checks guess and submit-guess are both disabled', () => {
    outputHeat('Correct', 1);
    const guess = document.getElementById('guess');
    const submitGuess = document.getElementById('submit-guess');
    expect(guess).toBeDisabled();
    expect(submitGuess).toBeDisabled();
  });
});
