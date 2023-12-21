import { checkAnswerNum, gameBody } from '../index.js';

const gameCalc = () => {
  gameBody(checkAnswerNum, 'What is the result of the expression?', 'calc');
};

export default gameCalc;
