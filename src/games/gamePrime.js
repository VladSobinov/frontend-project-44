import readlineSync from 'readline-sync';
import { getName, makeRandomParams } from '../index.js';

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
  let functionResult = false;
  if (correctAnswer === answer) {
    console.log('Correct!');
    functionResult = true;
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${userName}!"`);
    functionResult = false;
  }
  return functionResult;
};

const gamePrime = () => {
  userName = getName('Welcome to the Brain Games! \nAnswer "yes" if given number is prime. Otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const randomParams = makeRandomParams();
    console.log(`Question: ${randomParams[1]}`);
    const answer = readlineSync.question('Your answer: ');
    if (checkAnswerGamePrime(answer, randomParams[1], userName) === false) {
      break;
    }
    if (i === 2) {
      console.log(`'Congratulations, ${userName}'`);
    }
  }
};

export default gamePrime;
