import { gameBody, checkAnswerStr } from '../index.js';

const isEven = (number) => (number % 2 === 0 ? 'yes' : 'no');
const checkAnswerGameEven = (answer, number, userName) => {
  const correctAnswer = isEven(number);
  return checkAnswerStr(answer, correctAnswer, userName);
};

const gameEven = () => {
  gameBody(checkAnswerGameEven, 'Answer "yes" if the number is even, otherwise answer "no".', 'even');
};

export default gameEven;
