import Game from '../game';
import createHeaderBox from './header';
import createFooterBox from './footer';
import shipTypes from '../shipTypes';
import makeDraggableShip from './draggableShip';

const app = document.createElement('div');
app.id = 'app';
document.body.appendChild(app);
const header = createHeaderBox();
const footer = createFooterBox();
const gameContainer = document.createElement('div');
gameContainer.id = 'game-container';
app.appendChild(header);
app.appendChild(gameContainer);
app.appendChild(footer);

const game = Game();
// drawGame('Bob', false)
// drawGame('bob', true)
newGame();

function startGame(player1, player2){
    game.newGame(player1, player2);
    drawGame();
}

function newGame(){
    const newPlayer1 = game.createPlayer('Mysterio', 1);
    const newPlayer2 = game.createPlayer(false, 2);
    newPlayer2.gameboard.placeAllShipsRandomly();
    drawSetup(newPlayer1);
    const startGameButton = document.querySelector('.setup-button-start');
    startGameButton.addEventListener('click', function(event){
        if (newPlayer1.gameboard.placedShips.length === 5){
            startGame(newPlayer1, newPlayer2);
        }
        
    });
}

function clearContainer(container){
    while (container.firstChild) container.removeChild(container.firstChild);
}

function drawGame() {
    clearContainer(gameContainer);
    const player1BoardContainer = drawBoardContainer(game.player1);
    const player2BoardContainer = drawBoardContainer(game.player2);
    populateBoard(game.player1, player1BoardContainer.querySelector('.board'));
    gameContainer.append(player1BoardContainer, player2BoardContainer);

}

function drawSetup(player){
    clearContainer(gameContainer);
    const setupBoard = drawSetupBoard(player);
    const setupShips = drawSetupShips();

    const ships = setupShips.querySelectorAll('.setup-ship-box');
    console.log(ships)

    const randomShipsButton = setupShips.querySelector('.setup-button-random');
    randomShipsButton.addEventListener('click', function(event){
        randomizeFleet(player, setupBoard)
    });
    
    gameContainer.append(setupBoard, setupShips);
}

function drawSetupBoard(player) {
    // placeholder that just draws an empty grid
    const setupBoard = drawBoardContainer(player)
    const setupCells = setupBoard.querySelectorAll('.cell')
    setupCells.forEach(cell => {
        cell.player = player;
        cell.board = setupBoard.querySelector('div');
        cell.addEventListener('dragenter', dragEnter);
        cell.addEventListener('dragover', dragOver);
        cell.addEventListener('dragleave', dragLeave);
        cell.addEventListener('drop', drop);
    })
    return setupBoard;
}

function drawSetupShips(player) {
    const setupShipsContainer = document.createElement('div');
    setupShipsContainer.classList.add('setup-ships-container');
    const setupShipsTitle = document.createElement('h3');
    setupShipsTitle.textContent = 'place your ships:';
    const setupShipsOptions = document.createElement('div');
    setupShipsOptions.classList.add('setup-ships-options');
    const startGame = document.createElement('button');
    startGame.classList.add('setup-button-start');
    startGame.textContent = 'TO BATTLE!';
    const randomShips = document.createElement('button');
    randomShips.classList.add('setup-button-random');
    randomShips.textContent = 'randomize';
    setupShipsOptions.append(startGame, randomShips);
    const shipList = document.createElement('div');
    for (let ship in shipTypes){
        shipList.appendChild(drawShip(shipTypes[ship]));
    }
    setupShipsContainer.append(setupShipsTitle, shipList, setupShipsOptions);
    return setupShipsContainer;
}

function drawShip(ship) {
    const shipContainer = document.createElement('div');
    shipContainer.classList.add('setup-ship');
    const shipBox = document.createElement('div');
    shipBox.id = ship.name;
    shipBox.dataset.length = ship.length;
    shipBox.classList.add('setup-ship-box');
    for (let i = 0; i < ship.length; i++) {
        const shipCell = document.createElement('div');
        shipCell.classList.add('setup-ship-cell');
        shipBox.appendChild(shipCell);
    }
    shipBox.draggable = true;

    shipBox.addEventListener('dragstart', dragStart);

    const shipName = document.createElement('p');
    shipName.textContent = ship.name;
    shipContainer.append(shipName, shipBox);
    return shipContainer;
}



function dragStart(event){
    event.dataTransfer.setData(`${event.target.id}`, true);
    setTimeout(() => {
        event.target.classList.add('setup-ship-hide');
    }, 0)
}

function dragEnter(event){
    event.preventDefault();
    const type = event.dataTransfer.types[0];
    const player = event.target.player;
    const board = event.target.board;
    const row = parseInt(event.target.dataset.row);
    const col = parseInt(event.target.dataset.col);
    console.log(player)
    const shipSquares = player.gameboard.checkValidPlacement(shipTypes[type].length, [row, col], 'horizontal')
    shipSquares.squares = shipSquares.squares.filter(square => {
        return player.gameboard.checkSquare(square[0], square[1]) !== undefined;
    })
    shipSquares.squares.forEach(square => {
        const cell = board.querySelector(`[data-row='${square[0]}'][data-col='${square[1]}']`);
        cell.classList.add('cell-drag-over');
        if (shipSquares.isValid) cell.classList.add('cell-drag-valid');
        else cell.classList.add('cell-drag-invalid');
    })
    event.target.classList.add('cell-drag-over');
}

function dragOver(event){
    event.preventDefault();
}

function dragLeave(event){
    const leftCells = document.querySelectorAll('.cell-drag-over');
    leftCells.forEach(cell => {
        cell.classList.remove('cell-drag-over', 'cell-drag-valid', 'cell-drag-invalid');
    })
}

