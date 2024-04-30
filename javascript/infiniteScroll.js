// console.log(window.innerHeight)
// console.log(window.outerHeight)

// innerHeight: including padding but not border, includes scrollbar

//clientHeight: including padding but not border, excludes scrollbar

// console.log(window.innerHeight)

// window.scrollY + window.innerHeight >= document.body.offsetHeight && ready

// let conditionTrue = true;
// const wrapper = document.querySelector("#wrapper");

// // window.addEventListener("scroll", pageScrolled);

// function pageScrolled() {
//   // console.log(window.scrollY)
//   // console.log(window.innerHeight)

//   // console.log(window.innerHeight + window.scrollY)

//   if (
//     window.innerHeight + window.scrollY >= document.body.clientHeight &&
//     conditionTrue
//   ) {
//     console.log("Launch Nukes");
//     conditionTrue = false;
//     populateParagraphs();
//   }
// }

// function populateParagraphs() {
//   const parent = document.createElement("div");
//   for (let i = 0; i < 30; i++) {
//     const para = document.createElement("p");
//     para.innerText =
//       "Ullam laudantium ducimus totam sint distinctio inventore. Itaque repellendus, aspernatur explicabo tenetur eos quasi nostrum maxime nisi unde voluptas quis, nobis recusandae quae sunt culpa at numquam nulla inventore omnis?";
//     parent.append(para);
//   }
//   wrapper.append(parent);
//   conditionTrue = true;
// }

const apikey = "_DDIVJSgdK-GI1wA3aHOtxC9YTt8tCY6-4jMk7guznY";
const count = 10;
const wrapper = document.querySelector("#wrapper");
let conditionTrue = true;

getRandomPhotos();

async function getRandomPhotos() {
  const response = await fetch(
    `https://api.unsplash.com/photos/random/?client_id=${apikey}&count=${count}`
  );
  const result = await response.json();
  displayPhotos(result);
}

function displayPhotos(photos) {
  const parent = document.createElement("div");
  photos.forEach((photo) => {
    const img = document.createElement("img");
    img.src = photo.urls.full;
    parent.append(img);
  });
  wrapper.append(parent);
}

window.addEventListener("scroll", pageScrolled);

function pageScrolled() {
  if (
    window.innerHeight + window.scrollY >= document.body.clientHeight &&
    conditionTrue
  ) {
  }
}

// in class I understand every think but in case off when we write code own to tb tote udjate hai

function UpdateTimer() {
  let currentTime = new Date().getTime();
  let elapsedTime = currentTime - startTime;

  let hour = Math.floor(elapsedTime / (1000 * 60 * 60));
  elapsedTime %= 1000 * 60 * 60;
  let minute = Math.floor(elapsedTime / (1000 * 60));
  elapsedTime %= 1000 * 60;
  let second = Math.floor(elapsedTime / 1000);
  elapsedTime %= 1000;
  //   let mili = Math.floor(elapsedTime / 10);

  console.log(hour + ":" + minute + ":" + second);
}
let startTime = new Date().getTime();
setInterval(() => UpdateTimer(), 10);
