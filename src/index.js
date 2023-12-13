import readlineSync from 'readline-sync';

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

const resultCheckGame = (answer, result, userName) => {
  let correct = true;
  if (Number(answer) === result) {
    console.log('Correct!');
  } else {
    correct = false;
    console.log(`'${answer}' is the wrong answer ;(. Correct answer was '${result}'. \nLet's try again, ${userName}!`);
  }

  return correct;
};

export {
  getName,
  makeRandomParams, resultCheckGame,
};
