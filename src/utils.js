const randomNumber = (number) => {
  const num = Math.floor(Math.random() * number);
  return num;
};

// eslint-disable-next-line import/prefer-default-export
export { randomNumber };
