const {
  heat,
  generateRandomNumber
} = require('./script');

it('outputs correct if guess is correct', () => {
  expect(heat(100, 100)).toBe('correct');
  expect(heat(50, 50)).toBe('correct');
});

it('outputs boiling if guess is within 1', () => {
  expect(heat(99, 100)).toBe('boiling');
  expect(heat(49, 50)).toBe('boiling');
});

it('outputs hot if guess is within 5', () => {
  expect(heat(98, 100)).toBe('hot');
  expect(heat(95, 100)).toBe('hot');
  expect(heat(45, 50)).toBe('hot');
  expect(heat(55, 50)).toBe('hot');
});

it('outputs warm if guess is within 10', () => {
  expect(heat(90, 100)).toBe('warm');
  expect(heat(94, 100)).toBe('warm');
  expect(heat(40, 50)).toBe('warm');
  expect(heat(60, 50)).toBe('warm');
});

it('outputs cold if guess is within 50', () => {
  expect(heat(50, 100)).toBe('cold');
  expect(heat(51, 100)).toBe('cold');
  expect(heat(39, 50)).toBe('cold');
  expect(heat(61, 50)).toBe('cold');
  expect(heat(1, 50)).toBe('cold');
  expect(heat(100, 50)).toBe('cold');
});

it('outputs freezing if guess is 75 or more out', () => {
  expect(heat(25, 100)).toBe('freezing');
  expect(heat(1, 100)).toBe('freezing');
});


it('generates a random number between min and maz', () => {
  expect(generateRandomNumber(1, 100)).toBeGreaterThanOrEqual(1);
  expect(generateRandomNumber(1, 100)).toBeLessThanOrEqual(100);
  expect(generateRandomNumber(500, 600)).toBeGreaterThanOrEqual(500);
  expect(generateRandomNumber(500, 600)).toBeLessThanOrEqual(600);
});