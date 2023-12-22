import { gameBody, checkAnswer } from '../index.js';

const isEven = (number) => (number % 2 === 0 ? 'yes' : 'no');
// eslint-disable-next-line max-len
const checkAnswerGameEven = (answer, number, userName) => checkAnswer(answer, isEven(number), userName);

const gameEven = () => {
  gameBody(checkAnswerGameEven, 'Answer "yes" if the number is even, otherwise answer "no".', 'even');
};

export default gameEven;
