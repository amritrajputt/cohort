const person = {
    name: "amrit",
    rollNumber:29,
    section: "A"
}
person.name="amrit rajput"
console.log(person.name);

// this is complete rereference this is not allowed and this is not allowed for array also

// person = {name:"amrit raj"}



let person2 = {
    name: "amrit",
    rollNumber:29,
    section: "A"
}
person.name="amrit rajput"
console.log(person.name);

// here obj is let so it is allowed

person2 = {name:"amrit raj"}
console.log(person2);

let name = null
console.log(typeof(name));

console.log(typeof(null));
