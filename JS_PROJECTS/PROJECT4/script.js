const random = parseInt(Math.random()*100+1)
const input = document.querySelector('#guessField')
const submit = document.querySelector('#subt')
const prev = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const output = document.querySelector('.lowOrHi')
const result = document.querySelector('.resultParas')

const p = document.createElement('p')

let GuessList = [];
let numGuess = 0;

submit.addEventListener('click',(e)=>{
    e.preventDefault();
    const guess = parseInt(input.value)
    if(guess==='' || guess<1 || guess>100 || isNaN(guess)){
        alert('Please enter a valid number')
    }
    else{
            displayGuess(guess);
            checkGuess(guess);
            if(numGuess==10){
                displayMessage(`Your guess limit is over. The correct number was ${random}`)
                endGame();
            }
        
    }

function checkGuess(guess){
    if(guess===random){
        displayMessage(`You guessed it right.`)
        endGame()
    }
    else if(guess<random){
        displayMessage(`Your guess is low.`)
    }
    else{
        displayMessage(`Your guess is high`)
    }
}

function displayGuess(guess){
    GuessList.push(guess)
    numGuess++
    prev.innerHTML+=`${guess} `
    remaining.innerHTML=`${10-numGuess}`
    input.value=""
}

function displayMessage(message){
    output.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    input.setAttribute('disabled', ' ')
    p.innerHTML=`<h2>Start Again</h2>`
    result.appendChild(p)
    newGame()
}

function newGame(){
    p.addEventListener('click',(e)=>{
        input.removeAttribute('disabled', ' ')
        result.removeChild(p)
        input.value=""
        prev.innerHTML=""
        GuessList= []
        numGuess=0
        remaining.innerHTML=`${10-numGuess}`
        displayMessage('')
    })
}
})