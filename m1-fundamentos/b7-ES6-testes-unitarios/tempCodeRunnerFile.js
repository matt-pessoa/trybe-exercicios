
function recursiveFactorial(num) {
  let factorial = num;
  if (num === 0 || num === 1) {
    factorial = 1;
  } else {
    factorial *= recursiveFactorial(num - 1);
  }
  return factorial;
}
console.log(recursiveFactorial(5));