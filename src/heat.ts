export default function heat(guess: number, numberToGuess: number): string {
  if (Math.abs(guess - numberToGuess) === 0) {
    return 'Correct';
  }
  if (Math.abs(guess - numberToGuess) === 1) {
    return 'Boiling';
  }
  if (Math.abs(guess - numberToGuess) <= 5) {
    return 'Hot';
  }
  if (Math.abs(guess - numberToGuess) <= 10) {
    return 'Warm';
  }
  if (Math.abs(guess - numberToGuess) <= 74) {
    return 'Cold';
  }
  if (Math.abs(guess - numberToGuess) >= 75) {
    return 'Freezing';
  }
  return '';
}
