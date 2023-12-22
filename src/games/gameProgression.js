import { gameBody, checkAnswer } from '../index.js';

const gameProgression = () => {
  gameBody(checkAnswer, 'What number is missing in the progression?', 'progression');
};

export default gameProgression;
