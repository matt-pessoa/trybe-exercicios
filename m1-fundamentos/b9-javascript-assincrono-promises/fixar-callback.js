// ? 1- No código abaixo você tem a função getUser , que retorna uma pessoa qualquer. Complete a função getUser de forma que ela receba uma outra função como parâmetro para que possa realizar as operações abaixo sobre a pessoa retornada.
const assert = require('assert');

const userFullName = ({ firstName, lastName }) =>
  `Hello! My name is ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) =>
  `${firstName} is ${nationality}`;

const getUser = (callback) => {
  const userToReturn = {
    firstName: 'Ivan',
    lastName: 'Ivanovich',
    nationality: 'Russian',
  };
  const { firstName, lastName, nationality } = userToReturn;

  return callback({ firstName, lastName, nationality });
};

assert.strictEqual(getUser(userFullName), 'Hello! My name is Ivan Ivanovich'); // complete a chamada da função de getUser
assert.strictEqual(getUser(userNationality), 'Ivan is Russian'); // complete a chamada da função de getUser

// ? 2- No código abaixo você tem a função getUser modificada, que agora funciona de modo assíncrono e imprime dados de uma pessoa qualquer depois de um certo tempo. Complete a função getUser de forma que ela receba um callback para que possa realizar as operações abaixo sobre a pessoa.
const userFullName2 = ({ firstName, lastName }) =>
  `Hello! My name is ${firstName} ${lastName}`;
const userNationality2 = ({ firstName, nationality }) =>
  `${firstName} is ${nationality}`;

const delay = (maxMilliseconds = 5000) =>
  Math.floor(Math.random() * maxMilliseconds);

const getUser2 = (callback) => {
  setTimeout(() => {
    const user = {
      firstName: 'Ivan',
      lastName: 'Ivanovich',
      nationality: 'Russian',
    };
    console.log(callback(user));
  }, delay());
};

getUser2(userFullName2); // deve imprimir "Hello! My name is Ivan Ivanovich" depois de um certo tempo
getUser2(userNationality2); // deve imprimir "Ivan is Russian" depois de um certo tempo

// ? 3 - A função getCountry abaixo tem aproximadamente 50% de chance de obter com sucesso um país, tendo um callback para poder ser feita qualquer operação sobre o país retornado. Adicione um outro callback para getCountry , de forma que trate a mensagem de erro retornada.
const countryName = ({ name }) => console.log(`Returned country is ${name}`);
const countryCurrency = ({ name, currency }) =>
  console.log(`${name}'s currency is the ${currency}`);

const delay2 = (maxMilliseconds = 5000) =>
  Math.floor(Math.random() * maxMilliseconds);

const printErrorMessage = (error) =>
  console.log(`Error getting country: ${error}`);

const getCountry = (onSuccess, onFailure) => {
  setTimeout(() => {
    const didOperationSucceed = Math.random() >= 0.5; // gera um numero aleatorio entre 0 e 1
    if (didOperationSucceed) {
      // se for maior que 0.5, sucesso (true)!
      const country = {
        name: 'Brazil',
        hdi: 0.759,
        currency: 'Real',
      };
      onSuccess(country);
    } else {
      const errorMessage = 'Country could not be found';
      onFailure(errorMessage);
    }
  }, delay2());
};

// Deve imprimir "Returned country is Brazil" no sucesso, ou "Error getting country: Country could not be found" em falha
getCountry(countryName, printErrorMessage);

// Deve imprimir "Brazil's currency is the Real" no sucesso, ou "Error getting country: Country could not be found" em falha
getCountry(countryCurrency, printErrorMessage);
