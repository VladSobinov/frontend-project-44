import { getName, gameBody, checkAnswerStr } from '../index.js';

let userName;

const isEven = (number) => (number % 2 === 0 ? 'yes' : 'no');
const checkAnswerGameEven = (answer, number) => {
  const correctAnswer = isEven(number);
  return checkAnswerStr(answer, correctAnswer, userName);
};

const gameEven = () => {
  userName = getName('Answer "yes" if the number is even, otherwise answer "no".');
  gameBody(userName, checkAnswerGameEven);
};

export default gameEven;
