import Ship from './ship';

function Gameboard() {
    const board = createEmptyGameboard();
    const placedShips = [];
    // Create a 10x10 2d array gameboard
    function createEmptyGameboard() {
        let gameboardArray = [];
        for (let row = 0; row <= 9; row++) {
            let rowArray = [];
            for (let col = 0; col <= 9; col++) {
                rowArray[col] = null;
            }
            gameboardArray[row] = rowArray;
        }
        return gameboardArray;
    }
    function clearBoard(board){
        for (let row = 0; row < 10; row++){
            for (let col = 0; col < 10; col++){
                board[row][col] = null;
            }
        }
    }
    function clearFleet(fleet){
        while (fleet.length > 0) fleet.pop();
    }
    // Return the value of a square in the gameboard, and undefined if outside the gameboard extents
    function checkSquare(row, col) {
        if (row < 0 || col < 0) return undefined;
        if (row > 9 || col > 9) return undefined;
        else return this.board[row][col];
    }
    function placeShip(shipLength, origin, alignment) {
        const ship = Ship(shipLength);
        // Create an array of ship placement squares
        let [row, col] = origin;
        let shipSquares = [];
        for (let i = 0; i < ship.length; i++) {
            shipSquares.push([row, col]);
            alignment === 'horizontal' ? col++ : row++;
        }
        // If every placement square is null, place the ship on all those squares
        if (shipSquares.every(square => {
            let [row, col] = square;
            if (this.checkSquare(row, col) === undefined) return false;
            return this.board[row][col] === null;
        })) {
            shipSquares.forEach(square => {
                let [row, col] = square;
                this.board[row][col] = ship;
            })
            placedShips.push(ship);
            return ship;
        } else return "Cannot place ship in that location";
    }
    function placeAllShipsRandomly(){
        clearBoard(this.board);
        clearFleet(this.placedShips);
        const ships = [5, 4, 3, 3, 2];
        for (let i = 0; i < ships.length; i++){
            let result = this.placeShipRandomly(ships[i]);
            while (typeof result !== 'object' || result === null){
                result = this.placeShipRandomly(ships[i]);
            }
        }
    }
    function placeShipRandomly(shipLength) {
        function getRandomAlignment() {
            return Math.random() < 0.5 ? 'horizontal' : 'vertical';
        }
        function getRandomOrigin(alignment) {
            let rowDif = 0;
            let colDif = 0;
            if (alignment === 'vertical') rowDif = shipLength - 1;
            else colDif = shipLength - 1;
            let row = Math.floor(Math.random() * (10 - rowDif));
            let col = Math.floor(Math.random() * (10 - colDif));
            return [row, col];
        }
        let alignment = getRandomAlignment();
        let origin = getRandomOrigin(alignment);
        let result = this.placeShip(shipLength, origin, alignment);
        while (typeof result !== 'object' || result === null) {
            alignment = getRandomAlignment();
            origin = getRandomOrigin(alignment);
            result = this.placeShip(shipLength, origin, alignment);
        }
        return result;
    }
    // Receives an attack and calculates the result
    // Returns an array - 'hit' or 'miss' depending on result, and the coordinates
    function receiveAttack(row, col) {
        if (this.checkSquare(row, col) === undefined) return "Invalid location";
        if (this.board[row][col] === null) this.board[row][col] = 'miss';
        else {
            this.board[row][col].hit();
            this.board[row][col] = 'hit';
        }
        return [this.board[row][col], [row, col]];
    }
    function checkAllShipsSunk() {
        return placedShips.every(ship => ship.isSunk());
    }
    return {
        board,
        placedShips,
        checkSquare,
        placeShip,
        placeAllShipsRandomly,
        placeShipRandomly,
        receiveAttack,
        checkAllShipsSunk
    }
}

export default Gameboard;