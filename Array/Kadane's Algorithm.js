function maxSubarraySum(arr) {
    // Your code here
    let sum = 0;
    let maxi = arr[0];
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        maxi = Math.max(maxi, sum);
        if (sum < 0) sum = 0;
    }
    return maxi;
}

const arr = [2, 3, -8, 7, -1, 2, 3];
console.log(maxSubarraySum(arr));
