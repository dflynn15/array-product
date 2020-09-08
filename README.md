# array-product

> Returns an array of all combinations of elements from all arrays.

A simple function to duplicate Ruby's [Array#product](https://ruby-doc.org/core-2.7.1/Array.html#method-i-product), but without extending the function on Array's `prototype`.

## Support

This makes use of `Array.prototype.flatMap` which has limited support in both Node and browsers. For Node this means for native `flatMap` support you need to be above Node 10.x. If you are using this for browsers either polyfill the functionality with your favorite tool or [`core-js`](https://github.com/zloirock/core-js).

[Caniuse browser support.](https://github.com/zloirock/core-js)

## Use

```js
const product = require('array-product');

product([1,2,3], [4,5])     // [[1,4],[1,5],[2,4],[2,5],[3,4],[3,5]]
product([1,2], [1,2])       // [[1,1],[1,2],[2,1],[2,2]]
product([1,2], [3,4],[5,6]) // [[1,3,5],[1,3,6],[1,4,5],[1,4,6],
                            //     [2,3,5],[2,3,6],[2,4,5],[2,4,6]]
product([1,2], nil)         // [[1],[2]]
product([1,2], [])          // []
```
