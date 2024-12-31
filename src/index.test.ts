const { hoaraSort } = require('./index');

const array = [1, 4, 5, 12, 553, 2, 3, 54, 2345, 23, 64, 11, 38, 90, 129, 0, 34, 9];
const sortedArray = array.slice().sort((item1, item2) => item1 - item2);

test('test', () => {
    expect(hoaraSort(array)).toEqual(sortedArray);
});