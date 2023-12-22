import { gameBody, checkAnswer } from '../index.js';

const gameGcd = () => {
  gameBody(checkAnswer, 'Find the greatest common divisor of given numbers.', 'gcd');
};

export default gameGcd;
