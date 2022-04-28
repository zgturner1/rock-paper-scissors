let humanScore = 0;
let machineScore = 0;

const continueButton = document.querySelector(".continue");
const textContainer = document.querySelector('.text-container');
const gameButtons = document.querySelectorAll(".game-button");
const scoreContainer = document.querySelector(".score-container");
const humanScoreTracker = document.getElementById('human');
const machineScoreTracker = document.getElementById('machine');
const gameOverMessage = document.querySelector('.game-over-message');
const resultMessage = document.querySelector('.result');
const playAgainButton = document.querySelector('.play-again');

const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');


continueButton.addEventListener('click', function(e) {
    this.classList.add('invisible');
    textContainer.classList.add('invisible');
    gameButtons.forEach(button => button.classList.remove('invisible'));
    scoreContainer.classList.remove('invisible');
});

rockButton.addEventListener('click', function() {
    console.log(resultMessage);
    let computerChoice = computerPlay();
    let result = playRound('rock', computerChoice);
    resultMessage.classList.remove('invisible');
    resultMessage.textContent = result;

    if(result.includes('tie')) 
        return;
    else if(result.includes('lose')) {
        machineScore++;
        machineScoreTracker.textContent = `Machine: ${machineScore}`;
    }
    else {
        humanScore++;
        humanScoreTracker.textContent = `Human: ${humanScore}`;
    }

    if(humanScore >= 5 || machineScore >= 5)
        gameOver();
});

paperButton.addEventListener('click', function() {
    let computerChoice = computerPlay();
    let result = playRound('paper', computerChoice);
    resultMessage.classList.remove('invisible');
    resultMessage.textContent = result;

    if(result.includes('tie')) 
        return;
    else if(result.includes('lose')) {
        machineScore++;
        machineScoreTracker.textContent = `Machine: ${machineScore}`;
    }
    else {
        humanScore++;
        humanScoreTracker.textContent = `Human: ${humanScore}`;
    }

    if(humanScore >= 5 || machineScore >= 5)
        gameOver();
});

scissorsButton.addEventListener('click', function() {
    let computerChoice = computerPlay();
    let result = playRound('scissors', computerChoice);
    resultMessage.classList.remove('invisible');
    resultMessage.textContent = result;

    if(result.includes('tie')) 
        return;
    else if(result.includes('lose')) {
        machineScore++;
        machineScoreTracker.textContent = `Machine: ${machineScore}`;
    }
    else {
        humanScore++;
        humanScoreTracker.textContent = `Human: ${humanScore}`;
    }

    if(humanScore >= 5 || machineScore >= 5)
        gameOver();
});

gameOverMessage.addEventListener('animationend', function(e) {
    playAgainButton.classList.remove('invisible');
});

playAgainButton.addEventListener('click', playAgain)

/**Below are the functions used in this file**/
function computerPlay() {
    const choiceArray = ["ROCK", "PAPER", "SCISSORS"];
    let index = randInt(choiceArray.length-1);
    choice = choiceArray[index];

    return choice;
}

function randInt(max) {
    return Math.floor(Math.random() * max+1);
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerPlay();

    if(playerSelection == "ROCK" && computerSelection == "ROCK") {
        return "It's a tie! Play again.";
    }
    else if(playerSelection == "PAPER" && computerSelection == "PAPER") {
        return "It's a tie! Play again.";
    }
    else if(playerSelection == "SCISSORS" && computerSelection == "SCISSORS") {
        return "It's a tie! Play again.";
    }
    else if(playerSelection == "ROCK" && computerSelection == "PAPER") {
        return "You lose! Paper beats rock.";
    }
    else if(playerSelection == "ROCK" && computerSelection == "SCISSORS") {
        return "You win! Rock beats scissors.";
    }
    else if(playerSelection == "PAPER" && computerSelection == "ROCK") {
        return "You win! Paper beats rock.";
    }
    else if(playerSelection == "PAPER" && computerSelection == "SCISSORS") {
        return "You lose! Scissors beats paper.";
    }
    else if(playerSelection == "SCISSORS" && computerSelection == "ROCK") {
        return "You lose! Rock beats scissors.";
    }
    else {
        return "You win! Scissors beats paper.";
    }
}

function gameOver() {
    gameButtons.forEach(button => button.classList.add('invisible'));
    scoreContainer.classList.add('invisible');

    const body = document.querySelector('body');

    if(machineScore > humanScore)
        gameOverMessage.textContent = "Oh no...the machines are taking over..."
    else
        gameOverMessage.textContent = "You did it! You saved humanity!"

    body.classList.add('endBody');
    gameOverMessage.classList.remove('invisible');
}

function playAgain() {
    this.classList.add('invisible');
    gameOverMessage.classList.add('invisible');

    gameButtons.forEach(button => button.classList.remove('invisible'));
    scoreContainer.classList.remove('invisible');

    humanScore = 0;
    machineScore = 0;
    humanScoreTracker.textContent = "Human: 0";
    machineScoreTracker.textContent = "Machine: 0";
}
