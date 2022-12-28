import Player from '../player';

let player1;
let player2;

beforeEach(() => {
    player1 = Player();
    player2 = Player();
})

test('player has own gameboard', () => {
    expect(Array.isArray(player1.gameboard.board)).toBe(true)
})