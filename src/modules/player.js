import Gameboard from './gameboard';
import aiLogic from './aiLogic';

function Player(playerName, playerNumber) {
    let name = typeof playerName === 'string' ? playerName : 'battleBot';
    const number = playerNumber;
    const isAI = typeof playerName !== 'string' ? true : false;
    const gameboard = Gameboard();
    const battleBot = aiLogic();
    function attack(enemy, row, col) {
        // If the attacking player is AI, we use the aiLogic module to get the attack coordinates
        if (this.isAI) [row, col] = this.battleBot.attack(enemy);
        if (this.isAI) console.log(`attacking ${row}, ${col}`)
        // Get the result of the attack and update the aiLogic with it
        const result = enemy.gameboard.receiveAttack(row, col);
        if (this.isAI){
            this.battleBot.lastResult = result[0];
            this.battleBot.lastLocation = result[1];
            if (result[0] === 'hit') this.battleBot.lastHit = result[1];
            if (result[2] !== null) this.battleBot.lastShip = result[2];
        }
        return result;
    }
    return {
        name,
        number,
        isAI,
        gameboard,
        battleBot,
        attack
    }
}

export default Player;