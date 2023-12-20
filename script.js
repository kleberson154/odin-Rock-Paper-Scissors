let playerScore = 0
let computerScore = 0
let roundWinner = ''

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    roundWinner = 'tie'
  }
  if (
    (playerSelection === 'PEDRA' && computerSelection === 'TESOURA') ||
    (playerSelection === 'TESOURA' && computerSelection === 'PAPEL') ||
    (playerSelection === 'PAPEL' && computerSelection === 'PEDRA')
  ) {
    playerScore++
    roundWinner = 'player'
  }
  if (
    (computerSelection === 'PEDRA' && playerSelection === 'TESOURA') ||
    (computerSelection === 'TESOURA' && playerSelection === 'PAPEL') ||
    (computerSelection === 'PAPEL' && playerSelection === 'PEDRA')
  ) {
    computerScore++
    roundWinner = 'computer'
  }

  updateScoreMessage(roundWinner, playerSelection, computerSelection)
}

//jogada do computador
function getRandomChoice() {
  let randomNumber = Math.floor(Math.random() * 3)
  switch (randomNumber) {
    case 0:
      return 'PEDRA'
    case 1:
      return 'PAPEL'
    case 2:
      return 'TESOURA'
  }
}

//Quando acaba o jogo
function isGameOver() {
  return playerScore === 5 || computerScore === 5
}

//UI
const scoreInfo = document.getElementById('scoreInfo')
const scoreMessage = document.getElementById('scoreMessage')
const playerScorePara = document.getElementById('playerScore')
const computerScorePara = document.getElementById('computerScore')
const playerSign = document.getElementById('playerSign')
const computerSign = document.getElementById('computerSign')
const rockBtn = document.getElementById('rockBtn')
const paperBtn = document.getElementById('paperBtn')
const scissorsBtn = document.getElementById('scissorsBtn')
const endgameModal = document.getElementById('endgameModal')
const endgameMsg = document.getElementById('endgameMsg')
const overlay = document.getElementById('overlay')
const restartBtn = document.getElementById('restartBtn')

//buttons
rockBtn.addEventListener('click', () => handleClick('PEDRA'))
paperBtn.addEventListener('click', () => handleClick('PAPEL'))
scissorsBtn.addEventListener('click', () => handleClick('TESOURA'))
restartBtn.addEventListener('click', restartGame)
overlay.addEventListener('click', closeEndgameModal)

//jogada do Jogador
function handleClick(playerSelection) {
  if (isGameOver()) {
    openEndgameModal()
    return
  }

  const computerSelection = getRandomChoice()
  playRound(playerSelection, computerSelection)
  updateChoices(playerSelection, computerSelection)
  updateScore()

  if (isGameOver()) {
    openEndgameModal()
    setFinalMessage()
  }
}

//Atualizar jogadas
function updateChoices(playerSelection, computerSelection) {
  switch (playerSelection) {
    case 'PEDRA':
      playerSign.textContent = '🪨'
      break
    case 'PAPEL':
      playerSign.textContent = '📃'
      break
    case 'TESOURA':
      playerSign.textContent = '✂️'
      break
  }

  switch (computerSelection) {
    case 'PEDRA':
      computerSign.textContent = '🪨'
      break
    case 'PAPEL':
      computerSign.textContent = '📃'
      break
    case 'TESOURA':
      computerSign.textContent = '✂️'
      break
  }
}

//Atualizar a pontuacao
function updateScore() {
  if (roundWinner === 'tie') {
    scoreInfo.textContent = 'Deu empate!'
  } else if (roundWinner === 'player') {
    scoreInfo.textContent = 'Voce Venceu!'
  } else if (roundWinner === 'computer') {
    scoreInfo.textContent = 'Voce Perdeu!'
  }

  playerScorePara.textContent = `Player: ${playerScore}`
  computerScorePara.textContent = `Computer: ${computerScore}`
}

//Descricao da rodada
function updateScoreMessage(winner, playerSelection, computerSelection) {
  if (winner === 'player') {
    scoreMessage.textContent = `${capitalizeFirstLetter(
      playerSelection
    )} vence ${computerSelection.toLowerCase()}`
    return
  }
  if (winner === 'computer') {
    scoreMessage.textContent = `${capitalizeFirstLetter(
      playerSelection
    )} é derrotado por ${computerSelection.toLowerCase()}`
    return
  }

  scoreMessage.textContent = `${capitalizeFirstLetter(
    playerSelection
  )} empata com ${computerSelection.toLowerCase()}`
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
}

function openEndgameModal() {
  endgameModal.classList.add('active')
  overlay.classList.add('active')
}

function closeEndgameModal() {
  endgameModal.classList.remove('active')
  overlay.classList.remove('active')
}

function setFinalMessage() {
  return playerScore > computerScore
    ? (endgameMsg.textContent = 'Voce Ganhou!')
    : (endgameMsg.textContent = 'Voce Perdeu...')
}

function restartGame() {
  playerScore = 0
  computerScore = 0
  scoreInfo.textContent = 'Escolha sua arma'
  scoreMessage.textContent = 'O primeiro a marcar 5 pontos ganha o jogo'
  playerScorePara.textContent = 'Jogador: 0'
  computerScorePara.textContent = 'Computador: 0'
  playerSign.textContent = '❓'
  computerSign.textContent = '❓'
  endgameModal.classList.remove('active')
  overlay.classList.remove('active')
}
