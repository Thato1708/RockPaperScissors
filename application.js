let computerScore=0;
let playerScore=0;
const playerScore_span=document.getElementById("player-score");
const computerScore_span=document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".scores");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerOption(){
    const choices=['r','p','s'];
    const randomValue = Math.floor(Math.random() * 3);
    return choices[randomValue];
}

function convertLetter(letter){
    if (letter == "r") return "Rock";
    if (letter == "p") return "Paper";
    return "Scissors";

}

function win(choice,computerChoice){
    playerScore++;
    playerScore_span.innerHTML=playerScore;
    computerScore_span.innerHTML=computerScore;
    result_p.innerHTML= `${convertLetter(choice)} beats ${convertLetter(computerChoice)}. You Win!`;
    document.getElementById(choice).classList.add('green-glow');
    setTimeout(function() {document.getElementById(choice).classList.remove('green-glow')},500)
}

function lose(choice,computerChoice){
    computerScore++;
    playerScore_span.innerHTML=playerScore;
    computerScore_span.innerHTML=computerScore;
    result_p.innerHTML= `${convertLetter(choice)} lost to ${convertLetter(computerChoice)}. You Lose...`;
    document.getElementById(choice).classList.add('red-glow');
    setTimeout(function() {document.getElementById(choice).classList.remove('red-glow')},500)
}

function draw(choice, computerChoice){
    result_p.innerHTML= `${convertLetter(choice)} equals ${convertLetter(computerChoice)}. It's a draw.`;
}

function game(choice){
    const computerChoice=getComputerOption();
    switch (choice +computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(choice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(choice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(choice, computerChoice);
            break;
    }
}

function main(){
    rock_div.addEventListener('click', function() {
        game("r");
    })

    paper_div.addEventListener('click', function() {
        game("p");
    })

    scissors_div.addEventListener('click', function() {
        game("s");
    })
}

main();