var radius = [5, 7, 8, 9];

function perimeterCircle(r) {
  //   values.forEach((r) => console.log(2 * Math.PI * r));
  console.log(2 * Math.PI * r);
}

function areaCircle(r) {
  //   values.forEach((r) => console.log(Math.PI * r * r));
  console.log(Math.PI * r * r);
}

function printValues(values, logic) {
  values.forEach((r) => logic(r));
}

// printValues(radius, perimeterCircle);
// printValues(radius, areaCircle);

// Functon returning a function
// function sum(a, b) {
//   return () => console.log(a + b);
// }

// sum(5, 6)();

// map, reduce, filter, some, every, find

// map: lets you walk through / map through every element in an array
// it is very much like foreach, with a slight difference, that map will return an array.

// const numbers = [1, 2, 3, 4, 5];

// for(let i=0;i<numbers.length;i++){
//   document.write(numbers[i] + " ");
// }

// numbers.forEach((num) => {document.write(num + " ")})

// numbers.map((num) => {document.write(num + " ")})

// EVEN NUMBERS

// const evenNumbers = []
// for(let i=0;i<numbers.length;i++){
//   if(numbers[i]%2 === 0){
//     evenNumbers.push(numbers[i])
//   }
// }
// console.log(evenNumbers)

// const evenNumbers = numbers.map((num) => {
//   if(num%2 === 0) return num
// })

// const numbers = [65, 11, 34, 2, 9];

// const newArr = numbers.map((num) => {
//   return num + " "
// })
// console.log(newArr)

// const numbers = [2,3,4,5]

//PRINT THE SQUARES OF EACH NUMBER

// const squares = numbers.map((num) => {
//   return num * num;
// })
// console.log(squares)

// WE DONT USE MAP IN PROGRAMS WHERE WE HAVE CONDITIONS

// const evenNumbers = numbers.map((num) => {
//   if(num%2 === 0) return num
// })
// console.log(evenNumbers)

// const numbers = [2, 3, 4, 5, 16, 7, 17, 18, 12, 11, 9];

// const evenNumbers = [];
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 === 0) {
//     evenNumbers.push(numbers[i]);
//   }
// }

// console.log(numbers.filter((num) => {
//   if(num%2 === 0) return num;
// }))

// const num = [2,4,6]
// num.map((n) => {return  n*2})
// console.log(num);

// const names = [
//   "Anuj",
//   "Elton",
//   "Ayushi",
//   "Nawab",
//   "Abhinandan",
//   "Abhinav",
//   "Aastha",
// ];

// print only those names whose length is an even number, using filter function

// const evenNames = names.filter((name) => {
//   if(name.length%2 === 0) return name;
// })
// console.log(evenNames)

// const evenNames = names.filter((name) => {
//   return name.length % 2 === 0;
// });
// console.log(evenNames);

// REDUCE:
/*
    Returns a single value instead of an array
    Takes 2 arguments instead of just one.
  */

// const numbers = [2, 4, 6];

// const sum = numbers.reduce((previous, current) => {
//   return previous * current;
// }, 2);
// console.log(sum);

// const names = [
//   "Anuj",
//   "Elton",
//   "Ayushi",
//   "Nawab",
//   "Abhinandan",
//   "Abhinav",
//   "Aastha",
// ];

// find the shortest name using reduce function

// const short = names.reduce((p, c) => {
//   if (p.length < c) {
//     return p;
//   } else {
//     return c;
//   }
// });
// console.log(short);

// let shortest = names.reduce((prev, now) => {
//   if (prev.length < now.length) return prev;
//   else return now;
// }, names[0]);
// console.log(shortest);

// console.log(
//   names.reduce((pre, curr) => {
//     if (curr.length > pre.length) {
//       return pre;
//     } else {
//       return curr;
//     }
//   }, 1000)
// );

// const firstLetters = names.map((name) => {
//   return name.slice(0, 1);
// });
// console.log(firstLetters)

const names = [
  "Anuj",
  "Elton",
  "Ayushi",
  "Nawab",
  "Abhinandan",
  "Abhinav",
  "Aastha",
  "Rishabh",
  "Manish",
  "Sunil",
];

//return those names in an array whose first letter is a vowel
//you can use a separate array ["a","e","i","o","u"]

// const vowels = ["a", "e", "i", "o", "u"]
// const filteredNames = names.filter((name) => {
//   const firstLetter = name.slice(0, 1).toLowerCase();
//   if(vowels.includes(firstLetter))  return name;
// });

// console.log(filteredNames)

// FIND: returns the first occurrence which fulfills a condition

const numbers = [11, 13, 14, 15, 16, 17, 18];

//find the first number which is a multiple of 3

// console.log(
//   numbers.find((num) => {
//     if (num % 3 === 0) {
//       return num;
//     }
//   })
// );

// let output = 0;
// numbers.forEach((num) => {
//   if(num%3 === 0){
//     output = num;
//   }
// })
// console.log(output);

const occur = [11, 13, 15, 17, 19, 18];
let fi;

occur.forEach((num) => {
  if (num % 3 === 0 && typeof fi === "undefined") {
    fi = num;
  }
});

console.log(fi);
