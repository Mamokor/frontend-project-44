const getRandomNumber = (min = 0, max = 1000) => Math.round(Math.random() * (max - min) + min);

export default getRandomNumber;
