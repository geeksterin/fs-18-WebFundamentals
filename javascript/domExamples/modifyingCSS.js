const btn = document.querySelector("button");
const box = document.querySelector(".box");

btn.addEventListener("click", () => {
  // box.style.marginLeft = "1rem";
  // box.style.marginTop = "1rem";
  // box.style.paddingLeft = "0.5rem"
  // box.style.paddingRight = "0.5rem"
  // box.style.paddingTop = "1rem"
  // box.style.paddingBottom = "1rem"
  // box.style.borderRadius = "1rem"
  // box.style.backgroundColor = "rgb(0,0,0)";
  // box.style.color = "#fff";

  box.style.cssText =
    "margin-left: 1rem;margin-top: 1rem;padding: 1rem 0.5rem;border-radius: 1rem; background-color: rgb(0,0,0); color: #fff";
});
