const exercise1Promise = (num1, num2, num3) => {
  return new Promise((resolve, reject) => {
    if (
      typeof num1 !== 'number' ||
      typeof num2 !== 'number' ||
      typeof num3 !== 'number'
    ) {
      return reject(new Error('Informe apenas números'));
    } else if (num1 < 50 || num2 < 50 || num3 < 50) {
      return reject(new Error('Valor muito baixo'));
    }
    return resolve((num1 + num2) * num3);
  });
};

module.exports = exercise1Promise;
