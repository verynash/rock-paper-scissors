function getComputerChoice() {
    let rpsNumber = Math.floor(Math.random()*3) + 1;
    let computerChoice;
    if (rpsNumber === 1) {
        computerChoice = 'rock';
    } else if (rpsNumber === 2) {
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissors';
    }
    return computerChoice;
}

const buttons = document.querySelectorAll('button');
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');

rockButton.addEventListener('click', () => handleClick('rock'));
paperButton.addEventListener('click', () => handleClick('paper'));
scissorsButton.addEventListener('click', () => handleClick('scissors'));


function handleClick(playerChoice) {
    playRound(playerChoice);
    console.log(playerScore, computerScore)
}

/*function getPlayerChoice() {
    let playerChoice;
    do {
        playerChoice = prompt("Rock, paper, or scissors?").toLowerCase();
    }
    while (playerChoice !== "rock" && playerChoice !== "paper" && playerChoice !== "scissors");
    return playerChoice;
}*/

let playerScore = 0;
let computerScore = 0;
let playerWins = false;
let tie = false;

function playRound(playerChoice) {
    let computerChoice = getComputerChoice();
    tie = false;
    playerWins = false;
    if (playerChoice == computerChoice) {
        tie = true;
    } else if (playerChoice == 'rock' && computerChoice == 'scissors') {
        playerScore++;
        playerWins = true;
    } else if (playerChoice == 'scissors' && computerChoice == 'paper') {
        playerScore++;
        playerWins = true;
    } else if (playerChoice == 'paper' && computerChoice == 'rock') {
        playerScore++;
        playerWins = true;
    } else {
        computerScore++;
        playerWins = false;
    }

    if (tie == true) {
        console.log(`Tie! You both picked ${playerChoice}!`);
        return tie;
    } else if (playerWins == true) {
        console.log(`You win! ${playerChoice} beats ${computerChoice}!`);
        return playerWins;
    } else {
        console.log(`You Lose! ${computerChoice} beats ${playerChoice}!`);
        return playerWins;
    }
}

/* function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound();
        if (playerWins == true) {
            playerScore++;
        } else if (tie == false && playerWins == false) {
            computerScore++;
        } else continue;
    }

    if (playerScore > computerScore) {
        console.log('Congratulations, player wins!');
    } else if (computerScore > playerScore) {
        console.log('Better luck next time! Computer wins!');
    } else {
        console.log('WOW! You tied!')
    }
    playAgain();
} */

function playAgain() {
    reset = prompt("Play again? y/n").toLowerCase();
    if (reset == 'y') {
        playerScore = 0;
        computerScore = 0;
        playGame();
    } else {
        console.log('Thanks for playing!')
    }
}