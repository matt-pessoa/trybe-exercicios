/**
 * * For/in em um array
 */

let pizzas = ["Frango", "Catupiry", "Margherita"];

for (p in pizzas) {
  // busca o index dos elementos dentro do array (propriedades --> 0: "Frango", 1: "Catupiry")
  console.log(p);
}

for (p of pizzas) {
  // busca os próprios elementos do array (ES6)
  console.log(p);
}

/**
 * * For/in em um objeto
 */

let sanduiches = {
  nome: "X-Tudo",
  preco: "27.9",
  salada: true,
};

for (key in sanduiches) {
  console.log(key); // retorna: nome preco e salada (as propriedades, não os valores)
}

for (key in sanduiches) {
  console.log(sanduiches[key]); // retorna o valor de cada propriedade --> sanduiches.nome, sanduiches.preco, sanduiches.salada
}
