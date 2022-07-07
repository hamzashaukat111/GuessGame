'use strict';

//document.querySelector('body').style.backgroundColor = 'blue';
//

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = document.querySelector('.guess').value;

  // When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔️ No number!';
    displayMessage('⛔️ TYPE ANY PERSON');

    // When player wins
  } else if (guess === 'hamza') {
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage(
      '🎉 Correct! Hamza is most masoom laik acha aqalmand samjhdar larka of uet'
    );
    document.querySelector('.number').textContent = 'Hamza ';

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // When guess is wrong
  } else if (guess === 'mahnoor') {
    displayMessage(
      '💥 Wronggg! Mahnoor masoom zaroor hai lekin not the best in uet, click on again:pp '
    );
    document.querySelector('body').style.backgroundColor = 'red';
  } else if (guess === 'azka') {
    displayMessage(
      '💥 Wronggg! Azka toh biggest nerd hai jo kisi ko "no" nae bol pati, click on again:pp '
    );
    document.querySelector('body').style.backgroundColor = 'red';
  } else if (guess === 'rida') {
    displayMessage('💥 Wronggg! Rida toh snek hai bhae, try again ');
    document.querySelector('body').style.backgroundColor = 'red';
  } else if (guess === 'hira') {
    displayMessage(
      '💥 Wronggg! hira heera zaroor hai lekin uet ka best nae :pp,  try again '
    );
  } else if (guess === 'awais') {
    displayMessage('💥 Seriouslyy?? kis angle say lagta ');
  } else {
    displayMessage('💥 Abay yay kon hai bhae? ');
  }
});

document.querySelector('.again').addEventListener('click', function () {
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');

  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
