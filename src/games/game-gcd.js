import { LaunchGame } from '../index.js';
import getRandomNumber from '../utils.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const getNOD = (a, b) => {
  let num1 = a;
  let num2 = b;
  while (num1 !== num2) {
    if (num1 > num2) {
      num1 -= num2;
    } else num2 -= num1;
  }
  return num1;
};

const getAnswerAndQuestion = () => {
  const randomNumber1 = getRandomNumber();
  const randomNumber2 = getRandomNumber();
  const question = `${randomNumber1} ${randomNumber2}`;
  const correctAnswer = getNOD(randomNumber1, randomNumber2);

  return [question, String(correctAnswer)];
};

const startGameNOD = () => LaunchGame(gameDescription, getAnswerAndQuestion);

export default startGameNOD;
