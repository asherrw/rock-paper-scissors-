// Computer's answer logic
answer = function randomNumber(answer) {
    Math.floor(Math.random() * 100) +1;
}
if (answer <= 33) {
    foeAnswer = "rock";
} else if ((answer > 33) && (answer <=66)) {
    foeAnswer = "paper";
} else {
    foeAnswer = "scissors";
};


// User's answer logic
// let userAnswer = document.querySelector('.userAnswer')
userAnswer = prompt("What is your answer?")
if (userAnswer.toLowerCase() !== "rock" || userAnswer.toLowerCase() !== "paper" || userAnswer.toLowerCase() !== "scissors") {
    alert("You have to type a valid answer!")
}


//Game logic
if (foeAnswer == userAnswer) {
    alert("It's a tie!")
}