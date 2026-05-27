Array.prototype.customEvery = function (cb) {
    for (let i = 0; i < this.length; i++) {
        if (!cb(this[i], i, this)) {
            return false
        }
    }
    return true
}
let arr = [2, 8, 4, 90]
const res = arr.customEvery((ele) => ele % 2 == 0 )
console.log(res)
