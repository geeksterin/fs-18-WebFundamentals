const textarea = document.querySelector("textarea");
const output = document.querySelector("p");
const limit = 100;

textarea.addEventListener("keyup", (e) => {
  const remaining = limit - e.target.value.length;
  if (remaining <= 20) output.style.color = "red";
  else output.style.color = "black";

  output.innerText = remaining;
});
