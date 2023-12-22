import { checkAnswer, gameBody } from '../index.js';

const gameCalc = () => {
  gameBody(checkAnswer, 'What is the result of the expression?', 'calc');
};

export default gameCalc;
