const icons = document.querySelectorAll("i");
// console.log(icons)

// onclick
// addEventListener("click")

// for (let i = 0; i < icons.length; i++) {
//   icons[i].addEventListener("click", (e) => {
//     const contentDiv = e.target.parentElement.nextElementSibling;
//     if (contentDiv.style.display === "none") {
//         contentDiv.style.display = "block";
//     } else {
//       contentDiv.style.display = "none";
//     }
//   });
// }

for (let i = 0; i < icons.length; i++) {
  icons[i].addEventListener("click", (e) => {
    const contentDiv = e.target.parentElement.nextElementSibling;
    if (contentDiv.classList.contains("gayab")) {
      contentDiv.classList.remove("gayab");
    } else contentDiv.classList.add("gayab");
  });
}
