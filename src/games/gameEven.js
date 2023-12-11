import readlineSync from 'readline-sync';
import { checkAnswerGameEven, getName, makeRandomParams } from '../index.js';

let userName;

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
