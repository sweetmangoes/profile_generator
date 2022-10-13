
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const q1 = 'What\'s your name?';
const q2 = 'Which city do you live in?';
const q3 = 'What do you do for fun?';
const q4 = 'What\'s your favourite meal? ';
const q5 = 'Which movie genre do you enjoy the most?';

const questionsArray = [q1, q2, q3, q4, q5];
let res = '';
const askingQuestions = i => {
  if (i < questionsArray.length) {
    rl.question(questionsArray[i], (answer) => {
      res += '\n' + answer;
      askingQuestions(i + 1);x
    });
  } else {
      console.log(`Thank you for your valuable feedback: ${res}`);
      rl.close();
  }
};
askingQuestions(0);