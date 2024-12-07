let gameSeq =[];
let btns = document.querySelectorAll(".box");
let text = document.querySelector("h3");
let start = false;
let level = 0;
let idx=0;

document.addEventListener("keypress" , function(){
    
    if(start){
        return;
    }

    start = true;

    //change background color 
    document.body.style.backgroundColor="Green";
    setTimeout(function(){
        document.body.style.backgroundColor = "";
    } , 300);

    console.log("Game start");
    leverUp();  
});

function gameFlesh(num){

    let box = document.querySelector(`#b${num}`);
    // console.log(num);
    box.style.backgroundColor = "white";

    setTimeout(function(){
        box.style.backgroundColor = "";
    } , 200);

}

function leverUp(){
    level++;
    idx =0;
    text.innerText = `Level ${level}`;

    let num = Math.floor(Math.random()*4)+1 ;
    gameFlesh(num);  
    gameSeq.push(`b${num}`);
    // console.log(gameSeq);

}

function Check(){
    if(!start) return;
    
    let btn = this;
    

    // console.log(btn.id);
    // console.log(gameSeq[idx]);


    if(btn.id == gameSeq[idx]){
        idx++;
    }else{
        gameOver();
        return ;
    }
            
    if(idx == gameSeq.length) {
        leverUp();
    }
        
    
}

function gameOver(){

    document.body.style.backgroundColor = "red";
    setTimeout(function(){
        document.body.style.backgroundColor = "";
    } , 500);

    text.innerText = "Press any key to RESTART the game / Press  \" A \" ";
    

    let h2 = document.createElement("h2");
    h2.innerText = `Score : ${level-1}`
    text.append(h2);


    start = false;
    level =0;
    gameSeq = [];
 
}

for(let btn of btns){
    btn.addEventListener("click" , Check);
}