const obj = {
    name: "Abhinav",
    designation: "student",
    age: 20
}

// console.log(JSON.stringify(obj));
const jsonString = JSON.stringify(obj);

console.log(JSON.parse(jsonString))