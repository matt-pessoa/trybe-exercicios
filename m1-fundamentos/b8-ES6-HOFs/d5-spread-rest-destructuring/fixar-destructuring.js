const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

// saudacoes[1](saudacoes[0]); // Olá

// ? Produza o mesmo resultado acima, porém utilizando array destructuring

const [string, handleGreeting] = saudacoes;
handleGreeting(string);

/**
 * ? Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo
 */
let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

console.log(comida, animal, bebida); // arroz gato água

[comida, animal, bebida] = ['arroz', 'gato', 'água'];
console.log(comida, animal, bebida);
