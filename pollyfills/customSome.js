Array.prototype.customSome = function (cb) {
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i, this)) {
            return true
        }
    }
    return false
}
let arr = [2, 3, 4, 5]
const res = arr.customSome((ele) => (ele > 7) )
console.log(res)
