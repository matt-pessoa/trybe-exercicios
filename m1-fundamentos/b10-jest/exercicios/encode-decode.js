function encode(str) {
  // seu código aqui
  let strSplit = str.split('');
  for (let index in strSplit) {
    if (strSplit[index] === 'a') {
      strSplit[index] = 1;
    } else if (strSplit[index] === 'e') {
      strSplit[index] = 2;
    } else if (strSplit[index] === 'i') {
      strSplit[index] = 3;
    } else if (strSplit[index] === 'o') {
      strSplit[index] = 4;
    } else if (strSplit[index] === 'u') {
      strSplit[index] = 5;
    }
  }
  let encodedStr = strSplit.join('');
  return encodedStr;
}

function decode(str) {
  // seu código aqui
  let strSplit = str.split('');
  for (let index in strSplit) {
    if (strSplit[index] == 1) {
      strSplit[index] = 'a';
    } else if (strSplit[index] == 2) {
      strSplit[index] = 'e';
    } else if (strSplit[index] == 3) {
      strSplit[index] = 'i';
    } else if (strSplit[index] == 4) {
      strSplit[index] = 'o';
    } else if (strSplit[index] == 5) {
      strSplit[index] = 'u';
    }
  }
  let decodedStr = strSplit.join('');
  return decodedStr;
}

module.exports = { encode, decode };
