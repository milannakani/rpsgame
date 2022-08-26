
const btn = document.querySelectorAll(".btns") // To click buttons to play game
btn.forEach((btns) => {
    btns.addEventListener("click", game);
});
    let x; // selecting values of button as player selection
function myFunction(el) {
    x = el.value;
}
function getComputerChoice () { //computer choice selection
    let choice = ["rock","paper","scissor"];
    let random = Math.floor(Math.random()*choice.length);
    return choice[random];
 }
    let scoreMine = 0;
    let scoreComputer = 0;
    let count = 1;  
    let moves = 10; 

function playRound() { //game play with win/loss/tie criteria
    let playerSelection = x;
    let computerSelection = getComputerChoice();
    const playerScoreBoard = document.querySelector('.p-count');
    const computerScoreBoard = document.querySelector('.c-count');
    const result = document.querySelector(".result");
    if (playerSelection === "rock" && computerSelection === "rock") {
        result.textContent = "Game Tied";
    }
    else if (playerSelection === "rock" && computerSelection === "paper") {
        result.textContent = "Ohh, you loose! Paper covers Rock";
        scoreComputer++;
        computerScoreBoard.textContent = scoreComputer;
    }
    else if (playerSelection === "rock" && computerSelection === "scissor") {
        result.textContent =  "Congrats, you Win, Rock cuts Scissor";
        scoreMine++;
        playerScoreBoard.textContent = scoreMine;
    }
    else if (playerSelection === "paper" && computerSelection === "scissor") {
        result.textContent = "Ooh you loose! Scissor cuts Paper";
        scoreComputer++;
        computerScoreBoard.textContent = scoreComputer;
    }
    else if (playerSelection === "paper" && computerSelection === "paper") {
        result.textContent = "Game Tied";
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        result.textContent = "Congrats, you Win, Paper covers Rock";
        scoreMine++;
        playerScoreBoard.textContent = scoreMine;
    }
    else if (playerSelection === "scissor" && computerSelection === "rock") {
        result.textContent = "Ooh you loose! Rock cuts Scissor";
        scoreComputer++;
        computerScoreBoard.textContent = scoreComputer;
    }
    else if (playerSelection === "scissor" && computerSelection === "scissor") {
        result.textContent = "Game Tied";
    }
    else if (playerSelection === "scissor" && computerSelection === "paper") {
        result.textContent = "Congrats, you Win, Scissor cuts Paper";
        scoreMine++;
        playerScoreBoard.textContent = scoreMine;
    }
}

function game() { //loop to play game for given number of times
    const movesLeft = document.querySelector(".move");
    const gameover = document.querySelector(".score"); 
    const reloadBtn = document.querySelector(".restartBtn"); 
    if (count <= 10) {
        playRound();
        movesLeft.textContent = "Moves Left: " + (moves-count);
        count++;
        if (count === 11) {
        finalResult();
        document.querySelector(".restartBtn").addEventListener("click", function() {
            window.location.reload();});
            reloadBtn.innerText = "Restart";
            reloadBtn.style.display = "flex";
            reloadBtn.style.fontSize = "1rem";
        gameover.textContent = "Game Over!!";
        }
    }
}

function finalResult() { //final result shown on screen
    const resultEffect = document.querySelector(".resulteffect");
    const result = document.querySelector(".result");
    if (scoreMine > scoreComputer) {
    resultEffect.textContent = "Congratulation! you Won.";
    resultEffect.style.fontSize = "2rem";
    resultEffect.style.color = 'green';
    }
    else if (scoreMine < scoreComputer) {
    resultEffect.textContent = "Better luck next time! you loose";
    resultEffect.style.fontSize = "2rem";
    resultEffect.style.color = 'red';
    }
    else {
    resultEffect.textContent = "Match Tied!";
    resultEffect.style.fontSize = "2rem";
    resultEffect.style.color = 'grey';
    }
}