import Game from './game';

const app = document.createElement('div');
app.id = 'app';
document.body.appendChild(app);

const game = Game();
game.newGame("Bob", "Ben");
game.testGame();
const player1Board = drawBoard(1);
const player2Board = drawBoard(2);


app.append(player1Board, player2Board);

populateBoard(game.player1, player1Board)
populateBoard(game.player2, player2Board)

// Draws a grid of cells with data attributes for their locations
function drawBoard(player) {
    const board = document.createElement('div');
    board.classList.add('board');
    for (let row = 0; row < 10; row++) {
        for (let col = 0; col < 10; col++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.dataset.player = player;
            cell.dataset.row = row;
            cell.dataset.col = col;
            board.appendChild(cell);
            cell.addEventListener('click', (event) => {
                listenForAttack(event.target);
            }, { once: true });
        }
    }
    return board;
}

function listenForAttack(cell) {
    const defendingPlayerNumber = cell.dataset.player;
    const attackingPlayerNumber = defendingPlayerNumber === '1' ? '2' : '1';
    const row = cell.dataset.row;
    const col = cell.dataset.col;
    if (getCurrentPlayerNumber(game) !== attackingPlayerNumber) return;
    const attackingPlayer = game[`player${attackingPlayerNumber}`];
    const defendingPlayer = game[`player${defendingPlayerNumber}`];
    const result = attackingPlayer.attack(defendingPlayer, row, col);
    if (result === 'hit') cell.classList.add('cell-hit');
    if (result === 'miss') cell.classList.add('cell-miss');
    game.changeTurn();
}

function getCurrentPlayerNumber(game) {
    if (game.currentPlayer === game.player1) return '1';
    else return '2';
}

// Draws the ships to the player's on-screen board so they can see their fleet
function populateBoard(player, board) {
    for (let row = 0; row < 10; row++) {
        for (let col = 0; col < 10; col++) {
            const square = player.gameboard.board[row][col];
            if (square !== null && typeof square === 'object') {
                const cell = board.querySelector(`[data-row='${row}'][data-col='${col}']`);
                cell.classList.add('cell-ship')
            }
        }
    }
}