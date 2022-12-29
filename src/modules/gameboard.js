import Ship from './ship';

function Gameboard(){
    const board = createEmptyGameboard();
    const placedShips = [];
    // Create a 10x10 2d array gameboard
    function createEmptyGameboard(){
        let gameboardArray = [];
        for (let row = 0; row <= 9; row++){
            let rowArray = [];
            for (let col = 0; col <= 9; col++){
                rowArray[col] = null;
            }
            gameboardArray[row] = rowArray;
        }
        return gameboardArray;
    }
    // Return the value of a square in the gameboard, and undefined if outside the gameboard extents
    function checkSquare(row, col){
        if (row < 0 || col < 0) return undefined;
        if (row > 9 || col > 9) return undefined;
        else return this.board[row][col];
    }
    function placeShip(shipLength, origin, alignment){
        const ship = Ship(shipLength);
        // Create an array of ship placement squares
        let [row, col] = origin;
        let shipSquares = [];
        for (let i = 0; i < ship.length; i++){
            shipSquares.push([row, col]);
            alignment === 'horizontal' ? col++ : row++;
        }
        // If every placement square is null, place the ship on all those squares
        if (shipSquares.every(square => {
            let [row, col] = square;
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
    // Receives an attack and returns 'hit' or 'miss' depending on result
    function receiveAttack(row, col){
        if (this.checkSquare(row, col) === undefined) return "Invalid location";
        if (this.board[row][col] === null) this.board[row][col] = 'miss';
        else {
            this.board[row][col].hit();
            this.board[row][col] = 'hit';
        }
        return this.board[row][col];
    }
    function checkAllShipsSunk(){
        return placedShips.every(ship => ship.isSunk());
    }
    return {
        board,
        checkSquare,
        placeShip,
        receiveAttack,
        checkAllShipsSunk
    }
}

export default Gameboard;