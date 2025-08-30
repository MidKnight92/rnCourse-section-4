export const randomNumberGenerator = (min, max, exclude) => {
  const randomNum = Math.floor(Math.random() * (max - min) + min);
  if (randomNum === exclude) {
    return randomNumberGenerator(min, max, exclude);
  } else {
    return randomNum;
  }
};
