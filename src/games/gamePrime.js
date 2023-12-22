import { gameBody, checkAnswer } from '../index.js';

const isPrime = (number) => {
  if (number <= 1) { return 'no'; }

  for (let i = 2; i * i <= number; i += 1) {
    if (number % i === 0) { return 'no'; }
  }
  return 'yes';
};
// eslint-disable-next-line max-len
const checkAnswerGamePrime = (answer, number, userName) => checkAnswer(answer, isPrime(number), userName);

const gamePrime = () => {
  gameBody(checkAnswerGamePrime, 'Answer "yes" if given number is prime. Otherwise answer "no".', 'prime');
};

export default gamePrime;
