const imcSituation = (imc) => {
  let situation;
  if (imc < 18.5) {
    situation = 'Abaixo do peso';
  } else if (imc < 24.9) {
    situation = 'Peso normal';
  } else if (imc < 29.9) {
    situation = 'Sobrepeso';
  } else if (imc < 34.9) {
    situation = 'Obesidade grau I';
  } else if (imc < 39.9) {
    situation = 'Obesidade grau II';
  } else {
    situation = 'Obesidade grau III e IV';
  }
  return situation;
};

module.exports = imcSituation;
