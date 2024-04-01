// 1
// 2 1
// 3 2 1
// 4 3 2 1
// 5 4 3 2 1
// 4 3 2 1
// 3 2 1
// 2 1
// 1

n = 5;

// upper part
for (let i = 1; i <= n; i++) {
  out = "";
  for (let j = i; j >= 1; j--) {
    out += j.toString() + " ";
  }
  console.log(out);
}
// lower part
for (let i = n - 1; i >= 1; i--) {
  out = "";
  for (let j = i; j >= 1; j--) {
    out += j.toString() + " ";
  }
  console.log(out);
}
