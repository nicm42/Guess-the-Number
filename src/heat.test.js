const { heat } = require('./heat');

describe('outputs', () => {
  it('outputs correct if guess is correct', () => {
    expect(heat(100, 100)).toBe('Correct');
    expect(heat(50, 50)).toBe('Correct');
  });

  it('outputs boiling if guess is within 1', () => {
    expect(heat(99, 100)).toBe('Boiling');
    expect(heat(49, 50)).toBe('Boiling');
  });

  it('outputs hot if guess is within 5', () => {
    expect(heat(98, 100)).toBe('Hot');
    expect(heat(95, 100)).toBe('Hot');
    expect(heat(45, 50)).toBe('Hot');
    expect(heat(55, 50)).toBe('Hot');
  });

  it('outputs warm if guess is within 10', () => {
    expect(heat(90, 100)).toBe('Warm');
    expect(heat(94, 100)).toBe('Warm');
    expect(heat(40, 50)).toBe('Warm');
    expect(heat(60, 50)).toBe('Warm');
  });

  it('outputs cold if guess is within 74', () => {
    expect(heat(89, 100)).toBe('Cold');
    expect(heat(26, 100)).toBe('Cold');
    expect(heat(39, 50)).toBe('Cold');
    expect(heat(61, 50)).toBe('Cold');
  });

  it('outputs freezing if guess is 75 or more out', () => {
    expect(heat(25, 100)).toBe('Freezing');
    expect(heat(1, 100)).toBe('Freezing');
  });

  it('tests if none of the conditions are true', () => {
    expect(heat()).toBeFalsy();
  });
});
