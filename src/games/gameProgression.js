import readlineSync from 'readline-sync';
import { getName, checkAnswerNum } from '../index.js';

let userName;

const gameStep = (firstNum) => {
  const size = Math.round(Math.random() * (10 - 5) + 5);
  const array = [];
  const randomProgressionNumber = Math.round(Math.random() * (8 - 2) + 2);
  array[0] = firstNum;
  for (let i = 1; i < size; i += 1) {
    array[i] = array[i - 1] + randomProgressionNumber;
  }
  return array.sort((a, b) => a - b);
};

const gameProgression = () => {
  userName = getName('What number is missing in the progression?');

  for (let i = 0; i < 3; i += 1) {
    const randomMassive = gameStep(Math.round(Math.random() * 50));
    const randomIndex = Math.floor(Math.random() * randomMassive.length);
    const result = randomMassive[randomIndex];
    randomMassive[randomIndex] = '..';
    console.log(`Question: ${randomMassive.join(' ')}`);
    const answer = readlineSync.question('Your answer: ');

    if (checkAnswerNum(answer, result, userName) === false) {
      break;
    }

    if (i === 2) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

export default gameProgression;
