const getRandomNumber = (min, max) => {
  const num = min + Math.random() * (max + 1 - min);
  return Math.floor(num);
};

export default getRandomNumber;
