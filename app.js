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
    drawWinner('tie')
  } else if (choice === 'ROCK' && compRPS === 'PAPER') {
    drawWinner('computer')
  } else if (choice === 'ROCK' && compRPS === 'SCISSORS') {
    drawWinner('user')
  } else if (choice === 'PAPER' && compRPS === 'ROCK') {
    drawWinner('user')
  } else if (choice === 'PAPER' && compRPS === 'SCISSORS') {
    drawWinner('computer')
  } else if (choice === 'SCISSORS' && compRPS === 'ROCK') {
    drawWinner('computer')
  } else if (choice === 'SCISSORS' && compRPS === 'PAPER') {
    drawWinner('user')
  }

  //  REFACTORING OF CODE
  function drawWinner (winner) {
    if (winner === 'tie') {
      document.getElementById('wcb').classList.remove('bg-*')
      document.getElementById('winner').innerText = 'Tie!'
      document.getElementById('wcb').classList.add('bg-warning')
    } else if (winner === 'user') {
      document.getElementById('wcb').classList.remove('bg-*')
      document.getElementById('winner').innerText = 'You are the winner!'
      document.getElementById('wcb').classList.add('bg-success')
    } else {
      document.getElementById('wcb').classList.remove('bg-*')
      document.getElementById('winner').innerText = 'The Computer winner!'
      document.getElementById('wcb').classList.add('bg-danger')
    }
  }
}