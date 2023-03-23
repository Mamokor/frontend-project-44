import { getNOD, getRandomNumber, LaunchGame } from '../index.js';

const gameInstructions = 'Find the greatest common divisor of given numbers.';

const nodGame = () => {
  const randomNumber1 = getRandomNumber();
  const randomNumber2 = getRandomNumber();
  const question = `${randomNumber1} ${randomNumber2}`;
  const correctAnswer = getNOD(randomNumber1, randomNumber2);

  return [question, String(correctAnswer)];
};

const startGameNOD = () => LaunchGame(gameInstructions, nodGame);

export default startGameNOD;
