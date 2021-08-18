/**
 * todo: Perguntar na monitoria como target funciona
 */

const firstLi = document.getElementById("firstLi");
const secondLi = document.getElementById("secondLi");
const thirdLi = document.getElementById("thirdLi");
const input = document.getElementById("input");
const myWebpage = document.getElementById("mySpotrybefy");

//  1. Copie esse arquivo e edite apenas ele;

//  2. Crie uma função que adicione a classe 'tech' ao elemento selecionado;
//  2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

function handleChangeTech(event) {
  let elementTechClass = document.querySelector(".tech");
  elementTechClass.classList.remove("tech");
  event.target.classList.add("tech"); // The target event property returns the element that triggered the event.
  input.value = "";

  // console.log(event.target);
  // console.log(document.querySelectorAll(".tech"));
}

firstLi.addEventListener("click", handleChangeTech);
secondLi.addEventListener("click", handleChangeTech);
thirdLi.addEventListener("click", handleChangeTech);

//  3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';

function handleTextInput(event) {
  let elementTechClass = document.querySelector(".tech");

  elementTechClass.textContent = event.target.value;
}

input.addEventListener("input", handleTextInput);

//  4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
//  4.1. Que tal redirecionar para seu portifólio?

function handleDoubleClick() {
  document.location.href = "https://matt-pessoa.github.io/"; // window.location.replace("https://matt-pessoa.github.io/") é mais indicado por motivos de segurança (W3C)
}
myWebpage.addEventListener("dblclick", handleDoubleClick);

//  5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

function handleMouseHover(event) {
  event.target.style.color = "red";
  event.target.style.cursor = "pointer";
}
myWebpage.addEventListener("mouseover", handleMouseHover);
