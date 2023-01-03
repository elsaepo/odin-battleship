import Player from './player';

function Game(){
    let player1;
    let player2;
    let currentPlayer;

    function newGame(player1Name, player2Name){
        this.player1 = Player(player1Name);
        this.player2 = Player(player2Name);
        this.currentPlayer = this.player1;
    }

    function changeTurn(){
        this.currentPlayer = this.currentPlayer === this.player1 ? this.player2 : this.player1;
    }

    function testGame(){
        this.player1.gameboard.placeShip(3, [1,3], 'vertical')
        this.player1.gameboard.placeShip(4, [7,2], 'horizontal')
        this.player1.gameboard.placeShip(5, [2,7], 'vertical')
        this.player2.gameboard.placeShip(3, [1,3], 'vertical')
        this.player2.gameboard.placeShip(4, [7,2], 'horizontal')
        this.player2.gameboard.placeShip(5, [2,7], 'vertical')
    }

    return {
        player1,
        player2,
        currentPlayer,
        newGame,
        changeTurn,
        testGame
    }
}



export default Game;