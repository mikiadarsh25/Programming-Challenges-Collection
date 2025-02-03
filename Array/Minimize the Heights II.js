// function getMinDiff(arr, k) {
//     // your code here
//     const n = arr.length;

//     for (let i = 0; i < k; i++) {
//         arr[i] += k;
//     }

//     for (let i = k; i < n; i++) {
//         arr[i] -= k;
//     }

//     let max = -Infinity;
//     let min = Infinity;
//     for (let num of arr) {
//         if (num > max) {
//             max = num;
//         }
//         if (num < min) {
//             min = num;
//         }
//     }
//     return arr;
// }

function getMinDiff(arr, k) {
    const n = arr.length;
    arr.sort((a, b) => a - b);
    
    let minDiff = arr[n-1] - arr[0];
    
    for(let i = 1; i < n; i++) {
        let min = Math.min(arr[0] + k, arr[i] - k);
        let max = Math.max(arr[n-1] - k, arr[i-1] + k);
        
        if(min < 0) continue;
        minDiff = Math.min(minDiff, max - min);
    }
    
    return minDiff;
 }

const arr = [1, 8, 10, 6, 4, 6, 9, 1];

console.log(getMinDiff(arr, 7));
