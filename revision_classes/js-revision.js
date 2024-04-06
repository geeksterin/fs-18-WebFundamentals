// Variables : 10min : DONE
// Conditions : 10min  : DONE
// Loops: 15min : for while do : DONE
// Array, String : 20min : DONE
// Objects : 10min : PENDING:Monday 7:45pm
// Functions : 20min ( Executing Context,
// class stack, callback) : DONE

// PENDING: Object, Hoisting, Recursion

// RULES: 0-9,a-z,A-Z,_ , not start from number
// Keyword: var let const
// const index = 9;
// console.log(index);

// index = "20";
// console.log(index);

// {
//   let a = 90;
// }
// console.log(a);

// var a = 10;
// var b = 0;

// if (a == 90) {
//   console.log("90");
// } else if (a == 20) {
//   console.log("20");
// } else if (a == 10) {
//   console.log("10");
// } else {
//   console.log("No");
// }

// switch (a) {
//   case 20:
//     console.log("20");
//     break;
//   case 50:
//     console.log("50");
//   default:
//     console.log("Nothing");
// }

// if (a == 20) {
//   console.log("HI");
// } else {
//   console.log("HI");
// }

// a == 20 ? console.log("HI") : console.log("By");

// LOOPS : For, While
// var i = 10;
// for (i; i >= 0; i--) {
//   console.log(i);
// }

// while (i >= 0) {
//   console.log(i);
//   i--;
// }

// Q: You are given a number n,k and you have to print first k multiples of n
// var n = 3;
// var k = 4;

// let i = 1;
// while (k > 0) {
//   console.log(n * i);
//   i++;
//   k--;
// }

// for (let i = 1; i <= k; i++) {
//   console.log(n * i);
// }

// do {

//     k--
// }
// while(k < 0)

// let a = 0;
// while (a < 10) {
//   if (a == 3) {
//     a += 1;
//     continue;
//   }
//   if (a == 5) break;
//   console.log(a);
//   a += 1;
// }

// var a = ["a", 78, 90, true, "hi", "hello", 89, 99];
// console.log(a);

// push
// a.push(90);
// console.log(a.push(100));
// console.log(a);

// pop
// console.log(a.pop());
// console.log(a);

// shift
// a.shift();
// console.log(a);

// unshift
// a.unshift(80);
// console.log(a);

// slice
// let ans = a.slice(3, 5);
// console.log(ans);
// console.log(a);

// splice
// console.log("Return", a.splice(1, 3 ));
// console.log(a);

// Q : Create a function taht will remove the given elemts

// sort:
// a.sort();
// console.log(a);

// let name = "Ashish";

// replace(pattern,string)
// replaceAll(pattern,string)
// substr(start,count)
// toLowerCase()
// toUpperCase()
// console.log(name.includes("asdfdslf"));
// console.log(name.split("-"));

// for (let i = 0; i < name.length; i++) {
//   console.log(name.substr(i));
// }

// Normal Function
// function printTable() {
//   var a = 5;
//   for (let i = 0; i <= 10; i++) {
//     console.log(a, "X", i, "=", a * i);
//   }
// }

// Function with Arguments
// function printTable(a, start, end) {
//   for (let i = start; i <= end; i++) {
//     console.log(a, "X", i, "=", a * i);
//   }
// }

// Functions with default values
// function printTable(a, start = 0, end = 10) {
//   for (let i = start; i <= end; i++) {
//     console.log(a, "X", i, "=", a * i);
//   }
// }

//Function with Return values
// function sum(a, b) {
//   return a + b;
// }

// let ans = sum(6, 7);

// console.log(ans);

// function processData(data) {
//   console.log(data);
// }

// function callApi(a) {
//   var data = "JO";
//   // 2s
//   a(data);
// }

// callApi(processData);

// a = [7, 8, 9, 10];

// a.forEach(function (value, index) {
//   console.log(value, index);
// });

// function b() {
//   var num2 = 20;
//   return num2;
// }
// function a() {
//   var num1 = 10;
//   var num2 = b();
//   return num1 + num2;
// }

// let ans = a();
// console.log(ans);

// Q : Create a function taht will remove the given elemts
let a = [7, 8, 9, 10];
