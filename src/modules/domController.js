import Game from './game';

const app = document.createElement('div');
app.id = 'app';
document.body.appendChild(app);

const player1Board = drawBoard();
const player2Board = drawBoard();

app.append(player1Board, player2Board);

function drawBoard(){
    const board = document.createElement('div');
    board.classList.add('board');
    for (let i = 0; i < 100; i++){
        const cell = document.createElement('div');
        cell.classList.add('cell');
        board.appendChild(cell);
    }
    return board;
}