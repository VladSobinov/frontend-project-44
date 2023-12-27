import gameBody from '../index.js';
import getRandomNumber from '../utils.js';

const gameDescription = 'What is the result of the expression?';

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const randomOp = operators[getRandomNumber(0, 2)];

  return randomOp;
};

const processCalculation = (number1, operator, number2) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error('Unknown state!');
  }
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
