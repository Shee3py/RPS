let humanScore = 0;
let computerScore = 0;
let result;

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const display = document.querySelector("#display");

function getComputerChoice(){
    let randnum =  Math.floor(Math.random() * 3);
    if (randnum === 0) {
        return "rock";
    } else if (randnum === 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

/*function getHumanChoice(){
    let choice;
    while (!((choice == "paper") || (choice =="rock") || (choice =="scissors"))){
        choice = prompt("Choose Rock, Paper or Scissors").toLowerCase();
    }
    
    return choice;
}*/

function playRound(humanChoice, computerChoice){
    computerChoice = getComputerChoice();
    if (humanChoice == computerChoice){
        checkScore()
        return;
    } else if ((humanChoice == "rock" && computerChoice == "scissors") || (humanChoice == "paper" && computerChoice == "rock") || ((humanChoice == "scissors" && computerChoice == "paper"))) {
        humanScore = humanScore + 1;
        checkScore()
        return;
    } else {
        computerScore = computerScore + 1;
        checkScore()
        return;
    }
}

/*function playGame()
{
    for (let i = 0; i < 5; i++){
        playRound(getHumanChoice(), getComputerChoice())
    }
    
}*/

function checkScore(){
    display.textContent = "Computer Score = " + computerScore + "  Human Score = " + humanScore;
    if ((humanScore === 5) || (computerScore === 5)){
        resultScore();
    }
}

function resultScore(){
    if (humanScore > computerScore){
        result = "You Won !!!";
    }else if (computerScore > humanScore){
        result = "You Lost";
    }else {
        result = "Draw";
    }
    display.textContent += result;
    console.log(result);
}

//rock.onclick = playRound("rock");

rock.addEventListener("click", () => playRound("rock"));
paper.addEventListener("click", () => playRound("paper"));
scissors.addEventListener("click", () => playRound("scissors"));