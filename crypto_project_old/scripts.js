const trendingCoinsDiv = document.querySelector("#topCoins .coins");
window.addEventListener("load", async () => {
  const response = await getDataFromAPI(
    "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr"
  );
  const trendingCoins = await getDataFromAPI(
    "https://api.coingecko.com/api/v3/search/trending"
  );
  console.log(trendingCoins);
  showTrending(trendingCoins.coins, response.bitcoin.inr);
});

async function getDataFromAPI(url) {
  const response = await fetch(url);
  const result = await response.json();
  return result;
}

function showTrending(data, exchangeRate) {
  data.forEach((dt) => {
    const coinDiv = document.createElement("div");
    coinDiv.classList.add("trending-coin");

    const img = document.createElement("img");
    img.classList.add("coin-img");
    img.src = dt.item.thumb;

    const name = document.createElement("h3");
    name.classList.add("coin-name");
    name.innerText = dt.item.name;

    const symbol = document.createElement("span");
    symbol.classList.add("coin-symbol");
    symbol.innerHTML = " ( " + dt.item.symbol + " ) ";

    name.append(symbol);

    const price = document.createElement("p");
    price.classList.add("coin-price");
    price.innerHTML =
      "₹ " + getExchangeRate(dt.item.data.price_btc, exchangeRate);

    coinDiv.append(img, name, price);
    trendingCoinsDiv.append(coinDiv);
  });
}

function getExchangeRate(price_btc, exchangeRate) {
  return Math.round(price_btc * exchangeRate * 10000) / 10000;
}
