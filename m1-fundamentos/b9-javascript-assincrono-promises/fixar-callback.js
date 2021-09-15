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

// ? 2- 2 - No código abaixo você tem a função getUser modificada, que agora funciona de modo assíncrono e imprime dados de uma pessoa qualquer depois de um certo tempo. Complete a função getUser de forma que ela receba um callback para que possa realizar as operações abaixo sobre a pessoa.
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
