const inputElement = document.getElementById('item-input');
const buttonElement = document.querySelector('button');
const listDiv = document.getElementById('list');

// Function to create a new list item.
const createListItem = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior.

    const newliElement = document.createElement('li'); // Create a new <li> element.
    let newInputItem = inputElement.value; // Get the value of the input element (the new todo item).
    newliElement.textContent = newInputItem; // Set the text content of the <li> element to the new todo item.
    listDiv.appendChild(newliElement); // Append the new <li> element to the list.
}

// Add an event listener to the button element, so when it's clicked, the createListItem function is called.
buttonElement.addEventListener('click', createListItem);

// Add an event listener to the form element to listen for form submission.
document.getElementById('new-item-form').addEventListener('submit', createListItem);
