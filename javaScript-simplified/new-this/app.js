// Define a class representing a Counter
class Counter {
    constructor(initialCount) {
      this.count = initialCount || 0; // Initialize count to provided initialCount or 0
      this.render(); // Render the counter when it's created
      this.setupEvents(); // Set up event listeners
    }
  
    // Increment count by 1
    increment() {
      this.count++;
      this.render();
    }
  
    // Decrement count by 1
    decrement() {
      this.count--;
      this.render();
    }
  
    // Render the counter to the DOM
    render() {
      const counterElement = document.getElementById('counter');
      if (counterElement) {
        counterElement.textContent = this.count;
      }
    }
  
    // Set up event listeners for increment and decrement buttons
    setupEvents() {
      const incrementBtn = document.getElementById('incrementBtn');
      const decrementBtn = document.getElementById('decrementBtn');
  
      if (incrementBtn && decrementBtn) {
        incrementBtn.addEventListener('click', () => this.increment());
        decrementBtn.addEventListener('click', () => this.decrement());
      }
    }
  }
  
  // Create a new Counter instance when the DOM content is loaded
  document.addEventListener('DOMContentLoaded', () => {
    new Counter();
  });
  