const anchor = document.querySelector("a");
const output = document.querySelector("p");

// WE NEED PREVENT DEFAULT WHENEVER WE ARE DEALING WITH:
// - anchor click
// - form submission

anchor.addEventListener("click", (e) => {
  e.preventDefault();
  output.innerText = e.target.innerText;
});
