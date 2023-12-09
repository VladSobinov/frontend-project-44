import readlineSync from 'readline-sync';

let count = 0;

const checkAnswer = (answer, number, userName) => {
  if (number % 2 === 0 && answer === 'yes') {
    console.log('Correct!');
  } if (number % 2 && answer === 'yes') {
    console.log(`"'yes' is wrong answer ;(. Correct answer was 'no'. \nLet's try again, ${userName}!"`);
    return;
  } if (number % 2 === 0 && answer === 'no') {
    console.log(`"'yes' is wrong answer ;(. Correct answer was 'no'. \nLet's try again, ${userName}!"`);
    return;
  } if (answer !== 'yes' && answer !== 'no') {
    console.log(`"'yes' is wrong answer ;(. Correct answer was 'no'. \nLet's try again, ${userName}!"`);
    return;
  } if (number % 2 && answer === 'no') {
    console.log('Correct!');
  } if (count === 2) {
    console.log(`'Congratulations, ${userName}'`);
  }
};

const gameEven = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  for (let i = 0; i < 3; i += 1) {
    const number = Math.round(Math.random() * 50);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    checkAnswer(answer, number, userName);
    count += 1;
  }
};

export default gameEven;
