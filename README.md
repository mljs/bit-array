# bit-array

  [![NPM version][npm-image]][npm-url]
  [![build status][travis-image]][travis-url]
  [![David deps][david-image]][david-url]
  [![npm download][download-image]][download-url]

Bit-array operations in JavaScript

## Installation

`npm install ml-bit-array`

## Methods

### count(arr)

Calculates the sum of the amount of `1` in the numbers. This is also known as [Hamming weight](https://en.wikipedia.org/wiki/Hamming_weight)

### and(arr1, arr2)

Calculates the logical [AND](https://en.wikipedia.org/wiki/Logical_conjunction) operation using the numbers in the arrays as 32-bits binaries. The arrays needs to have the same length

### or(arr1, arr2)

Calculates the logical [OR](https://en.wikipedia.org/wiki/Logical_disjunction) operation using the numbers in the arrays as 32-bits binaries. The arrays needs to have the same length

### xor(arr1, arr2)

Calculates the logical [XOR](https://en.wikipedia.org/wiki/Logical_biconditional) operation using the numbers in the arrays as 32-bits binaries. The arrays needs to have the same length

### not(arr)

Calculates the logical [NOT](https://en.wikipedia.org/wiki/Negation) operation using the numbers in the array as 32-bits binaries. Don't forget that will be interpreted as a signed integer.

### getBit(arr, n)

Imagine that you have an array of 4-bit numbers like this `['0001','1010']`, the 0th position will be `0` because is the most significant bit of the 0th element of the array, and the 4th position will be `1`, because will be the most significant bit in the 1st element of the array (remember that the real number of bits for a number in this case is 32).

### setBit(arr, n, val)

Imagine that you have an array of 4-bit numbers like this `['0001','1010']`, the 0th position will be `0` because is the most significant bit of the 0th element of the array, and the 4th position will be `1`, because will be the most significant bit in the 1st element of the array (remember that the real number of bits for a number in this case is 32).

The logical function to update the value is based in `(a & c) | (¬a & b)`, where `a` is a binary number that is 1 only in the `n` position and 0 otherwise, `c` is the new desired value and `b` is the original value.

## Test

```shell
$ npm install
$ npm test
```

## Authors

  - [Miguel Asencio](https://github.com/maasencioh)

## License

  [MIT](./LICENSE)

[npm-image]: https://img.shields.io/npm/v/ml-bit-array.svg?style=flat-square
[npm-url]: https://npmjs.org/package/ml-bit-array
[travis-image]: https://img.shields.io/travis/mljs/bit-array/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/mljs/bit-array
[david-image]: https://img.shields.io/david/mljs/bit-array.svg?style=flat-square
[david-url]: https://david-dm.org/mljs/bit-array
[download-image]: https://img.shields.io/npm/dm/ml-bit-array.svg?style=flat-square
[download-url]: https://npmjs.org/package/ml-bit-array
