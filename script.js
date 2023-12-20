let playerScore = 0
let computerScore = 0
let roundWinner = ''

//buttons
rockBtn.addEventListener('click', () => handleClick('rock'))
paperBtn.addEventListener('click', () => handleClick('paper'))
scissorBtn.addEventListener('click', () => handleClick('scissor'))

//UI
const scoreInfo = document.getElementById('scoreInfo')
const scoreMessage = document.getElementById('scoreMessage')
const playerScorePara = document.getElementById('playerScore')
const computerScorePara = document.getElementById('computerScore')
const playerSign = document.getElementById('playerSign')
const computerSign = document.getElementById('computerSign')
const rockBtn = document.getElementById('rockBtn')
const paperBtn = document.getElementById('paperBtn')
const scissorBtn = document.getElementById('scissorBtn')

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

//jogada do Jogador
function handleClick(playerSelection) {
  const computerSelection = getRandomChoice()
  playRound(playerSelection, computerSelection)
  updateChoices(playerSelection, computerSelection)
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

//Atualizar jogadas
function updateChoices(playerSelection, computerSelection) {
  switch (playerSelection) {
    case 'rock':
      playerSign.textContent = '🪨'
      break
    case 'paper':
      playerSign.textContent = '📃'
      break
    case 'scissor':
      playerSign.textContent = '✂️'
      break
  }

  switch (computerSelection) {
    case 'rock':
      computerSelection.textContent = '🪨'
      break
    case 'paper':
      computerSelection.textContent = '📃'
      break
    case 'scissor':
      computerSelection.textContent = '✂️'
      break
  }
}
