const textarea = document.querySelector("textarea");
const output = document.querySelector("p");

// textarea.onkeyup
// textarea.onkeydown

// the argument passed to event handler contains information about the event

textarea.addEventListener("keyup", (e) => {
    // console.log(e);
    output.innerText = e.target.value.split("").reverse().join("");

  // if (e.key === "r" || e.key === "R") alert("Nahi Dabana tha");
});
