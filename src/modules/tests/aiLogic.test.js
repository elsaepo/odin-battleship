import Game from '../game';
import aiLogic from '../aiLogic';
// import getAdjacentCell from '../aiLogic';

let game;
let player1;
let ai2;
let aiModule;

beforeEach(() => {
    game = Game();
    player1 = game.createPlayer('bob', 1);
    ai2 = game.createPlayer(false, 2);
    aiModule = aiLogic();
})

test('can find each adjacent cell', () => {
    const cell = [2,4];
    const upCell = aiModule.getAdjacentCell(cell, 'up');
    const downCell = aiModule.getAdjacentCell(cell, 'down');
    const leftCell = aiModule.getAdjacentCell(cell, 'left');
    const rightCell = aiModule.getAdjacentCell(cell, 'right');
    expect(upCell).toEqual([1,4]);
    expect(downCell).toEqual([3,4]);
    expect(leftCell).toEqual([2,3]);
    expect(rightCell).toEqual([2,5]);
})

test('cannot find an attackable cell when looking off grid', () => {
    const cell = aiModule.getNextAttackableCell(player1, [4,9], 'right');
    expect(cell).toBeFalsy;
})

test('after a hit, finds an adjacent hittable cell', () => {
    player1.gameboard.placeShip('battleship', [2,4], 'horizontal');
    player1.gameboard.receiveAttack(2,4);
    const cell = aiModule.getNextAttackableCell(player1, [2,4], 'right');
    expect(cell).toEqual([2,5]);
})

test('after a hit, finds an attackable cell with a hit in the way', () => {
    player1.gameboard.placeShip('battleship', [2,4], 'horizontal');
    player1.gameboard.receiveAttack(2,5);
    player1.gameboard.receiveAttack(2,4);
    const cell = aiModule.getNextAttackableCell(player1, [2,4], 'right');
    expect(cell).toEqual([2,6]);
})

test('after a hit, does not find an attackable cell with a miss in the way', () => {
    player1.gameboard.placeShip('battleship', [2,4], 'horizontal');
    player1.gameboard.receiveAttack(2,3);
    player1.gameboard.receiveAttack(2,4);
    const cell = aiModule.getNextAttackableCell(player1, [2,4], 'left');
    expect(cell).toBeFalsy;
})

test('after a hit, does not find an attackable cell with a sunk ship in the way', () => {
    player1.gameboard.placeShip('patrol', [1,3], 'vertical');
    player1.gameboard.receiveAttack(1,3);
    player1.gameboard.receiveAttack(2,3);
    player1.gameboard.placeShip('battleship', [2,4], 'horizontal');
    player1.gameboard.receiveAttack(2,4);
    const cell = aiModule.getNextAttackableCell(player1, [2,4], 'left');
    expect(cell).toBeFalsy;
})

test('after sinking a ship, remove items from lastHitArray', () => {
    player1.gameboard.placeShip('patrol', [1,3], 'vertical');
    player1.gameboard.placeShip('battleship', [2,4], 'horizontal');
    player1.gameboard.receiveAttack(2,4);
    aiModule.lastHitArray.push([2,4]);
    player1.gameboard.receiveAttack(1,3);
    aiModule.lastHitArray.push([1,3]);
    player1.gameboard.receiveAttack(2,3);
    aiModule.lastHitArray.push([2,3]);
    expect(aiModule.lastHitArray.length).toBe(3);
    const result = aiModule.checkIfShipIsSunk(player1, [2,3]);
    expect(result).toBe(true);
    expect(aiModule.lastHitArray.length).toBe(1);
})

test('check adjaceny within row', () => {
    const adjacency = aiModule.getAdjacency([2,4], [2,6]);
    expect(adjacency.direction).toBe('right');
    expect(adjacency.oppositeDirection).toBe('left');
    expect(adjacency.distance).toBe(2);
})

test('if there is a hit registered adjacent, attack opposite cell',  () => {
    player1.gameboard.placeShip('battleship', [2,4], 'horizontal');
    player1.gameboard.receiveAttack(2,4);
    aiModule.lastHitArray.push([2,4]);
    player1.gameboard.receiveAttack(2,5);
    aiModule.lastHitArray.push([2,5]);
    const result = ai2.attack(player1);
    expect(result[0]).toEqual([2,6]);
})

test('if there is only one hit registered, get a random adjacent cell', () => {
    player1.gameboard.placeShip('battleship', [2,4], 'horizontal');
    player1.gameboard.receiveAttack(2,4);
    aiModule.lastHitArray.push([2,4]);
    const result = ai2.attack(player1);
    const cell = result[1];
    expect(result[0]).toBe('string');
    expect(Math.abs(cell[0] - 2)).toBeLessThanOrEqual(1);
    expect(Math.abs(cell[1] - 4)).toBeLessThanOrEqual(1);
})