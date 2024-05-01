const inputElement = document.querySelector("input");
const buttonElement = document.querySelector("button");
const fruitsListDivElement = document.getElementById("fruits-list");
let fruits = [];

const displayFruits = () => {
  fruitsListDivElement.innerHTML = "";

  fruits.forEach((fruit) => {
    const listElement = document.createElement("li");
    listElement.textContent = fruit;
    listElement.addEventListener("mouseover", toggleStrikeThrough); // Add event listener for hovering
    listElement.addEventListener("click", removeFruit); // Add event listener for clicking
    fruitsListDivElement.appendChild(listElement);
  });
};

const addFruit = () => {
  const newFruit = inputElement.value.trim();

  if (newFruit !== "") {
    fruits.push(newFruit);
    displayFruits();
    inputElement.value = "";
  }
};

const toggleStrikeThrough = (event) => {
  if (event.target.tagName === "LI") {
    if (event.type === "mouseover") {
      event.target.classList.add("strikethrough"); // Add the class on mouseover
    } else if (event.type === "mouseout") {
      event.target.classList.remove("strikethrough"); // Remove the class on mouseout
    }
  }
};

const removeFruit = (event) => {
  if (event.target.tagName === "LI") {
    const removedFruit = event.target.textContent;
    fruits = fruits.filter((fruit) => fruit !== removedFruit);
    displayFruits();
  }
};

buttonElement.addEventListener("click", addFruit);
