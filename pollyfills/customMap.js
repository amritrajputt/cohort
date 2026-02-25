Array.prototype.customMap = function (arr){
    this.array.forEach(element => {
        element = element*2
    });
    return arr;
}

let arr = [3,2,3,3]
Array.prototype.customMap(arr)