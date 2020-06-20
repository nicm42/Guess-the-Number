const number = 100;

function heat(guess) {
  if (guess === number) {
    return 'correct';
  }
  if (Math.abs(guess - number) === 1) {
    return 'boiling';
  }
  if (Math.abs(guess - number) <= 5) {
    return 'hot';
  }
  if (Math.abs(guess - number) <= 10) {
    return 'warm';
  }
  if (Math.abs(guess - number) <= 94) {
    return 'cold';
  }
  if (Math.abs(guess - number) >= 95) {
    return 'freezing';
  }
}
exports.heat = heat;

/*
Pick a random number from 1-100
Pick up guess from html
Output whether it's hot or cold:
  Correct = if correct guess
  Boiling = within 1%
  Hot = within 5%
  Warm = within 10%
  Cold = between 11 and 94%
  Freezing = 95% out
*/