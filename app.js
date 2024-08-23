let userScore =0;
let compSCore =0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genCompChoice = () =>{
    const options = ["rock", "paper", "scissors"];
    const ranIdx = Math.floor(Math.random() * 3); //genera6tes random number between 0 to 3 because the array size is 3
    return options[ranIdx];
};

const drawGame = () => {
    console.log("Game was draw");
    msg.innerText = "Game Draw";
    msg.style.backgroundColor = "white";
    msg.style.color = "black";
}

const showWinner = (userWin,userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        console.log("you win!")
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        msg.style.color = "black";
    }else{
        compSCore++;
        compScorePara.innerText = compSCore;
        console.log("you lost");
        msg.innerText = `You Loss ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor="yellow";
        msg.style.color = "black";
    }
}

const playGame = (userChoice) =>{
    console.log("user Choice = ", userChoice);
    const compChoice = genCompChoice();
    console.log("computer Choice = ", compChoice);

    if(userChoice === compChoice){
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock") {
            //scissors, paper
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper") {
            //rock or scissors because comp doesnt choice paper if do game is draw
            userWin = compChoice === "scissors" ? false : true;
        }else{
            //rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }

};

choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        // console.log("choice was clicked", userChoice);
        playGame(userChoice);


    })
});