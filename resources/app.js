// Set modifiable variables to keep track of the user's and computer's scores
let userScore = 0;
let computerScore = 0;

//cache the DOM
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('comp-score');
const result_section = document.querySelector(".result > p");
const rock_img = document.getElementById("rock");
const paper_img = document.getElementById("paper");
const scissors_img = document.getElementById("scissors");

//create getComputerChoice function
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

//create win function
function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    let user = userChoice[0].toUpperCase() + userChoice.slice(1);
    let computer = computerChoice[0].toUpperCase() + computerChoice.slice(1);
    result_section.innerHTML = `${user} beats ${computer}. You win!`;
    document.getElementById(userChoice).classList.add('green-border');
    setTimeout(function(){document.getElementById(userChoice).classList.remove('green-border')}, 1000);
}

//create lose function
function lose(userChoice, computerChoice) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    let user = userChoice[0].toUpperCase() + userChoice.slice(1);
    let computer = computerChoice[0].toUpperCase() + computerChoice.slice(1);
    result_section.innerHTML = `${computer} beats ${user}. You lose.`;
    document.getElementById(userChoice).classList.add('red-border');
    setTimeout(function(){document.getElementById(userChoice).classList.remove('red-border')}, 1000);
}

//create draw function
function draw(userChoice) {
    result_section.innerHTML = "It's a tie. Go again.";
    document.getElementById(userChoice).classList.add('grey-border');
    setTimeout(function(){document.getElementById(userChoice).classList.remove('grey-border')}, 1000);

}


//create the game function
function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win(userChoice, computerChoice);
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            lose(userChoice, computerChoice);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            draw(userChoice);
            break;
    }
}


//create the main function
function main() {
    rock_img.addEventListener("click", function() {
        game('rock');
    });
    paper_img.addEventListener("click", function() {
        game('paper')
    });
    scissors_img.addEventListener("click", function() {
        game('scissors')
    });
}

main();


