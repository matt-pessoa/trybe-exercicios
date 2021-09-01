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