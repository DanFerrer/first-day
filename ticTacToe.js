/**
 * Created by daniel on 11/27/14.
 **/

//object literals for player stats
var player1 = {
    name: "Player 1",
    text: "X",
    color: "red",
    wonGame: false,
    wins: 0,
    losses: 0,
    draws: 0
};
var player2 = {
    name: "Player 2 ",
    text: "O",
    color: "blue",
    wonGame: false,
    wins: 0,
    losses: 0,
    draws: 0
};
var currentTurn = 0; //switches between 0 and 1 for turns
var turnCount = 0; //total amount of turns
var squares = document.getElementsByTagName("td"); //assign variable for all td nodes
var addText = function addText(e) {
    //remove click event after it fires on each square
    e.target.removeEventListener(e.type, arguments.callee);
    if ((player1) && currentTurn === 0) {
        this.innerHTML = player1.text;
        this.style.color = player1.color;
        currentTurn = 1; //set turn to player2
    } else if ((player2) && currentTurn === 1) {
        this.innerHTML = player2.text;
        this.style.color = player2.color;
        currentTurn = 0; //set turn to player1
    }
    turnCount += 1;
    checkWinner();
    e.preventDefault();
};

var checkWinner = function checkWinner() {
    //function to check who won
    //win conditions if X won: Horizontal 1, 2 and 3. Vertical 1,2 and 3, Diagonal 1 and 2 respectively
    if ((squares[0].innerHTML == squares[1].innerHTML && squares[0].innerHTML == squares[2].innerHTML && squares[1].innerHTML == "X") || (squares[3].innerHTML == squares[4].innerHTML && squares[3].innerHTML == squares[5].innerHTML && squares[3].innerHTML == "X") || (squares[6].innerHTML == squares[7].innerHTML && squares[6].innerHTML == squares[8].innerHTML && squares[6].innerHTML == "X") || (squares[0].innerHTML == squares[3].innerHTML && squares[0].innerHTML == squares[6].innerHTML && squares[0].innerHTML == "X") || (squares[1].innerHTML == squares[4].innerHTML && squares[1].innerHTML == squares[7].innerHTML && squares[1].innerHTML == "X") || (squares[2].innerHTML == squares[5].innerHTML && squares[2].innerHTML == squares[8].innerHTML && squares[2].innerHTML == "X") || (squares[0].innerHTML == squares[4].innerHTML && squares[0].innerHTML == squares[8].innerHTML && squares[0].innerHTML == "X") || (squares[2].innerHTML == squares[4].innerHTML && squares[2].innerHTML == squares[6].innerHTML && squares[2].innerHTML == "X")) {
        player1.wonGame = true;
        alert(player1.name + " has won the game (ﾉ◕ヮ◕)ﾉ*:・ﾟ✧ ");
        alert("A new game will start. Good luck!");
        player1.wins += 1;
        player2.losses += 1;
        //change w/l/d in HTML and convert to a string
        document.getElementById("p1wins").innerHTML = player1.wins.toString();
        document.getElementById("p2losses").innerHTML = player2.losses.toString();
        resetGame();

        //win conditions if O won: Horizontal 1,2 and 3. Vertical 1,2 and 3, Diagonal 1 and 2 respectively
    } else if ((squares[0].innerHTML == squares[1].innerHTML && squares[0].innerHTML == squares[2].innerHTML && squares[1].innerHTML == "O") || (squares[3].innerHTML == squares[4].innerHTML && squares[3].innerHTML == squares[5].innerHTML && squares[3].innerHTML == "O") || (squares[6].innerHTML == squares[7].innerHTML && squares[6].innerHTML == squares[8].innerHTML && squares[6].innerHTML == "O") || (squares[0].innerHTML == squares[3].innerHTML && squares[0].innerHTML == squares[6].innerHTML && squares[0].innerHTML == "O") || (squares[1].innerHTML == squares[4].innerHTML && squares[1].innerHTML == squares[7].innerHTML && squares[1].innerHTML == "O") || (squares[2].innerHTML == squares[5].innerHTML && squares[2].innerHTML == squares[8].innerHTML && squares[2].innerHTML == "O") || (squares[0].innerHTML == squares[4].innerHTML && squares[0].innerHTML == squares[8].innerHTML && squares[0].innerHTML == "O") || (squares[2].innerHTML == squares[4].innerHTML && squares[2].innerHTML == squares[6].innerHTML && squares[2].innerHTML == "O")) {
        player2.wonGame = true;
        alert(player2.name + " has won the game (ﾉ◕ヮ◕)ﾉ*:・ﾟ✧ ");
        alert("A new game will start. Good luck!");
        player2.wins += 1;
        player1.losses += 1;
        //change w/l/d in HTML and convert to a string
        document.getElementById("p2wins").innerHTML = player2.wins.toString();
        document.getElementById("p1losses").innerHTML = player1.losses.toString();
        resetGame()

    } else {
        if ((turnCount === 9) && (player1.wonGame == false) && (player2.wonGame == false)) {
            alert("This game is a draw (╯°□°）╯︵ ┻━┻)");
            alert("A new game will start. Good luck!");
            player1.draws += 1;
            player2.draws += 1;
            //change w/l/d in HTML and convert to a string
            document.getElementById("p1draws").innerHTML = player1.draws.toString();
            document.getElementById("p2draws").innerHTML = player2.draws.toString();
            resetGame();
        }
    }
};


var newGame = function newGame() {
    for (i = 0, len = squares.length; i < len; i++) {
        //add click event to every square to set X or O
        squares[i].addEventListener("click", addText);
    }
};

newGame(); //initiate the game

var resetGame = function resetGame() {
    //starts a new game
    squares[0].innerHTML = "";
    squares[1].innerHTML = "";
    squares[2].innerHTML = "";
    squares[3].innerHTML = "";
    squares[4].innerHTML = "";
    squares[5].innerHTML = "";
    squares[6].innerHTML = "";
    squares[7].innerHTML = "";
    squares[8].innerHTML = "";
    turnCount = 0;
    currentTurn = 0;
    player1.wonGame = false;
    player2.wonGame = false;
    newGame();
};