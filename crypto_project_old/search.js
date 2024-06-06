const url = new URL(window.location.href);
const searchParams = new URLSearchParams(url.search);
const searchResults = document.querySelector("#searchResults");

// console.log(searchParams);

if (searchParams.has("q")) {
  // start searching
  getDataFromAPI(
    "https://api.coingecko.com/api/v3/search?query=" + searchParams.get("q")
  ).then((response) => {
    console.log(response);
    showSearchResults(response.coins);
  });
}

function showSearchResults(coins) {
  coins.forEach((coin, index) => {
    const result = document.createElement("div");
    result.classList.add("result");

    const leftDiv = document.createElement("div");
    leftDiv.classList.add("left");

    const sno = document.createElement("span");
    sno.innerText = index + 1;

    const img = document.createElement("img");
    img.classList.add("coin-photo");
    img.src = coin.thumb;

    const name = document.createElement("h3");
    name.classList.add("coin-name");
    name.innerText = coin.name + " " + coin.symbol;

    leftDiv.append(sno, img, name);

    const rightDiv = document.createElement("div");
    rightDiv.classList.add("right");

    const anchor = document.createElement("a");
    anchor.innerText = "More Info";
    anchor.href = "details.html?id=" + coin.id;

    rightDiv.append(anchor);

    result.append(leftDiv, rightDiv);

    searchResults.append(result);
  });
}

async function getDataFromAPI(url) {
  const response = await fetch(url);
  const result = await response.json();
  return result;
}
