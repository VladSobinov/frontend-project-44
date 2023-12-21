import readlineSync from 'readline-sync';
import { randomNumber } from './utils.js';

const numberOfRounds = (number) => {
  const rounds = number;
  return rounds;
};

const makeRandomParams = () => {
  const operators = ['+', '-', '*'];
  const randomOp = operators[Math.floor(Math.random() * operators.length)];
  const number1 = Math.round(Math.random() * 50);
  const number2 = Math.round(Math.random() * 50);

  return [randomOp, number1, number2];
};

const checkAnswerNum = (answer, result, userName) => {
  let correct = true;
  if (Number(answer) === result) {
    console.log('Correct!');
  } else {
    correct = false;
    console.log(`'${answer}' is the wrong answer ;(. Correct answer was '${result}'. \nLet's try again, ${userName}!`);
  }

  return correct;
};

const checkAnswerStr = (answer, correctAnswer, userName) => {
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

const gameBody = (gameType, gameDescription, gameName) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameDescription);

  if (gameName === 'even' || gameName === 'prime') {
    for (let i = 0; i < numberOfRounds(3); i += 1) {
      const randomParams = randomNumber(50);
      console.log(`Question: ${randomParams}`);
      const answer = readlineSync.question('Your answer: ');
      if (gameType(answer, randomParams, userName) === false) {
        return;
      }
    }
  }
  if (gameName === 'calc') {
    for (let i = 0; i < numberOfRounds(3); i += 1) {
      const randomParams = makeRandomParams();
      const result = processCalculation(randomParams);
      console.log(`Question: ${randomParams[1]} ${randomParams[0]} ${randomParams[2]}`);
      const answer = readlineSync.question('Your answer: ');

      if (checkAnswerNum(answer, result, userName) === false) {
        return;
      }
    }
  }
  if (gameName === 'progression') {
    for (let i = 0; i < numberOfRounds(3); i += 1) {
      const randomMassive = gameStep(Math.round(Math.random() * 50));
      const randomIndex = Math.floor(Math.random() * randomMassive.length);
      const result = randomMassive[randomIndex];
      randomMassive[randomIndex] = '..';
      console.log(`Question: ${randomMassive.join(' ')}`);
      const answer = readlineSync.question('Your answer: ');

      if (checkAnswerNum(answer, result, userName) === false) {
        return;
      }
    }
  }
  if (gameName === 'gcd') {
    for (let i = 0; i < numberOfRounds(3); i += 1) {
      const randomParams = makeRandomParams();
      const result = resultNod(randomParams);
      console.log(`Question: ${randomParams[1]} ${randomParams[2]}`);
      const answer = readlineSync.question('Your answer: ');

      if (checkAnswerNum(answer, result, userName) === false) {
        return;
      }
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export {
  makeRandomParams, checkAnswerNum, checkAnswerStr, gameBody, numberOfRounds,
};
