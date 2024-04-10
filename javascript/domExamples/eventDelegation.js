const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

//event delegation / propagation
// parent.addEventListener("click", () => {
//   console.log("You clicked inside parent div");
// });

// child.addEventListener("click", () => {
//   console.log("You clicked inside child div");
// });

parent.addEventListener("click", () => {
  console.log("You clicked inside parent div");
});

child.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("You clicked inside child div");
});
