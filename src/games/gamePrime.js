import { getName, gameBody, checkAnswerStr } from '../index.js';

let userName;

const isPrime = (number) => {
  if (number <= 1) { return 'no'; }

  for (let i = 2; i * i <= number; i += 1) {
    if (number % i === 0) { return 'no'; }
  }
  return 'yes';
};
const checkAnswerGamePrime = (answer, number) => {
  const correctAnswer = isPrime(number);
  return checkAnswerStr(answer, correctAnswer, userName);
};

const gamePrime = () => {
  userName = getName('Welcome to the Brain Games! \nAnswer "yes" if given number is prime. Otherwise answer "no".');

  gameBody(userName, checkAnswerGamePrime);
};

export default gamePrime;
