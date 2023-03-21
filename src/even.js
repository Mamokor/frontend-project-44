import readlineSync from 'readline-sync';
import greetUser from './cli.js';

const getRandomNumber = (min = 0, max = 1000) => Math.round(Math.random() * (max - min) + min);

const LaunchGame = (gameInstructions, game) => {
  const playerName = greetUser();
  console.log(gameInstructions);
  for (let attempt = 0; attempt < 3; attempt += 1) {
    const getGameData = game();
    const question = getGameData[0];
    const correctAnswer = getGameData[1];
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
  getRandomNumber,
  LaunchGame,
};
