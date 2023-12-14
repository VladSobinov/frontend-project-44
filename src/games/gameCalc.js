import readlineSync from 'readline-sync';
import {
  getName, makeRandomParams, checkAnswerNum,
} from '../index.js';

let userName;

const processCalculation = (randomParams) => {
  let result;
  switch (randomParams[0]) {
    case '+':
      result = randomParams[1] + randomParams[2];
      break;
    case '-':
      result = randomParams[1] - randomParams[2];
      break;
    case '*':
      result = randomParams[1] * randomParams[2];
      break;
    default:
      result = 0;
  }

  return result;
};

const gameCalc = () => {
  userName = getName('What is the result of the expression?');

  for (let i = 0; i < 3; i += 1) {
    const randomParams = makeRandomParams();
    const result = processCalculation(randomParams);
    console.log(`Question: ${randomParams[1]} ${randomParams[0]} ${randomParams[2]}`);
    const answer = readlineSync.question('Your answer: ');

    if (checkAnswerNum(answer, result, userName) === false) {
      break;
    }

    if (i === 2) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

export default gameCalc;
