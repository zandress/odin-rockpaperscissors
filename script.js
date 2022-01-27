//Creating score keeping variables
let playerScore = 0;
let computerScore = 0;
let draws = 0;

// creating a function that will get the computers play
// it will randomly return Rock, Paper, or Scissors.
const computerPlay = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
        return 'rock';
        case 1:
        return 'paper';
        case 2:
        return 'scissors';
    };
};

//creating a function that gets the users play
function getUserChoice() {
    playerSelection = prompt('Please choose rock, paper, or scissors');
    if (playerSelection === null) {
        return {selection:playerSelection, pass:true};
    };
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors') {
      return {selection:playerSelection, pass:true};
    } else if (playerSelection !== 'rock' || playerSelection !== 'paper' || playerSelection !== 'scissors') {
      alert('Please choose rock, paper, or scissors!');
      return {selection:undefined, pass:false};
    };
  };

// Plays one round of the game
function playRound(playerSelection, computerSelection) {
    let player = playerSelection.selection
    if (player === computerSelection) {
        return {results: draw, why: tie};
    } else if (player === 'rock' && computerSelection === 'scissors') {
        return {results: playerWinsRound, why: rockBeatsScissors};
    } else if (player === 'paper' && computerSelection === 'rock') {
        return {results: playerWinsRound, why: paperBeatsRock};
    } else if (player === 'scissors' && computerSelection === 'paper') {
        return {results: playerWinsRound, why: scissorsBeatsPaper};
    } else if (computerSelection === 'rock' && player === 'scissors') {
        return {results: computerWinsRound, why: rockBeatsScissors};
    } else if (computerSelection === 'paper' && player === 'rock') {
        return {results: computerWinsRound, why: paperBeatsRock};
    } else {
        return {results: computerWinsRound, why: scissorsBeatsPaper};
    };
};

//variables that are called for the result of each round and when a winner is decided
let playerWinsRound = 'Player wins this round';
let rockBeatsScissors = 'Rock beats Scissors!';
let paperBeatsRock = 'Paper beats Rock!';
let scissorsBeatsPaper = 'Scissors beats Paper!';
let computerWinsRound = 'Computer wins this round';
let draw = 'It\'s a tie';
let tie = 'you both threw the same thing down!'
let playerWin = 'Player wins the game!';
let computerWin = 'Computer wins the game!';

//this function is called to play the game five times and print the scores to the console.
function game() {
    //this for loop plays the game until the player or computer has 5 wins then will break out of the loop to end the game.
    for (let i = 0; i < 100; i++) {
        let playerSelection = getUserChoice();
        if (!playerSelection.pass) {
            continue;
        }
        if (playerSelection.selection === null) {
            alert('Thanks for playing!');
            break;
        }
        let computerSelection = computerPlay();
        let roundResult = playRound(playerSelection, computerSelection);
        console.log('The player threw: ' + playerSelection.selection);
        console.log('The computer threw: ' + computerSelection);
        console.log(roundResult.results + ' because ' + roundResult.why);
        //calling the keepScore function will add wins to the scoreboard
        keepScore(roundResult.results);
        console.log('Your score is: ' + playerScore);
        console.log('Computers score is: ' + computerScore);
        console.log('There are ' + draws + ' tie(s)!');
        console.log('------------------------------');

        //this will determine when a winner is chosen and alert the user on the page.
        if (playerScore === 5) {
            alert('The player wins the game!!!')
            break;
        } else if (computerScore === 5) {
            alert('The computer wins the game!!!')
            break;
        };
    };
};

//this function keeps score for the game
function keepScore(result) {
    if (result === playerWinsRound) {
        playerScore++;
    } else if (result === draw) {
        draws++;
    } else {
        computerScore++;
    };
    if (playerScore === 5) {
        console.log(playerWin);
        return;
    };
    if (computerScore === 5) {
        console.log(computerWin);
        return;
    };
};

game();