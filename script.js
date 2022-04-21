function game() {
    
        const options = ["Rock", "Paper", "Scissors"]
        const R1 = "You win! Rock smashes Scissors.";
        const R2 = "You lose! Paper swallows Rock.";
        const R3 = "It's a tie! Try again";
        const P1 = "You win! Paper swallows Rock.";
        const P2 = "It's a tie! Try again.";
        const P3 = "You lose! Scissors shreds Paper.";
        const S1 = "You lose! Rock smashes Scissors.";
        const S2 = "You win! Scissors shreds Paper.";
        const S3 = "It's a tie! Try again.";
        const other = "Input one of the available choices for the game!";
        let winner = ""; 
        let playerScore = 0;
        let computerScore = 0;
        const playerWin = "Congrats! You win.";
        const computerWin = "You lose! Better luck next time.";
        const draw = "It's a tie! Play again.";

        for (let i = 0; i < 5; i++) {

        const computerSelection = computerPlay();
        let userInput = prompt("Enter your choice!")
        const playerSelection =  userInput.toUpperCase();

        function computerPlay() {
            const randOption = options[Math.floor(Math.random() * options.length)];
            return randOption;
        }
        console.log(computerSelection)

        function playRound() {
            if (playerSelection === "ROCK" && computerSelection === "Scissors") {
                winner = "Player";
                playerScore++;
                return R1;
            }
            else if (playerSelection === "ROCK" && computerSelection === "Paper") {
                winner = "Computer";
                computerScore++;
                return R2;
            }
            else if (playerSelection === "ROCK" && computerSelection === "Rock") {
                winner = "No one";
                return R3;
            }
            else if (playerSelection === "PAPER" && computerSelection === "Rock") {
                winner = "Player";
                playerScore++;
                return P1;
            }
            else if (playerSelection === "PAPER" && computerSelection === "Paper") {
                winner = "No one";
                return P2;
            }
            else if (playerSelection === "PAPER" && computerSelection === "Scissors") {
                winner = "Computer";
                computerScore++;
                return P3;
            }
            else if (playerSelection === "SCISSORS" && computerSelection === "Rock") {
                winner = "Computer";
                computerScore++;
                return S1;
            }
            else if (playerSelection === "SCISSORS" && computerSelection === "Paper") {
                winner = "Player";
                playerScore++;
                return S2;
            }
            else if (playerSelection === "SCISSORS" && computerSelection === "Scissors") {
                winner = "No one"
                return S3;
            }            
            else {
                winner = "No one"
                return other;
            }
           
        }

        console.log(playRound())
        console.log(`${winner} wins this round`)
        console.log(`Player ${playerScore} vs ${computerScore} Computer`)
    }
    if (playerScore > computerScore) {
        return playerWin;
    }
    else if (playerScore < computerScore) {
        return computerWin;
    }
    else {
        return draw;
    }
}

console.log(game())