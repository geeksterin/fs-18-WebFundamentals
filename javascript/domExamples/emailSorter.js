const form = document.querySelector("form");
const email = document.querySelector("input:first-of-type");
const output = document.querySelector("p");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const at = email.value.lastIndexOf("@");
  const dot = email.value.lastIndexOf(".");
  output.innerText = email.value.slice(at + 1, dot);
});
