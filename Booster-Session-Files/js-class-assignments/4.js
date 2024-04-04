// VAlid Anagrams
// let s = prompt("Enter string a");
// let t = prompt("Enter string B");

function isValid(s1, s2) {
  let count = {};
  for (let i = 0; i < s1.length; i++) {
    let currentChar = s1[i];
    if (count.hasOwnProperty(currentChar)) count[currentChar]++;
    else count[currentChar] = 1;
  }
  for (let i = 0; i < s2.length; i++) {
    let currentChar = s2[i];
    if (count.hasOwnProperty(currentChar)) count[currentChar]--;
    else return false;
  }

  for (key in count) {
    if (count[key] != 0) return false;
  }
  return true;
}

let user = {
  name: "Ashish",
  age: 21,
  company: "24[7].ai",
  role: "SDE",
  address: {
    city: "Nangal",
    state: "Punjab",
    pincode: 140124,
    cordinates: {
      x: 45,
      y: 35,
    },
  },
};

function printObje(obj) {
  for (let key in obj) {
    if (typeof obj[key] == "object") {
      printObje(obj[key]);
    } else console.log(key, ":", obj[key]);
  }
}

printObje(user);
