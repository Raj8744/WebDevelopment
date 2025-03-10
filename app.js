let userScore = 0;
let compScore = 0;

const choices1 = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");


const generateCompChoice  = () => {
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const showWinner = (userWin => {
    if(userWin) {
        console.log('You Win');
        msg.innerText= 'You Win'
    } else {
        console.log('You Lose');
        msg.innerText= 'You Lose'
    }

});

const drawGame = () => {
    console.log('Game Draw');
    msg.innerText= 'Game Draw'
}

const playGame = (userChoice) => {
    console.log('user choice = ', userChoice);
    // Geneate computer choice
    const compChoice = generateCompChoice();
    console.log('user choice = ', compChoice);
    if (compChoice == userChoice) {
        // Draw Match
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock") {
            // scissors, paper
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper") {
            // rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        }else (userChoice === "scissors")
            // rock, paper
            userWin = compChoice === "rock" ? false : true;
        showWinner(userWin);
    }
}

choices1.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click", () => {
    let userChoice = choice.getAttribute('id');
    // console.log('choice was clicked', choiceId);
    playGame(userChoice);
    });
});