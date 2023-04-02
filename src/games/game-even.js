import LaunchGame from '../index.js';
import getRandomNumber from '../utils.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isGameEven = (num) => num % 2 === 0;

const getAnswerAndQuestion = () => {
  const question = getRandomNumber();
  const correctAnswer = isGameEven(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

const startGameRandomNum = () => LaunchGame(gameDescription, getAnswerAndQuestion);

export default startGameRandomNum;
