// Counter function to create and manage counter functionality
const Counter = () => {
    // Local variable
    let count = 0;

    // Private function to update the count and display it
    const updateCount = () => {
        const countElement = document.getElementById('count');
        countElement.textContent = count;
    };

    // Public functions accessible outside the closure
    return {
        // Function to increment the count
        increment: () => {
            count++;
            updateCount();
        },
        // Function to decrement the count
        decrement: () => {
            count--;
            updateCount();
        }
    };
};

// Initialize the counter
const counter = Counter();

// Add event listeners to the buttons
document.getElementById('increment').addEventListener('click', counter.increment);
document.getElementById('decrement').addEventListener('click', counter.decrement);