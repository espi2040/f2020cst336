
var randomNumber = Math.floor(Math.random()* 99)+1 ;
var gameswon  = 0;
var gameslost = 0;
var games = document.querySelector('#games');


var guesses = document.querySelector('#guesses');
var lastResult = document.querySelector('#lastResult');
var lowOrHi = document.querySelector('#lowOrHi');
        
var guessSubmit = document.querySelector('.guessSubmit'); 
var guessField = document.querySelector('.guessField');
        
var guessCount = 1; 
var resetButton = document.querySelector('#reset')
resetButton.style.display = 'none'
        
var resetButton;
guessField.focus();
 function checkGuess(){
     var userGuess = Number(guessField.value);
     if(guessCount ===1){
         guesses.innerHTML = 'Previous guesses: ';
     }
     guesses.innerHTML += userGuess + ' ';
     
     if(userGuess === randomNumber){
                    lastResult.innerHTML = 'Congratulations! You got it right!';
                    lastResult.style.backgroundColor = 'green';
                    lowOrHi.innerHTML= '';
                    setGameOver();
                    gameswon = gameswon+1;
                    games.innerHTML = 'gameswon:' +gameswon +'  gameslost:'+ gameslost;  
                
                }else if(guessCount === 7) { 
                    lastResult.innerHTML = 'Sorry, you lost!';
                    setGameOver(); 
                    gameslost= gameslost+ 1;
                    games.innerHTML = 'gameswon:' +gameswon +'  gameslost:'+ gameslost;  
                    
                }else{
                    lastResult.innerHTML ='wrong!';
                    lastResult.style.backgroundColor ='red';
                    if(userGuess < randomNumber){
                        lowOrHi.innerHTML = 'Last guess was too low!';
                    }else if (userGuess > randomNumber && userGuess <= 99 ) {
                        lowOrHi.innerHTML = 'Last guess was too high!';
                    }else if (userGuess > 99){
                        lowOrHi.innerHTML = 'out of bound input';
                        guessCount = guessCount -1;
                    }else if(isNaN() === true){
                        lowOrHi.innerHTML = 'Not a number! invaild input';
                        guessCount = guessCount -1;
                        
                    }
                }
                guessCount++;
                guessField.value = ''; 
                guessField.focus(); 
        }
        guessSubmit.addEventListener('click',checkGuess); 
        function setGameOver(){
            guessField.disabled = true;
            guessSubmit.disabled = true; 
            resetButton.style.display = 'inline';
            resetButton.addEventListener('click',resetGame);
            
        }
        function resetGame() {
            guessCount = 1; 
            var resetParas = document.querySelectorAll('.resultParas p'); 
            for(var i = 0; i < resetParas.length; i++){
                resetParas[i].textContent = '';
            }
            
            resetButton.style.display = 'none';
            
            guessField.disabled = 'false';
            guessSubmit.disabled = 'false';
            guessField.focus();
            
            lastResult.style.backgroundColor = 'white'; 
            randomNumber = Math.floor(Math.random() * 99) + 1;
            
        }