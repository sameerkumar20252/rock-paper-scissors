let userscore = 0;
let compscore = 0;
let gamepause = false;

const choices = document.querySelectorAll(".choice");
const scorecard = document.querySelector(".score-card");
let user = document.querySelector("#user-score");
let computer = document.querySelector("#comp-score");
const msg = document.querySelector("#msg");

const genCompChoice = () => {
    const options =["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

// console.log(genCompChoice());
const playGame = (userChoice) => {
    if(gamepause) return;
    let comp = genCompChoice();
    let userWin = true;

    gamepause = true;

    console.log(comp);
    if(userChoice === comp){
        msg.textContent = "Draw";

        setTimeout(() => {
            msg.textContent = "Pick your choice";
            gamepause = false;
        },2000);

        return;
    }

    if(comp === "rock" && userChoice === "scissors") {
        userWin = false;
    }
    if(comp === "paper" && userChoice === "rock") {
        userWin = false;
    }
    if(comp === "scissors" && userChoice === "paper") {
        userWin = false;
    }

     
    if(userWin) {
        msg.textContent = "You win"
        userscore++;
    }else {
        msg.textContent = "Computer win"
        compscore++;
    }
    computer.textContent = compscore;
    user.textContent = userscore;
    setTimeout(() => {
        msg.textContent = "Pick your choice";
        gamepause = false;
    },2000);

}

choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        console.log(userChoice);
        playGame(userChoice);
    });
});