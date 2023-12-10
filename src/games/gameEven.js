import readlineSync from 'readline-sync';
import { checkAnswer } from '../index.js';

const gameEven = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  for (let i = 0; i < 3; i += 1) {
    const number = Math.round(Math.random() * 50);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    if (checkAnswer(answer, number, userName) === false) {
      break;
    }
    if (i === 2) {
      console.log(`'Congratulations, ${userName}'`);
    }
  }
};

export default gameEven;
