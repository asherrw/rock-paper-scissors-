// // Computer's answer logic
function getRandomItem(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    return item;
}
const array = ['rock', 'paper', 'scissors',];
let computerChoice = getRandomItem(array);
console.log("The computer chose : " + computerChoice);


// // User's answer logic
let userChoice = prompt("What is your choice?")
console.log("You chose : " + userChoice);
if (userChoice == null || userChoice == undefined){
    console.log("Only ROCK, PAPER, or SCISSORS may be entered"),
    console.log("This round has been terminated (you dick)")
}

// game logic
function playRound(userChoice, computerChoice) {
    // if user picks rock
    if ((userChoice == "rock")&&(computerChoice == "paper")){
        return ("You lose! Paper beats rock");
    } else if ((userChoice == "rock")&&(computerChoice == "scissors")){
        return ("You win! Rock beats scissors");
    } else if ((userChoice == "rock")&&(computerChoice == "rock")){
        return ("You tied! Rock is equal to rock"); 
    } // if user picks paper
    else if ((userChoice == "paper")&&(computerChoice == "scissors")){
        return ("You lose! Scissors beats paper");
    } else if ((userChoice == "paper")&&(computerChoice == "rock")){
        return ("You win! Paper beats rock");
    } else if ((userChoice == "paper")&&(computerChoice == "paper")){
        return ("You tied! Paper is equal to paper");
    } // if the user picks scissors
    else if ((userChoice == "scissors")&&(computerChoice == "rock")){
        return ("You lose! Rock beats scissors");
    } else if ((userChoice == "scissors")&&(computerChoice == "paper")){
        return ("You win! Scissors beats paper");
    } else if ((userChoice == "scissors")&&(computerChoice == "scissors")){
        return ("You tied! Scissors are equal to scissors");} 
    }
console.log(playRound(userChoice, computerChoice))