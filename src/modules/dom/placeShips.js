import shipTypes from '../shipTypes';

let player;
let board;

const dragData = {
    shipObject: null,
    shipElement: null,
    rowDif: 0,
    colDif: 0,
    shipHomeContainer: null,
    previousContainer: null,
    previousCell: null,
    currentCell: null,
}

console.table(dragData)


function drawSetupBoard(setupPlayer, setupBoard) {
    // placeholder that just draws an empty grid
    // const setupBoard = drawBoardContainer(player)
    player = setupPlayer;
    board = setupBoard;
    const setupCells = board.querySelectorAll('.cell')
    setupCells.forEach(cell => {
        cell.addEventListener('dragenter', dragEnter);
        cell.addEventListener('dragover', dragOver);
        cell.addEventListener('dragleave', dragLeave);
        cell.addEventListener('drop', drop);
    })
    return setupBoard;
}

function drawSetupShips() {
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
    randomShips.addEventListener('click', randomizeFleet);
    setupShipsOptions.append(startGame, randomShips);
    const shipList = document.createElement('div');
    for (let ship in shipTypes) {
        shipList.appendChild(drawShip(shipTypes[ship]));
    }
    setupShipsContainer.append(setupShipsTitle, shipList, setupShipsOptions);
    return setupShipsContainer;
    
}

function drawShip(ship) {
    const shipContainer = document.createElement('div');
    shipContainer.classList.add('setup-ship');
    shipContainer.id = `${ship.name}-home`;
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
    shipBox.dataset.alignment = 'horizontal';
    shipBox.addEventListener('dragstart', dragStart);
    shipBox.addEventListener('dragend', dragEnd);
    shipBox.addEventListener('dblclick', rotateShip);

    const shipName = document.createElement('p');
    if (ship.name === 'patrol') shipName.textContent = 'patrol boat';
    else shipName.textContent = ship.name;
    shipContainer.append(shipName, shipBox);
    return shipContainer;
}

function randomizeFleet(){
    player.gameboard.placeAllShipsRandomly();
    player.gameboard.placedShips.forEach(ship => {
        const type = ship.type;
        const origin = ship.squares[0];
        const alignment = ship.alignment;
        const shipElement = document.querySelector(`#${type}`);
        shipElement.dataset.alignment = alignment;
        shipElement.classList.add('setup-ship-dropped');
        if (alignment === 'vertical') shipElement.classList.add('setup-ship-vertical');
        else shipElement.classList.remove('setup-ship-vertical');
        const [row, col] = origin;
        const cell = board.querySelector(`[data-row='${row}'][data-col='${col}']`);
        cell.appendChild(shipElement);
        console.log(shipElement.dataset)
    })
}

function updateCellDif(event) {
    const x = event.offsetX;
    const y = event.offsetY;
    const cellSize = event.target.firstChild.offsetWidth;
    if (dragData.shipElement.dataset.alignment === 'horizontal') {
        dragData.rowDif = 0;
        dragData.colDif = Math.floor(x / (cellSize + 2));
    } else {
        dragData.rowDif = Math.floor(y / (cellSize + 2));
        dragData.colDif = 0;
    }
}

function rotateShip(event){
    const shipElement = event.target.parentElement;
    const originCell = shipElement.parentElement;
    if (!originCell.classList.contains('cell')) return;
    const originRow = parseInt(originCell.dataset.row);
    const originCol = parseInt(originCell.dataset.col);
    player.gameboard.removeShip([originRow, originCol]);
    let row = originRow;
    let col = originCol;
    let originAlignment = shipElement.dataset.alignment;
    let newAlignment = originAlignment === 'horizontal' ? 'vertical' : 'horizontal';
    let attempts = 0;
    let shipSquares = player.gameboard.checkValidPlacement(shipTypes[shipElement.id].length, [row, col], newAlignment);
    while (shipSquares.isValid === false && attempts < 10){
        if (newAlignment === 'horizontal'){
            row = row < 9 ? row + 1 : 0;
        }
        else col = col < 9 ? col + 1 : 0;
        shipSquares = player.gameboard.checkValidPlacement(shipTypes[shipElement.id].length, [row, col], newAlignment);
        attempts++;
    }
    if (shipSquares.isValid){
        player.gameboard.placeShip(shipElement.id, [row, col], newAlignment);
        const newOriginCell = board.querySelector(`[data-row='${row}'][data-col='${col}']`);
        newOriginCell.appendChild(shipElement);
        shipElement.dataset.alignment = newAlignment;
        if (newAlignment === 'vertical') shipElement.classList.add('setup-ship-vertical');
        else shipElement.classList.remove('setup-ship-vertical');
    }
    else {
        player.gameboard.placeShip(shipElement.id, [originRow, originCol], originAlignment);
    }
}

