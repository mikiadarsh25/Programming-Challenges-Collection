// Array destructuring
function reverseArray(arr) {
    // your code here
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        [arr[i], arr[arr.length - i - 1]] = [arr[arr.length - i - 1], arr[i]];
    }
    return arr;
}

// Assigning extra variable
function reverseArray(arr) {
    // your code here
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        const temp = arr[i];
        arr[i] = arr[arr.length - i - 1];
        arr[arr.length - i - 1] = temp;
    }
    return arr;
}
console.log(reverseArray([1, 4, 3, 2, 6, 5])); // Output: [ 5, 6, 2, 3, 4, 1 ]
