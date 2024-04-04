// Array: Single variable, having multiple values

// let n = "Shashank";

// n = "Abhinandan";

// n = "Nawab";

// console.log(n);

//IN C, C++, JAVA arrays were homogenous
//IN JS arrays were heterogenous

// let names = new Array();

// let names = [100, 45, "Rohit", false, 100.6];

// let numbers = [3, 4, 5, 6, 7];

// console.log(numbers[0]);

// console.log(numbers[1] + numbers[0]); //7

// console.log(numbers.length); // number of elements in the array

// console.log(numbers[2] + numbers[3] + numbers[numbers.length - 1]);

// push, pop, shift, unshift

// let numbers = [3, 4, 5, 6, 7];

// adds values to the end of the array
// numbers.push(8, 9, 10);

// adds values to the beginning of the array
// numbers.unshift(8, 9, 10);

// // removes 1 value from the end of the array

// numbers.pop();
// numbers.pop();
// numbers.pop();

// removes 1 value from the beginning of the array

// numbers.shift();
// numbers.shift();
// numbers.shift();

// console.log(numbers);

// let numbers = [3, 4, 5, 6, 7];

// console.log(numbers.push(10, 11,12,13))

// console.log(numbers.unshift(10, 12, 13));

// console.log(numbers.pop())

// console.log(numbers.shift())

// let a = numbers.pop(); //7
// let b = numbers.unshift(a); //5
// let c = numbers.push(10, 11);  //7
// console.log(a + b + c);

// let numbers = [3, 4, 5, 6, 7, 12, 45, 11, 78, 96];

//slice
// cuts the array into smaller array: omits the last index
// console.log(numbers.slice(0,3))

// if single argument is passed, cuts out starting from that index and rest of the array
// console.log(numbers.slice(1))

// console.log(numbers.slice(-6, -2));
// console.log(numbers.slice(-2, -6));

// let numbers = [3, 4, 5, 6, 7, 12, 45, 11, 78, 96];

// numbers.splice(startingIndex, deleteCount, elementsToAdd)

// numbers.splice(6, 1, 13)
// console.log(numbers)

// [1,2,3,4, 7, 12, 45, 11, 78, 96]

// numbers.splice(0, 4, 1, 2, 3, 4);

// numbers.splice(2,2)
// numbers.splice(0,0,1,2)
// console.log(numbers);

// Introducing Arrays
// Difference between Arrays Concept in Java and Javascript
// length Property
// Array Methods like
// toString()
// join and split
// push()
// pop()
// shift()
// unshift()
// Slice()
// Splice()
// reverse()
// some()
// every()
// find()
// delete()
// sort(), sort with comparator

// const names = ["Ram", "Shyam", "Seeta", "Geeta"]
// names.reverse()
// console.log(names);

// const shaktimaan = ["Gangadhar", "Vidhyadhar", "Shastri"];

//toString & join: joins together or binds together the values of an array

// console.log(shaktimaan)
// console.log(shaktimaan.toString())

// console.log(shaktimaan)
// // console.log(typeof shaktimaan.toString())
// console.log(shaktimaan.join("-"))

// let numbers = [5, 3, 1, 80, 3];
// console.log(numbers);

// delete numbers[2];

// console.log(numbers);
// a = 70;
// b = 40;

// function modifiedSort(a, b) {
//   if (a > b) {
//     return -1;
//   } else if (b > a) {
//     return 1;
//   } else {
//     return 0;
//   }
// }
// numbers.sort(modifiedSort);

// console.log(numbers);

//
// console.log(a);

// let a = [78, 67, 3, 4];

/*
 1 => ba
 -1 => ab
 0 => original

*/
// function temp(a, b) {
//   if (a > b) {
//     return -1;
//   } else if (b > a) {
//     return 1;
//   } else {
//     return 0;
//   }
// }

// a.sort(temp);

// console.log(a);

// Strings
// a = "hello 0 343 i am ashsih";
// console.log(a);

//for..of

// const names = ["Ayushi", "Aastha", "Abhinav", "Nawab"];

// FOR OF.....
// for (let i of names) {
//   document.write(i + "<br>");
// }

// CALLBACKS: when a function is called from inside another function.

// function sum(a, b, nawab) {
//     return nawab(a, b);
//   }

//   function product(a, b) {
//     return a * b;
//   }

//   console.log(sum(3, 4, product));

// FOREACH....

// const names = ["Ayushi", "Aastha", "Abhinav", "Nawab"];

// names.forEach(printName);

// function printName(name){
//     document.write(name + "<br>")
// }

// const numbers = [34, 56, 1, 23, 12, 6, 78, 99, 5];

// let oddNumbers = [];

// for(let i=0;i<numbers.length;i++){
//     if(numbers[i] %2 === 1){
//         oddNumbers.push(numbers[i])
//     }
// }

// numbers.forEach( (num) => {
//   if (num % 2 === 1) oddNumbers.push(num);
// });

// console.log(oddNumbers)

// ANONYMOUS FUNCTIONS: a function with no Name

// ARROW FUNCTIONS: an anonymous function with an arrow symbol

// const numbers = [34, 56, 1, 23, 12, 6, 78, 99, 5];

// for(let i=0){
//     for(let j = i+1){

//     }
// }

// SORTING AN ARRAY USING FOREACH & AN ANONYMOUS / ARROW FUNCTION AS CALLBACK

// numbers.forEach((num1, index1) => {
//   numbers.forEach((num2, index2) => {
//     if (numbers[index1] < numbers[index2]) {
//       let temp = numbers[index1];
//       numbers[index1] = numbers[index2];
//       numbers[index2] = temp;
//     }
//   });
// });

// console.log(numbers);

// const names = ["Ayushi", "Gangadhar", "Nawab", "John"];

// FIND OUT THE LARGEST STRING FROM THE ARRAY USING FOREACH & ARROW FUNCTION

// let largestName = "";
// names.forEach((name) => {
//   if (name.length > largestName.length) largestName = name;
// });

// console.log(largestName);

// names.sort((a, b) => {
//   return a.length - b.length;
// });
// console.log(names[names.length - 1]);


// const names = ["Ayushi", "Gangadhar", "Nawab", "John"];
// const count = [2,3,2,4];

// count.forEach((ele,index)=>{
//     while(ele > 0){
//       console.log(names[index])
//       ele--;
//     }
//  })

//  console.log("------------------------")

//  names.forEach((name, index) => {
//     const repeat = count[index];
//     for (let j = 0; j < repeat; j++) {
//       console.log(name);
//     }
//   });


const a1 = [2,3,4];
const a2 = [1,2,3,4,5];

// TAKE VALUES FROM a1, ADD ALL THE VALUES FROM a2. THEN ADD ALL THE SUM TOGETHER




