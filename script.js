const buttons = document.querySelectorAll('button');
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');

rockButton.addEventListener('click', () => handleClick('rock'));
paperButton.addEventListener('click', () => handleClick('paper'));
scissorsButton.addEventListener('click', () => handleClick('scissors'));


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

function handleClick(playerChoice) {
    playRound(playerChoice);
    console.log(playerScore, computerScore)
}

let playerScore = 0;
let computerScore = 0;
let playerWins = false;
let tie = false;
let winnerText = document.getElementById('winner-text');
let scoreText = document.getElementById('score-text');

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

    showScore();
    endGame();
    playAgain();

    if (tie == true) {
        winnerText.textContent = `Tie! You both picked ${playerChoice}!`;
        console.log(`Tie! You both picked ${playerChoice}!`);
        return tie;
    } else if (playerWins == true) {
        winnerText.textContent = `You win this round! ${playerChoice} beats ${computerChoice}!`
        console.log(`You win! ${playerChoice} beats ${computerChoice}!`);
        return playerWins;
    } else {
        winnerText.textContent = `You lose this round! ${computerChoice} beats ${playerChoice}!`
        console.log(`You Lose! ${computerChoice} beats ${playerChoice}!`);
        return playerWins;
    }
}

function showScore() {
    scoreText.textContent = `The current score is -- You: ${playerScore}, Alien: ${computerScore}`;
}

let endGameText = document.getElementById('endGameText');
let endGameModal = document.getElementById('endGameModal');
let game = document.querySelector('.game-container');

function endGame() {
    if (playerScore === 5) {
        endGameText.textContent = 'CONGRATULATIONS! THE UNIVERSE IS SAFE!'
        endGameModal.style.display = 'block';
        game.style.display = 'none';
    }

    else if (computerScore === 5) {
        endGameText.textContent = 'YOU HAVE FAILED THE GALAXY'
        endGameModal.style.display = 'block';
        game.style.display = 'none';
    }
    else return;
}

let playAgainButton = document.getElementById('playAgain');

function playAgain() {
    playAgainButton.addEventListener('click', () => {
        playerScore = 0;
        computerScore = 0;
        winnerText.textContent = "IT'S GAME TIME!";
        scoreText.textContent = "YOU WANT MORE?"
        endGameModal.style.display = 'none';
        game.style.display = 'block';
    })
}