Array.prototype.customReduce = function (callback, initialValue) {

    let accumulator = initialValue;

    for (let i = 0; i < this.length; i++) {
        accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator;
}

let arr = [12, 3, 4, 5, 56]
const ans = arr.customReduce((acc, ele) => (
    acc + ele
), 0)
console.log(ans);
