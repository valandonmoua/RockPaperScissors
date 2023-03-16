


///users choice
const getUserChoice = (userInput) => {
    ///execute code
    
    /// prettier ignore
    if (
        userInput === "rock" ||userInput === "paper" || userInput === "scissors") {
        console.log("USERCHOICE", userInput.toLowerCase());
        return userInput
    }else {
        alert("Please type the correct input");
    }
};
getUserChoice("paper");

///computers choice
const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log(randomNumber);
    
    if(randomNumber === 1) {
        ///console.log("rock");
        return "rock";
    }else if(randomNumber === 2) {
        ///console.log("paper");
        return "paper";
    }else if(randomNumber === 3) {
        ///console.log("scissors");
        return "scissors";
    }
};

///console.log("COMPUTER CHOICE", getComputerChoice);

///compare or vs
const determineWinner = (userInput, computerChoice) => {
    if(userInput === computerChoice) {
        return"TIE"
    }else if(userInput === "rock" && computerChoice==="scissors"|| userInput ==="paper" && computerChoice ==="rock"|| userInput === "scissors" && computerChoice==="paper"){
        return"WIN"
    }else if(userInput === "rock" && computerChoice==="paper"|| userInput ==="paper" && computerChoice ==="scissors"|| userInput === "scissors" && computerChoice==="rock"){
        return"LOSER"
    }
};

///console.log(determineWinner())

const playGame = () => {
    const userChoice = getUserChoice("rock");
    console.log("userChoice", userChoice);
    const computerChoice = getComputerChoice();
    console.log("computerChoice", computerChoice);
    return determineWinner(userChoice, computerChoice);

};

const x = playGame();
console.log(x);
///start the program
