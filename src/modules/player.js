import Gameboard from "./gameboard";

function Player(playerName) {
    const name = typeof playerName === 'string' ? playerName : 'battleBot';
    const isAI = typeof playerName !== 'string' ? true : false;
    const gameboard = Gameboard();
    // Create a 2D array of available attack coordinates
    const availableAttacks = createAttackArray();
    function attack(enemy, row, col) {
        // Get row and col for a random AI attack from the availableAttacks array
        if (isAI) {
            if (availableAttacks.length === 0){
                return 'No squares to attack';
            }
            let arrayRow = Math.floor(Math.random() * availableAttacks.length);
            let arrayCol = Math.floor(Math.random() * availableAttacks[arrayRow].length);
            // Remove the square from the availableAttacks array & get the coordinates
            let attackCoords = availableAttacks[arrayRow].splice(arrayCol, 1)[0];
            if (availableAttacks[arrayRow].length === 0) availableAttacks.splice(arrayRow, 1);
            [row, col] = attackCoords;
        }
        // Return the 'hit' or 'miss' result of the attack
        return enemy.gameboard.receiveAttack(row, col);
    }
    return {
        name,
        isAI,
        gameboard,
        attack
    }
}

function createAttackArray() {
    const attackArray = [];
    for (let row = 0; row < 10; row++) {
        let rowArray = [];
        for (let col = 0; col < 10; col++) {
            rowArray.push([row, col]);
        }
        attackArray.push(rowArray);
    }
    return attackArray;
}

export default Player;