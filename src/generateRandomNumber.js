function generateRandomNumber(min, max) {
  //return 100; //for testing
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// eslint-disable-next-line no-undef
exports.generateRandomNumber = generateRandomNumber;
