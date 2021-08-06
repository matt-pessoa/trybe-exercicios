# Objetos

1. Crie um objeto player contendo as variáveis listadas abaixo.
<div style="background-color: black; padding: 20px">
 let name = 'Marta';
 let lastName = 'Silva';
 let age = 34;
 let medals = { golden: 2, silver: 3 };
</div>

2. Acesse as chaves name , lastName e age e concatene as suas informações para imprimir no console uma mensagem no seguinte formato: "A jogadora Marta Silva tem 34 anos de idade".
3. Adicione ao objeto a chave bestInTheWorld e atribua a esta chave um array contendo as datas em que a jogadora Marta foi considerada a melhor do mundo.
   Copiar
   [2006, 2007, 2008, 2009, 2010, 2018]
4. Acesse a chave bestInTheWorld e faça um console.log no seguinte formato: "A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes".
5. Acesse a chave medals e faça um console.log no seguinte formato: "A jogadora possui 2 medalhas de ouro e 3 medalhas de prata".

Agora veremos uma variação do laço for , que nos garante facilidade ao lidar com objetos.

# For/in

1. Usando o objeto abaixo, utilize For/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.
<div style="background-color: black; padding: 20px">
   let names = {
   person1: 'João',
   person2: 'Maria',
   person3: 'Jorge'
   };
</div>
2. Usando o objeto abaixo, utilize For/in e imprima um console.log com as chaves e valores desse objeto.
<div style="background-color: black; padding: 20px">
let car = {
model: 'A3 Sedan',
manufacturer: 'Audi',
year: 2020
};
</div>

# Exercícios

## Parte I - Objetos e For/In

Usando o objeto abaixo, faça os exercícios a seguir:

<div style="background-color: black; padding: 20px">
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
</div>
1. Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Valor esperado no console:
<div style="background-color: black; padding: 20px">
Bem-vinda, Margarida
</div>
2. Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console. Valor esperado no console:
<div style="background-color: black; padding: 20px">
{
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim'
}
</div>
3. Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:
<div style="background-color: black; padding: 20px">
personagem
origem
nota
recorrente]
</div>
4. Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto. Valor esperado no console:
<div style="background-color: black; padding: 20px">
Margarida
Pato Donald
Namorada do personagem principal nos quadrinhos do Pato Donald
Sim
</div>
5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves. Valor esperado no console:
<div style="background-color: black; padding: 20px">
Margarida e Tio Patinhas
Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178
Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas
Ambos recorrentes // Atenção para essa última linha!
</div>

## Parte II - Funções

1. Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

   - Exemplo de palíndromo: arara .
   - verificaPalindrome('arara') ;
   - Retorno esperado: true
   - verificaPalindrome('desenvolvimento') ;
   - Retorno esperado: false

2. Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
   - Array de teste: [2, 3, 6, 7, 10, 1]; .
   - Valor esperado no retorno da função: 4 .
3. Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
   - Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
   - Valor esperado no retorno da função: 6 .
4. Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
   - Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
   - Valor esperado no retorno da função: Fernanda .
5. Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
   - Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
   - Valor esperado no retorno da função: 2 .
6. Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.
   - Valor de teste: N = 5 .
   - Valor esperado no retorno da função: 1+2+3+4+5 = 15.
7. Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .
   - Valor de teste: 'trybe' e 'be'
   - Valor esperado no retorno da função: true
   - verificaFimPalavra('trybe', 'be') ;
   - Retorno esperado: true
   - verificaFimPalavra('joaofernando', 'fernan') ;
   - Retorno esperado: false
