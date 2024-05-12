const inputElement = document.querySelector("input");
const buttonElement = document.querySelector("button");
const divelement = document.querySelector("div");

const acceptInputItem = (event) => {
  event.preventDefault();
  const inputItem = inputElement.value.trim();
  const liElement = document.createElement("li");
  const newTextNode = document.createTextNode(inputItem);
  liElement.appendChild(newTextNode);
  divelement.appendChild(liElement);
  inputElement.value = "";
};

buttonElement.addEventListener("click", acceptInputItem);
