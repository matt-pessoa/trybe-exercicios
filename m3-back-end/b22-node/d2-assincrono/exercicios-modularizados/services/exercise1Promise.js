const exercise1Promise = (num1, num2, num3) => {
  return new Promise((resolve, reject) => {
    if (
      typeof num1 !== 'number' ||
      typeof num2 !== 'number' ||
      typeof num3 !== 'number'
    ) {
      return reject(new Error('Informe apenas números'));
    }
    return resolve((num1 + num2) * num3);
  });
};

module.exports = exercise1Promise;
