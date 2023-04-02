import readlineSync from 'readline-sync';
import greetUser from './cli.js';

const LaunchGame = (gameDescription, game) => {
  const playerName = greetUser();
  const playThreeRounds = 3;
  console.log(gameDescription);
  for (let attempt = 0; attempt < playThreeRounds; attempt += 1) {
    const getGameData = game();
    const [question, correctAnswer] = getGameData;
    console.log(`Question: ${question}`);
    const playerAnswer = readlineSync.question('Your answer: ');
    if (playerAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${playerName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${playerName}!`);
};

export {
  LaunchGame,
};
