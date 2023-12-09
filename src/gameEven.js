import readlineSync from 'readline-sync';

let count = 0;

const isEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

const checkAnswer = (answer, number, userName) => {
  const correctAnswer = isEven(number);
  let functionResult = false;
  if (correctAnswer === answer) {
    console.log('Correct!');
    functionResult = true;
  } else {
    console.log(`"'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${userName}!"`);
    functionResult = false;
  }
  return functionResult;
};

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
    if (count === 2) {
      console.log(`'Congratulations, ${userName}'`);
    }
    count += 1;
  }
};

export default gameEven;
