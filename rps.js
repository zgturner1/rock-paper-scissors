game();

const button = document.querySelector(".continue");
const text = document.querySelectorAll(".beginning-text");
button.addEventListener('click', function(e) {
    this.classList.add('invisible');
    text.forEach(text => text.classList.add('invisible'));
    console.log(this.classList);
});

/**Below are the functions used in this file**/
function computerPlay() {
    const choiceArray = ["ROCK", "PAPER", "SCISSORS"];
    let index = randInt(choiceArray.length);
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

function game() {
    let done = false;
    let computerWins = 0, playerWins = 0;

    while(!done) {
        let playerSelection = "rock";

        //Checks to make sure that the player will choose either rock, paper, or scissors
        while(!"ROCK PAPER SCISSORS".includes(playerSelection.toUpperCase()))
            playerSelection = prompt("Please choose rock, paper, or scissors.")

        let computerSelection = computerPlay();

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
