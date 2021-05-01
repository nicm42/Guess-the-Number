const { fireEvent } = require('@testing-library/dom');
require('@testing-library/jest-dom/extend-expect');
const { setup } = require('./setup');
const { generateRandomNumber } = require('./generateRandomNumber');
const { heat } = require('./heat');
const { outputHeat } = require('./outputHeat');

jest.mock('./generateRandomNumber');
jest.mock('./heat');
jest.mock('./outputHeat');

describe('script setup', () => {
  beforeEach(() => {
    // Set up our document body
    document.body.innerHTML = `<form id="guessing">
      <input id="guess" value="33" />
      <button id="submit-guess" />
      <ul class="temperature"></ul>
      </form>`;
    setup();
  });

  it('should generate a random number', () => {
    expect(generateRandomNumber).toBeCalled();
  });

  it('should run heat and outputHeat functions when button is clicked', () => {
    const form = document.getElementById('guessing');
    fireEvent.submit(form);
    expect(heat).toBeCalled();
    expect(outputHeat).toBeCalled();
  });
});
