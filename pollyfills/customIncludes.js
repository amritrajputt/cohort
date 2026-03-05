Array.prototype.customIncludes = function (find, searchIndex) {
    if (searchIndex > 0) {
        for (let i = searchIndex; i < this.length; i++) {
            if (this[i] === find && i >= searchIndex) {
                return true
            }
        }
    } else {
        for (let i = searchIndex; i < this.length; i++) {
            if (this[i] === find) {
                return true
            }
        }
    }
    return false;
}

let arr = [23, 435, 7, 78, 83, 5]
const ans = arr.customIncludes(7, 2)
console.log(ans);

//more accurate 

Array.prototype.customIncludes = function (value, fromIndex = 0) {

    for (let i = fromIndex; i < this.length; i++) {
        if (this[i] === value) {
            return true
        }
    }

    return false
}