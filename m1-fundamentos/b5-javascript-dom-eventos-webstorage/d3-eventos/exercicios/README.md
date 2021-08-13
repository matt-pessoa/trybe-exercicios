## Exercício 1:

O array <code>dezDaysList</code> contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <code>ul</code> com ID <code>"days"</code>. Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.

- Os dias devem estar contidos em uma tag <code>li</code>, e todos devem ter a classe <code>day</code>.
- Os dias 24, 25 e 31 são feriados e, além da classe <code>day</code>, devem conter também a classe <code>holiday</code>.
- Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe <code>friday</code>.

```js
const dezDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];
```

## Exercício 2:

Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".

- Adicione a este botão a ID <code>"btn-holiday"</code>.
- Adicione este botão como filho/filha da tag <code>div</code> com classe <code>"buttons-container"</code>.

## Exercício 3:

Implemente uma função que adicione ao botão <code>"Feriados"</code> um evento de <code>"click"</code> que muda a cor de fundo dos dias que possuem a classe <code>"holiday"</code>.

- É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .

## Exercício 4:

Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".

- Adicione a este botão o ID <code>"btn-friday"</code>.
- Adicione este botão como filho/filha da tag <code>div</code> com classe <code>"buttons-container"</code>.

## Exercício 5:

Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.

- É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.

## Exercício 6:

Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.

- [Dica - Propriedade: event.target](https://developer.mozilla.org/en-US/docs/Web/API/Event/target).

## Exercício 7:

Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <code>span</code> contendo a tarefa.

- O elemento criado deverá ser adicionado como filho/filha da tag <code>div</code> que possui a classe <code>"my-tasks"</code>.

## Exercício 8:

Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <code>div</code> com a classe task .

- O parâmetro cor deverá ser utilizado como cor de fundo da <code>div</code>> criada.
- O elemento criado deverá ser adicionado como filho/filha da tag <code>div</code> que possui a classe <code>"my-tasks"</code>.

## Exercício 9:

Implemente uma função que adiciona um evento que, ao clicar no elemento com a tag <code>div</code> referente a cor da sua tarefa, atribua a este elemento a classe <code>task selected</code>, ou seja, quando sua tarefa possuir a classe <code>task selected</code>, ela estará selecionada.

- Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task , ou seja, esta tarefa está deixando de ser uma tarefa selecionada.

## Exercício 10:

Implemente uma função que adiciona um evento que, ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.

- Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119) .

### Bônus:

Vamos adicionar compromissos ao seu calendário? Implemente uma função que, ao digitar um compromisso na caixa de texto "COMPROMISSOS", adiciona o item à lista "MEUS COMPROMISSOS" ao clicar no botão "ADICIONAR".

- Se nenhum caractere for inserido no campo <code>input</code>, a função deve retornar um <code>alert</code> com uma mensagem de erro ao clicar em "ADICIONAR".
- Ao pressionar a tecla "enter" o evento também deverá ser disparado.
- [Dica - Propriedade: keyCode](https://www.w3schools.com/JSREF/event_key_keycode.asp).
