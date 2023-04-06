import readlineSync from 'readline-sync';
import greetUser from './cli.js';

const roundsCount = 3;
const LaunchGame = (gameDescription, game) => {
  const playerName = greetUser();
  console.log(gameDescription);
  for (let attempt = 0; attempt < roundsCount; attempt += 1) {
    const [question, correctAnswer] = game();
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

export default LaunchGame;
