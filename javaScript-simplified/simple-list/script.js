// Select all elements
const listEl = document.getElementById('list');
const inputEl = document.getElementById('item-input');
const buttonEl = document.querySelector('button');
const formEl = document.querySelector('#new-item-form'); // Corrected selector

// When I submit the form add a new element
formEl.addEventListener('submit', function (e) {
    e.preventDefault();

    // Get the value of the input field
    const item = inputEl.value;

    // Create a new list item
    const newListItem = document.createElement('li');

    // Set the text content of the new list item to the value of the input field
    newListItem.textContent = item;

    // Add the new list item to the list
    listEl.appendChild(newListItem);

    // Clear the input field
    inputEl.value = '';
});
