'use strict';

/**
 * Count the number of true values in an array
 * @param {Array} arr
 * @return {number}
 */
function count(arr) {
    // TODO
}

/**
 * Logical AND operation
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
function and(arr1, arr2) {
    var ans,
        diff = arr1.length - arr2.length;
    if (diff === 0) {
        ans = new Array(arr1.length);
        for (var i = 0; i < arr1.length; i++)
            ans[i] = arr1[i] & arr2[i];
    }
    else if (diff < 0) {
        ans = new Array(arr2.length);
        for (var j = 0; j < diff; j++)
            ans[j] = 0;
        for (var k = 0; k < (arr2.length - diff); k++)
            ans[k + diff] = arr1[k] & arr2[k + diff];
    }
    else {
        ans = new Array(arr1.length);
        for (var l = 0; l < diff; l++)
            ans[l] = 0;
        for (var m = 0; m < (arr1.length - diff); m++)
            ans[m + diff] = arr1[m + diff] & arr2[m];
    }
    return ans;
}

/**
 * Logical OR operation
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
function or(arr1, arr2) {
    var ans,
        diff = arr1.length - arr2.length;
    if (diff === 0) {
        ans = new Array(arr1.length);
        for (var i = 0; i < arr1.length; i++)
            ans[i] = arr1[i] | arr2[i];
    }
    else if (diff < 0) {
        ans = new Array(arr2.length);
        for (var j = 0; j < diff; j++)
            ans[j] = arr2[j];
        for (var k = 0; k < (arr2.length - diff); k++)
            ans[k + diff] = arr1[k] | arr2[k + diff];
    }
    else {
        ans = new Array(arr1.length);
        for (var l = 0; l < diff; l++)
            ans[l] = arr1[l];
        for (var m = 0; m < (arr1.length - diff); m++)
            ans[m + diff] = arr1[m + diff] | arr2[m];
    }
    return ans;
}

/**
 * Logical XOR operation
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
function xor(arr1, arr2) {
    var ans,
        diff = arr1.length - arr2.length;
    if (diff === 0) {
        ans = new Array(arr1.length);
        for (var i = 0; i < arr1.length; i++)
            ans[i] = (arr1[i] | arr2[i]) & ~(arr1[i] & arr2[i]);
    }
    else if (diff < 0) {
        ans = new Array(arr2.length);
        for (var j = 0; j < diff; j++)
            ans[j] = arr2[j];
        for (var k = 0; k < (arr2.length - diff); k++)
            ans[k + diff] = (arr1[k] | arr2[k + diff]) & ~(arr1[k] & arr2[k + diff]);
    }
    else {
        ans = new Array(arr1.length);
        for (var l = 0; l < diff; l++)
            ans[l] = arr1[l];
        for (var m = 0; m < (arr1.length - diff); m++)
            ans[m + diff] = (arr1[m + diff] | arr2[m]) & ~(arr1[m + diff] & arr2[m]);
    }
    return ans;
}

/**
 * Logical NOT operation
 * @param {Array} arr
 * @return {Array}
 */
function not(arr) {
    var ans  =  new Array(arr.length);
    for (var i = 0; i < ans.length; i++)
        ans[i] = ~arr[i];
    return ans;
}

/**
 * Gets the n value
 * @param {number} orig
 * @param {number} n
 * @return {number}
 */
function getBit(orig, n) {
    if ((Math.pow(2, n) & orig) === 0)
        return 0;
    return 1;
}

/**
 * Sets the n value to the value val
 * @param {number} orig
 * @param {number} n
 * @param {number} val
 * @return {number}
 */
function setBit(orig, n, val) {
    if (val !== 1 && val !== 0)
        throw new RangeError('val should be 1 or 0');
    if (n < 0 || n > (Math.floor(Math.log(orig) / Math.log(2)) + 1))
        throw new RangeError('n out of bounds');
    return ((Math.pow(2, n) * val) | (~Math.pow(2, n) & orig));
}

module.exports = {
    count: count,
    and: and,
    or: or,
    xor: xor,
    not: not,
    getBit: getBit,
    setBit: setBit
};