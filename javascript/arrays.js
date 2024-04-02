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
a = "hello 0 343 i am ashsih";
console.log(a);
