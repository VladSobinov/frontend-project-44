import readlineSync from 'readline-sync';

let userName;

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

const resultCheck = (answer, result) => {
  let correct = true;
  if (Number(answer) === result) {
    console.log('Correct!');
  } else {
    correct = false;
    console.log(`'${answer}' is the wrong answer ;(. Correct answer was '${result}'. \nLet's try again, ${userName}!`);
  }

  return correct;
};

const gameCalc = () => {
  console.log('What is the result of the expression?');
  userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  for (let i = 0; i < 3; i += 1) {
    const randomParams = makeRandomParams();
    const result = processCalculation(randomParams);
    console.log(`Question: ${randomParams[1]} ${randomParams[0]} ${randomParams[2]}`);
    const answer = readlineSync.question('Your answer: ');

    if (resultCheck(answer, result) === false) {
      break;
    }

    if (i === 2) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

export default gameCalc;
