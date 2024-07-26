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
    const humanChoice = prompt("Choose! Rock, Paper, Scissors?").toLowerCase()
    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;
