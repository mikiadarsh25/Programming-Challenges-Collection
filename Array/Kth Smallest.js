function kthSmallest(arr, k) {
    let nums = [...arr];
    for (let i = 0; i < k; i++) {
        let midIdx = i;
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] < nums[midIdx]) {
                midIdx = j;
            }
        }
        [nums[i], nums[midIdx]] = [nums[midIdx], nums[i]];
    }
    return nums[k - 1];
}
const arr = [7, 10, 4, 3, 20, 15];
const k = 3;

console.log(kthSmallest(arr, k));
