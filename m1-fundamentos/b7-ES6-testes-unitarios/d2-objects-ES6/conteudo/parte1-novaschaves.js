/**
 * ! Parte I - Adicionando novas chaves
 * * Crie uma função que receba três parâmetros: um objeto, o nome de uma chave e seu valor. O retorno dessa função deve ser o objeto já coma nova chave adicionada nele.
 */

// function addKey(obj, newKey, newValue) {
//   let newObjKey = newKey;
//   let newObjValue = newValue;
//   obj.newObjKey = newObjValue; // dessa forma não funciona, já que a key do obj será 'newObjKey' em vez de 'lastName'
//   return obj;
// }

function addKey(obj, newKey, newValue) {
  obj[newKey] = newValue;
  return obj;
}

const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

console.log(addKey(customer, 'lastName', 'Ferreira'));
