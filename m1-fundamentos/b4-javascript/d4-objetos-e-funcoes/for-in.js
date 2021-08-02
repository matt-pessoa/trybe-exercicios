// 1) Imprima a mensagem "Olá xxxx"
let names = {
  person1: "João",
  person2: "Maria",
  person3: "Jorge",
};

for (key in names) {
  console.log("Olá, " + names[key]);
}

// 2) Imprima as chaves e valores do objeto
let car = {
  model: "A3 Sedan",
  manufacturer: "Audi",
  year: 2020,
};

for (key in car) {
  console.log(key + ": " + car[key]);
}
