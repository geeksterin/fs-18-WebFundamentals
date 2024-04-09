const btn = document.querySelector("button");
const select = document.querySelector("select");
const output = document.querySelector("p");
const firstNum = document.querySelector("input:first-of-type");
const secondNum = document.querySelector("input:last-of-type");

// btn.onclick

// USING A NAMED FUNCTION AS EVENT LISTENER
// btn.addEventListener("click", handleClick)
// function handleClick(){
//     console.log("Hello Wolrd")
// }

console.log(firstNum.value)
console.log(secondNum.value)

// USING AN ARROW FUNCTION AS EVENT LISTENER
btn.addEventListener("click", () => {
  let fn = firstNum.value;
  let sn = secondNum.value;

  // parseInt(10.567); //10
  // parseFloat(10); //10.0

  if (select.value === "+") {
    // fn = parseInt(fn)
    // sn = parseInt(sn)

    fn = Number(fn);
    sn = Number(sn);

    output.innerText = fn + sn;
  } else if (select.value === "-") {
    output.innerText = fn - sn;
  } else if (select.value === "/") {
    output.innerText = fn / sn;
  } else if (select.value === "*") {
    output.innerText = fn * sn;
  } else if (select.value === "%") {
    output.innerText = fn % sn;
  }
});

// btn.addEventListener("click", () => {})

// FOR JAVASCRIPT EVERY INPUT FROM USER IS A STRING
