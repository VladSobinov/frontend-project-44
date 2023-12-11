import readlineSync from 'readline-sync';
import {
  getName, makeRandomParams, resultCheckGameCalc, resultNod,
} from '../index.js';

let userName;

const gameGcd = () => {
  userName = getName('Welcome to the Brain Games! \nFind the greatest common divisor of given numbers.');

  for (let i = 0; i < 3; i += 1) {
    const randomParams = makeRandomParams();
    const result = resultNod(randomParams);
    console.log(`Question: ${randomParams[1]} ${randomParams[2]}`);
    const answer = readlineSync.question('Your answer: ');

    if (resultCheckGameCalc(answer, result, userName) === false) {
      break;
    }

    if (i === 2) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

export default gameGcd;
