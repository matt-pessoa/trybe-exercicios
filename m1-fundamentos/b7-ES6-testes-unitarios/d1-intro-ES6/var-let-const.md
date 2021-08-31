### Escopo

- É um contexto delimitante aos quais os valores e expressões estão associados.

```jsx
// Global scope
let globalScopedVariable; // variável no escopo global (visível para todos)

// Function scope
function scopeSample(assign) {
	let functionScopeVariable; // variável no escopo da função (vísivel dentro da função)

	// Block scope
	if(assign) {
		let block ScopedVariable; // variável no escopo de bloco (visível dentro do if)
	}
}
```

### Variable **declarations** vs **initialization**

```jsx
var declaration // em JavaScript, as variáveis são inicializadas com o valor indefinido

console.log(declaration) // undefined

declaration = "Olá mundo" // inicializar é definir um valor para aquela variável declarada
```

### Scope

Variáveis declaradas dentro de uma função, só existem naquele espaço

```jsx
function getDate() {
	var date = new Date(); // variável "date" criada dentro da função getDate

	return date;
}

console.log(date) // date não está definido fora do scope de getDate()
```

### Hoisting

JavaScript, ao interpretar seu código, vai automaticamente mover todas as funções e as declarações de variáveis para o topo do *scope* atual.

```jsx
// Seu código
console.log(hoisted) // undefined
var hoisted

// É interpretado como
var hoisted
console.log(hoisted) // undefined
```

> "Why does this happen?
I don't really know
and honestly
I don't really care."
                          - Tyler McGinnis (2019)

É importante, no entanto, estar ciente de que ***isso acontece**.*

```jsx
    // Seu código

    function discountPrices (prices, discount) {
    	var discounted = [];
    	for (var i = 0; i < prices.length; i++){
    	var discountedPrice = prices[i] * (1 - discount);
    	var finalPrice = Math.round(discountedPrice * 100) / 100;
    	discounted.push(finalPrice);
    	}

    return discounted;
    }

    discountPrices()
```


```jsx
    // É interpretado como

    function discountPrices (prices, discount) {
    	var discounted;
    	var i;
    	var discountedPrice;
    	var finalPrice;

    	discounted = [];
    	for(i = 0; i < prices.length; i++) {
    		discountedPrice = prices[i] * (1 - discount);
    		finalPrice = Math.round(discountedPrice * 100) / 100;
    		discounted.push(finalPrice);
    	}
    }
```

Ou seja, JavaScript declara todas as variáveis no início do *scope* e, só depois, atribui algum valor à elas.

Se você declarar uma variável apenas como `discounted = [];` ela se tornará parte do *escopo global*, uma **PÉSSIMA** ideia.

### 1) `var` or `let`?

### `var`
- ***function* scoped**
      - A variable created with `var` will be accessible anywhere inside a function.
- Referencing a variable before it is declared will result in `undefined`

```jsx
                function discountPrices (prices, discount) {
                	var discounted = [];

                	for (var i = 0; i < prices.length; i++){
                		var discountedPrice = prices[i] * (1 - discount);
                		var finalPrice = Math.round(discountedPrice * 100) / 100;
                		discounted.push(finalPrice);
                	}

                console.log(finalPrice); // retorna o valor de finalPrice
                			 // Embora finalPrice esteja num bloco nested dentro
                			 // da função discountPrices, por termos utilizado var
                			 // é possível acessar finalPrice de qualquer lugar dentro
                			 // da função discountPrices.

                return discounted;
                }

                discountPrices()
```
### `let`
  - ***block* scoped**
        - A variable created with `let` will be available inside the block it was created in as well as any nested blocks (functions, for loops, essentially anything that uses {}).
  - Referencing a variable before it is declare will result in `reference error`

```jsx
                function discountPrices (prices, discount) {
                	let discounted = [];

                	for (let i = 0; i < prices.length; i++){
                		let discountedPrice = prices[i] * (1 - discount);
                		let finalPrice = Math.round(discountedPrice * 100) / 100;
                		discounted.push(finalPrice);
                	}

                console.log(finalPrice); // reference error
                		   // Agora só é possível acessar finalPrice se estivermos
                			 // dentro do bloco em que a variável foi declarada

                return discounted;
                }

                discountPrices()
```


### 2) wtf is `const`?

`const` **is **almost** exactly the same as `let`*.*
Once you've assigned a value to a variable using `const`, you can't reassign it to a new value.

```jsx
    let name = "Matheus";
    const handle = "matheuspessoafonseca";

    name = "Arthur" // no errors, all good :)

    handle = "arthurconandoyle" // Uncaught TypeError: Assignment to constant variable."
```

Mas veja bem, as variáveis declaradas com `const` ainda podem ser mutáveis, mas não podemos atribuir à elas um novo valor.

### Qual utilizar?

Só não usa `var`...