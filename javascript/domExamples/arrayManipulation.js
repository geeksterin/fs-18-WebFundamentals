const btn = document.querySelector("button:first-of-type");
const sort = document.querySelector("button:last-of-type");
const input = document.querySelector("input");
const select = document.querySelector("select");
const output = document.querySelector("p");
const numbers = [];

btn.addEventListener("click", () => {
  numbers.push(Number(input.value));
  console.log(numbers);
});

sort.addEventListener("click", () => {
  if (select.value === "asc") {
    numbers.sort((a, b) => {
      return a - b;
    });
  } else {
    numbers.sort((a, b) => {
      return b - a;
    });
  }
  output.innerText = numbers;
});
