var radius = [5, 7, 8, 9];

function perimeterCircle(r) {
  //   values.forEach((r) => console.log(2 * Math.PI * r));
  console.log(2 * Math.PI * r);
}

function areaCircle(r) {
  //   values.forEach((r) => console.log(Math.PI * r * r));
  console.log(Math.PI * r * r);
}

function printValues(values, logic) {
  values.forEach((r) => logic(r));
}

// printValues(radius, perimeterCircle);
// printValues(radius, areaCircle);

// Functon returning a function
function sum(a, b) {
  return () => console.log(a + b);
}

sum(5, 6)();
