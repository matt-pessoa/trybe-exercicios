let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "namorada do personagem principal nos quadrinhos do Pato Donald",
};

// 1) Imprima uma mensagem de boas vindas
console.log("Bem-vinda, " + info.personagem);

// 2) Insira no objeto uma nova propriedade "recorrente: 'sim'" e imprima o valor
info["recorrente"] = "Sim";
console.log(info.recorrente);

// 3) Mostre todas as chaves do objeto
for (key in info) {
  console.log(key);
}

// 4) Mostre todos dos valores das chaves do objeto
for (key in info) {
  console.log(info[key]);
}

// 5) Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves.
let infoDois = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: "Sim",
};

for (chaveInfo in info) {
  console.log(info[chaveInfo] + " e " + sinfoDois[chaveInfo]);
}
