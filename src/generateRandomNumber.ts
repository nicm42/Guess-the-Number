export default function generateRandomNumber(min: number, max: number): number {
  //return 100; //for testing
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
