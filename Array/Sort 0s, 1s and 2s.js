function sort012(arr) {
    // your code here
    let nums = [...arr];
    for (let i = 0; i < arr.length; i++) {
        let minIdx = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (nums[j] < nums[minIdx]) {
                minIdx = j;
            }
        }
        [nums[i], nums[minIdx]] = [nums[minIdx], nums[i]];
    }
    return nums;
}

// function sort012(arr) {
//     let low = 0;
//     let mid = 0;
//     let high = arr.length - 1;
//     while (mid <= high) {
//         if (arr[mid] === 0) {
//             [arr[low], arr[mid]] = [arr[mid], arr[low]];
//             low++;
//             mid++;
//         } else if (arr[mid] === 1) {
//             mid++;
//         } else {
//             [arr[high], arr[mid]] = [arr[mid], arr[high]];
//             high--;
//         }
//     }
//     return arr;
// }
let arr = [0, 1, 2, 0, 1, 2];
console.log(sort012(arr));
