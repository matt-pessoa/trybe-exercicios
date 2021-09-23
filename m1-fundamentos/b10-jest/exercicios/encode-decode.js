function encode(str) {
  // seu código aqui
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const numbers = [1, 2, 3, 4, 5];

  let newStr = '';
  for (letter of str) {
    if (vowels.includes(letter)) {
      newStr +=
        numbers[vowels.indexOf(vowels.find((element) => element === letter))];
    } else {
      newStr += letter;
    }
  }

  return newStr;
}

function decode(str) {
  // seu código aqui
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const numbers = [1, 2, 3, 4, 5];

  let newStr = '';
  for (letter of str) {
    if (numbers.map((element) => element.toString()).includes(letter)) {
      newStr +=
        vowels[
          numbers.indexOf(
            numbers.find((element) => element.toString() === letter)
          )
        ];
    } else {
      newStr += letter;
    }
  }

  return newStr;
}

console.log(decode('12345'));

module.exports = { encode, decode };
