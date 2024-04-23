//https://dummyjson.com/products

// XML: Extensible Markup Language

const productsDiv = document.querySelector("#products");

// fetch("https://dummyjson.com/products")
//   .then((response) => {
//     return response.json();
//   })
//   .then((result) => {
//     console.log(result.products);
//     show(result.products);
//   });

async function getDataFromAPI() {
  const response = await fetch("https://dummyjson.com/products");
  const result = await response.json();
  show(result.products);
}
getDataFromAPI();

function show(data) {
  data.forEach((product) => {
    const div = document.createElement("div");
    div.classList.add("product");

    const image = document.createElement("img");
    image.src = product.thumbnail;

    const anc = document.createElement("a"); //<a></a>
    anc.href = "singleProduct.html?product=" + product.id; //queryString 
    //<a href="singleProduct.html?product=30"></a>
    anc.append(image);

    div.append(anc);

    const title = document.createElement("h3");

    const anc2 = document.createElement("a");
    anc2.href = "singleProduct.html?product=" + product.id; //queryString
    anc2.innerText = product.title;

    title.append(anc2);

    div.append(title);

    const price = document.createElement("p");
    price.innerText = product.price;

    div.append(price);

    productsDiv.append(div);
  });
}
