// Define an array of colors
const colors = ['red', 'green', 'blue', 'yellow', 'orange'];

// Function to create a list item element with a given color
const createListItem = (color) => {
  const li = document.createElement('li');
  li.textContent = color;
  li.style.color = color;
  return li;
};

// Function to append list items to the unordered list
const appendListItems = (items, ul) => {
  items.forEach(item => ul.appendChild(item));
};

// Function to clear the unordered list
const clearList = (ul) => {
  ul.innerHTML = '';
};

// Function to initialize the application
const init = () => {
  const ul = document.querySelector('#color-list');
  const addButton = document.querySelector('#add-button');
  const clearButton = document.querySelector('#clear-button');

  addButton.addEventListener('click', () => {
    const input = document.querySelector('#color-input');
    const color = input.value.toLowerCase();
    if (colors.includes(color)) {
      const li = createListItem(color);
      ul.appendChild(li);
      input.value = '';
    } else {
      alert('Please enter a valid color from the predefined list.');
    }
  });

  clearButton.addEventListener('click', () => {
    clearList(ul);
  });
};

// Initialize the application when the DOM content is loaded
document.addEventListener('DOMContentLoaded', init);
