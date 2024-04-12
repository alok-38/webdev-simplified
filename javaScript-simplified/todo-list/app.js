const inputElement = document.getElementById('item-input');
const buttonElement = document.querySelector('button');
const listDiv = document.getElementById('list');

// Function to create a new list item.
const createListItem = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior.

    const newliElement = document.createElement('li'); // Create a new <li> element.
    let newInputItem = inputElement.value.trim(); // Get the trimmed value of the input element (the new todo item).
    if (newInputItem === '') return; // Do not proceed if input is empty
    newliElement.textContent = newInputItem; // Set the text content of the <li> element to the new todo item.
    listDiv.appendChild(newliElement); // Append the new <li> element to the list.

    // Add event listener for hover to apply strikethrough
    newliElement.addEventListener('mouseover', () => {
        newliElement.style.textDecoration = 'line-through';
        newliElement.style.color = 'orange'; // Apply the strikethrough on hover.
    });

    // Add event listener for mouseout to remove strikethrough
    newliElement.addEventListener('mouseout', () => {
        newliElement.style.textDecoration = 'none'; // Remove the strikethrough on mouseout.
    });

    // Add event listener to delete the item when clicked
    newliElement.addEventListener('click', () => {
        newliElement.remove(); // Remove the clicked item from the list.
    });

    inputElement.value = ''; // Clear the input field after adding the item.
}

// Add an event listener to the button element, so when it's clicked, the createListItem function is called.
buttonElement.addEventListener('click', createListItem);

// Add an event listener to the form element to listen for form submission.
document.getElementById('new-item-form').addEventListener('submit', createListItem);
