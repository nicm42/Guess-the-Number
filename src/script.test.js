const {
  heat
} = require('./script');

let  number = 100;

it('outputs correct if guess is correct', () => {
  expect(heat(100, number)).toBe('correct');
});

it('outputs boiling if guess is within 1', () => {
  expect(heat(99, number)).toBe('boiling');
});

it('outputs hot if guess is within 5', () => {
  expect(heat(98, number)).toBe('hot');
  expect(heat(95, number)).toBe('hot');
});

it('outputs warm if guess is within 10', () => {
  expect(heat(90, number)).toBe('warm');
  expect(heat(94, number)).toBe('warm');
});

it('outputs cold if guess is within 50', () => {
  expect(heat(50, number)).toBe('cold');
  expect(heat(51, number)).toBe('cold');
});

it('outputs freezing if guess is 75 or more out', () => {
  expect(heat(25, number)).toBe('freezing');
  expect(heat(1, number)).toBe('freezing');
});

/* number = 50;

it('outputs correct if guess is correct', () => {
  expect(heat(50, number)).toBe('correct');
});

it('outputs boiling if guess is within 1%', () => {
  expect(heat(49, number)).toBe('boiling');
});

it('outputs hot if guess is within 5%', () => {
  expect(heat(98, number)).toBe('hot');
  expect(heat(95, number)).toBe('hot');
});

it('outputs warm if guess is within 10%', () => {
  expect(heat(90, number)).toBe('warm');
  expect(heat(94, number)).toBe('warm');
});

it('outputs cold if guess is within 94%', () => {
  expect(heat(89, number)).toBe('cold');
  expect(heat(6, number)).toBe('cold');
});

it('outputs freezing if guess is 95% or more out', () => {
  expect(heat(5, number)).toBe('freezing');
  expect(heat(1, number)).toBe('freezing');
});
 */