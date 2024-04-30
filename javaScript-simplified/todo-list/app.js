const formElement = document.getElementById("new-item-form");
const inputElement = document.getElementById("item-input");
const divElement = document.getElementById("list");

formElement.addEventListener("submit", (e) => {
  e.preventDefault();
  // Get the input value from the form
  const newInputItem = inputElement.value.trim();

  if (newInputItem !== "") {
    // Create a new list item and a ul
    const newListItem = document.createElement("li");
    const newUlEl = document.createElement("ul");
    // Append the new item to the todo list
    newListItem.textContent = newInputItem; // Set the text content of the list item
    newUlEl.appendChild(newListItem);
    divElement.appendChild(newUlEl);
    // Clear the input field
    inputElement.value = "";
  }
});
