import { fireEvent } from '@testing-library/dom';
import '@testing-library/jest-dom/extend-expect';
import setup from './setup';
import generateRandomNumber from './generateRandomNumber';
import heat from './heat';
import outputHeat from './outputHeat';

jest.mock('./generateRandomNumber');
jest.mock('./heat');
jest.mock('./outputHeat');

describe('script setup', () => {
  beforeEach(() => {
    // Set up our document body
    document.body.innerHTML = `
      <span class="min"></span>
      <span class="max"></span>
      <form class="guessing" id="guessing">
        <input id="guess" class="guess" value="33" />
        <button id="submit-guess" />
      </form>`;
    setup();
  });

  it('should generate a random number', () => {
    expect(generateRandomNumber).toBeCalled();
  });

  it('should run heat and outputHeat functions when button is clicked', () => {
    const form = document.querySelector('.guessing');
    const guess = document.querySelector('.guess');
    fireEvent.submit(form);
    expect(heat).toBeCalled();
    expect(outputHeat).toBeCalled();
  });
});
