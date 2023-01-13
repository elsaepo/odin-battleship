function aiLogic() {
    // Create a 2D array of available attack coordinates
    const availableAttacks = createAttackArray();
    let lastShip;
    let lastHit;
    let lastLocation;
    let lastResult;
    let confirmedOrientation;
    let direction;
    function attack(enemy) {
        if (availableAttacks.length === 0) return 'No squares to attack';
        // If the last hit ship is sunk, or nothing has been hit yet, get a random cell
        if (!this.lastShip || this.lastShip.isSunk()){
            this.confirmedOrientation = null;
            this.direction = null;
            let attackCoords = getRandomCell();
            return attackCoords;
        }
        // Else, we choose the next cell adjacent to the lastHit
        console.log('searching for next cell')
        // if (this.direction){
        //     console.log(`dir: ${this.direction}`)
        //     let cell = getAdjacentCell(this.lastHit, this.direction);
        //     console.log(cell)
        // }

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
            case 'right':
                col++;
                break;
            case 'left':
                col--;
                break;
            default:
                break;
        }
        return [row, col];
    }
    // Look for a possible cell to attack in a given direction (search 4 cells only)
    function getNextAttackableCell(enemy, cell, direction){
        let nextCell = getAdjacentCell(cell, direction);
        for (let i = 0; i < 5; i++){
            let nextCellStatus = enemy.gameboard.checkSquare(nextCell[0], nextCell[1]);
            if (typeof nextCellStatus === 'object' || nextCellStatus === null) return nextCell;
            if (nextCellStatus === 'miss') return false;
            // We skip over a hit (could be part of the same ship we're attacking),
            // unless that ship is sunk - then we shouldn't keep attacking in that direction
            if (nextCellStatus === 'hit'){
                // This simply finds the enemy ship that was hit at nextCell and checks if sunk
                const enemyShips = enemy.gameboard.placedShips;
                let hitShip;
                enemyShips.forEach(ship => {
                    if (ship.squares.some(square => {
                        return (square[0] === nextCell[0] && square[1] === nextCell[1])
                    })) hitShip = ship;
                })
                if (hitShip.isSunk()) return false;
            }
            nextCell = getAdjacentCell(nextCell, direction);
        }
        return false;
    }
    return {
        lastShip,
        lastHit,
        lastLocation,
        lastResult,
        confirmedOrientation,
        direction,
        attack,
        getAdjacentCell,
        getNextAttackableCell
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