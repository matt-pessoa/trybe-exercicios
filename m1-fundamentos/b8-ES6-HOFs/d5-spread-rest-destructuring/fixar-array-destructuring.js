const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

// saudacoes[1](saudacoes[0]); // Olá

// ? Produza o mesmo resultado acima, porém utilizando array destructuring

const [string, handleGreeting] = saudacoes;
handleGreeting(string);

// ? Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo
let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

console.log(comida, animal, bebida); // arroz gato água

[comida, animal, bebida] = ['arroz', 'gato', 'água'];
console.log(comida, animal, bebida);

// ? Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo
let numerosPares = [1, 3, 5, 6, 8, 10, 12];
[, , , ...numerosPares] = numerosPares; // I'd rather do this: let onlyEven = numerosPares.slice(3);

console.log(numerosPares); // [6, 8, 10, 12];
