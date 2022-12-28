import Gameboard from "./gameboard";

function Player(){
    const gameboard = Gameboard();
    return {
        gameboard
    }
}

export default Player;