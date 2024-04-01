// Select all the elements
const formEl = document.getElementById('new-item-form');
const inputEl = document.getElementById('item-input');
const buttonEl = document.querySelector('button');

const divEl = document.querySelector('#list');

const addNewListItem = () => {
    // Prevent the default form submission behavior
    event.preventDefault();
    // Get the value from the input field
    const newItemText = inputEl.value;
    // Check if the input field is not empty
    if (newItemText.trim() !== '') {
        // Create a new list element
        const newItem = document.createElement('li');
        // Set its text content to the input value
        newItem.textContent = newItemText;
        // Append the new item to the list
        divEl.appendChild(newItem);
        // Clear the input field
        inputEl.value = '';
    }
};

// Event listener for button
buttonEl.addEventListener('click', addNewListItem);