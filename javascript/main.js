/* HTML UI Elements */
const game = document.querySelector('.game');
const gameGuessInput =  document.getElementById('game-form-guess-input');
const gameGuessSubmit = document.getElementById('game-form-guess-submit');
const gameMinNum = document.getElementById('game-min-num');
const gameMaxNum = document.getElementById('game-max-num');
const gameNote = document.getElementById('game-note');

/* Game variables */
var minNum = 1,
    maxNum = 10, 
    winningNum = parseInt(Math.random() * 11),
    guessAmount = 3;

/* Assigning game variables to HTML UI Elements */

gameMinNum.textContent = minNum;
gameMaxNum.textContent = maxNum;

/* Click events in game */
gameGuessSubmit.addEventListener('click', checkGuessInput);

function checkGuessInput(){
  var guess = gameGuessInput.value;
  if(isNaN(guess) || guess < minNum || guess > maxNum){
    gameNote.textContent = 'Please type a number between 1 through 10';
    gameNote.style.color = 'red';
  } else if (guess != winningNum){
    guessAmount -= 1;
    gameNote.textContent = `${guess} is not the correct number, ${guessAmount} guesses left`;
    gameNote.style.color = 'red';
  } else if (guess = winningNum){
    gameNote.textContent = `${guess} is the correct number, YOU WIN!`;
    gameNote.style.color = '#50C878';
    gameGuessInput.disabled = true;
    gameGuessInput.style.borderColor = '#50C878';
    gameGuessInput.style.outlineColor = '#50C878';
    gameGuessSubmit.value = 'PLAY AGAIN';
     gameGuessSubmit.addEventListener('click', function(){
      window.location.reload();
    });
  }
    
    if(guessAmount === 0){
       gameGuessSubmit.value = 'PLAY AGAIN';
       gameNote.textContent = `Game Over, no more tries left. The correct number was ${winningNum}`;
       gameGuessInput.style.borderColor = 'red';
    gameGuessSubmit.addEventListener('click', function(){
      window.location.reload();
      gameNote.textContent = '';
    });
  };
};