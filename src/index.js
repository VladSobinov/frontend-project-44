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

// eslint-disable-next-line import/prefer-default-export
export { checkAnswer };
