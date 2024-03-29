//
var b = document.getElementById("mybtn");

var crySrc =
  "https://media0.giphy.com/media/TpsuCxwsNH8gatbpR5/200w.gif?cid=6c09b952dyywn1y92vw3yhsw616nvagjynhzgbil31scy7rt&ep=v1_gifs_search&rid=200w.gif&ct=g";

var happySrc =
  "https://i.pinimg.com/originals/aa/f7/f2/aaf7f2bb862a0004acad5bff2b08d927.gif";

var happy = true;
b.addEventListener("click", function () {
  let myimg = document.getElementById("img");
  if (happy == true) {
    myimg.src = happySrc;
    happy = false;
  } else {
    myimg.src = crySrc;
    happy = true;
  }
});
