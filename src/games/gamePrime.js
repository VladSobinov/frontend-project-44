import { gameBody, checkAnswerStr } from '../index.js';

const isPrime = (number) => {
  if (number <= 1) { return 'no'; }

  for (let i = 2; i * i <= number; i += 1) {
    if (number % i === 0) { return 'no'; }
  }
  return 'yes';
};
const checkAnswerGamePrime = (answer, number, userName) => {
  const correctAnswer = isPrime(number);
  return checkAnswerStr(answer, correctAnswer, userName);
};

const gamePrime = () => {
  gameBody(checkAnswerGamePrime, 'Answer "yes" if given number is prime. Otherwise answer "no".', 'prime');
};

export default gamePrime;
