const resultsDiv = document.querySelector(".results");

window.addEventListener("load", createList);

function createList() {
  emojiList.forEach((emoji) => {
    const parent = document.createElement("div");
    parent.classList.add("parent");

    const em = document.createElement("span");
    em.innerText = emoji.emoji;
    parent.append(em);

    const alias = document.createElement("span");
    const newAlias = emoji.aliases.map((alias) => alias.replaceAll("_", " "));
    alias.innerText = newAlias.join();
    parent.append(alias);

    const desc = document.createElement("span");
    desc.innerText = emoji.description;
    parent.append(desc);

    resultsDiv.append(parent);
  });

  attachListener();
}

function attachListener() {
  const input = document.querySelector("input");

  input.addEventListener("keyup", filterEmojis);
}

function filterEmojis(e) {
  const keyword = e.target.value;

  const filteredData = emojiList.filter((emoji) => {
    if (emoji.description.includes(keyword)) return emoji;
  });

  //resetting previous data in the div
  resultsDiv.innerText = "";

  filteredData.forEach((emoji) => {
    const parent = document.createElement("div");
    parent.classList.add("parent");

    const em = document.createElement("span");
    em.innerText = emoji.emoji;
    parent.append(em);

    const alias = document.createElement("span");
    const newAlias = emoji.aliases.map((alias) => alias.replaceAll("_", " "));
    alias.innerText = newAlias.join();
    parent.append(alias);

    const desc = document.createElement("span");
    desc.innerText = emoji.description;
    parent.append(desc);

    resultsDiv.append(parent);
  });
}
