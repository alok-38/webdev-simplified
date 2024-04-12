// Function to check if a number is even or odd
const checkEvenOdd = (number) => {
    return number % 2 === 0 ? "even" : "odd";
};

// Function to create a list item element
const createListItem = (value) => {
    const li = document.createElement("li");
    li.textContent = value;
    return li;
};

// Function to display even or odd for a given number
const displayEvenOdd = (number) => {
    const result = checkEvenOdd(number);
    const message = `The number ${number} is ${result}.`;
    const ul = document.querySelector("#resultList");
    const li = createListItem(message);
    ul.appendChild(li);
};

// Function to clear the list
const clearList = () => {
    const ul = document.querySelector("#resultList");
    ul.innerHTML = ""; // Remove all list items
};

// Event listener for the button
document.querySelector("#checkButton").addEventListener("click", () => {
    const inputValue = document.querySelector("#numberInput").value;
    const number = parseInt(inputValue);

    if (!isNaN(number)) {
        clearList(); // Clear previous results
        displayEvenOdd(number);
        document.querySelector("#numberInput").value = ''; // Clear input field
        document.querySelector('h1').style.color = 'orangered'; // Change h1 color
    } else {
        alert("Please enter a valid number.");
    }
});
