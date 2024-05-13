const formElement = document.querySelector("form");
const inputElement = document.querySelector("input");
const buttonElement = document.querySelector("button");
const ulElement = document.querySelector("ul");

const acceptInputItem = (e) => {
  e.preventDefault();
  const inputItem = inputElement.value.trim();

  if (inputItem === "") return;

  const liEl = document.createElement("li");

  //   Create and append checkbox element
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.setAttribute("data-list-item-checkbox", "");
  liEl.appendChild(checkbox);

  //   Create and append text node
  const newTextNode = document.createTextNode(inputItem);
  liEl.appendChild(newTextNode);

  //   Create and append delete button
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.setAttribute("data-button-delete", "");
  liEl.appendChild(deleteButton);

  // Append list item to the ul
  ulElement.appendChild(liEl);

  // Toggle strikethrough when checkbox is clicked
  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      liEl.style.textDecoration = "line-through";
      liEl.style.color = "tomato"; // Change the color here
    } else {
      liEl.style.textDecoration = "none";
      liEl.style.color = "black"; // Change the color back
    }
  });

  // Toggle strikethrough on mouseenter and mouseleave
  liEl.addEventListener("mouseenter", () => {
    liEl.style.textDecoration = "line-through";
    liEl.style.color = "tomato"; // Change the color here
  });

  liEl.addEventListener("mouseleave", () => {
    if (!checkbox.checked) {
      liEl.style.textDecoration = "none";
      liEl.style.color = "black"; // Change the color back
    }
  });

  inputElement.value = "";
};

buttonElement.addEventListener("click", acceptInputItem);
