function heat(guess, number) {
  if (Math.abs(guess - number) === 0) {
    return 'Correct';
  }
  if (Math.abs(guess - number) === 1) {
    return 'Boiling';
  }
  if (Math.abs(guess - number) <= 5) {
    return 'Hot';
  }
  if (Math.abs(guess - number) <= 10) {
    return 'Warm';
  }
  if (Math.abs(guess - number) <= 74) {
    return 'Cold';
  }
  if (Math.abs(guess - number) >= 75) {
    return 'Freezing';
  }
}
// eslint-disable-next-line no-undef
exports.heat = heat;
