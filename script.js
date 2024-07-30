function getComputerChoice(){
    const threeOptions = Math.floor(Math.random() * 3 + 1);
    if (threeOptions === 3) {
        return "rock";
    } else if (threeOptions === 2) {
        return "paper";
    } else if (threeOptions === 1) {
        return "scissors";
    };
};

function getHumanChoice() {
    return prompt("Choose! Rock, Paper, Scissors?").toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice,computerChoice) {
    if (humanChoice === computerChoice) {
        return console.log("You both chose the same!")
    } else {
        switch (humanChoice) {
            case "rock":
                switch (computerChoice) {
                    case "paper":
                        console.log("You lose! Paper beats Rock");
                        computerScore++;
                        break;
                    case "scissors":
                        console.log("You win! Rock beats Scissors");
                        humanScore++;
                        break;
                }
                break;

            case "paper":
                switch (computerChoice) {
                    case "rock":
                        console.log("You win! Paper beats Rock");
                        humanScore++;
                        break;
                    case "scissors":
                        console.log("You lose! Scissors beat Paper");
                        computerScore++;
                        break;
                }
                break;

            case "scissors":
                switch (computerChoice) {
                    case "paper":
                        console.log("You win! Scissors beat Paper");
                        humanScore++;
                        break;
                    case "rock":
                        console.log("You lose! Rock beats Scissors");
                        computerScore++;
                        break;
                }
                break;

            default:
                console.log("That's not a valid choice!");
        }
    }
}


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection,computerSelection);