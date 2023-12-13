import readlineSync from 'readline-sync';
import {
  getName, makeRandomParams, resultCheckGame,
} from '../index.js';

let userName;

const resultNod = (randomParams) => {
  let a = randomParams[1];
  let b = randomParams[2];
  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }
  return a + b;
};

const gameGcd = () => {
  userName = getName('Welcome to the Brain Games! \nFind the greatest common divisor of given numbers.');

  for (let i = 0; i < 3; i += 1) {
    const randomParams = makeRandomParams();
    const result = resultNod(randomParams);
    console.log(`Question: ${randomParams[1]} ${randomParams[2]}`);
    const answer = readlineSync.question('Your answer: ');

    if (resultCheckGame(answer, result, userName) === false) {
      break;
    }

    if (i === 2) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

export default gameGcd;
