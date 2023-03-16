//your choice
const myChoice = prompt("Please type in your choice: rock, paper, scissors");
console.log(myChoice);

//computers choice
for( let i = 1; i < 4; i++) {
console.log(i)
}

const randomNumber = Math.floor(Math.random() * 3 + 1);
console.log(randomNumber);

let computerChoice;
console.log(computerChoice)
if (randomNumber === 1) {
//console.log("rock");
computerChoice ="rock";
} else if(randomNumber === 2) {
//console.log("paper")
computerChoice ="paper";
} else if(randomNumber === 3){
//console.log("scissors")
computerChoice ="scissors";
}

console.log(computerChoice)

const myChoiceVsComputerChoice = `${myChoice}${computerChoice}`;
console.log(myChoiceVsComputerChoice);

///the result
if(myChoiceVsComputerChoice === "rockrock" || myChoiceVsComputerChoice === "paperpaper" || myChoiceVsComputerChoice === "scissorsscissors") {
console.log("It's a tie...")
}else if(myChoiceVsComputerChoice === "rockscissors" || myChoiceVsComputerChoice === "paperrock" || myChoiceVsComputerChoice === "scissorspaper") {
console.log("Ya lucky bastard.... You are the WINNER!!!")
}else if(myChoiceVsComputerChoice === "rockpaper" || myChoiceVsComputerChoice === "paperscissors" || myChoiceVsComputerChoice === "scissorsrock") {
console.log("Dude... you suck. You are a LOSER!!!")
}