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
                        computerScoreText.textContent = `Computer: ${computerScore + 1} points`;
                        return computerScore += 1;
                    case "scissors":
                        roundWinnerText.textContent = "You win this round! Rock beats Scissors";
                        playerScoreText.textContent = `You: ${humanScore + 1} points`;
                        return humanScore += 1;
                }
                break;

            case "paper":
                switch (computerChoice) {
                    case "rock":
                        roundWinnerText.textContent = "You win this round! Paper beats Rock";
                        playerScoreText.textContent = `You: ${humanScore + 1} points`;
                        return humanScore += 1;
                    case "scissors":
                        roundWinnerText.textContent = "You lose this round! Scissors beat Paper";
                        computerScoreText.textContent = `Computer: ${computerScore + 1} points`;
                        return computerScore += 1;
                }
                break;

            case "scissors":
                switch (computerChoice) {
                    case "paper":
                        roundWinnerText.textContent = "You win this round! Scissors beat Paper";
                        playerScoreText.textContent = `You: ${humanScore + 1} points`;
                        return humanScore += 1;
                    case "rock":
                        roundWinnerText.textContent = "You lose this round! Rock beats Scissors";
                        computerScoreText.textContent = `Computer: ${computerScore + 1} points`;
                        return computerScore += 1;
                };
                break;
        };
    };
};

function checkScoreForWinner(humanScore,computerScore) {
    if (humanScore === 5) {
        gameWinnerText.textContent = "You win the game!";
        restartButton.style.display = "block";
        choicesDiv.style.display = "none";
    };
    if (computerScore === 5) {
        gameWinnerText.textContent = "You lose the game!";
        restartButton.style.display = "block";
        choicesDiv.style.display = "none";
    };
};

function resetGame() {
    humanScore = 0;
    computerScore = 0;

    playerScoreText.textContent = `You: ${humanScore} points`;
    computerScoreText.textContent = `Computer: ${computerScore} points`;
    roundWinnerText.textContent = "";
    gameWinnerText.textContent = "";

    restartButton.style.display = "none";
    choicesDiv.style.display = "block";
};

let humanScore = 0;
let computerScore = 0;

const roundWinnerText = document.querySelector("#round-winner");
const gameWinnerText = document.querySelector("#game-winner");
const playerScoreText = document.querySelector("#player-score");
const computerScoreText = document.querySelector("#computer-score");
const choicesDiv = document.querySelector("#choices");
const restartButton = document.querySelector("#restart");


restartButton.addEventListener("click", () => {
    resetGame();
});

const options = document.querySelectorAll("#choices > button");
options.forEach((option) => {
    option.addEventListener("click", () => {
       playRound(option.id,getComputerChoice());
       checkScoreForWinner(humanScore,computerScore);
    });
});