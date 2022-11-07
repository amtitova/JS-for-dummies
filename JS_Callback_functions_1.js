//callback functions

function one(a, b) {
  return a + b;
}

function two(calc = one(2, 3)) {
  console.log(calc);
}

two();
two(15);
