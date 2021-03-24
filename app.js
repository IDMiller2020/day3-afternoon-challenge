let compRPS = ''

function  computerChoice() {
  let randomChoice = 0
  randomChoice = (Math.floor(Math.random() * 3) + 1)
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
  document.getElementById('winnerCard').classList.remove('d-none')
  if (choice === compRPS) {
    document.getElementById('winner').innerText = 'Tie!'
  } else if (choice === 'ROCK' && compRPS === 'PAPER') {
    document.getElementById('winner').innerText = 'The Computer is the winner!'
  } else if (choice === 'ROCK' && compRPS === 'SCISSORS') {
    document.getElementById('winner').innerText = 'You are the winner!'
  } else if (choice === 'PAPER' && compRPS === 'ROCK') {
    document.getElementById('winner').innerText = 'You are the winner!'
  } else if (choice === 'PAPER' && compRPS === 'SCISSORS') {
    document.getElementById('winner').innerText = 'The Computer is the winner!'
  } else if (choice === 'SCISSORS' && compRPS === 'ROCK') {
  document.getElementById('winner').innerText = 'The Computer winner!'
  } else if (choice === 'SCISSORS' && compRPS === 'PAPER') {
    document.getElementById('winner').innerText = 'You are the winner!'
  }
}