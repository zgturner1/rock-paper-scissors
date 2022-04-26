



/**Below are the functions used in this file**/
function computerSelection() {
    const choiceArray = ["ROCK", "PAPER", "SCISSORS"];
    let index = randInt(choiceArray.length);
    string = choiceArray[index];

    return string;
}

function randInt(max) {
    return Math.floor(Math.random() * max);
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();

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
    else if(playerSelection == "SCISSORS" && computerSelection == "PAPER") {
        return "You win! Scissors beats paper.";
    }
}

function game() {
    let done = false;
    let computerWins = 0, playerWins = 0;

    while(!done) {
        let playerSelection = prompt("Choose your weapon: rock, paper, or scissors.");
        let computerSelection = computerSelection();

        let result = playRound(playerSelection, computerSelection);

        if(result.toUpperCase().includes("WIN")) {
            //The player beat the computer at rps
            playerWins++;
            console.log("You win this round! Player wins: " + playerWins + " Computer wins: " + computerWins);
        }
        else {
            computerWins++;
            console.log("You lose this round... Player wins: " + playerWins + " Computer wins: " + computerWins);
        }

        if(playerWins == 5 || computerWins == 5)
            done = true;
    }

    if(playerWins == 5)
        console.log("You win! Mankind reigns supreme!")
    else
        console.log("Oh no...the machines are taking over.")
}