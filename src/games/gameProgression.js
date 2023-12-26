import runGame from '../index.js';
import getRandomNumber from '../utils.js';

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

const gameDescription = 'What number is missing in the progression?';

const gameFunction = () => {
  const randomMassive = gameStep(getRandomNumber(1, 50));
  const randomIndex = Math.floor(Math.random() * randomMassive.length);

  const correctAnswer = String(randomMassive[randomIndex]);
  randomMassive[randomIndex] = '..';
  const question = randomMassive.join(' ');
  return [question, correctAnswer];
};

export default () => {
  runGame(gameDescription, gameFunction);
};
