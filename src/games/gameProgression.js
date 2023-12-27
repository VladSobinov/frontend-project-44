import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const sizeOfArray = getRandomNumber(5, 10);

const gameStep = (firstNum, randomProgressionNumber) => {
  const array = [];
  array[0] = firstNum;
  for (let i = 1; i < sizeOfArray; i += 1) {
    array[i] = array[i - 1] + randomProgressionNumber;
  }
  return array.sort((a, b) => a - b);
};

const gameDescription = 'What number is missing in the progression?';

const gameFunction = () => {
  const randomMassive = gameStep(getRandomNumber(1, 50), getRandomNumber(2, 8));
  const randomIndex = getRandomNumber(randomMassive.length, 0);

  const correctAnswer = String(randomMassive[randomIndex]);
  randomMassive[randomIndex - 1] = '..';
  const question = randomMassive.join(' ');
  return [question, correctAnswer];
};

export default () => {
  runGame(gameDescription, gameFunction);
};
