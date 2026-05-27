Array.prototype.customForEach = function(callback){
    for (let i = 0 ;i< this.length;i++){
        callback (this[i],i,this)
    }
}
let arr = [1,12,32,43,54,54,2]
arr.customForEach ((ele) => console.log(ele))