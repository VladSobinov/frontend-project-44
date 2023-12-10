import readlineSync from 'readline-sync';

const gameCalc = () => {
  console.log('What is the result of the expression?');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  for (let i = 0; i < 3; i += 1) {
    const operators = ['+', '-', '*'];
    const randomOp = operators[Math.floor(Math.random() * operators.length)];
    const number1 = Math.round(Math.random() * 50);
    const number2 = Math.round(Math.random() * 50);

    let result;

    switch (randomOp) {
      case '+':
        result = number1 + number2;
        break;
      case '-':
        result = number1 - number2;
        break;
      case '*':
        result = number1 * number2;
        break;
      default:
        return;
    }

    console.log(`Question: ${number1} ${randomOp} ${number2}`);
    const answer = readlineSync.question('Your answer: ');

    if (Number(answer) === result) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is the wrong answer ;(. Correct answer was '${result}'. \nLet's try again, ${userName}!`);
      break;
    }

    if (i === 2) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

export default gameCalc;
