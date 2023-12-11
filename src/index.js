import readlineSync from 'readline-sync';

const isEven = (number) => (number % 2 === 0 ? 'yes' : 'no');
const checkAnswerGameEven = (answer, number, userName) => {
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

const getName = (startMessage) => {
  console.log(startMessage);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  return userName;
};

const makeRandomParams = () => {
  const operators = ['+', '-', '*'];
  const randomOp = operators[Math.floor(Math.random() * operators.length)];
  const number1 = Math.round(Math.random() * 50);
  const number2 = Math.round(Math.random() * 50);

  return [randomOp, number1, number2];
};

const processCalculation = (randomParams) => {
  let result;
  switch (randomParams[0]) {
    case '+':
      result = randomParams[1] + randomParams[2];
      break;
    case '-':
      result = randomParams[1] - randomParams[2];
      break;
    case '*':
      result = randomParams[1] * randomParams[2];
      break;
    default:
      result = 0;
  }

  return result;
};

const resultCheckGameCalc = (answer, result, userName) => {
  let correct = true;
  if (Number(answer) === result) {
    console.log('Correct!');
  } else {
    correct = false;
    console.log(`'${answer}' is the wrong answer ;(. Correct answer was '${result}'. \nLet's try again, ${userName}!`);
  }

  return correct;
};

const resultNod = (randomParams) => {
  let a = randomParams[1];
  let b = randomParams[2];
  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }
  return a + b;
};

export {
  checkAnswerGameEven,
  getName,
  makeRandomParams, processCalculation, resultCheckGameCalc, resultNod,
};
