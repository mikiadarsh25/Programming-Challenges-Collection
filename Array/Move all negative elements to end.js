function segregateElements(arr) {
    let temp = [...arr];
    let j = 0;

    for (let i = 0; i < temp.length; i++) {
        if (temp[i] >= 0) {
            arr[j] = temp[i];
            j++;
        }
    }

    for (let i = 0; i < temp.length; i++) {
        if (temp[i] < 0) {
            arr[j] = temp[i];
            j++;
        }
    }
    return arr;
}

function segregateElements(arr) {
    // code here
    const a = [];
    const b = [];
    for (num of arr) {
        if (num >= 0) {
            a.push(num);
        } else {
            b.push(num);
        }
    }

    return a.concat(b);
}

function segregateElements(arr) {
    const pos = arr.filter(x => x >= 0);
    const neg = arr.filter(x => x < 0);
    return neg.concat(pos);
}

const arr = [1, -1, 3, 2, -7, -5, 11, 6];
console.log(segregateElements(arr));
