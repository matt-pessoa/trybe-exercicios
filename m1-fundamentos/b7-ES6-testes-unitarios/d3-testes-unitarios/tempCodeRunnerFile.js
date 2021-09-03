const wordLengths = (arr) => {
  const newArray = [];
  for (word of arr) {
    newArray.push(word.length);
  }
  return newArray;
};
console.log(wordLengths(['pizza', 'julho']));