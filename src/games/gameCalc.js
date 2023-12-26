import gameBody from '../index.js';
import getRandomNumber from '../utils.js';

const gameDescription = 'What is the result of the expression?';

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const randomOp = operators[Math.floor(Math.random() * operators.length)];

  return randomOp;
};

const processCalculation = (number1, operator, number2) => {
  let result;
  switch (operator) {
    case '+':
      result = number1 + number2;
      break;
    case '-':
      result = number1 - number2;
      break;
    case '*':
      result = number1 * number2;
      break;
    default:
      result = 0;
  }

  return result;
};

const gameFunction = () => {
  const number1 = getRandomNumber(1, 50);
  const number2 = getRandomNumber(1, 50);
  const operator = getRandomOperator();
  const question = `${number1} ${operator} ${number2}`;
  const correctAnswer = String(processCalculation(number1, operator, number2));
  return [question, correctAnswer];
};

export default () => {
  gameBody(gameDescription, gameFunction);
};
