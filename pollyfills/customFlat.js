Array.prototype.customFlat = function (d = 1) {
    let res = []
    const flatten = (arr,depth) => {
        for(let i = 0;i<arr.length;i++){
            if(Array.isArray(arr[i]) && depth > 0){
                flatten(arr[i],depth-1)
            }else{
                res.push(arr[i])
            }
        }
    }
    flatten(this,d)
    return res
}
let arr = [12, [[34], 34, [5, [32], 874366], 990]]
console.log(arr.customFlat(4));
 