function dragStart(event) {
    console.table(dragData, ['value'])
    dragData.shipElement = event.target;
    dragData.shipHomeContainer = document.querySelector(`#${event.target.id}-home`);
    dragData.previousContainer = event.target.parentElement;
    updateCellDif(event)
    console.log(dragData.shipElement.alignment)
    if (dragData.shipElement.dataset.alignment === 'vertical') dragData.shipElement.classList.add('setup-ship-vertical');
    // else dragData.shipElement.classList.remove('setup-ship-vertical');
    // dragData.shipElement.classList.add('setup-ship-dragging')
    // event.parentElement = event.target.parentElement;
    event.dataTransfer.setData(`${event.target.id}`, true);
    setTimeout(() => {
        dragData.shipElement.classList.add('setup-ship-hide');
        dragData.shipElement.classList.remove('setup-ship-dropped');
        dragData.shipElement.classList.remove('setup-ship-vertical');
    }, 0);
    if (dragData.previousContainer.classList.contains('cell')) {
        const cell = dragData.previousContainer;
        const row = parseInt(cell.dataset.row);
        const col = parseInt(cell.dataset.col);
        player.gameboard.removeShip([row, col]);
        // populateBoard(player, board);
    }
    setTimeout(() => {
        dragData.shipHomeContainer.appendChild(dragData.shipElement)
    }, 0);
}

function dragEnd(event) {
    dragData.shipElement.classList.remove('setup-ship-hide');
    }

function dragEnter(event) {
    event.preventDefault();
    const type = event.dataTransfer.types[0];
    const row = parseInt(event.target.dataset.row) - parseInt(dragData.rowDif);
    const col = parseInt(event.target.dataset.col) - parseInt(dragData.colDif);
    const shipSquares = player.gameboard.checkValidPlacement(shipTypes[type].length, [row, col], dragData.shipElement.dataset.alignment)
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
    //
    //
    // HERE WE SHOULD BE ABLE TO SEE THE BOARD UNDERNEATH A SHIP BOX
    // IGNORING IT IN SOME WAY?
    //
    //
}

function dragOver(event) {
    event.preventDefault();
}

function dragLeave(event) {
    const leftCells = document.querySelectorAll('.cell-drag-over');
    leftCells.forEach(cell => {
        cell.classList.remove('cell-drag-over', 'cell-drag-valid', 'cell-drag-invalid');
    })
}

function drop(event) {
    console.table(dragData, ['value']);
    const leftCells = document.querySelectorAll('.cell-drag-over');
    leftCells.forEach(cell => {
        cell.classList.remove('cell-drag-over', 'cell-drag-valid', 'cell-drag-invalid');
    })

    const type = event.dataTransfer.types[0];
    // const shipElement = document.getElementById(type);


    const row = parseInt(event.target.dataset.row) - parseInt(dragData.rowDif)
    const col = parseInt(event.target.dataset.col) - parseInt(dragData.colDif)
    const shipSquares = player.gameboard.checkValidPlacement(shipTypes[type].length, [row, col], dragData.shipElement.dataset.alignment)
    if (shipSquares.isValid) {
        const originCell = board.querySelector(`[data-row='${row}'][data-col='${col}']`);
        originCell.appendChild(dragData.shipElement)

        dragData.shipElement.classList.add('setup-ship-dropped');
        dragData.previousContainer = originCell;
        player.gameboard.placeShip(dragData.shipElement.id, [row, col], dragData.shipElement.dataset.alignment)
    }
    else {
        if (dragData.previousContainer.classList.contains('cell')){
            dragData.shipElement.classList.add('setup-ship-dropped');
            const prevRow = dragData.previousContainer.dataset.row;
            const prevCol = dragData.previousContainer.dataset.col;
            player.gameboard.placeShip(dragData.shipElement.id, [prevRow, prevCol], dragData.shipElement.dataset.alignment)
        }
        dragData.previousContainer.appendChild(dragData.shipElement)
        
    }
    // dragData.shipElement.classList.add('setup-ship-dropped')
    dragData.shipElement.classList.remove('setup-ship-hide');
    if (dragData.shipElement.dataset.alignment === 'vertical') dragData.shipElement.classList.add('setup-ship-vertical');
        else dragData.shipElement.classList.remove('setup-ship-vertical');

    // populateBoard(player, board)
}

const setup = {
    drawSetupBoard,
    drawSetupShips
}



export default setup;