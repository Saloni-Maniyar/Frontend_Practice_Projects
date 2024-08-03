let rangeContainer=document.querySelector(".GetRange");
let rangeInput=document.getElementById("maxRangeBox");
let gameContainer=document.querySelector(".game-container");
let guessInput=document.getElementById("guess");

let allGameDiv=document.querySelectorAll(".game-div");
let quitDiv=document.querySelector(".quitGame");
let max,guess,random;
let msgDiv;

console.log("rangeContaier=",rangeContainer);
console.log("rangeInput=",rangeInput);
console.log("game container=",gameContainer);
rangeInput.addEventListener("keydown",function(e){
    if(e.key=="Enter"){
        console.log("Enter pressed");
        max=parseInt(rangeInput.value);
        console.log("max=",max);
        rangeContainer.style.display="none";
        gameContainer.style.display="block";
        rangeInput.value='';
    }
});
guessInput.addEventListener("keydown",function(e){
    if(e.key=="Enter"){
        console.log("guess enter pressed");
        guess=parseInt(guessInput.value);
        console.log("guess="+guess);
        random=Math.floor(Math.random()*max)+1;
        console.log("random=",random);
        if(msgDiv){
            msgDiv.remove();
        }
        if(random===guess){
            correctGuess();
        }else{
           msgDiv=document.createElement("h4");
            msgDiv.innerHTML="Wrong msg,Please Try again!!";
            document.body.appendChild(msgDiv);
        }
        guessInput.value='';
    }
});
function correctGuess(){
    allGameDiv.forEach(div => div.style.display = "none"); 
    
    let continueDiv=document.createElement("div");
    continueDiv.classList.add("continue-btn");
    let h1=document.createElement("h1");
    h1.innerHTML="Congratulations!! You guess correct number."
    continueDiv.appendChild(h1);
    
    let continueButn=document.createElement("button");
    continueButn.innerHTML="Continue Playing";
    continueDiv.appendChild(continueButn);
    document.body.appendChild(continueDiv);
    quitDiv.style.display="block";
    document.body.appendChild(quitDiv);

}


