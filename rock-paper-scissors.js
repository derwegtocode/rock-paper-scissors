const OPTIONS = ["rock", "paper", "scissors"];

let computerSelection

function computerPlay() {
    let computerChoice = Math.floor(Math.random() * OPTIONS.length);
    computerSelection = OPTIONS[computerChoice]
    computerChoiceDisplay.textContent =  OPTIONS[computerChoice];
}



const userChoiceDisplay = document.querySelector('#yourChoice');
const computerChoiceDisplay = document.querySelector('#computersChoice');
const yourScore = document.querySelector('#yourScore');
const machineScore = document.querySelector('#computersScore');
const message = document.querySelector('#message');

function updateChoices() {
    userChoiceDisplay.textContent = playerSelection
    computerChoiceDisplay.textContent = computerSelection
}



let playerSelection;


const handleClick = (e) => {
    playerSelection = e.target.id
    userChoiceDisplay.textContent = playerSelection
    computerPlay();
    playRound();
}

for (let i = 0; i < OPTIONS.length; i++) {
    document.getElementById(OPTIONS[i]).addEventListener('click', handleClick)
}


function updateScores() {
    yourScore.textContent = "YOU: " + playerScore 
    machineScore.textContent = "THE MACHINE: " + computerScore
}

let computerScore = 0;
let playerScore = 0;
let rounds = 0;

                
function playRound() {
    

    if (computerSelection == playerSelection) {
        console.log(computerSelection);
        updateScores();
        message.textContent = "It's a tie!"
    }
    else if (computerSelection === "rock" && playerSelection === "scissors" || 
        computerSelection === "paper" && playerSelection === "rock" || 
        computerSelection === "scissors" && playerSelection === "paper") {
        console.log(computerSelection);
        computerScore++;
        updateScores()
        message.textContent = "You lose! " + computerSelection + " beats " + playerSelection + "!!";
    }
    else {
        console.log(computerSelection);
        playerScore++;
        updateScores()
        message.textContent = "You win! " + playerSelection + " beats " + computerSelection + "!!";
    };

    rounds++;    
    document.querySelector('.separation').innerText = 'ROUND: ' + rounds + '/5';
    if(rounds === 5) {
        finalScore();
    }
};



function finalScore(){    
    startAgain()
    if (computerScore > playerScore || playerScore === computerScore) {
        newGameMessage.textContent = 'Oh no, you lost! Do you want a rematch?';
    }
    else if (playerScore > computerScore){
        newGameMessage.textContent = 'Congratulations!! You win!! Do you want to start a new game?';
    }
}

/*new game prompt*/
function startAgain(){
    document.getElementById('messageDiv').append(newGameDiv);
    yesButton.addEventListener('click', reloadSite)
    noButton.addEventListener('click', byeMessage)
}       


let newGameDiv = document.createElement('div')
newGameDiv.setAttribute('id', 'newGameDiv')
let newGameMessage = document.createElement('p')
newGameMessage.setAttribute('id', 'newGameMessage')
let yesButton = document.createElement('button')
yesButton.setAttribute('id', 'yesButton')
let noButton = document.createElement('button')
noButton.setAttribute('id', 'noButton')
yesButton.textContent = 'YES'
noButton.textContent = 'NO'

newGameDiv.append(newGameMessage, yesButton, noButton)


function reloadSite() {
    location.reload();
};

function byeMessage() {
    alert('Too bad!! Hope to see you again soon!')
}
