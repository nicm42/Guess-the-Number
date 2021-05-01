//require('jsdom');
//const { screen, fireEvent } = require('@testing-library/dom');
require('@testing-library/jest-dom/extend-expect');
//require('./script');
//const { generateRandomNumber } = require('./generateRandomNumber');
const { setup } = require('./setup');

generateRandomNumber = jest.fn();

describe('script setup', () => {
  beforeEach(() => {
    // Set up our document body
    document.body.innerHTML = `<form id="guessing">
      <input id="guess" value="33" />
      <button id="submit-guess" />
      <ul class="temperature"></ul>
      </form>`;
  });

  it('has a dummy test', () => {
    expect(true).toBeTruthy;
  });

  it('should generate a random number', () => {
    expect(generateRandomNumber).toBeCalled();
  });
});

/* it.only('creates a new li element with the temperature when submit is clicked', () => {
  // Set up our document body
  document.body.innerHTML = `<button id="submit-guess" />
    <ul id="temperature"></ul>`;
  const temp = document.getElementById('temperature');
  document.getElementById('submit-guess').click();
  //expect(outputHeat).toBeCalled();
  expect(temperature.innerHTML).toBe(
    '<span class="history-counter">1</span> <span class="history-guess">50</span> <span class="history-heat">Cold</span>'
  );
});*/

/* it.only('creates a new li element with the temperature when submit is clicked', () => {
  document.body.innerHTML = `<button id="submit-guess" />
    <ul id="temperature"></ul>`;
  //const submit = document.body.querySelector('submit-guess');
  //const container = document.querySelector('#guessing');
  //const submit = screen.getByRole('button');
  //const submit = getByText(container, 'Guess');
  const submit = document.getElementById('submit-guess');
  const temperature = document.getElementById('temperature');
  //fireEvent.click(submit);
  submit.click();
  expect(temperature.innerHTML).toBe(
    '<span class="history-counter">1</span> <span class="history-guess">50</span> <span class="history-heat">Cold</span>'
  );
}); */
