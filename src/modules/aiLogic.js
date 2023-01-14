function aiLogic() {
    // Create a 2D array of available attack coordinates
    const availableAttacks = createAttackArray();
    let lastShip;
    // Store an array containing all the recent attacks, in order
    // When a ship is sunk, remove all of it's cells from the array
    // So we have an array of recent hits of ships that are not yet sunk
    const lastHitArray = [];
    const possibleDirections = ['up', 'down', 'left', 'right'];
    let lastLocation;
    let lastResult;
    let confirmedOrientation;
    let direction;
    function attack(enemy) {
        if (availableAttacks.length === 0) return 'No squares to attack';
        // If the last hit ship is sunk, or nothing has been hit yet, get a random cell
        if (this.lastHitArray.length === 0){
            this.confirmedOrientation = null;
            this.direction = null;
            let attackCoords = getRandomCell();
            return attackCoords;
        }
        // Else, we find the next cell adjacent to the lastHit
        console.log('searching for next cell')
        const lastHit = this.lastHitArray[lastHitArray.length - 1];
        
        
        
        // If there are no other hits on the board
        if (this.lastHitArray.length === 1){
            
        }
            // getNextAttackableCell(random direction)
                // repeat for all 4 directions until we've found something
                // ATTACK it

        // If there is an adjacent hit

            // getNextAttackableCell(opposite direction)
                // if we find one, ATTACK it
                // if we don't, getNextAttackableCell(original direction)
                    // if we find one, ATTACK
                    // if we don't, something has gone very wrong

        // If there is a hit elsewhere on the board
            // if it is in the same row/column
                // getNextAttackableCell(towards other cell)
                    // if found, ATTACK
                    // if not found, get random adjacent cell
            // if it is elsewhere, get random adjacent cell



        // If we don't have a direction, get a random direction
        // Find the next cell in that direction
        this.direction = getRandomDirection();
        console.log(this.direction)
        let cellToCheck = getAdjacentCell(this.lastHit, this.direction);
        console.log(cellToCheck)
        let cellContents = enemy.gameboard.checkSquare(cell[0], cell[1]);
        if (cellContents === undefined || cellContents === null){
            
        }
        return cell

    }
    function getRandomCell() {
        // Get row and col for a random AI attack from the availableAttacks array
        let arrayRow = Math.floor(Math.random() * availableAttacks.length);
        let arrayCol = Math.floor(Math.random() * availableAttacks[arrayRow].length);
        // Remove the square from the availableAttacks array & get the coordinates
        let attackCoords = availableAttacks[arrayRow].splice(arrayCol, 1)[0];
        if (availableAttacks[arrayRow].length === 0) availableAttacks.splice(arrayRow, 1);
        return attackCoords;
    }
    function getAdjacentCell(cell, direction){
        let [row, col] = cell;
        switch(direction){
            case 'up':
                row--;
                break;
            case 'down':
                row++;
                break;
                case 'left':
                col--;
                break;
            case 'right':
                col++;
                break;
            default:
                break;
        }
        return [row, col];
    }
    // Check if a cell is adjacent to, or in the same row/col as another
    // Return the direction to the cell, the opposite direction, and the distance
    function getAdjacency(cell, neighbourCell){
        let direction;
        let oppositeDirection;
        let distance;
        if (cell[0] === neighbourCell[0]){
            const diff = cell[1] - neighbourCell[1];
            direction = diff > 1 ? 'left' : 'right';
            oppositeDirection = diff > 1 ? 'right' : 'left';
            distance = Math.abs(diff);
        } else if (cell[1] === neighbourCell[1]){
            const diff = cell[0] - neighbourCell[0];
            direction = diff > 1? 'down' : 'up';
            oppositeDirection = diff > 1 ? 'up' : 'down';
            distance = Math.abs(diff);
        } else {
            return false;
        }
        return {
            direction,
            oppositeDirection,
            distance
        }
    }
    // Look for a possible cell to attack in a given direction (search 4 cells only)
    function getNextAttackableCell(enemy, cell, direction){
        let nextCell = getAdjacentCell(cell, direction);
        for (let i = 0; i < 5; i++){
            let nextCellStatus = enemy.gameboard.checkSquare(nextCell[0], nextCell[1]);
            if (typeof nextCellStatus === 'object' || nextCellStatus === null) return nextCell;
            if (nextCellStatus === undefined) return false;
            if (nextCellStatus === 'miss') return false;
            // We skip over a hit (could be part of the same ship we're attacking),
            // unless that ship is sunk - then we shouldn't keep attacking in that direction
            if (nextCellStatus === 'hit'){
                if (this.checkIfShipIsSunk(enemy, nextCell)) return false;
            }
            nextCell = getAdjacentCell(nextCell, direction);
        }
        return false;
    }
    // Find the ship at a certain cell and check if it is sunk
    // If it is, remove its squares from the lastHitArray and return true
    function checkIfShipIsSunk(enemy, cell){
        const enemyShips = enemy.gameboard.placedShips;
        let hitShip;
        enemyShips.forEach(ship => {
            if (ship.squares.some(square => {
                return (square[0] === cell[0] && square[1] === cell[1])
            })) hitShip = ship;
        })
        if (hitShip.isSunk()){
            hitShip.squares.forEach(square => {
                const index = this.lastHitArray.findIndex(location => {
                    return (location[0] === square[0] && location[1] === square[1])
                });
                console.log(index)
                if (index > -1) this.lastHitArray.splice(index, 1);
            });
            return true;
        } else return false;
    }
    return {
        lastShip,
        lastHitArray,
        possibleDirections,
        lastLocation,
        lastResult,
        confirmedOrientation,
        direction,
        attack,
        getAdjacentCell,
        getNextAttackableCell,
        getAdjacency,
        checkIfShipIsSunk
    }
}



function getRandomDirection(){
    const directions = [
        'up',
        'down',
        'left',
        'right'
    ];
    return directions[Math.floor(Math.random() * directions.length)];
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

export default aiLogic;