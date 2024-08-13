// console.log("Hello World");

// document.write("Hello World");// This will not work.
// import sum from "./sum.js";

// console.log(sum(10, 20));

//http, fs, path, readline, url, os

// import readline from "readline";

// const rl = readline.createInterface(process.stdin, process.stdout);

// rl.question("What is your name?", (name) => {
//   rl.write(name);
//   rl.close();
// });

// rl.question("Write a number?", (n) => {
//   if (n % 2 === 0) rl.write(String(n * n));
//   else rl.write(String(n * n * n));
//   rl.close();
// });

import fs from "fs";

fs.writeFile("newFile.txt", "This file is created with Node", (err) => {
  if (err) console.log("There is some error. Your file cannot be created");
});

// readFile, appendFile, unlink
// readFileSync, writeFileSync