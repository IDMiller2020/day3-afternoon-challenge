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
  document.getElementById('wcb').classList.remove('bg-warning','bg-success', 'bg-danger')

  if (choice === compRPS) {
    document.getElementById('wcb').classList.remove('bg-*')
    document.getElementById('winner').innerText = 'Tie!'
    document.getElementById('wcb').classList.add('bg-warning')
  } else if (choice === 'ROCK' && compRPS === 'PAPER') {
    document.getElementById('wcb').classList.remove('bg-*')
    document.getElementById('winner').innerText = 'The Computer is the winner!'
    document.getElementById('wcb').classList.add('bg-danger')
  } else if (choice === 'ROCK' && compRPS === 'SCISSORS') {
    document.getElementById('wcb').classList.remove('bg-*')
    document.getElementById('winner').innerText = 'You are the winner!'
    document.getElementById('wcb').classList.add('bg-success')
  } else if (choice === 'PAPER' && compRPS === 'ROCK') {
    document.getElementById('wcb').classList.remove('bg-*')
    document.getElementById('winner').innerText = 'You are the winner!'
    document.getElementById('wcb').classList.add('bg-success')
  } else if (choice === 'PAPER' && compRPS === 'SCISSORS') {
    document.getElementById('wcb').classList.remove('bg-*')
    document.getElementById('winner').innerText = 'The Computer is the winner!'
    document.getElementById('wcb').classList.add('bg-danger')
  } else if (choice === 'SCISSORS' && compRPS === 'ROCK') {
    document.getElementById('wcb').classList.remove('bg-*')
  document.getElementById('winner').innerText = 'The Computer winner!'
  document.getElementById('wcb').classList.add('bg-danger')
  } else if (choice === 'SCISSORS' && compRPS === 'PAPER') {
    document.getElementById('wcb').classList.remove('bg-*')
    document.getElementById('winner').innerText = 'You are the winner!'
    document.getElementById('wcb').classList.add('bg-success')
  }
}