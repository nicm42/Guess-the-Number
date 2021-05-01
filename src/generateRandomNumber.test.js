const { generateRandomNumber } = require('./generateRandomNumber');

describe('random number generation', () => {
  it('generates a random number between min and max', () => {
    expect(generateRandomNumber(1, 100)).toBeGreaterThanOrEqual(1);
    expect(generateRandomNumber(1, 100)).toBeLessThanOrEqual(100);
    expect(generateRandomNumber(500, 600)).toBeGreaterThanOrEqual(500);
    expect(generateRandomNumber(500, 600)).toBeLessThanOrEqual(600);
  });
});
