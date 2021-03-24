let compRPS = ''
let userRPS = ''

function  computerChoice() {
  let randomChoice = 0
  randomChoice = (Math.floor(Math.random() * 3) + 1)
  console.log(`random number: ${randomChoice}`)

  if (randomChoice === 1) {
    compRPS = 'ROCK'
  } else if (randomChoice === 2) {
    compRPS = 'PAPER'
  } else {
    compRPS = 'SCISSORS'
  }
  document.getElementById('compChoice').innerText = `${compRPS}`
  return compRPS
}

function playGame(choice) {
  compRPS = computerChoice()
  console.log(compRPS)
  userRPS = choice
  console.log(`You chose ${userRPS} and the computer chose ${compRPS}.`)
  if (userRPS === compRPS) {
    document.getElementById('winner').innerText = 'Tie!'
  } else if (userRPS === 'ROCK' && compRPS === 'PAPER') {
    document.getElementById('winner').innerText = 'The Computer is the winner!'
  } else if (userRPS === 'ROCK' && compRPS === 'SCISSORS') {
    document.getElementById('winner').innerText = 'You are the winner!'
  } else if (userRPS === 'PAPER' && compRPS === 'ROCK') {
    document.getElementById('winner').innerText = 'You are the winner!'
  } else if (userRPS === 'PAPER' && compRPS === 'SCISSORS') {
    document.getElementById('winner').innerText = 'The Computer is the winner!'
  } else if (userRPS === 'SCISSORS' && compRPS === 'ROCK') {
  document.getElementById('winner').innerText = 'The Computer winner!'
  } else if (userRPS === 'SCISSORS' && compRPS === 'PAPER') {
    document.getElementById('winner').innerText = 'You are the winner!'
  }
}