const plus = document.querySelector("a");
const dynamicDiv = document.querySelector(".dynamic");

//insertBefore, insertAdjacentElement
let cloneCount = 0;
plus.addEventListener("click", (e) => {
  e.preventDefault();
  if (cloneCount < 5) {
    const clonedNode = dynamicDiv.children[0].cloneNode(true);
    //   console.log(clonedNode);
    clonedNode.value = "";
    dynamicDiv.append(clonedNode);
    cloneCount++;
  }
  else{
    
  }
});
