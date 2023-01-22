
// Function to randomly generate the computer's answer
function computerPlay() {
    randomGameValue = Math.floor(Math.random() * 3);
    if (randomGameValue == "0") {
        return "rock";
    }
    else if (randomGameValue == "1") {
        return "paper";
    }
    else {
        return "scissors";
    }
}

// Function for a single round of the main game
function playRound() {
    // Asking for player's selection
    let playerSelection = prompt("Rock, Paper, or Scissors?")
          // Generate computer selection
          const computerSelection = computerPlay();
}

// User's answer logic
function playerPlay() {
    let playerSelection = prompt('∘• rock | paper | scissors •∘').toLowerCase();
    if (playerSelection == 'rock' || playerSelection == 'paper' || playerSelection == 'scissors') {
      console.log(`Your choice is ${playerSelection}.`)
      return playerSelection;
    }
    console.log(`YOU CAN'T TYPE ${playerSelection}.VALID WORDS ARE  ROCK | PAPER | SCISSORS`);
    console.log('%cTHIS ROUND OF THE GAME WAS DESTROYED (╯°益°)╯彡┻━┻', 'color: #ef8513');
  }


// single round game logic
function outCome(playerPlay(), computerPlay()) {
    // if user picks rock
    if ((userChoice == "rock")&&(computerChoice == "paper")){
        console.log("You lose! Paper beats rock");
    } else if ((userChoice == "rock")&&(computerChoice == "scissors")){
        console.log("You win! Rock beats scissors");
    } else if ((userChoice == "rock")&&(computerChoice == "rock")){
        console.log("You tied! Rock is equal to rock"); 
    } // if user picks paper
    else if ((userChoice == "paper")&&(computerChoice == "scissors")){
        console.log("You lose! Scissors beats paper");
    } else if ((userChoice == "paper")&&(computerChoice == "rock")){
        console.log("You win! Paper beats rock");
    } else if ((userChoice == "paper")&&(computerChoice == "paper")){
        console.log("You tied! Paper is equal to paper");
    } // if the user picks scissors
    else if ((userChoice == "scissors")&&(computerChoice == "rock")){
        console.log("You lose! Rock beats scissors");
    } else if ((userChoice == "scissors")&&(computerChoice == "paper")){
        console.log("You win! Scissors beats paper");
    } else if ((userChoice == "scissors")&&(computerChoice == "scissors")){
        console.log("You tied! Scissors are equal to scissors");} 
    }

/////////////////////////////////////////////////////////////////////////////////////

// multiple round game logic
    for (let i = 1; i < 6; i++) {
         outCome(playerPlay(), computerPlay());
         console.log("You are on round : " + i);
        }
