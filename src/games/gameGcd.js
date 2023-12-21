import { gameBody, checkAnswerNum } from '../index.js';

const gameGcd = () => {
  gameBody(checkAnswerNum, 'Find the greatest common divisor of given numbers.', 'gcd');
};

export default gameGcd;
