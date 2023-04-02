import LaunchGame from '../index.js';
import getRandomNumber from '../utils.js';

const getOper = (operator, num1, num2) => {
  let correctAnswer = 0;
  let question = '';

  switch (operator) {
    case '+':
      correctAnswer += num1 + num2;
      question += `${num1} + ${num2}`;
      break;
    case '-':
      correctAnswer += num1 - num2;
      question += `${num1} - ${num2}`;
      break;
    case '*':
      correctAnswer += num1 * num2;
      question += `${num1} * ${num2}`;
      break;
    default:
      break;
  }
  return [String(correctAnswer), question];
};

const gameDescription = 'What is the result of the expression?';

const getRandomOperators = () => {
  const operators = '+-*';
  return operators[getRandomNumber(0, operators.length - 1)];
};

const getAnswerAndQuestion = () => {
  const randomNum1 = getRandomNumber(1, 100);
  const randomNum2 = getRandomNumber(1, 100);
  const operators = getRandomOperators();
  const answers = getOper(operators, randomNum1, randomNum2);
  const question = answers[1];
  const correctAnswer = answers[0];

  return [question, correctAnswer];
};

const startGameCalc = () => LaunchGame(gameDescription, getAnswerAndQuestion);

export default startGameCalc;
