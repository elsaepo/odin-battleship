import check from '../check';

test('testing works', () => {
    expect(1).toBe(1);
})

test('module loaded', () => {
    expect(check(4)).toBe(8)
})