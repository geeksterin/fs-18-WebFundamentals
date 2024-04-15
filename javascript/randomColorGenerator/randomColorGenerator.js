// console.log(Math);
// random, round, min, max, ceil, floor, pow, exp, abs

// console.log(Math.random());

// console.log(Math.ceil(Math.random() * 11))

//sir aisa hota hai na .5 se jada hoga to number+1 ko lete hai or .5 se kam hone par number-1 ayega

// const allowedChars = [
//   0,
//   1,
//   2,
//   3,
//   4,
//   5,
//   6,
//   7,
//   8,
//   9,
//   "a",
//   "b",
//   "c",
//   "d",
//   "e",
//   "f",
// ];

const allowedChars = "0123456789abcdef";
let color = "#";
const btn = document.querySelector("button");

btn.addEventListener("click", generateRandomColor);

function generateRandomColor() {
  color = "#";
  for (let i = 0; i < 6; i++) {
    color += allowedChars[Math.floor(Math.random() * allowedChars.length)];
  }
  document.querySelector("input").value = color;
  document.body.style.backgroundColor = color;
}
