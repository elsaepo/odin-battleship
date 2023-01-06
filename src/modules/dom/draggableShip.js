function makeDraggableShip(shipObject){
    const shipContainer = document.createElement('div');
    shipContainer.classList.add('setup-ship');



    const ship = drawShip(shipObject);
    
    const shipName = document.createElement('p');
    shipName.textContent = shipObject.type;
    shipContainer.append(ship, shipName);

    return shipContainer;
}


function drawShip(shipObject) {
    const ship = document.createElement('div');
    ship.classList.add('setup-ship-box');
    for (let i = 0; i < shipObject.length; i++) {
        const shipCell = document.createElement('div');
        shipCell.classList.add('setup-ship-cell');
        ship.appendChild(shipCell);
    }
    ship['draggable'] = true;
    
    return ship;
}

export default makeDraggableShip;