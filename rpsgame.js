
function getComputerChoice () {
     let choice = ["rock","paper","scissor"];
     let random = Math.floor(Math.random()*choice.length);
     return choice[random];
 }
 
 let scoreMine = 0;
 let scoreComputer = 0;
   
function playRound() {
 let select = document.querySelector("rock")
 let playerSelection = select.toLowerCase();
 let computerSelection = getComputerChoice();
 if (playerSelection === "rock" && computerSelection === "rock") {
     console.log("game tied");
 }
 else if (playerSelection === "rock" && computerSelection === "paper") {
     console.log("ohh, you loose! Paper covers Rock");
     scoreComputer++;
 }
 else if (playerSelection === "rock" && computerSelection === "scissor") {
     console.log("Congrats, you Win, Rock cuts Scissor");
     scoreMine++;
 }
 else if (playerSelection === "paper" && computerSelection === "scissor") {
     console.log("ooh you loose! Scissor cuts Paper");
     scoreComputer++;
 }
 else if (playerSelection === "paper" && computerSelection === "paper") {
     console.log("game tied");
 }
 else if (playerSelection === "paper" && computerSelection === "rock") {
     console.log("Congrats, you Win, Paper covers Rock");
     scoreMine++;
 }
 else if (playerSelection === "scissor" && computerSelection === "rock") {
     console.log("ooh you loose! Rock cuts Scissor");
     scoreComputer++;
 }
 else if (playerSelection === "scissor" && computerSelection === "scissor") {
     console.log("game tied");
 }
 else if (playerSelection === "scissor" && computerSelection === "paper") {
     console.log("Congrats, you Win, Scissor cuts Paper");
     scoreMine++;
 }
 else {
     console.log("you have entered wrong tool!");   
 }
}
function game() {
 for (let i = 0; i < 5; i++) {
 playRound();
 }
}
game();
console.log("My Score",scoreMine,"Computer Score",scoreComputer);

function finalResult() {
if (scoreMine > scoreComputer) {
 console.log("congratulation! you Won.");
}
else if (scoreMine < scoreComputer) {
 console.log("Better luck next time! you loose");
}
else {
 console.log("match tied!");
}
}
finalResult();