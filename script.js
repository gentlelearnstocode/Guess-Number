// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = "🎉 Correct Score!"
// document.querySelector('.number').textContent = 18
// document.querySelector('.score').textContent = 15
// document.querySelector('.guess').value = 16
let secretNumber = Math.floor(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;
//Use function to refactor code
const displayMessage = (message) => {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('❌ No Number!');
    //document.querySelector('.message').textContent = '❌ No Number!';
    //When player wins, background color changes to green
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    displayMessage('🎉 Correct Score!');
    //document.querySelector('.message').textContent = '🎉 Correct Score!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    //This is the refactored version
  } else if (guess !== secretNumber) {
      displayMessage(guess > secretNumber ? '❌ Too High!' : '❌ Too Low!')
    // document.querySelector('.message').textContent =
    // guess > secretNumber ? '❌ Too High!' : '❌ Too Low!';
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    displayMessage('❗❗❗ Game over!');
    //document.querySelector('.message').textContent = '❗❗❗ Game over!';
    document.querySelector('.score').textContent = 0;
  }
  //This is the non-refactored version
  //    else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '❌ Too High!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = '❗❗❗ Game over!';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '❌ Too Low!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = '❗❗❗ Game over!';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.floor(Math.random() * 20 + 1);
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  displayMessage('Start guessing...');
  //document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
});
