import Gameboard from '../gameboard';
import Ship from '../ship';

let gameboard;
let ship3;
let ship4;

beforeEach(() => {
    gameboard = Gameboard();
    ship3 = Ship(3);
    ship4 = Ship(4);
})

test('check empty gameboard extents', () => {
    expect(gameboard.checkSquare(0,0)).toBe(null);
    expect(gameboard.checkSquare(2,5)).toBe(null);
    expect(gameboard.checkSquare(0,10)).toBe(undefined);
    expect(gameboard.checkSquare(12,19)).toBe(undefined);
})

test('place ship horizontally at origin', () => {
    gameboard.placeShip(ship3, [0,0], 'horizontal')
    expect(gameboard.checkSquare(0,0)).toBe(ship3);
    expect(gameboard.checkSquare(0,1)).toBe(ship3);
    expect(gameboard.checkSquare(0,2)).toBe(ship3);
    expect(gameboard.checkSquare(0,3)).not.toBe(ship3);
})

test('place ship vertically in center', () => {
    gameboard.placeShip(ship3, [2,4], 'vertical');
    expect(gameboard.checkSquare(2,4)).toBe(ship3);
    expect(gameboard.checkSquare(3,4)).toBe(ship3);
    expect(gameboard.checkSquare(4,4)).toBe(ship3);
    expect(gameboard.checkSquare(5,4)).not.toBe(ship3);
})

test('cannot place ship off grid', () => {
    gameboard.placeShip(ship3, [2,8], 'horizontal');
    expect(gameboard.checkSquare(2,8)).toBe(null);
    expect(gameboard.checkSquare(2,10)).toBe(undefined);
})

test('cannot place intersecting ships', () => {
    gameboard.placeShip(ship3, [0,0], 'horizontal');
    expect(gameboard.checkSquare(0,1)).toBe(ship3);
    gameboard.placeShip(ship4, [0,0], 'vertical');
    expect(gameboard.checkSquare(0,0)).toBe(ship3);
    expect(gameboard.checkSquare(1,0)).toBe(null);
})

test('ship object is the same reference', () => {
    gameboard.placeShip(ship3, [0,0], 'horizontal');
    expect(gameboard.checkSquare(0,0)).toBe(gameboard.checkSquare(0,1));
})

test('record a hit', () => {
    gameboard.placeShip(ship3, [2,4], 'vertical');
    gameboard.receiveAttack(3,4);
    expect(gameboard.checkSquare(3,4).hits).toBe(1);
    //WHAT TO DO WITH RECORDED HITS?
})

test('record a sunk ship', () => {
    gameboard.placeShip(ship3, [2,4], 'vertical');
    gameboard.receiveAttack(2,4);
    expect(ship3.isSunk()).toBe(false);
    gameboard.receiveAttack(3,4);
    expect(ship3.isSunk()).toBe(false);
    gameboard.receiveAttack(4,4);
    expect(ship3.isSunk()).toBe(true);
})

test('record a miss', () => {
    gameboard.placeShip(ship3, [2,4], 'vertical');
    gameboard.receiveAttack(1,8);
    expect(gameboard.checkSquare(1,8)).toBe('miss');
})

test('report 1/1 ships sunk', () => {
    gameboard.placeShip(ship3, [2,4], 'vertical');
    expect(gameboard.checkAllShipsSunk()).toBe(false);
    gameboard.receiveAttack(0,0);
    gameboard.receiveAttack(2,4);
    gameboard.receiveAttack(3,4);
    expect(gameboard.checkAllShipsSunk()).toBe(false);
    gameboard.receiveAttack(4,4);
    expect(gameboard.checkAllShipsSunk()).toBe(true);
})

test('report 2/2 ships sunk', () => {
    gameboard.placeShip(ship4, [0,0], 'horizontal');
    gameboard.receiveAttack(0,0);
    gameboard.receiveAttack(0,1);
    gameboard.receiveAttack(0,2);
    gameboard.receiveAttack(0,3);
    gameboard.placeShip(ship3, [2,4], 'vertical');
    gameboard.receiveAttack(2,4);
    gameboard.receiveAttack(3,4);
    gameboard.receiveAttack(4,4);
    expect(gameboard.checkAllShipsSunk()).toBe(true);
})