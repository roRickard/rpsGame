let choices = ["rock", "paper", "scissors"];


let playerSelect = prompt("Please enter rock paper or scissors").toLowerCase();
let computerSelect = choices[Math.floor(Math.random() * 3)];
console.log(computerSelect);
console.log(playerSelect);

