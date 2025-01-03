/**
 * Given an array arr. Your task is to find the minimum and maximum elements in the array.

Note: Return a Pair that contains two elements the first one will be a minimum element and the second will be a maximum.

Examples:

Input: arr[] = [3, 2, 1, 56, 10000, 167]
Output: 1 10000
Explanation: minimum and maximum elements of array are 1 and 10000.
Input: arr[] = [1, 345, 234, 21, 56789]
Output: 1 56789
Explanation: minimum and maximum element of array are 1 and 56789.
Input: arr[] = [56789]
Output: 56789 56789
Explanation: Since the array contains only one element so both min & max are same.
Constraints:
1 <= arr.size() <= 105
1 <= arr[i] <=109
 */

var getMinMax = function (arr) {
    // code here
    const sortedArray = arr.sort((a, b) => a - b);
    return [sortedArray[0], sortedArray[arr.length - 1]];
};

var getMinMax = function (arr) {
    let min = Infinity;
    let max = -Infinity;
    for (let num of arr) {
        if (num > max) max = num;
        if (num < min) min = num;
    }
    return [min, max];
};

const arr = [3, 2, 1, 56, 10000, 167];

console.log(getMinMax(arr));
