var user = {
  name: "Ashish",
  password: "123456",
  email: "a.m2002@gmail.com",
  address: [
    {
      state: "Punjab",
      city: "Nangal",
      street: "50G Block",
    },
    {
      state: "Bangalroe",
      city: "Whitefeidl",
      street: "50G Block",
    },
  ],
};
console.log(user);
console.log(typeof user);

user = JSON.stringify(user);

console.log(typeof user);
console.log(user);

user = JSON.parse(user);
console.log(typeof user);
console.log(user);
const obj = {
  name: "Abhinav",
  designation: "student",
  age: 20,
};

// console.log(JSON.stringify(obj));
const jsonString = JSON.stringify(obj);

console.log(JSON.parse(jsonString));
