const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};
// Função assíncrona (setTimeout)

module.exports = uppercase;
