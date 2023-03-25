import { getRandomNumber, LaunchGame, getPrimeNum } from '../index.js';

const gameInstructions = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const primeNumGame = () => {
  const question = getRandomNumber();
  const correctAnswer = getPrimeNum(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

const startGamePrime = () => LaunchGame(gameInstructions, primeNumGame);

export default startGamePrime;
