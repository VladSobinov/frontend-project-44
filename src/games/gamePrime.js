import gameBody from '../index.js';
import getRandomNumber from '../utils.js';

const isPrime = (number) => {
  for (let a = 2, b = Math.sqrt(number); a <= b; a += 1) {
    if (number % a === 0) return false;
  }
  return number > 1;
};

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const gameFunction = () => {
  const question = getRandomNumber(1, 50);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => {
  gameBody(gameDescription, gameFunction);
};
