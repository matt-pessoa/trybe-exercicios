## Parte II - Object.keys()
O método `Object.keys()` retorna um array com strings correspondentes às chaves encontradas em um objeto. A ordenação das chaves é a mesma que a dada pelo loop `for/in`.

```js
Object.keys(objeto)
```
### Exemplo:

```js
const coolestTvShow = {
  name: 'BoJack Horseman',
  genre: 'adult animation',
  createdBy: 'Raphael Bob-Waksberg',
  favoriteCharacter: 'Princess Carolyn',
  quote: 'Princess Carolyn always lands on her feet.',
  seasons: 6,
};
```
Para percorrer as chaves de um objeto, até então eu usaria o loop `for/in`. `For/in` percorre o index de um objeto.
```js
objKeys = [];
for (const property in coolestTvShow) {
  objKeys.push(property);
}

// Retorno:
// ['name', 'genre', 'createdBy', 'favoriteCharacter', 'quote', 'seasons']
```
Mas existe um método mais robusto para alcançar o mesmo resultado: `Object.keys()`
```js
Object.keys(coolestTvShow);

// Retorno:
// ['name', 'genre', 'createdBy', 'favoriteCharacter', 'quote', 'seasons']
```
## Parte III - Object.values()
O método `Object.values()` segue a mesma lógica do `Object.keys()`, ou seja, retorna um array com strings correspondentes ao valores encontrados em um objeto. A ordenação dos valores é a memsma que a dada pelo loop `for/in`.

### Exemplo:
```js
const coolestTvShow = {
  name: "BoJack Horseman",
  genre: "adult animation",
  createdBy: "Raphael Bob-Waksberg",
  favoriteCharacter: "Princess Carolyn",
  quote: "Princess Carolyn always lands on her feet.",
  seasons: 6,
};
```
Para percorrer as chaves de um objeto, até então eu usaria o loop `for/in`. `For/in` percorre o index de um objeto.
```js
const arrayOfValues = [];
for (const property in coolestTvShow) {
  arrayOfValues.push(property);
}

// Retorno:
// ['BoJack Horseman','adult animation','Raphael Bob-Waksberg','Princess Carolyn','Princess Carolyn always lands on her feet.', 6]
```
Mas existe um método mais robusto para alcançar o mesmo resultado: `Object.values()`
```js
Object.values(coolestTvShow);

// Retorno:
// ['BoJack Horseman','adult animation','Raphael Bob-Waksberg','Princess Carolyn','Princess Carolyn always lands on her feet.', 6]
```

## Parte IV - Object.entries()
O método `Object.entries()` retorna um array cujos elementos também são arrays (um **array de arrays**) para cada par `chave` e `valor`.

[['chave1', 'valor1'], ['chave2', valor2]]

```js
const coolestTvShow = {
  name: "BoJack Horseman",
  genre: "adult animation",
  createdBy: "Raphael Bob-Waksberg",
  favoriteCharacter: "Princess Carolyn",
  quote: "Princess Carolyn always lands on her feet.",
  seasons: 6,
};
Object.entries(coolestTbShow);

// Retorno:
// // [
//   [ 'name', 'BoJack Horseman' ],
//   [ 'genre', 'adult animation' ],
//   [ 'createdBy', 'Raphael Bob-Waksberg' ],
//   [ 'favoriteCharacter', 'Princess Carolyn' ],
//   [ 'quote', 'Princess Carolyn always lands on her feet.' ],
//   [ 'seasons', 6 ]
// ]
```

## Parte V - Object.assign()
Método utilizado para copiar os valores de todas as propriedades (keys) de um ou mais objetos para um objeto de destino.
- O **primeiro parâmetro** *sempre* será o objeto de **destino**.
- `Object.assign()` retorna o próprio objeto de destino. Ou seja, o modifica.
```js
// A função recebe um número qualquer de parâmetros. Todos são agregados como valores para adicionar ao objeto de destino.

Object.assign(destino, objeto1);
Object.assign(destino, objeto1, objeto2);
Object.assign(destino, objeto1, objeto2, objeto3, objeto4);
```
### Exemplo:
```js
const person = {
  name: 'Alberto',
  lastName: 'Gomes',
  age: 20,
};

const info = {
  age: 23,
  job: 'engenheiro',
};

const family = {
  children: ['Maria', 'João'],
  wife: 'Ana',
};

Object.assign(person, info, family)
console.log(person)

/* Output
  { name: 'Alberto',
  lastName: 'Gomes',
  age: 23,
  job: 'engenheiro',
  children: [ 'Maria', 'João' ],
  wife: 'Ana'
  } */
```
1. O método `Object.assign()` adicionou as keys de `info` e de `family` ao objeto `person`.
2. A chave `age` aparece tanto em `person` como em info e é sobrescrita pelo valor contido em `info`. 
    - Quando há keys repetidas entre o objeto destino e os objetos passados por parâmetro, o objeto destino sempre utilizará o último valor disponível (*it gives me CSS vibes* ).

#### **Como utilizar o método `Object.assign()` sem alterar o destino?**

Para resolver esse problema, podemos passar como primeiro parâmetro do Object.assign um objeto vazio {} e armazenar seu retorno em uma nova variável.
```js
const person = {
  name:'Roberto',
};

const lastName = {
  lastName: 'Silva',
};

const newPerson = Object.assign({},person,lastName);
newPerson.name = 'Gilberto';

console.log(newPerson);
console.log(person);

// { name: 'Gilberto', lastName: 'Silva' }
// { name: 'Roberto' }
```
Apenas `newPerson`foi alterado.