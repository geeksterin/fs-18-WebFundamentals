const form = document.querySelector("form");
const category = document.querySelector("form select");
const quantity = document.querySelector("#quantity");
const name = document.querySelector("#name");
const proceed = document.querySelector("#proceed");

form.addEventListener("submit", addProductToList);

function addProductToList(e) {
  e.preventDefault();
  // console.log(category.value, quantity.value, name.value);

  const item = document.createElement("p");
  item.classList.add("item"); //<p class="item"></p>
  // item.classList.remove("item3"); //<p class="item item2"></p>

  //<span>&times;</span><span>Mango</span><span>10</span>

  const cross = document.createElement("span");
  cross.innerHTML = "&times;";
  cross.addEventListener("click", removeProductToList);
  item.append(cross);

  const itemName = document.createElement("span");
  itemName.innerText = name.value;
  item.append(itemName);

  const itemQuantity = document.createElement("span");
  itemQuantity.innerHTML = quantity.value;
  item.append(itemQuantity);

  document.querySelector("." + category.value).children[1].append(item);
}

function removeProductToList(e) {
  e.target.parentElement.remove();
}

proceed.addEventListener("click", getList);

function getList(e) {
  e.preventDefault();
  let output = "";
  const categoryDiv = document.querySelectorAll(".category");

  categoryDiv.forEach((category) => {
    if (category.children[1].children.length === 0) return;
    else {
      const heading = category.children[0].children[0].innerText;
       output += "\n" + heading +"\n";
      const item = category.children[1];
      for(let i=0;i<item.children.length;i++){
         for(let j=1;j<item.children[i].children.length;j++){
             if(j == 1){
              output += "Name-> " +item.children[i].children[j].innerText + " | ";
             }else{
              output += "Quantity -> " +item.children[i].children[j].innerText + " ";
             }
         }
         output += "\n";
      }
    }
  });
  alert(output);
}
