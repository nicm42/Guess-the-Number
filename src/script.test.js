const {
  heat
} = require('./script');


test('outputs boiling if guess is within 1% of number', () => {
  const number = 50;
  const guess = 51;
  expect(heat(guess)).toBe('boiling');
});

/*
Pick a random number from 1-100
Pick up guess from html
Output whether it's hot or cold:
  Boiling = within 1%
  Hot = within 5%
  Warm = within 10%
  Cold = between 11 and 94 %
  Freezing = 95% out
*/