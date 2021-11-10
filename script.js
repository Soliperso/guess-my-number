'use strict';

let secretNumber = (document.querySelector('.number').textContent =
  Math.floor(Math.random() * 20) + 1);

let score = 20;
let highestScore = 0;

const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('Please enter a number');
  } else if (guess === secretNumber) {
    displayMessage('🎉Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highestScore) {
      highestScore = score;
      document.querySelector('.highscore').textContent = highestScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 0) {
      displayMessage(guess > secretNumber ? '🔥 Too High!' : '🔥 Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else {
    displayMessage('🔥 You lost the game!');
  }
});

document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  secretNumber = Math.floor(Math.random() * 20) + 1;

  displayMessage('Start guessing ...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '10=5rem';
});

// 60b347
