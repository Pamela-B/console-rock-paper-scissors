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
};

function playRound(humanChoice,computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("You both chose the same!")
    } else {
        switch (humanChoice) {
            case "rock":
                switch (computerChoice) {
                    case "paper":
                        console.log("You lose! Paper beats Rock");
                        return "computer wins";
                    case "scissors":
                        console.log("You win! Rock beats Scissors");
                        return "human wins";
                }
                break;

            case "paper":
                switch (computerChoice) {
                    case "rock":
                        console.log("You win! Paper beats Rock");
                        return "human wins";
                    case "scissors":
                        console.log("You lose! Scissors beat Paper");
                        return "computer wins";
                }
                break;

            case "scissors":
                switch (computerChoice) {
                    case "paper":
                        console.log("You win! Scissors beat Paper");
                        return "human wins";
                    case "rock":
                        console.log("You lose! Rock beats Scissors");
                        return "computer wins";
                }
                break;

            default:
                console.log("That's not a valid choice!");
                computerSelection = getComputerChoice();
                humanSelection = getHumanChoice();
                playRound(humanSelection,computerSelection);
        }
    }
};

function playGame() {
    
    let humanScore = 0;
    let computerScore = 0;


    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        let roundResult = playRound(humanSelection,computerSelection);

        if (roundResult === "computer wins") {computerScore++}
        if (roundResult === "human wins") {humanScore++}
    };

    console.log(`Final scores!
        Human: ${humanScore}
        Computer: ${computerScore}`);
};

playGame();