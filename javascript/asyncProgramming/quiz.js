const questions = [
  {
    q: "2+2",
    a: 4,
    options: [1, 2, 3, 4],
  },
  {
    q: "2+2+2",
    a: 6,
    options: [4, 5, 6, 7],
  },
  {
    q: "2+2-2",
    a: 2,
    options: [0, 2, 22, 4],
  },
  {
    q: "2+2*2",
    a: 6,
    options: [8, 6, 4, 2],
  },
];

const questionDiv = document.querySelector("#question");
const paragraphs = document.querySelectorAll("#options p");
let index = 0;

printQuestionOption(); //PRINT FIRST QUESTION INSTANTLY

const id = setInterval(printQuestionOption, 5000);
// const timer = setInterval(startTimer, 1000);

function printQuestionOption() {
  if (index === questions.length) clearInterval(id);
  else {
    questionDiv.innerText = questions[index].q;
    paragraphs.forEach((para, ind) => {
      para.innerText = questions[index].options[ind];
    });
    index++;
  }
}

// function startTimer(){

// }