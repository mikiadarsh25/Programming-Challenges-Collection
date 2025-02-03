function findUnion(a, b) {
    return  [...new Set([...a, ...b])].length
}

function findUnion(a, b) {
    const res = new Map();
    for (let num of a) {
        res.set(num, (res.get(num) || 0) + 1);
    }

    for (let num of b) {
        res.set(num, (res.get(num) || 0) + 1);
    }
    return res.size;
}

const a = [1, 2, 3, 4, 5];
const b = [1, 2, 3];
console.log(findUnion(a, b));
