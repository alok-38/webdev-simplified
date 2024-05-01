const inputElement = document.querySelector("input");
const buttonElement = document.querySelector("button");

const fruitsListDivElement = document.getElementById("fruits-list");

// Empty array to store fruits
let fruits = [];

// Function to display fruits
const displayFruits = () => {
  // Clear the previous list
  fruitsListDivElement.innerHTML = "";

  //   Dispay each fruit in the list
  fruits.forEach((fruit) => {
    // Create a list item
    const listElement = document.createElement("li");
    listElement.textContent = fruit;
    // Append this to the fruits element div
    fruitsListDivElement.appendChild(listElement);
  });
};

// Function to add a new fruit
const addFruit = () => {
  const newFruit = inputElement.value.trim();

  if (newFruit !== "") {
    // Add the new fruit to the array
    fruits.push(newFruit);
    // Display the updated list of fruits
    displayFruits();
    // clear the input field
    inputElement.value = "";
  }
};


// Event listener for the add fruit button
buttonElement.addEventListener('click', addFruit);