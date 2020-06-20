const {
  heat
} = require('./script');

it('outputs correct if guess is correct', () => {
  expect(heat(100)).toBe('correct');
});

it('outputs boiling if guess is within 1%', () => {
  expect(heat(99)).toBe('boiling');
});

it('outputs hot if guess is within 5%', () => {
  expect(heat(98)).toBe('hot');
  expect(heat(95)).toBe('hot');
});

it('outputs warm if guess is within 10%', () => {
  expect(heat(90)).toBe('warm');
  expect(heat(94)).toBe('warm');
});

it('outputs cold if guess is within 94%', () => {
  expect(heat(89)).toBe('cold');
  expect(heat(6)).toBe('cold');
});

it('outputs freezing if guess is 95% or more out', () => {
  expect(heat(5)).toBe('freezing');
  expect(heat(1)).toBe('freezing');
});
