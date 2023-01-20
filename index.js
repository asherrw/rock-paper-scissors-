// // Computer's answer logic
function getRandomItem(arr) {
    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);
    // get random item
    const item = arr[randomIndex];
    return item;
}
const array = ['rock', 'paper', 'scissors',];
const result = getRandomItem(array);
console.log(result);

// // User's answer logic

// // let userAnswer = document.querySelector('.userAnswer')
// userAnswer = prompt("What is your answer?")
// // if (userAnswer !== "rock" || userAnswer !== "paper" || userAnswer !== "scissors") {
// //     alert("You have to type a valid answer!")
// // }


// //Game logic
// if (foeAnswer == userAnswer) {
//     alert("It's a tie!")
// }