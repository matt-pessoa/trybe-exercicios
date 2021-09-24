const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};
uppercase('mini me', console.log);
// Função assíncrona (setTimeout)

module.exports = uppercase;
