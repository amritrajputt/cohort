// const arr= Array(3);
// console.log(arr);
// console.log(arr.length);


// const arr2= Array.of(3);
// console.log(arr2);
// arr2.push(5)
// console.log(arr2.length);
// console.log(arr2);

const actor = {
    name:"amrit",
    bow(){
        return `${this.name} takes a bow`;
    }
}
console.log(actor.bow());

const detachedMethod = actor.bow
console.log(detachedMethod());
