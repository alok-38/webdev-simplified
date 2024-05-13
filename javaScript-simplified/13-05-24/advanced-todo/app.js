const formElement = document.querySelector("form");
const inputElement = document.querySelector("input");
const buttonElement = document.querySelector("button");
const ulElement = document.querySelector("ul");

const acceptInputItem = (e) => {
  e.preventDefault();
  const inputItem = inputElement.value.trim();
  if (inputItem === "") return; // Don't add empty items

  const liEl = document.createElement("li");
  const newTextNode = document.createTextNode(inputItem);
  liEl.appendChild(newTextNode);
  ulElement.appendChild(liEl);

  // Toggle strikethrough on mouseenter and mouseleave
  liEl.addEventListener("mouseenter", () => {
    liEl.style.textDecoration = "line-through";
    liEl.style.color = "tomato"; // Change the color here
  });

  liEl.addEventListener("mouseleave", () => {
    liEl.style.textDecoration = "none";
    liEl.style.color = "black"; // Change the color back
  });

  inputElement.value = "";
};

buttonElement.addEventListener("click", acceptInputItem);
