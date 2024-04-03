// VAlid Anagrams
// let s = "anagram";
// let t = "nagaraa";

// function isValid(s1, s2) {
//   let count = {};
//   for (let i = 0; i < s1.length; i++) {
//     let currentChar = s1[i];
//     if (count.hasOwnProperty(currentChar)) count[currentChar]++;
//     else count[currentChar] = 1;
//   }
//   for (let i = 0; i < s2.length; i++) {
//     let currentChar = s2[i];
//     if (count.hasOwnProperty(currentChar)) count[currentChar]--;
//     else return false;
//   }

//   for (key in count) {
//     if (count[key] != 0) return false;
//   }
//   return true;
// }

// console.log(isValid(s, t));
