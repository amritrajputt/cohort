// Given an array of objects:

// [
//   { name: "Amrit", marks: 80 },
//   { name: "Rahul", marks: 45 },
//   { name: "Priya", marks: 60 }
// ]

// Print only the names of students who scored more than 50.

const arr = [
    { name: "Amrit", marks: 80 },
    { name: "Rahul", marks: 45 },
    { name: "Priya", marks: 60 }
]
arr.forEach(student => console.log((student.marks > 50) ?student.name:null))

// cleaner:
arr.forEach(student => 
  student.marks > 50 && console.log(student.name)
);
