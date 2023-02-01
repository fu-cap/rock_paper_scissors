function getComputerChoice() {
    let myArray = ['Rock','Paper','Scissors'];
    let index = Math.floor(Math.random() * myArray.length);

    return myArray[index];
}


function playRound() {
    let playerSelection = prompt('Choose you weapon!');
    let computerSelection = getComputerChoice();

    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();

    if(player == 'scissors' && computer == 'paper') {
        return 'You Win! Scissors beats Paper';
    } else if(player == 'paper' && computer == 'rock') {
        return 'You Win! Paper beats Rock';
    } else if(player == 'rock' && computer == 'scissors') {
        return 'You Win! Rock beats Scissors';
    } else if(computer == 'scissors' && player == 'paper') {
        return 'You Lose! Scissors beats Paper';
    } else if(computer == 'paper' && player == 'rock') {
        return 'You Lose! Paper beats Rock';
    } else if(computer == 'rock' && player == 'scissors') {
        return 'You Lose! Rock beats Scissors';
    } else {
        return 'Error wrong input by you! Choose Rock, Paper or Scissors.';
    }
  }


function game() {
    for(let i=0; i<=5; i++) {
        console.log(playRound());
    }
}

window.onLoad = game();