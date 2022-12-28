import Ship from '../ship';

test('create ship with length 3', () => {
    let ship = Ship(3)
    expect(ship.length).toBe(3);
})

test('register 1 hit', () => {
    let ship = Ship(3);
    expect(ship.hits).toBe(0);
    ship.hit()
    expect(ship.hits).toBe(1)
})

test('3 hits, is sunk', () => {
    let ship = Ship(3);
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(false);
    ship.hit();
    expect(ship.isSunk()).toBe(true);
    ship.hit();
    expect(ship.isSunk()).toBe(true);
})