let user_score = 0;
let comp_score = 0;
let images = document.querySelectorAll(".image");
let msg = document.querySelector("#message");
let userscore = document.querySelector("#userscore");
let compscore = document.querySelector("#compscore");
let restgame = document.querySelector("#reset");

const genCompChoice =() => {
    const options=["rock","paper","scissors"];
    const elem = Math.floor(Math.random()*3);
    return options[elem];
}
const showWinner = (userwin,userchoice,compchoice) => {
    if(userwin) {
        user_score++;
        msg.innerText=`your ${userchoice} beat ${compchoice}`;
        msg.style.backgroundColor = "Green";
        userscore.innerText = user_score;
    }
    else {
        comp_score++;
        msg.innerText=`your ${userchoice} lose to ${compchoice}`;
        msg.style.backgroundColor = "Red";
        compscore.innerText = comp_score;
    }
}
const game = (userchoice) => {
    const compchoice = genCompChoice();
        let userwin = true;
        if(userchoice === compchoice) {
            msg.innerText=`your ${userchoice} draw to  ${compchoice}`;
            msg.style.backgroundColor = "blueviolet";
        }
        else {
            if(userchoice === "rock") {
                userwin = compchoice === "paper" ?false :true;
            }
            else if(userchoice === "paper") {
                userwin = compchoice === "scissors" ?false:true;
            }
            else {
                userwin = compchoice == "rock" ?false:true;
            }
            showWinner(userwin,userchoice,compchoice);
        }
}
const GameReset = () => {
    userscore.innerText="0";
    compscore.innerText="0";
    msg.innerText="Play Your Move by clicking on the above icons";
    msg.style.backgroundColor = "blueviolet";
}
images.forEach((image) => {
    image.addEventListener("click",() => {
        const userchoice = image.getAttribute("id");
        game(userchoice);
    })
}) 

reset.addEventListener("click",(GameReset));