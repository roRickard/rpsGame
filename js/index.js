let choices = ['rock', 'paper', 'scissors'];
let playerSelect = null;
let computerSelect = choices[Math.floor(Math.random() * 3)];
let gameTracker = 0;
let playerWins = 0
,   computerWins = 0
,   ties = 0;

console.log(computerSelect);
console.log(playerSelect);

function playRound() {
    if (playerSelect === computerSelect) {
        alert('It was a tie!');
        ties ++; 
        } else if (
            (playerSelect === 'rock' && computerSelect === 'scissors') 
        || 
            (playerSelect === "scissors" && computerSelect === 'paper')
        ||
            (playerSelect === 'paper' && computerSelect === 'rock')) {
                alert('You win!');
                playerWins++;
        } else {
            alert('You lose!')
            computerWins++;
    }
}

for (let gamesPlayed = 0; gamesPlayed < 5; gamesPlayed++) {
    
    console.log(playerWins)
    console.log(computerWins)
    playerSelect = prompt('Please enter rock paper or scissors').toLowerCase();
    computerSelect = choices[Math.floor(Math.random() * 3)];
    gameTracker++;
    playRound();
}

while (gameTracker === 5) {
    alert(`The final score is: ${playerWins} win(s) for the player, and ${computerWins} for the computer. There was/were ${ties} tie(s).`);
    break;
}
