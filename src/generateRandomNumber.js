function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
  //return 100; //for testing
}
// eslint-disable-next-line no-undef
exports.generateRandomNumber = generateRandomNumber;
