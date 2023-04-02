import LaunchGame from '../index.js';
import getRandomNumber from '../utils.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getPrimeNum = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

const getAnswerAndQuestion = () => {
  const question = getRandomNumber();
  const correctAnswer = getPrimeNum(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

const startGamePrime = () => LaunchGame(gameDescription, getAnswerAndQuestion);

export default startGamePrime;
