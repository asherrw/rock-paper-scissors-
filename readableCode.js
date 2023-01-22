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
    // Prompts player for selection
    let playerSelection = prompt("Rock, Paper, or Scissors?")
    // Generates computer selection
    const computerSelection = computerPlay();
    // Converts player selection to string
    let playerSelectionString = String(playerSelection);
    // Converts player selection to all lowercase
    let playerSelectionLowercase = playerSelectionString.toLowerCase();
    // If player's selection is rock
    if (playerSelectionLowercase === "rock") {
        // If computer selection is rock then draw
        if (computerSelection === "rock") {
            console.log("Draw!");
            return "draw";
        }
        // If computer selection is paper then lose as paper beats rock
        else if (computerSelection === "paper") {
            console.log("You lose - paper beats rock!")
            return "lose";
        }
        // If computer selection is scissors then win as scissors beats paper
        else {
            console.log ("You win - rock beats scissors!")
            return "win";
        }
    }
    // Else if player selection is paper
    else if (playerSelectionLowercase === "paper") {
        // If computer selection is rock then win as paper beats rock
        if (computerSelection === "rock") {
            console.log("You win - paper beats rock!")
            return "win";
        }
        // If computer selection is paper then draw
        else if (computerSelection === "paper") {
            console.log("Draw!")
            return "draw";
        }
        // If computer selection is scissors then lose as scissors beats paper
        else {
            console.log("You lose - scissors beats paper!")
            return "lose";
        }
    }
    // Else (player selected scissors)
    else if (playerSelectionLowercase === "scissors") {
        // If computer selection is rock then lose as rock beats scissors
        if (computerSelection === "rock") {
            console.log("You lose - rock beats scissors!")
            return "lose";
        }
        // If computer selection is paper then win as scissors beats paper
        else if (computerSelection === "paper") {
            console.log("You win - scissors beats paper!")
            return "win";
        }
        // If computer selection is scissors then draw
        else {
            console.log("Draw!")
            return "draw";
        }
    }
    // Screening for valid words, styled with CSS
    else {
        console.log(`%cHey nerd, ${playerSelectionLowercase} isn't an option`,
        'color: green; background: yellow; font-size: 30px');
        return null;
    }
}

// Function to play multiple rounds of the game
function game() {
    // Initialise player score to zero
    let playerScore = 0;
    // Initialise computer score to zero
    let computerScore = 0;
    // Initialise games played to zero
    let gamesPlayed = 0;
    // Initiate while loop for 5 games
    while (gamesPlayed < 5) {
        // Increase gamesPlayed by 1 each loop
        gamesPlayed++;
        // For each game, check the returned result
        roundResult = playRound();
        // If result was win increase player score by 1
        if (roundResult === "win") {
            playerScore++;
            console.log(`Player:${playerScore} Computer:${computerScore}`)
        }
        // If result was lose increase computer score by 1
        else if (roundResult === "lose") {
            computerScore++;
            console.log(`Player:${playerScore} Computer:${computerScore}`)
        }
        // If result was draw increase both scores by 1
        else if (roundResult === "draw") {
            playerScore++;
            computerScore++;
            console.log(`Player:${playerScore} Computer:${computerScore}`)
        }
        // If null value returned
        else {
            gamesPlayed--;
        }
    }
    // After 5 games, determines who won, or if it was a draw
    if (playerScore > computerScore) {
        console.log(`You won ! There scores were ${playerScore}:${computerScore}!`)
    }
    else if (computerScore > playerScore) {
        console.log(`The computer won ! There scores were ${computerScore}:${playerScore}!`)
    }
    else {
        console.log(`The game was tied with scores of ${playerScore}:${computerScore}!`)
    }
}

// Starts the game
game();