const inputElement = document.querySelector("input");
const buttonElement = document.querySelector("button");
const displayDivElement = document.querySelector(".display-area");

const acceptStringInput = () => {
  const inputString = inputElement.value.trim();
  if (inputString !== "") {
    // Create a span element
    let spanElement = document.createElement("span");

    // Set the text content of the span to the input string directly
    spanElement.textContent = inputString;

    // Apply CSS styling to the span element (change color, for example)
    spanElement.style.color = "blue";

    // Set display to inline-block to allow text-align to take effect
    spanElement.style.display = "inline-block";

    // Center the span element
    spanElement.style.margin = "auto";

    // Append the span element to the display area
    displayDivElement.appendChild(spanElement);

    // Clear the input field
    inputElement.value = "";
  }
};

buttonElement.addEventListener("click", acceptStringInput);
