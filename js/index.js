// Define an array of choices for the game
const choices = ['rock', 'paper', 'scissors'];

// Initialize variables to store player and computer selections
let playerSelect = null;
let computerSelect = null;

// Initialize variables to track the game progress and scores
let gameTracker = 0;
let playerWins = 0
,   computerWins = 0
,   ties = 0;

// Function to play one round of the game
function playRound() {
    // Check if it's a tie
    if (playerSelect === computerSelect) {
        alert('It was a tie!');
        ties ++; 
        } else if (
            // Check if player wins
            (playerSelect === 'rock' && computerSelect === 'scissors') 
        || 
            (playerSelect === "scissors" && computerSelect === 'paper')
        ||
            (playerSelect === 'paper' && computerSelect === 'rock')) {
                alert('You win!');
                playerWins++;
        } else {
            // Otherwise, computer wins
            alert('You lose!')
            computerWins++;
    }
}

// Play 5 rounds of the game
for (let gamesPlayed = 0; gamesPlayed < 5; gamesPlayed++) {
    playerSelect = prompt('Please enter rock paper or scissors').toLowerCase();
    // Generate random computer selection from choices array
    computerSelect = choices[Math.floor(Math.random() * 3)];
    // Increment game tracker and play one round of the game
    gameTracker++;
    playRound();
    // Log current scores to console
    console.log(playerWins, computerWins, ties);
}

// After 5 rounds, display final score using an alert
while (gameTracker === 5) {
    alert(`The final score is: ${playerWins} win(s) for the player, and ${computerWins} for the computer. There was/were ${ties} tie(s).`);
    // Break out of while loop
    break;
}
