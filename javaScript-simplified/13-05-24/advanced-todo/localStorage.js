const formElement = document.querySelector("form");
const inputElement = document.querySelector("input");
const buttonElement = document.querySelector("button");
const ulElement = document.querySelector("ul");

// Function to update the to-do list in local storage
const updateLocalStorage = () => {
  const items = Array.from(ulElement.children).map((item) => item.outerHTML);
  localStorage.setItem("todoList", JSON.stringify(items));
};

// Function to load the to-do list from local storage
const loadFromLocalStorage = () => {
  const storedTodoList = JSON.parse(localStorage.getItem("todoList"));
  if (storedTodoList) {
    storedTodoList.forEach((itemHTML) => {
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = itemHTML;

      // Make sure we only get the first child if it's an LI element
      if (tempDiv.firstChild.tagName === "LI") {
        const item = tempDiv.firstChild;
        ulElement.appendChild(item);
        addEventListenersToItem(item);
      }
    });
  }
};

// Function to add event listeners to a list item
const addEventListenersToItem = (item) => {
  const checkbox = item.querySelector("input[type='checkbox']");
  const deleteButton = item.querySelector("button");

  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      item.style.textDecoration = "line-through";
      item.style.color = "tomato"; // Change the color here
    } else {
      item.style.textDecoration = "none";
      item.style.color = "black"; // Change the color back
    }
    updateLocalStorage();
  });

  deleteButton.addEventListener("click", () => {
    ulElement.removeChild(item);
    updateLocalStorage();
  });
};

// Function to handle form submission
const acceptInputItem = (e) => {
  e.preventDefault();
  const inputItem = inputElement.value.trim();

  if (inputItem === "") return;

  const liEl = document.createElement("li");

  // Create and append checkbox element
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  liEl.appendChild(checkbox);

  // Create and append text node
  const newTextNode = document.createTextNode(inputItem);
  liEl.appendChild(newTextNode);

  // Create and append delete button
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  liEl.appendChild(deleteButton);

  // Append list item to the ul
  ulElement.appendChild(liEl);

  // Add event listeners to the new list item
  addEventListenersToItem(liEl);

  // Update local storage
  updateLocalStorage();

  // Reset input field value
  inputElement.value = "";
};

// Add event listener to form submit button
buttonElement.addEventListener("click", acceptInputItem);

// Load the to-do list from local storage when the page loads
loadFromLocalStorage();
