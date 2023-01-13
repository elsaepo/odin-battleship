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

