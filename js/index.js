let choices = ["rock", "paper", "scissors"];


let playerSelect = prompt("Please enter rock paper or scissors").toLowerCase();
let computerSelect = choices[Math.floor(Math.random() * 3)];
console.log(computerSelect);
console.log(playerSelect);

function playRound() {
    if (playerSelect === computerSelect) {
        alert("It was a tie!"); 
        } else if (
            (playerSelect === "rock" && computerSelect === "scissors") 
        || 
            (playerSelect === "scissors" && computerSelect === "paper")
        ||
            (playerSelect === "paper" && computerSelect === "rock")) {
                alert("You win!");
        } else {
           console.log(computerSelect);
    }
}


playRound();
