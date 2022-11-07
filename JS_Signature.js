function doSth(oneArgument, twoArgument) {
  let x = oneArgument + twoArgument();
  return x;
}

let result = doSth(3, 7);
console.log(result);

let resultWithFunction = doSth(3, function () {
  // code to calculate
  return 6 + 10;
});
console.log(resultWithFunction);
