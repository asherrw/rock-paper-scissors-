// Linking to the UI ROCK button 
const rock = document.getElementById('rock');
// Plays round, user picked rock
rock.addEventListener('click', () => {
    rock.classList.toggle("rock");    
    playRound();
    rock.classList.toggle("rock"); 
  });

  // Linking to the UI PAPER button 
const paper= document.getElementById('paper');
// Plays round, user picked paper
paper.addEventListener('click', () => {
    paper.classList.toggle("paper");    
    playRound();
    paper.classList.toggle("paper"); 
  });

  // Linking to the UI SCISSORS button 
const scissors = document.getElementById('scissors');
// Plays round, user picked scissors
scissors.addEventListener('click', () => {
    scissors.classList.toggle("scissors");  
    playRound();
    scissors.classList.toggle("scissors"); 
  });

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

// Function to play one round of the game
function playRound() {
    
    // Determines which option the user picked
    function playerChoice() {
        if (rock.classList.contains("rock")) {
            return "rock";
        } else if (paper.classList.contains("paper")) {
            return "paper"
        } else if (scissors.classList.contains("scissors")){
            return "scissors"
        } else {
            return "your answer"
        }
    }

    // Registers the player's selection
    let playerSelection = playerChoice();
    // Generates computer selection
    const computerSelection = computerPlay();
    // Where the player's choice is displayed
    let playerResults = document.getElementById('playerResults')
    // Where the computer's choice is displayed
    let computerResults = document.getElementById('computerResults');
    // Where the result of the round is displayed
    let endMessage = document.getElementById('results');
    // Initialise player score to zero
    let playerScore = 0;
    // Initialise computer score to zero
    let computerScore = 0;
    // Converts player selection to string
    let playerSelectionString = String(playerSelection);
    // Converts player selection to all lowercase
    let playerSelectionLowercase = playerSelectionString.toLowerCase();

    // If player's selection is rock
    if (playerSelectionLowercase === "rock") {
        // If computer selection is rock then draw
        if (computerSelection === "rock") {
            playerResults.textContent = "You chose PEDRO THE DOG"
            computerResults.textContent = "Opponent chose PEDRO THE DOG";
            endMessage.textContent = "Draw!";
            return "draw";
        }
        // If computer selection is paper then lose as paper beats rock
        else if (computerSelection === "paper") {
            playerResults.textContent = "You chose PEDRO THE DOG"
            computerResults.textContent = "Opponent chose ALEJANDRO THE MOUSE";
            endMessage.textContent = "You lose - ALEJANDRO THE MOUSE scares PEDRO THE DOG!";
            return "lose";
        }
        // If computer selection is scissors then win as scissors beats paper
        else {
            playerResults.textContent = "You chose PEDRO THE DOG"
            computerResults.textContent = "Opponent chose MIGUEL THE CAT";
            endMessage.textContent = "You win - PEDRO THE DOG scares MIGUEL THE CAT!";
            return "win";
        }
    }
    // Else if player selection is paper
    else if (playerSelectionLowercase === "paper") {
        // If computer selection is rock then win as paper beats rock
        if (computerSelection === "rock") {
            playerResults.textContent = "You chose ALEJANDRO THE MOUSE"
            computerResults.textContent = "Opponent chose PEDRO THE DOG";
            endMessage.textContent = "You win - ALEJANDRO THE MOUSE scares PEDRO THE DOG!";
            return "win";
        }
        // If computer selection is paper then draw
        else if (computerSelection === "paper") {
            playerResults.textContent = "You chose ALEJANDRO THE MOUSE"
            computerResults.textContent = "Opponent chose ALEJANDRO THE MOUSE";
            endMessage.textContent = "Draw!";
            return "draw";
        }
        // If computer selection is scissors then lose as scissors beats paper
        else {
            playerResults.textContent = "You chose ALEJANDRO THE MOUSE"
            computerResults.textContent = "Opponent chose MIGUEL THE CAT";
            endMessage.textContent = "You lose - MIGUEL THE CAT scares ALEJANDRO THE MOUSE!";
            return "lose";
        }
    }
    // Else (player selected scissors)
    else if (playerSelectionLowercase === "scissors") {
        // If computer selection is rock then lose as rock beats scissors
        if (computerSelection === "rock") {
            playerResults.textContent = "You chose MIGUEL THE CAT"
            computerResults.textContent = "Opponent chose PEDRO THE DOG";
            endMessage.textContent = "You lose - PEDRO THE DOG scares MIGUEL THE CAT!";
            return "lose";
        }
        // If computer selection is paper then win as scissors beats paper
        else if (computerSelection === "paper") {
            playerResults.textContent = "You chose MIGUEL THE CAT"
            computerResults.textContent = "Opponent chose ALEJANDRO THE MOUSE";
            endMessage.textContent = "You win - MIGUEL THE CAT scares ALEJANDRO THE MOUSE!";
            return "win";
        }
        // If computer selection is scissors then draw
        else {
            playerResults.textContent = "You chose MIGUEL THE CAT"
            computerResults.textContent = "Opponent chose MIGUEL THE CAT";
            endMessage.textContent = "Draw!"
            return "draw";
        }
    }
    // Screening for valid words, styled with CSS
    else {
        console.log(`%cYOU SHALL NOT PASS! ${playerSelectionLowercase} isn't an option dipshit`,
        'color: red; background: yellow; font-size: 20px');
        return null;
    }
}