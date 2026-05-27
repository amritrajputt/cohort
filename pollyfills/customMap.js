Array.prototype.customMap = function(callback){
    let array = []
    for(let i = 0;i<this.length;i++){
        let val  = callback(this[i],i,this)
        array.push(val)
    }
    return array
}
let arr=  [2,3,5]
let doubledArray = 
arr.customMap((ele) => {
   return ele*2;
  
})
console.log(doubledArray);
