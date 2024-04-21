const btn = document.querySelector("button");
const para = document.querySelector("p");

// btn.addEventListener("click", () => {
//   para.innerText = "Javascript";
// });

// btn.addEventListener("click", () => {
//     setTimeout(() => {para.innerText = "Javascript";}, 3000);
// })

// clearInterval - stops currently executing setInterval

// btn.addEventListener("click", () => {
//   setInterval(() => {console.log(1)}, 1000)
// });

// let i = 1;

// btn.addEventListener("click", () => {
//   const id = setInterval(() => {
//     console.log("Ibrahim");
//     if (i > 5) {
//       clearInterval(id);
//       //   return;
//     } else {
//       console.log(i++);
//     }
//   }, 1000);
// });

// let i = 1;
// btn.addEventListener("click", () => {
//   setInterval(() => {
//     para.innerText += i++;
//   }, 1000);
// });

const names = ["Nawab", "Aastha", "Abhinandan", "Ayushi", "Deepak"];

let i = 0;

// btn.addEventListener("click", () => {
//   const id = setInterval(() => {
//     if (i === names.length) {
//       clearInterval(id);
//     } else {
//         if(i === names.length - 1){
//             para.innerText += names[i++];
//         }
//         else
//         para.innerText += names[i++] + ", ";
//     }
//   }, 1000);
// });

// PRINTING NAMES RANDOMLY

// btn.addEventListener("click", () => {
//   const id = setInterval(() => {
//     if (i === names.length) {
//       clearInterval(id);
//     } else {
//       const randomIndex = Math.floor(Math.random() * names.length);
//       if (i === names.length - 1) {
//         para.innerText += names[randomIndex];
//       } else para.innerText += names[randomIndex] + ", ";
//       i++;
//     }
//   }, 1000);
// });

//PRINTING DISTINCT NAMES RANDOMLY

// const alreadyPrintedNames = [];

// btn.addEventListener("click", () => {
//   const id = setInterval(() => {
//     if (i === names.length) {
//       clearInterval(id);
//     } else {
//       if (i === names.length - 1) {
//         para.innerText += names[getRandomIndex()];
//       } else para.innerText += names[getRandomIndex()] + ", ";
//       i++;
//     }
//   }, 1000);
// });

// function getRandomIndex() {
//   const randomIndex = Math.floor(Math.random() * names.length);
//   if (alreadyPrintedNames.includes(names[randomIndex])) {
//     return getRandomIndex();
//   } else {
//     alreadyPrintedNames.push(names[randomIndex]);
//     return randomIndex;
//   }
// }


//we can used object instead of extra array where key = false act as unique for very time we print name we change that key  = true  we only print when key = false asa bhi kr sakte haina



// function rec(x) {
//   if (x > 1) {
//     rec(x - 1);
//   }
//   console.log(x);
// }
// rec(5);



// rect(1) return print 1
// rect(2) return print 2
// rect(3) return print 3
// rect(4) return print 4
// rect(5) return print 5
