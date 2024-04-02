var images = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-wYayLFKc8A1NhsR3c81Vti9Wq_82OFY3Ltv70tzkQA&s",
];
var index = 0;

function addImage() {
  let input = document.getElementById("address");
  let imgSrc = input.value;
  if (imgSrc.length < 5) {
    alert("Invalid Image");
  } else {
    images.push(imgSrc);
    showNumbers();
  }
}

function next() {
  if (index + 1 < images.length) {
    index = index + 1;
    let imageElement = document.getElementById("img");
    imageElement.src = images[index];
    showNumbers();
  }
}

function prev() {
  if (index > 0) {
    index = index - 1;
    let imageElement = document.getElementById("img");
    imageElement.src = images[index];
    showNumbers();
  }
}

function showNumbers() {
  let p = document.getElementById("count");
  p.innerText = `Current Image: ${index + 1}/${images.length}`;
}

document.getElementById("next").addEventListener("click", next);

document.getElementById("prev").addEventListener("click", prev);

document.getElementById("addimage").addEventListener("click", addImage);
