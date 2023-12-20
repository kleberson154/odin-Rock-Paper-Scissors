let playerScore = 0
let computerScore = 0
let roundWinner = ''

//buttons
const rockBtn = document.getElementById('rockBtn')
const paperBtn = document.getElementById('paperBtn')
const scissorBtn = document.getElementById('scissorBtn')
rockBtn.addEventListener('click', () => handleClick('rock'))
paperBtn.addEventListener('click', () => handleClick('paper'))
scissorsBtn.addEventListener('click', () => handleClick('scissor'))

function handleClick(playerSelection) {
  const computerSelection = getRandomChoice()
}

//jogada do computador
function getRandomChoice() {
  let randomNumber = Math.floor(Math.random() * 3)
  switch (randomNumber) {
    case 0:
      return 'rock'
    case 1:
      return 'paper'
    case 2:
      return 'scissor'
  }
}

//Inicio do Jogo
function playRound(playerSelection, computerSelection) {
  //Empate
  if (playerSelection === computerSelection) {
    roundWinner = 'Empate!'
  }
  //Jogador vence
  if (
    (playerSelection === 'rock' && computerSelection === 'scissor')(
      playerSelection === 'scissor' && computerSelection === 'paper'
    )(playerSelection === 'paper' && computerSelection === 'rock')
  ) {
    playerScore++
    roundWinner = 'Jogador'
  }
  //Computador vence
  if (
    (computerSelection === 'rock' && playerSelection === 'scissor')(
      computerSelection === 'scissor' && playerSelection === 'paper'
    )(computerSelection === 'paper' && playerSelection === 'rock')
  ) {
    computerScore++
    roundWinner = 'Computador'
  }
}
