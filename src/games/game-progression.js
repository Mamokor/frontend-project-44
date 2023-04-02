import { LaunchGame } from '../index.js';
import getRandomNumber from '../utils.js';

const gameDescription = 'What number is missing in the progression?';

const getProgression = () => {
  const arr = [];
  const progresStep = getRandomNumber(1, 15);
  const progresLength = getRandomNumber(5, 10);
  for (let i = progresStep; i <= progresStep * progresLength; i += progresStep) {
    arr.push(i);
  }
  arr[getRandomNumber(1, arr.length - 2)] = '..';
  const correctAnswer = arr[arr.indexOf('..') - 1] + progresStep;
  const result = arr.join(' ');
  return [correctAnswer, result];
};

const getAnswerAndQuestion = () => {
  const answers = getProgression();
  const [correctAnswer, question] = answers;

  return [question, String(correctAnswer)];
};

const startGameProgression = () => LaunchGame(gameDescription, getAnswerAndQuestion);

export default startGameProgression;
