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


function playRound(humanChoice,computerChoice) {
    if (humanChoice === computerChoice) {
        roundWinnerText.textContent = "You both chose the same!"
    } else {
        switch (humanChoice) {
            case "rock":
                switch (computerChoice) {
                    case "paper":
                        roundWinnerText.textContent = "You lose this round! Paper beats Rock";
                        return computerScore += 1;
                    case "scissors":
                        roundWinnerText.textContent = "You win this round! Rock beats Scissors";
                        return humanScore += 1;
                }
                break;

            case "paper":
                switch (computerChoice) {
                    case "rock":
                        roundWinnerText.textContent = "You win this round! Paper beats Rock";
                        return humanScore += 1;
                    case "scissors":
                        roundWinnerText.textContent = "You lose this round! Scissors beat Paper";
                        return computerScore += 1;
                }
                break;

            case "scissors":
                switch (computerChoice) {
                    case "paper":
                        roundWinnerText.textContent = "You win this round! Scissors beat Paper";
                        return humanScore += 1;
                    case "rock":
                        roundWinnerText.textContent = "You lose this round! Rock beats Scissors";
                        return computerScore += 1;
                };
                break;
        };
    };
};

function checkScoreForWinner(humanScore,computerScore) {
    if (humanScore === 5) {};
    if (computerScore === 5) {};
}


let humanScore = 0;
let computerScore = 0;

const roundWinnerText = document.querySelector("#round-winner");
const gameWinnerText = document.querySelector("#game-winner");

const options = document.querySelectorAll("#choices > button");
options.forEach((option) => {
    option.addEventListener("click", () => {
       playRound(option.id,getComputerChoice())
    });
});