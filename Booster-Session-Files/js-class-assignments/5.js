// Q: 1

// let user = {};
// user["name"] = "John";
// user["surname"] = "Smith";
// user["name"] = "Peter";
// delete user["name"];

// Q : 2

// function isEmpty(obj) {
//   let count = 0;
//   for (key in obj) {
//     count += 1;
//   }
//   if (count == 0) return true;
//   else return false;
// }
// let myobj = { name: "Ashsih" };
// console.log(isEmpty(myobj));

// Q : 3
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };
// function showSum(obj) {
//   let sum = 0;
//   for (key in obj) {
//     sum += obj[key];
//   }
//   console.log(sum);
// }
// showSum(salaries);

// Q: 4
// let calculator = {
//   a: 0,
//   b: 0,
//   read: function () {
//     this.a = Number(prompt("Enter number A"));
//     this.b = Number(prompt("Enter number A"));
//   },
//   sum: function () {
//     console.log(this.a + this.b);
//   },
//   mul: function () {
//     console.log(this.a * this.b);
//   },
// };
// calculator.read();
// calculator.mul();
// calculator.sum();
