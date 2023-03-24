import { LaunchGame, getProgression } from '../index.js';

const gameInstructions = 'What number is missing in the progression?';

const progressionGame = () => {
  const answers = getProgression();
  const correctAnswer = answers[0];
  const question = answers[1];

  return [question, String(correctAnswer)];
};

const startGameProgression = () => LaunchGame(gameInstructions, progressionGame);

export default startGameProgression;
