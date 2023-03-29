let yourChoice;
let computerChoice;
const arrWays = [1, 2, 3, 4, 5, 0, '?'];

function gameRPS() {

    console.log('>java -jar game.jar rock paper scissors lizard Spock');
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

    yourChoice = process.argv

    console.log('Enter your move: ' + yourChoice);
    computerChoice();
    console.log('Computer move: ' + computerChoice);
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

gameRPS();