Array.prototype.customFilter = function (callback){
    let res = []
    for (let i =0;i<this.length;i++){
        if(callback(this[i],i,this)) {
            res.push(this[i])
        }
    }
    return res
}
let arr=  [2,4,5,6,87]
const filteredData = arr.customFilter((ele)=>{
    return ele%2 === 0
})
console.log(filteredData);
