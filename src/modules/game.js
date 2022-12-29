import Player from './player';

function Game(){
    let player1;
    let player2;

    function newGame(player1Name, player2Name){
        this.player1 = Player(player1Name);
        this.player2 = Player(player2Name);
    }

    return {
        player1,
        player2,
        newGame
    }
}

export default Game;