let random = parseInt(Math.random()*100+1)
console.log(random);

const input = document.querySelector('#guessField')
const submit = document.querySelector('#subt')
const result = document.querySelector('.resultParas')
const prev = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const display = document.querySelector('.lowOrHi')

let playGame = true
let prevGuess = []
let numGuess = 0
let p = document.createElement('p')

if(playGame){
   submit.addEventListener('click',(e)=>{
    e.preventDefault()
    let guess = parseInt(input.value)
    validateGuess(guess)
   })
}
function validateGuess(guess){
    if(guess==='' || isNaN(guess) || guess<1 || guess>100){
        alert('Please enter a valid number')
    }
    else{
        prevGuess.push(guess)
        if(numGuess==9){
            displayGuess(guess)
            displayMessage(`Game Over. The number was ${random}`)
            endGame()
        }
        else{
            checkGuess(guess)
        }
    }
}
function checkGuess(guess){
    if(guess == random){
        displayMessage(`You guessed it right`);
        displayGuess(guess)
        endGame();
    }
    else if(guess>random){
        displayMessage(`Number is high`)
        displayGuess(guess);
    }
    else{
        displayMessage(`Number is low`)
        displayGuess(guess);
    }
}
function displayGuess(guess){
    input.value=''
    numGuess++;
    prev.innerHTML+=`${guess} `
    remaining.innerHTML=`${10-numGuess}`
}
function displayMessage(message){
    display.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    input.setAttribute('disabled', '')
    p.innerHTML = `<h3 id='new'>Start Again</h3>`
    result.appendChild(p)
    playGame= false;
    newGame()
}

function newGame(){
    const newGameBtn = document.querySelector('#new')
    newGameBtn.addEventListener('click',(e)=>{
        random = parseInt(Math.random()*100+1)
        input.removeAttribute('disabled', '')
        result.removeChild(p)
        prevGuess =[]
        numGuess=0
        prev.innerHTML=''
        remaining.innerHTML=`${10-numGuess}`
        displayMessage('')
        playGame= true;
    })
}