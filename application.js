let computerScore=0;
let playerScore=0;
const playerScore_span=document.getElementById("player-score");
const computerScore_span=document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".scores");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerOption(){
    const choices=['r','p','s'];
    const randomValue = Math.floor(Math.random() * 3);
    return choices[randomValue];
}

function win(choices,computerChoice){
    playerScore++;
    playerScore_span.innerHTML=playerScore;
    computerScore_span.innerHTML=computerScore;
    result_div.innerHTML=choices + "beats"+ computerChoice + ". You Win!";
}

function lose(){

}

function draw(){

}

function game(choice){
    const computerChoice=getComputerOption();
    switch (choice +computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win();
            break;
        case "rp":
        case "ps":
        case "sr":
            lose();
            break;
        case "rr":
        case "pp":
        case "ss":
            draw();
            break;
    }
}

function main(){
    rock_div.addEventListener('click', function() {
        game("r");
    })

    rock_div.addEventListener('click', function() {
        game("p");
    })

    rock_div.addEventListener('click', function() {
        game("s");
    })
}

main();