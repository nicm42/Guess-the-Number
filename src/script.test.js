const puppeteer = require('puppeteer');
const {
  heat,
  generateRandomNumber,
  outputHeat
} = require('./script');

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

it('outputs cold if guess is within 50', () => {
  expect(heat(50, 100)).toBe('Cold');
  expect(heat(51, 100)).toBe('Cold');
  expect(heat(39, 50)).toBe('Cold');
  expect(heat(61, 50)).toBe('Cold');
  expect(heat(1, 50)).toBe('Cold');
  expect(heat(100, 50)).toBe('Cold');
});

it('outputs freezing if guess is 75 or more out', () => {
  expect(heat(25, 100)).toBe('Freezing');
  expect(heat(1, 100)).toBe('Freezing');
});


it('generates a random number between min and max', () => {
  expect(generateRandomNumber(1, 100)).toBeGreaterThanOrEqual(1);
  expect(generateRandomNumber(1, 100)).toBeLessThanOrEqual(100);
  expect(generateRandomNumber(500, 600)).toBeGreaterThanOrEqual(500);
  expect(generateRandomNumber(500, 600)).toBeLessThanOrEqual(600);
});

/* test('should add temperature below the input', async () => {
  const browser = await puppeteer.launch({
    headless: true,
    //slowMo: 80,
    //args: ['--window-size=1920,1080']
  });
  const page = await browser.newPage();
  await page.goto('file:///home/paranoidangel/Projects/Guess the number/dist/index.html');
  await page.click('input#guess');
  await page.type('input#guess', '50');
  await page.click('#submit');
  const temperature = await page.$eval('.temperature', element => element.innerText = 'Cold');
  expect(temperature).toBe('Cold');
  await page.screenshot({
    path: 'test.png'
  })
}, 10000); */

/* test('should add message if guess is correct', async () => {
  const browser = await puppeteer.launch({
    headless: true,
    //slowMo: 80,
    //args: ['--window-size=1920,1080']
  });
  const page = await browser.newPage();
  await page.goto('file:///home/paranoidangel/Projects/Guess the number/dist/index.html');
  await page.click('input#guess');
  await page.type('input#guess', '100');
  await page.click('#submit');
  //await page.waitForSelector('.congrats');
  const newText = await page.$eval('.congrats', element => element.textContent);
  expect(newText).toBe('Congrats! Refresh the page to play again');
  await page.screenshot({
    path: 'test2.png'
  })
}, 10000); */

/* describe('Google', () => {
  beforeAll(async () => {
    await page.goto('https://google.co.uk');
  });

  it('should be titled "Google"', async () => {
    await expect(page.title()).resolves.toMatch('Google');
  });
}); */