function drop(event){
    const leftCells = document.querySelectorAll('.cell-drag-over');
    leftCells.forEach(cell => {
        cell.classList.remove('cell-drag-over', 'cell-drag-valid', 'cell-drag-invalid');
    })

    const type = event.dataTransfer.types[0];
    const shipElement = document.getElementById(type);
    event.target.appendChild(shipElement)
    shipElement.classList.remove('setup-ship-hide');
    shipElement.classList.add('setup-ship-dropped');
    const player = event.target.player;
    const board = event.target.board;
    const row = event.target.dataset.row;
    const col = event.target.dataset.col;
    player.gameboard.placeShip(shipElement.id, [row,col], 'horizontal')
    // populateBoard(player, board)
}

//
/// REMOVE SHIP FUNCTION ON PICKING UP PLACED SHIP
// I.E., IF CLASS HAS DROPPED, THEN REMOVE THE SHIP
//
//
//
// THEN FIGURE OUT HOW TO DO ROTATION
//
// THEN ADD IN GHOST SHIP SO IS OBVIOUS TO PLAYER WHAT SHIPS ARE LEFT TO PLACE AND WHAT HAS BEEN PLACED
///
//
//
///
//

function randomizeFleet(player, board){
    player.gameboard.placeAllShipsRandomly();
    populateBoard(player, board);
}

//
// 
// IF GAME CONTAINER HEIGHT IS BIGGER THAN 500PX (I.E., WRAPPED), ADJUST HEADER TO SUIT
// THIS IS A VERY SCUFFED SOLUTION AND PORBABLY BREAKS WHEN PLACING SHIPS ON SINGLE GRID VIEW
//
//
const gameSizeObserver = new ResizeObserver(entry => {
    if (entry[0].contentRect.height > 500) header.style.width = '320px';
    else header.style.width = `${entry[0].contentRect.width}px`;
    // header.style.width = `${entry[0].contentRect.width}px`;
})

gameSizeObserver.observe(gameContainer);

//
//
//
//

// Hold the information of the player's board - name, board and ships left
function drawBoardContainer(player) {
    const boardContainer = document.createElement('div');
    boardContainer.classList.add('board-container');
    const playerName = document.createElement('h3');
    // CAN TRIM THIS LATER PROBABLY
    if (player) playerName.textContent = `${player.name}'s fleet`;
    else playerName.textContent = 'your current fleet';
    const playerBoard = drawBoard(player);
    boardContainer.append(playerName, playerBoard);
    return boardContainer;
}

// Draw a grid of cells with data attributes for their locations
function drawBoard(player) {
    const board = document.createElement('div');
    board.classList.add('board');
    for (let row = 0; row < 10; row++) {
        for (let col = 0; col < 10; col++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            // CAN TRIM THIS LATER PROBABLY
            cell.dataset.player = player ? player.number : 0;
            cell.dataset.row = row;
            cell.dataset.col = col;
            board.appendChild(cell);
            //
            // MAY NEED TO REVISE
            // NEED TO ADD EVENT LISTENERS ONLY FOR OPPOSING PLAYER'S BOARD
            //
            if (player && player.isAI) cell.addEventListener('click', listenForAttack, false);
        }
    }
    return board;
}

// Upon clicking a cell, attack the relevant square, if allowed
function listenForAttack(event) {
    const cell = event.target
    const defendingPlayerNumber = cell.dataset.player;
    const attackingPlayerNumber = defendingPlayerNumber === '1' ? '2' : '1';
    const attackingPlayer = game[`player${attackingPlayerNumber}`];
    const defendingPlayer = game[`player${defendingPlayerNumber}`];
    if (game.currentPlayer !== attackingPlayer) return;
    const row = cell.dataset.row;
    const col = cell.dataset.col;
    const result = attackingPlayer.attack(defendingPlayer, row, col)[0];
    if (result === 'hit') cell.classList.add('cell-hit');
    if (result === 'miss') cell.classList.add('cell-miss');
    cell.removeEventListener('click', listenForAttack, false)
    nextTurn();
}

// Call an attack for the AI and modify the resulting attacked cell
function callAIAttack(ai) {
    if (ai !== game.currentPlayer) return;
    const defendingPlayerNumber = game.defendingPlayer === game.player1 ? '1' : '2';
    const [result, location] = ai.attack(game.defendingPlayer);
    const cell = document.querySelector(`[data-player='${defendingPlayerNumber}'][data-row='${location[0]}'][data-col='${location[1]}']`)
    if (result === 'hit') cell.classList.add('cell-hit');
    if (result === 'miss') cell.classList.add('cell-miss');
    nextTurn();
}

// Handle end-of-turn events
function nextTurn() {
    const winner = game.checkGameOver();
    if (winner) {
        alert(`${winner.name} wins`)
        return endGame(winner);
    };
    game.changeTurn();
    if (game.currentPlayer.isAI) {
        callAIAttack(game.currentPlayer)
    }
}

function endGame(winner) {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => cell.removeEventListener('click', listenForAttack, false));
    // announce winner
    // reveal both boards
}

// Draw the ships to the player's on-screen board so they can see their fleet
function populateBoard(player, board) {
    for (let row = 0; row < 10; row++) {
        for (let col = 0; col < 10; col++) {
            const square = player.gameboard.board[row][col];
            const cell = board.querySelector(`[data-row='${row}'][data-col='${col}']`);
            if (square !== null && typeof square === 'object') {
                cell.classList.add('cell-ship')
            }
            else cell.classList.remove('cell-ship');
        }
    }
}