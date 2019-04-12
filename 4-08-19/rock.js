var weapons = ["rock", "paper", "scissors"];

function getHand() {
    return weapons[Math.floor(Math.random() * weapons.length)];
  }

function greeting() {
    var name = "";
    while(name === ""){
        name = prompt("Please enter your name...");
        player1.name = name;
    }
    // document.getElementById("play").innerHTML.getElementById("play").innerHTML =  = `${name}, welcome to rock, paper, scissors game!`
    // document.getElementById("play").innerHTML =  (`${player1.name}, welcome to rock, paper, scissors game! \n`);

} 

function selectWeapon(){
    var weapon = "";
    while(weapon === "" && weapon != 'rock' && weapon != 'paper' && weapon != 'scissors'){
        weapon = prompt("Please select your weapon: rock, paper, or scissors");
        player1.getHand = weapon;
    }
    // document.getElementById("play").innerHTML = (`Your weapon is ${weapon}. \n`);
}



var winner;
var player1 = {
    name: 'Player 1',
    getHand: null,
    score: 0
}

var player2 = {
    name: 'Player 2',
    getHand: null,
    score: 0
}

// var player3 = {
//     name: 'Player 3',
//     getHand: null,
//     score: 0
// }

// var player4 = {
//     name: 'Player 4',
//     getHand: null,
//     score: 0
// }

function playRound(player_1, player_2){
    
    selectWeapon();
    player_2.getHand = getHand();
    document.getElementById("weapon1").innerHTML = player_1.name + ": "+ player_1.getHand +". ";
    document.getElementById("weapon2").innerHTML = player_2.name + ": "+ player_2.getHand + ". ";
    if (player_1.getHand == player_2.getHand) {
        document.getElementById("result").innerHTML ='Result: Tie for this round! ';
        document.getElementById("player1").innerHTML = player_1.name + " has won "+ player_1.score + " round(s). ";
        document.getElementById("player2").innerHTML = player_2.name + " has won "+ player_2.score + " round(s). ";
        
    } else if (player_1.getHand === "rock" && player_2.getHand === "paper" || player_1.getHand=== "paper" && player_2.getHand === "scissors" || player_1.getHand === "scissors" && player_2.getHand == "rock") {
        // document.getElementById("play").innerHTML = ("Result: " + player_2.name + " win for this round! \n");
        document.getElementById("result").innerHTML ='Result: ' + player_2.name + ' win for this round! ';

        player_2.score+= 1;
        document.getElementById("player1").innerHTML = player_1.name + " has won "+ player_1.score + " round(s). ";
        document.getElementById("player2").innerHTML = player_2.name + " has won "+ player_2.score + " round(s). ";
        // winner = hasWinner(player_2);
        
    } else  {
        // document.getElementById("play").innerHTML = ("Result: " + player_1.name + " win for this round! \n");
        document.getElementById("result").innerHTML ='Result: ' + player_1.name + ' win for this round! ';

        player_1.score+= 1;
        document.getElementById("player1").innerHTML = player_1.name + " has won "+ player_1.score + " round(s). ";
        document.getElementById("player2").innerHTML = player_2.name + " has won "+ player_2.score + " round(s). ";  
        // winner = hasWinner(player_1);      
    }        
    
}

function hasWinner(player){
    if(player.score == 3){
        // text = document.getElementById("play").innerHTML = ("The winner is " + player.name + ". \n");
        document.getElementById('winner') = text;
        return player;
    } 
}


function playGame(player_1,player_2){
    while(player_1.score < 3 && player_2.score < 3){
        playRound(player_1, player_2);
    }    
    return winner;
}

function playTournament(player_1, player_2){
    
    
    playRound(player_1, player_2);
    // let secondWinner = playGame(player_3, player_4);
    // firstWinner.score = 0;
    // secondWinner.score = 0;
    // playGame(firstWinner, secondWinner); 
}

// playTournament(player1, player2);
// playTournament(player1, player2, player3, player4);