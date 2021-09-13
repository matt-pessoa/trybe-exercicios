const numbers = [50, 85, -30, 3, 15];

const findLargestFor = (array) => {
  let largestNumber = array[0];
  for (number of array) {
    if (number > largestNumber) {
      largestNumber = number;
    }
  }
  return largestNumber;
};
console.log(findLargestFor(numbers));

const findLargestReduce = (array) => {
  const getLargest = array.reduce((pValue, cValue) =>
    pValue > cValue ? pValue : cValue
  );

  return getLargest;
};
console.log(findLargestReduce(numbers));
