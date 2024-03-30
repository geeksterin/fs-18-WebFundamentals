// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)

//LOOP: to do something repeatedly

// for(init; condition; inc/dec)

// for(let i=1; i<=100; i++){
//     console.log(i);
// }

// for (let i = 1; i <= 100; i++) {
//   // document.write(i);
//   // document.write("<br>");

//   document.write(i + "<br>");
// }

// for (let i = 1; i <= 5; i++) {
//   if (i === 5) {
//     document.write(i);
//   } else document.write(i + ",");
// }

// for (let i = 1000; i >= 1; i--) {
//   document.write(i + "<br>");
// }

// for (let i = 1; i <= 10; i++) {
//   document.write(i + "<br>");
//   if (i === 5) {
//     break;
//   }
// }

// for (let i = 1; i <= 10; i++) {
//   if (i === 5) {
//     continue;
//   }
//   document.write(i + "<br>");
// }

// for (let i = 1; i <= 10; i++) {
//     if(i !== 5)
//         document.write(i + "<br>");
//   }

// PRINT NUMBERS FROM 1000 to 1, SKIP NUMBERS 699-600 and 499-400

// for (let i = 1000; i >= 1; i--) {
//   if ( (i <= 699 && i >= 600) || ( i<=499 && i>=400) ) {
//     continue;
//   }
//   document.write(i + "<br>");
// }

// for(let i=1; i<=10; i++){
//     document.write(i+"<br>")
// }

// let i = 1;
// while ( i <= 10 ) {
//   document.write(i + " <br>");
//   i++;
// }

// let i = 1000;

// while (i >= 1) {
//   document.write(i + "<br>");
//   i--;
// }

// do...while

// while is an entry controlled loop
// do while is an exit controlled loop

// let i = 10;
// while (i < 1) {
//   document.write(i + "<br>");
//   i--;
// }

// let i = 10;
// do {
//   document.write(i + "<br>");
//   i--;
// } while (i < 1);

// TERNARY OPERATOR

// let x = "Rohit";

// if (100 % 2 === 0) {
//   x = "Nawab";
// } else {
//   x = "Suneel";
// }


// x = (100 %2 === 0) ? "Nawab" : "Suneel" ;

// console.log(x);






// Hoisting: to take variable declarations (declared with var) and function definitions at the top of the program

// console.log(a); //10
// var a = 10;

// console.log(a); //undefined
// let a = 10;

// console.log(a); //undefined
// const a = 10;