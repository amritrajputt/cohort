const arr = [1, 2, 3]
const ans = arr.map((ele,ind)=>(
    ele = ele*2
))
console.log(ans);
ans.forEach((ele)=>{
    console.log(ele);
})
arr.push(10,20,4,5,55,66,66)
const filtered = arr.filter((val) => (
    (val>10) ? val:0
))
console.log(filtered);

const arr2 = [1, 2, 3,929]
const ans2 = arr2.reduce((acc,ele)=>{
    return acc+ele
},0)
console.log(ans2);
