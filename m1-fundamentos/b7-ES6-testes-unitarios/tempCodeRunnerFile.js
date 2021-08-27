function calculateFactorial(num) {
  let factorial = num;
  for (i = (num-1); i <= 1; i -= 1) {
    factorial *= (num - i);
  }
  console.log(factorial)
}
calculateFactorial(2);