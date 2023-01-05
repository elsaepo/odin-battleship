import Gameboard from '../gameboard';

let gameboard;

beforeEach(() => {
    gameboard = Gameboard();
})

test('check empty gameboard extents', () => {
    expect(gameboard.checkSquare(0,0)).toBe(null);
    expect(gameboard.checkSquare(2,5)).toBe(null);
    expect(gameboard.checkSquare(0,10)).toBe(undefined);
    expect(gameboard.checkSquare(12,19)).toBe(undefined);
})

test('place ship horizontally at origin', () => {
    const ship3 = gameboard.placeShip(3, [0,0], 'horizontal')
    expect(gameboard.checkSquare(0,0)).toBe(ship3);
    expect(gameboard.checkSquare(0,1)).toBe(ship3);
    expect(gameboard.checkSquare(0,2)).toBe(ship3);
    expect(gameboard.checkSquare(0,3)).not.toBe(ship3);
})

test('place ship vertically in center', () => {
    const ship3 = gameboard.placeShip(3, [2,4], 'vertical');
    expect(gameboard.checkSquare(2,4)).toBe(ship3);
    expect(gameboard.checkSquare(3,4)).toBe(ship3);
    expect(gameboard.checkSquare(4,4)).toBe(ship3);
    expect(gameboard.checkSquare(5,4)).not.toBe(ship3);
})

test('cannot place ship off grid', () => {
    const ship3 = gameboard.placeShip(3, [2,8], 'horizontal');
    expect(gameboard.checkSquare(2,8)).toBe(null);
    expect(gameboard.checkSquare(2,10)).toBe(undefined);
})

test('cannot place intersecting ships', () => {
    const ship3 = gameboard.placeShip(3, [0,0], 'horizontal');
    expect(gameboard.checkSquare(0,1)).toBe(ship3);
    const ship4 = gameboard.placeShip(4, [0,0], 'vertical');
    expect(gameboard.checkSquare(0,0)).toBe(ship3);
    expect(gameboard.checkSquare(1,0)).toBe(null);
})

test('ship object is the same reference', () => {
    const ship3 = gameboard.placeShip(3, [0,0], 'horizontal');
    expect(gameboard.checkSquare(0,0)).toBe(gameboard.checkSquare(0,1));
})

test('record a hit', () => {
    const ship3 = gameboard.placeShip(3, [2,4], 'vertical');
    gameboard.receiveAttack(3,4);
    expect(gameboard.checkSquare(3,4)).toBe('hit');
    expect(ship3.hits).toBe(1);
})

test('record a sunk ship', () => {
    const ship3 = gameboard.placeShip(3, [2,4], 'vertical');
    gameboard.receiveAttack(2,4);
    expect(ship3.isSunk()).toBe(false);
    gameboard.receiveAttack(3,4);
    expect(ship3.isSunk()).toBe(false);
    gameboard.receiveAttack(4,4);
    expect(ship3.isSunk()).toBe(true);
})

test('record a miss', () => {
    const ship3 = gameboard.placeShip(3, [2,4], 'vertical');
    gameboard.receiveAttack(1,8);
    expect(gameboard.checkSquare(1,8)).toBe('miss');
})

test('report 1/1 ships sunk', () => {
    const ship3 = gameboard.placeShip(3, [2,4], 'vertical');
    expect(gameboard.checkAllShipsSunk()).toBe(false);
    gameboard.receiveAttack(0,0);
    gameboard.receiveAttack(2,4);
    gameboard.receiveAttack(3,4);
    expect(gameboard.checkAllShipsSunk()).toBe(false);
    gameboard.receiveAttack(4,4);
    expect(gameboard.checkAllShipsSunk()).toBe(true);
})

test('report 2/2 ships sunk', () => {
    const ship4 = gameboard.placeShip(4, [0,0], 'horizontal');
    gameboard.receiveAttack(0,0);
    gameboard.receiveAttack(0,1);
    gameboard.receiveAttack(0,2);
    gameboard.receiveAttack(0,3);
    const ship3 = gameboard.placeShip(3, [2,4], 'vertical');
    gameboard.receiveAttack(2,4);
    gameboard.receiveAttack(3,4);
    gameboard.receiveAttack(4,4);
    expect(gameboard.checkAllShipsSunk()).toBe(true);
})

test('can place a random ship of length 4', () => {
    const ship4 = gameboard.placeShipRandomly(4);
    let shipSquares = 0;
    for (let row = 0; row < 10; row++){
        for (let col = 0; col < 10; col++){
            if (gameboard.checkSquare(row, col) === ship4) shipSquares++;
        }
    }
    expect(shipSquares).toBe(4);
})

test('can place a random ship of length 10', () => {
    const ship10 = gameboard.placeShipRandomly(10);
    let shipSquares = 0;
    for (let row = 0; row < 10; row++){
        for (let col = 0; col < 10; col++){
            if (gameboard.checkSquare(row, col) === ship10) shipSquares++;
        }
    }
    expect(shipSquares).toBe(10);
})

test('can place all ships randomly', () => {
    gameboard.placeAllShipsRandomly();
    let shipSquares = 0;
    for (let row = 0; row < 10; row++){
        for (let col = 0; col < 10; col++){
            if (typeof gameboard.checkSquare(row, col) === 'object' && gameboard.checkSquare(row, col) !== null) shipSquares++;
        }
    }
    expect(gameboard.placedShips.length).toBe(5);
    expect(shipSquares).toBe(17)
})

test('place all ships randomly multiple times', () => {
    gameboard.placeAllShipsRandomly();
    gameboard.placeAllShipsRandomly();
    gameboard.placeAllShipsRandomly();
    let shipSquares = 0;
    for (let row = 0; row < 10; row++){
        for (let col = 0; col < 10; col++){
            if (typeof gameboard.checkSquare(row, col) === 'object' && gameboard.checkSquare(row, col) !== null) shipSquares++;
        }
    }
    expect(gameboard.placedShips.length).toBe(5);
    expect(shipSquares).toBe(17)
})