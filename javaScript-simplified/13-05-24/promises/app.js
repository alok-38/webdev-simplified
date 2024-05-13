const buttonElement = document.querySelector("button");

function addEventListenerPromise(eventName) {
  return new Promise((resolve, reject) => {
    buttonElement.addEventListener(
      eventName,
      (event) => {
        resolve(event);
      },
      { once: true }
    ); // Ensuring the event listener is removed after the first trigger

    // Handling errors if any
    buttonElement.addEventListener("error", (error) => {
      reject(error);
    });
  });
}

// Example usage:
addEventListenerPromise("click")
  .then((event) => {
    console.log("Button clicked!");
    // Do something with the event if needed
  })
  .catch((error) => {
    console.error("Error occurred:", error);
  });
