let gameSection=document.querySelector("section");
let gameContainer=document.querySelector(".game");
let divs=gameContainer.querySelectorAll("div");
let rangeContainer=document.querySelector(".GetRange");
let guessContainer=document.querySelector(".guess-container");
let rangeInput=document.getElementById("maxRangeBox");
let guessInput=document.getElementById("guess");
let quitDiv=document.querySelector(".quitGame");
let quitBtn=document.getElementById("quit-btn");
let max,guessNum,random;
let msgDiv;
let Score=[];
let scount=0
guessContainer.style.display="none";
console.log("rangeContaier=",rangeContainer);
console.log("rangeInput=",rangeInput);
console.log("game container=",guessContainer);
rangeInput.addEventListener("keydown",function(e){
    if(e.key=="Enter"){
        console.log("Enter pressed");
        max=parseInt(rangeInput.value);
        console.log("max=",max);
        rangeContainer.style.display="none";
        guessContainer.style.display="block";
        rangeInput.value='';
    }
});
guessInput.addEventListener("keydown",function(e){
    if(e.key=="Enter"){
        console.log("guess enter pressed");
        guessNum=parseInt(guessInput.value);
        console.log("guess="+guessNum);
        random=Math.floor(Math.random()*max)+1;
        console.log("random=",random);
        if(msgDiv){
            msgDiv.remove();
        }
        if(random===guessNum){
            correctGuess();
        }else{
            msgDiv=document.createElement("h4");
            msgDiv.id='msg';
            msgDiv.innerHTML="Wrong guess,Please Try again!!";
            gameContainer.appendChild(msgDiv);
        }
        guessInput.value='';
    }
});
function correctGuess(){
    console.log("inside correctGuess");
    scount++;
    divs.forEach(div => div.style.display = "none"); 
    let continueDiv=document.createElement("div");
    continueDiv.classList.add("continue-div");
    let congo_msg=document.createElement("h1");
    congo_msg.id='Congomsg';
    congo_msg.innerHTML="Congratulations!! You guess correct number."
    continueDiv.appendChild(congo_msg);
    
    let continueButn=document.createElement("button");
    continueButn.id='con-btn';
    continueButn.classList.add('btn');
    continueButn.innerHTML="continue";
    quitDiv.style.display="inline";
    let btnDiv=document.createElement("div");
    btnDiv.classList.add("btnDiv");
    btnDiv.appendChild(continueButn);
    btnDiv.appendChild(quitDiv);
    continueDiv.appendChild(btnDiv);
    gameContainer.style.border="none";
    gameContainer.style.background="transparent";
    gameContainer.style.width="fit-content";

    gameContainer.appendChild(continueDiv);
    
}

function quitGame(){
    addToScoreArray(scount);
    scount=0;
    quitBtn.style.display="none";
    divs.forEach(div=> div.style.display="none");
    let quitMsg=document.createElement("h1");
    quitMsg.innerHTML="You Quit!!!";
    quitMsg.id="Congomsg";
    gameContainer.style.border="none";
    gameContainer.style.background="transparent";
    gameContainer.style.width="fit-content";
    quitDiv.appendChild(quitMsg);
    quitDiv.style.display="block";
    let HighScore=document.createElement("h3");
    h3.innerHTML=getHighScore();
    gameContainer.appendChild(quitDiv);
    
}
/*continuedClick(){
    
}*/
const addToScoreArray=scount=>Score.push(scount);
function getHighScore(){

}

const getHighScore=()=>{
    
};