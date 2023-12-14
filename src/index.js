import readlineSync from 'readline-sync';

const getName = (startMessage) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(startMessage);

  return userName;
};

const makeRandomParams = () => {
  const operators = ['+', '-', '*'];
  const randomOp = operators[Math.floor(Math.random() * operators.length)];
  const number1 = Math.round(Math.random() * 50);
  const number2 = Math.round(Math.random() * 50);

  return [randomOp, number1, number2];
};

const checkAnswerNum = (answer, result, userName) => {
  let correct = true;
  if (Number(answer) === result) {
    console.log('Correct!');
  } else {
    correct = false;
    console.log(`'${answer}' is the wrong answer ;(. Correct answer was '${result}'. \nLet's try again, ${userName}!`);
  }

  return correct;
};

const checkAnswerStr = (answer, correctAnswer, userName) => {
  let functionResult = false;
  if (correctAnswer === answer) {
    console.log('Correct!');
    functionResult = true;
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${userName}!"`);
    functionResult = false;
  }
  return functionResult;
};

const gameBody = (userName, gameType) => {
  for (let i = 0; i < 3; i += 1) {
    const randomParams = Math.round(Math.random() * 50);
    console.log(`Question: ${randomParams}`);
    const answer = readlineSync.question('Your answer: ');
    if (gameType(answer, randomParams, userName) === false) {
      break;
    }
    if (i === 2) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

export {
  getName,
  makeRandomParams, checkAnswerNum, checkAnswerStr, gameBody,
};
