import { gameBody, checkAnswerNum } from '../index.js';

const gameProgression = () => {
  gameBody(checkAnswerNum, 'What number is missing in the progression?', 'progression');
};

export default gameProgression;
