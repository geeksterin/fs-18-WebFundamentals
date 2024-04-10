const btn = document.querySelector("button");
const output = document.createElement("p");

// append, appendChild, insertBefore, insertAdjacentHTML, insertAdjacentElement

btn.addEventListener("click", () => {
  output.innerText = "Rohit Jain";
  document.querySelector("#wrapper").append(output);
});
