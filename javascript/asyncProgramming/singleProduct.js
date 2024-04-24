// check whether the URL has product id or not

// console.log(window.location.href);

const windowURL = window.location.href;
if (windowURL.includes("?product") === false) {
  //TAKE USER BACK TO BASE
  window.location.href = "ecommerce.html";
} else {
  // EXTRACT ID FROM URL AND,
  // FETCH DATA FOR THIS PARTICULAR PRODUCT FROM THE API
  const idFromURL = Number(window.location.href.split("?product=")[1]);

  getDataFromAPI(idFromURL);
}

async function getDataFromAPI(id) {
  const response = await fetch("https://dummyjson.com/products/" + id);
  const result = await response.json();
  console.log(result);
  show(result);
}

function show(singleProduct) {
  const leftDiv = document.querySelector(".left");
  const righttDiv = document.querySelector(".right");

  const img = document.createElement("img");
  img.src = singleProduct.thumbnail;
  leftDiv.append(img);
}
