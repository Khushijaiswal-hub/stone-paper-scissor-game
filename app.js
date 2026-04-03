let user=0;
let computer=0;
const options=document.querySelectorAll(".option");
const msg=document.querySelector("#msg");
const userScore=document.querySelector("#user");
const computerScore=document.querySelector("#computer");
const gencompChoice=()=>{
    const Choices=["paper","stone","scissor"];
    const randomNum=Math.floor(Math.random()*3);
    return Choices[randomNum];
};
const drawGame=()=>{
    console.log("Game draw");
    msg.innerText="Game Draw";
    msg.style.backgroundColor="#0d1b1e";

};
const showWinner=(userwin,userOption,computerOption )=>{
    if(userwin){
        user++;
        userScore.innerText=user;
        console.log("You Win");
        msg.innerText=`You Win. computer chose ${computerOption}`;
        msg.style.backgroundColor="green";
    }
    else{
        console.log("you Lose!");
        computer++;
        computerScore.innerText=computer;
        msg.innerText="You Lose!";
        msg.innerText=`You Lose! computer chose ${computerOption}`;
        msg.style.backgroundColor="red";
    }
    }

const playGame=(userOption)=>{
    console.log("userOption= ",userOption);
    const computerOption=gencompChoice();
    console.log("computerOption= ",computerOption);

    if(userOption===computerOption){
        drawGame();
        
        
    } else{
        let userwin;
        if(userOption==="paper" ) {
            userwin= computerOption==="stone";
        } else  if(userOption==="stone" ){
            userwin=computerOption==="scissor";
        } else{
            userwin=computerOption==="paper";
        } 
    
        showWinner(userwin,userOption,computerOption);
    }

};

options.forEach((option)=>{
    console.log(option);
    option.addEventListener("click",()=>{
        let userOption = option.getAttribute("id");
        console.log("clicked",userOption);
        playGame(userOption);
    })
;
});