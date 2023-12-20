let playerScore = 0
let compScore = 0

function computerPlay(compChoice) {
  let choiceNum = Math.floor(Math.random() * 3)
  if (choiceNum == 0) {
    compChoice.Value = 'pedra'
  } else if (choiceNum == 1) {
    compChoice.Value = 'papel'
  } else if (choiceNum == 2) {
    compChoice.Value = 'tesoura'
  }
  console.log(choiceNum)
  return choiceNum
}

function playRound(playerChoiceInt, compChoiceInt, compChoice, playerChoice) {
  /* 0 == pedra
     1 == papel
     2 == tesoura
   */

  let win_array = [
    [0, 2, 1],
    [1, 0, 2],
    [2, 1, 0]
  ]
  let result = win_array[playerChoiceInt][compChoiceInt]
  if (result == 0) {
    console.log(
      `É um empate! Você escolheu ${playerChoice} e o computador escolheu ${compChoice.Value}`
    )
  } else if (result == 1) {
    console.log(
      `Você ganhou! Você escolheu ${playerChoice} e o computador escolheu ${compChoice.Value}`
    )
    playerScore++
  } else if (result == 2) {
    console.log(
      `Você perdeu! Você escolheu ${playerChoice} e o computador escolheu ${compChoice.Value}`
    )
    compScore++
  }
}

function game() {
  let compChoice = { Value: '' }
  let compChoiceInt
  let playerChoiceInt
  let playerChoice

  for (let i = 0; i < 5; i++) {
    playerChoice = prompt('pedra, papel, ou tesoura?').toLowerCase()
    if (playerChoice == 'pedra') {
      playerChoiceInt = 0
    } else if (playerChoice == 'papel') {
      playerChoiceInt = 1
    } else if (playerChoice == 'tesoura') {
      playerChoiceInt = 2
    }
    compChoiceInt = computerPlay(compChoice)
    playRound(playerChoiceInt, compChoiceInt, compChoice, playerChoice)
  }
  console.log(`Player ${playerScore} x Computer ${compScore}`)
}

game()
