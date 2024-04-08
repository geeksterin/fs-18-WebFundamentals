// const pEl = document.getElementsByTagName("p")

// // console.log(pEl[0].innerHTML)
// // console.log(pEl[0].innerText)
// // console.log(pEl[0].textContent)

// const nameP = document.getElementsByTagName("p")[0]

// document.write(nameP.innerHTML) //understands & implements HTML tags as well

// document.write(nameP.innerText) //cannot understand & implement HTML tags. It can only undestand plain text

// const heading = document.getElementsByTagName("h2")[0];

// document.write(heading.innerHTML)
// document.write(heading.innerText)
// document.write(heading.textContent)

// const para = document.getElementsByTagName("p")[0];
// const heading = document.getElementsByTagName("h1")[0];

// heading.innerText = para.innerText;

// para.innerText = '';

// const para = document.querySelector("p")
// console.log(para)

// const heading = document.querySelector("h1")
// console.log(heading)

// WILL PICK THE FIRST OCCURRENCE

// document.querySelector("#p1") // of element with id p1

// document.querySelector(".p2") // of element with class p2

// console.log(document.querySelector("h3"))

// console.log(document.querySelector("section div p"))

// document.querySelector("table #id")
// document.querySelector("iframe #id")

// queryselector me index de sakte hai kya - NAHI

// querySelectorAll WILL GIVE YOU ALL THE OCCURRENCES

// WE CANNOT APPLY ANY PROPERTY / FUNCTION DIRECTLY ON NODELIST OBTAINED WITH QUERYSELECTORALL OR ON A COLLECTION

// const para = document.querySelectorAll("p")
// console.log(para.innerText)

// console.log(para[0].innerText)
// console.log(para[1].innerText)
// console.log(para[2].innerText)
// console.log(para[3].innerText)

// for(let i=0;i<para.length;i++){
//     console.log(para[i].innerText)
// }

const paraEl = document.getElementsByTagName("p");

const paraElements = document.querySelectorAll("p");

// console.log(paraEl)
// console.log(paraElements)

// paraElements.forEach((element) => {
//     console.log(element.innerText)
// })

// Array.from(paraEl).forEach((element) => {
//     console.log(element.innerText)
// })

// NODELIST IS MORE CLOSER TO AN ARRAY THAN A HTMLCOLLECTION

const p = document.querySelectorAll("p");
const heading = document.querySelectorAll("h3");

// for (let i = 0; i < p.length; i++) {
//   heading[i].innerText = p[i].innerText;
//   p[i].innerText = "";
// }

heading.forEach((head, index, arr) => {
  console.log(arr);
  head.innerText = p[index].innerText;
  p[index].innerText = "";
});
