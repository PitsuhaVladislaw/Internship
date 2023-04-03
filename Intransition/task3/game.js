let playerChoice;
let computerChoice;
const arrWays = [1, 2, 3, 4, 5, 0, '?'];

function game(choice) {

    console.log('>javascript -jar game.jar rock paper scissors lizard Spock');
    console.log('Available moves:');

    for(let way of arrWays) {

        switch(way) {
            case 1:
                console.log(`${way} - rock`);
                break;
            case 2:
                console.log(`${way} - paper`);
                break;
            case 3:
                console.log(`${way} - scissors`);
                break;
            case 4:
                console.log(`${way} - lizard`);
                break;
            case 5:
                console.log(`${way} - spock`);
                break;
            case 0:
                console.log(`${way} - exit`);
                break;
            case '?':
                console.log(`${way} - help`);
                break;
        }
    }

    makePlayerChoice(choice);
    console.log('Enter player move: ' + playerChoice);
    computerTurn();
    console.log('Computer move: ' + computerChoice);
    console.log(checkWinner());
}

function computerTurn() {

    const randChoice = Math.floor(Math.random() * 3) + 1;

    switch(randChoice) {
        case 1:
            computerChoice = 'rock';
            break;
        case 2:
            computerChoice = 'paper';
            break;
        case 3:
            computerChoice = 'scissors';
            break;
    }
}

function makePlayerChoice(array) {

    if(array[0] === "rock" || array[0] === '1') {
        playerChoice = "rock";
    } else if(array[0] === "paper" || array[0] === '2') {
        playerChoice = "paper";
    } else if(array[0] === "scissors" || array[0] === '3') {
        playerChoice = "scissors";
    }
}

function checkWinner() {
    
    if(computerChoice === playerChoice) {
        return "Draw, let's fight again!";
    } else if(computerChoice === "rock") {
        return (playerChoice === "paper") ? "You win!" : "You lose!";
    } else if(computerChoice === "paper") {
        return (playerChoice === "scissors") ? "You win!" : "You lose!";
    } else if(computerChoice === "scissors") {
        return (playerChoice === "rock") ? "You win!" : "You lose!";
    }
}

game(process.argv.slice(2));