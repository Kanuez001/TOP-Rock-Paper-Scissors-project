const options = ["Rock", "Paper", "Scissors"]
const computerSelection = computerPlay();

function computerPlay() {
    let randOption = options[Math.floor(Math.random() * options.length)];
    return randOption;
}
console.log(computerSelection)
