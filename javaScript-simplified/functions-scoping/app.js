// Define a function that takes another function as an argument
const handleClick = (callback) => {
    // Add event listener to the button
    const button = document.getElementById('clickMeBtn');
    button.addEventListener('click', callback);
};

// Define a function to be passed as an argument
const handleButtonClick = () => {
    const app = document.getElementById('app');
    app.innerHTML = '<h1>Button Clicked!</h1>';
    app.style.color = 'rebeccapurple';
    app.style.textAlign = 'center';
};

// Call the function and pass the other function as an argument
handleClick(handleButtonClick);