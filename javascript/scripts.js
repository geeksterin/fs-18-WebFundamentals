// const btn = document.querySelector("button");
// btn.addEventListener("click", () => {
//   alert("Hello World");
// });

// console.log("Hello World");

//PRINT STATEMENTS
// console.log("Rohit Jain")
// console.log(10+10);

// alert("Rohit Jain")
// alert(10+10)

// document.write("Rohit Jain")
// document.write(100 / 2);

// var a = 10;

// let a = 10;

// VARIABLES CREATED WITH VAR HAD 2 PROBLEMS:

// SECURITY ISSUE: variables declared with var are always global

// {

//     var i = 10;

// }
// console.log(i) //10;

// {
//   let i = 10;
// }
// console.log(i); // undefined variable i;

// MEMORY LEAK ISSUE: variables with var can be redeclared, which causes memory leak.

// var i = 1;

// var i = 1;

// var i = 1;

// let i = 1;

// let i = 1;

// var i = 1;

// i = 2;

// let i = 1;

// i = 2;

// var i = 1;
// console.log(i); //1
// var i = 2;
// console.log(i); //2
// var i = 3;

// console.log(i); //3

// CONSTANT: whose value cannot be changed

// const a = "Javascript";
// const a = "React"; // YOU CANNOT REDECLARE A CONSTANT

// a = "React"; // YOU CANNOT MODIFY A CONSTANT

// LOOSELY TYPED LANGUAGE

// int a = 1;
// float b = 1.5;
// char c = "R";
// char d[] = ["R", "o", "H"]

// int a = 1.5; //STRICTLY TYPED LANGUAGES

// let a = 100.1233243545; //number
// let b = "R"; //string
// let c = "Rohit"; //string
// let d = 'Rohit'; //string
// let e = false; // boolean
// let f = "false"; // string
// let g = []; // array (array are also object internally in JS)
// let h = {} // object

// let i = null; //null
// let j = undefined; //undefined
// let k; //undefined

// +, -, /, *, %

// console.log(10 % 10);

// let a = 50;
// let b = 5;

// console.log("a / b"); //STRINGS ARE NOT PARSED
// console.log(a / b);

// console.log(a > b); // true
// console.log(a < b); // false

// let x = '5';
// let y = '5';

/*
 == checks only for the value on both sides
 == = checks for the value as well as data type on both sides
*/

// console.log(x == y);

// console.log(x === y);

// console.log(x === y);

//  == opposite !=
//  === opposite !==

// let x = 1;
// let y = '1';

// console.log(x != y);  //false
// console.log(x !== y);  //true

// let x = 0;

// x++;
// x--;
// --x;
// ++x;
// console.log(x); //0

// let x = 0;
// let y = ++x;

// console.log(x + y);

// let x = 2;

// console.log(x++); //2
// console.log(++x);  //4
// console.log(x--); //4
// console.log(--x); //2
// console.log(x+2); //4

// let x = 1;

// let y = x++;
// let z = ++y;
// let a = y + z;
// console.log(x + y + z + a);

//Concatenation
// console.log(1 + 2 + "Apples"); //3Apples

// console.log("Apples" + 1 + 2 + 3); //Apples123

// implicit type conversion(casting)
// console.log( 1 + "1" ); //11

// console.log( 10 * "3" ); //30

// console.log( 1 - "1" ); //0

// console.log( 10  *  "a" ); //NaN

// let a = "100";

// a = Number(a); //EXPLICIT TYPE CONVERSION (CASTING)
// console.log(typeof a);

// let a = 100;
// a = Boolean(a);
// console.log(a);

// let a = "abc";
// a = Number(a);

// console.log(a);

// let a = 6;
// a = toString(a);
// console.log(typeof a);

var number = prompt("Enter Numeber a");
var nimber2 = prompt("Enter Number b");

number = Number(number);
nimber2 = Number(nimber2);
console.log(number + nimber2);
