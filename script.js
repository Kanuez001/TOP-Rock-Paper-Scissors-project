const options = ["Rock", "Paper", "Scissors"]
const computerSelection = computerPlay();
let userInput = prompt("Enter your choice!")
const playerSelection =  userInput.toUpperCase();
let R1 = "You win! Rock smashes Scissors.";
let R2 = "You lose! Paper swallows Rock.";
let R3 = "It's a tie! Try again";
let P1 = "You win! Paper swallows Rock.";
let P2 = "It's a tie! Try again.";
let P3 = "You lose! Scissors shreds Paper.";
let S1 = "You lose! Rock smashes Scissors.";
let S2 = "You win! Scissors shreds Paper.";
let S3 = "It's a tie! Try again.";
let other = "Input one of the available choices for the game!";

function computerPlay() {
    let randOption = options[Math.floor(Math.random() * options.length)];
    return randOption;
}
console.log(computerSelection)

function playRound() {
    if (playerSelection === "ROCK" && computerSelection === "Scissors") {
        return R1;
    }
    else if (playerSelection === "ROCK" && computerSelection === "Paper") {
        return R2;
    }
    else if (playerSelection === "ROCK" && computerSelection === "Rock") {
        return R3;
    }
    else if (playerSelection === "PAPER" && computerSelection === "Rock") {
        return P1;
    }
    else if (playerSelection === "PAPER" && computerSelection === "Paper") {
        return P2;
    }
    else if (playerSelection === "PAPER" && computerSelection === "Scissors") {
        return P3;
    }
    else if (playerSelection === "SCISSORS" && computerSelection === "Rock") {
        return S1;
    }
    else if (playerSelection === "SCISSORS" && computerSelection === "Paper") {
        return S2;
    }
    else if (playerSelection === "SCISSORS" && computerSelection === "Scissors") {
        return S3;
    }
    else {
        return other;
    }
}

console.log(playRound())
