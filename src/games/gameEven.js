import readlineSync from 'readline-sync';
import { getName, makeRandomParams } from '../index.js';

let userName;

const isEven = (number) => (number % 2 === 0 ? 'yes' : 'no');
const checkAnswerGameEven = (answer, number) => {
  const correctAnswer = isEven(number);
  let functionResult = false;
  if (correctAnswer === answer) {
    console.log('Correct!');
    functionResult = true;
  } else {
    console.log(`"'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${userName}!"`);
    functionResult = false;
  }
  return functionResult;
};

const gameEven = () => {
  userName = getName('Welcome to the Brain Games! \nAnswer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const randomParams = makeRandomParams();
    console.log(`Question: ${randomParams[1]}`);
    const answer = readlineSync.question('Your answer: ');
    if (checkAnswerGameEven(answer, randomParams[1], userName) === false) {
      break;
    }
    if (i === 2) {
      console.log(`'Congratulations, ${userName}'`);
    }
  }
};

export default gameEven;
