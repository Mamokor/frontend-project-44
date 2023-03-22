import {
  getOper, LaunchGame, getRandomNumber, getRandomOperators,
} from '../index.js';

const gameInstructions = 'What is the result of the expression?';

const gameCalc = () => {
  const randomNum1 = getRandomNumber(1, 100);
  const randomNum2 = getRandomNumber(1, 100);
  const operators = getRandomOperators();
  const answers = getOper(operators, randomNum1, randomNum2);
  const question = answers[1];
  const correctAnswer = answers[0];

  return [question, correctAnswer];
};

const startGameCalc = () => LaunchGame(gameInstructions, gameCalc);

export default startGameCalc;
