// let todo=[];
// let req=prompt("please enter your request:");
// while(!true){
//     if(req=="quit"){
//         console.log("quitting app");
//         break;
//     }
//     if(req=="list"){
//         console.log("----------------");
//         for(let i=0;i<todo.length;i++){
//             console.log(`${i+1}. ${todo[i]}`);
//         }
//         console.log("----------------");
//     }else if(req=="add"){
//         let task=prompt("please enter the task to add:");
//         todo.push(task);
//         console.log("task added");
       
//     }else if(req=="delete"){
//         let idx=parseInt(prompt("please enter the task index:"));
//         todo.splice(idx-1,1);
//         console.log("task deleted");
//     }else{
//         console.log("wrong request:");
//     }
//     req=prompt("Enter your another request now:");
// }

const inputBox=document.getElementById("input-box");
const listContainer=document.querySelector(".list-container");
function addTask(){
    if(inputBox.value===''){
        alert("You must write something!!");
    }else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
       
    }
    inputBox.value='';
}

