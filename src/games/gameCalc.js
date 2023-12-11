import readlineSync from 'readline-sync';
import {
  getName, makeRandomParams, processCalculation, resultCheckGameCalc,
} from '../index.js';

let userName;

const gameCalc = () => {
  userName = getName('Welcome to the Brain Games! \nWhat is the result of the expression?');

  for (let i = 0; i < 3; i += 1) {
    const randomParams = makeRandomParams();
    const result = processCalculation(randomParams);
    console.log(`Question: ${randomParams[1]} ${randomParams[0]} ${randomParams[2]}`);
    const answer = readlineSync.question('Your answer: ');

    if (resultCheckGameCalc(answer, result, userName) === false) {
      break;
    }

    if (i === 2) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

export default gameCalc;
