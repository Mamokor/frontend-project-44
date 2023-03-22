import { getRandomNumber, LaunchGame } from '../index.js';

const isGameEven = (num) => num % 2 === 0;

const gameInstructions = 'Answer "yes" if the number is even, otherwise answer "no".';

const evenGame = () => {
  const question = getRandomNumber();
  const correctAnswer = isGameEven(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

const startGameRandomNum = () => LaunchGame(gameInstructions, evenGame);

export default startGameRandomNum;
