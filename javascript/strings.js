// let a = "Rohit";
// let b = "100";

// indexOf, lastIndexOf, includes, slice, substring

// let str = "Javascript is Awesome";
// console.log(str.indexOf("v"))
// console.log(str.indexOf("a"))
// console.log(str.indexOf("A"))
// console.log(str.lastIndexOf("j"))
// console.log(str.lastIndexOf("e"));
// console.log(str.lastIndexOf("a"));

// console.log(str.indexOf("is"))

// let str2 = "abcdabc";
// console.log(str2.lastIndexOf("ab"));

// const str = "Fatima is studying B.Tech";
// console.log(str.includes("Fatima")); //true
// console.log(str.includes("fatima")); //false

//slice, substring: extract a smaller string

// const str = "Fatima is studying B.Tech";
// console.log(str.slice(0, 6));
// console.log(str.slice(6,10).length);

// console.log(str.slice(10,20))

// let a = str.slice(10, 15).length;
// let b = str.slice(15, 17).length;
// console.log(a - b);

// console.log(str.slice(10).length + str.slice(10,20).length);

// console.log(str.slice(-8, -3));
// console.log(str.slice(-8).length);

// console.log(str.slice(0,10).length)
// console.log(str.substring(0,10).length)

let a = "Nawab";
let b = "Abhinandan";
let c = "Fatima";

// console.log(a + ", "+ b + " & " + c + " are studying Javascript");

//TEMPLATE LITERAL

// console.log(`${a}, ${b} & ${c} are studying Javascript`);

// console.log(a.concat(b,c))

// console.log(a.concat(b,c))

// Nawab is studying Javascript
// console.log(a +" is studying Javascript");

// const str = "Javascript is confusing";
// console.log(str.replace("confusing", "awesome"))

// const str = "abhinandan";
// FIRST OCCURENCE
// console.log(str.replace("a", "A"))

//Regular Expression: using replace to change all occurrences
// console.log(str.replace(/a/g, "A"));

// i: case insensitivity

// ALL OCCURRENCES
// console.log(str.replaceAll("a", "A"));

//split: string to array

// const names = ["Ram", "Ayushi", "Nawab", "Abhinandan"]

// const names = "Rishabh Ayushi Nawab Abhinandan";

// console.log(names.split(" "));

// const dt = "2024-04-02";
// const dtArr = dt.split("-")

// console.log(dtArr[2] + "-" + dtArr[1] + "-" + dtArr[0])

// console.log(dt.split("-").reverse().join("-"));

// const n = "Abhinandan";
// console.log(n.split(""));

// const n2 = "Nawab";
// console.log(n2.split("").length);

// const n = "Abhinav";
// console.log(n.split("")[3])

const name = "abhinandan";

// console.log(name.toLowerCase())

// const firstLetter = name.slice(0,1)

// const firsLetterCapital = firstLetter.toUpperCase()

// console.log(firsLetterCapital + name.slice(1))

// charAt()

// console.log(" 'Neeraj' ");

// const numbers = [45, 1, 44, 99, 67, 8, 10];

// for (let i = 0; i < numbers.length; i++) {
//   for (j = i + 1; j < numbers.length; j++) {
//     if (numbers[i] < numbers[j]) {
//       let temp = numbers[i];
//       numbers[i] = numbers[j];
//       numbers[j] = temp;
//     }
//   }
// }

// console.log(numbers);

// const email = "verygoodayushi@microsoft.in";

// // console.log(email.split("@")[1].split(".")[0])

// console.log(email.substring(email.indexOf("@")+1, email.lastIndexOf(".")));

// const numbers = [67, 23, 67, 1, 12, 12, 23];
// // [67,23,1,12]

// for (let i = 0; i < numbers.length; i++) {
//   for (let j = i + 1; j < numbers.length; j++) {
//     if (numbers[i] === numbers[j]) {
//       numbers.splice(j, 1);
//       j--; //the element
//     }
//   }
// }
// console.log(numbers)


// for(let i=0;i<nums.length;i++) {
//     let ans;
//     if(nums[i]!==nums[i+1]);
//     ans=nums[i];
//     return ans;
// }
// console.log(ans);


