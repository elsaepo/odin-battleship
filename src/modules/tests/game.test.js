import Game from '../game';

let game;
let player1;
let ai2;

beforeEach(() => {
    game = Game();
    game.newGame('bob', false);
    player1 = game.player1;
    ai2 = game.player2;
})

test('create game with human and ai', () => {
    expect(game.player1.isAI).toBe(false);
    expect(game.player2.isAI).toBe(true);
})

test('players can both make attacks', () => {
    expect(typeof player1.attack(ai2, 0,0)).toBe('string');
    expect(typeof ai2.attack(player1)).toBe('string');
})
