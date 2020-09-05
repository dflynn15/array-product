const test = require('ava');
const product = require('./lib/index.js');

// [1,2].product()            #=> [[1],[2]]
test('product is [] given empty array', t => {
  t.deepEqual(product([1, 2], []), []);
});

// [1,2].product([])          #=> []
test('product is itself given no target array', t => {
  t.deepEqual(product([1]), [1]);
});

// [1,2,3].product([4,5])     #=>
test('product given valid arrays', t => {
  let result = product([1, 2, 3], [4, 5]);
  let expected = [[1, 4], [1, 5], [2, 4], [2, 5], [3, 4], [3, 5]];

  t.deepEqual(result, expected);
});

// [1,2].product([1,2])       #=> [[1,1],[1,2],[2,1],[2,2]]
test('product given identical arrays', t => {
  let result = product([1, 2], [1, 2]);
  let expected = [[1, 1], [1, 2], [2, 1], [2, 2]];

  t.deepEqual(result, expected);
});
