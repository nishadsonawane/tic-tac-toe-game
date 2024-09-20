let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let newbtn = document.querySelector("#newbtn");
let draw = document.querySelector(".draw");
let tie = document.querySelector("#tie");

const gamedraw = () => {
    msg.innerText = "game was a draw :("
    msgcontainer.classList.remove("hide");
}
let turno = true;
let count = 0;
let gameover = false;
const winpatterns  = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],  
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

boxes.forEach((box) =>{
box.addEventListener("click", () =>{
    console.log("box was clicked");
    if(turno){
        box.innerText = "O";
        turno = false;
    } else {
        box.innerText = "X";
        turno = true;
    }
    box.disabled=true;
    count++;
    
    winChecker();

    if(count>=9 && !gameover){
       
        gameover = true;
        gamedraw();
    }

    


})
})

const resetbtn = () => {
    turno = true;
    enableboxes();
    msgcontainer.classList.add("hide");
    count = 0;

    
}



const enableboxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const disableboxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const showwinner = (winner) => {
    msg.innerText = `Congratualtions, winner is ${winner}`;
    msgcontainer.classList.remove("hide");
}

const winChecker = () => {
    for(pattern of winpatterns){
        let pos1val = boxes[pattern[0]].innerText ;
        let pos2val = boxes[pattern[1]].innerText ;
        let pos3val = boxes[pattern[2]].innerText;
        
        if(pos1val != "" && pos2val != "" && pos3val != "" ){
        if(pos1val === pos2val && pos2val === pos3val){
            console.log("winner")
            disableboxes();
            showwinner(pos1val);
            
            
        }}
    }

}

reset.addEventListener("click", resetbtn);
newbtn.addEventListener("click",resetbtn);


