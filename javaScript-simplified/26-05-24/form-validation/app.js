const usernameLabel = document.querySelector('label[for="username"]');
const passwordLabel = document.querySelector('label[for="password"]');
const passwordConfirmationLabel = document.querySelector(
  'label[for="password-confirmation"]'
);
const termsLabel = document.querySelector('label[for="terms"]');
// Button
const buttonElement = document.querySelector("button");

// Inputs
const usernameInputElement = document.getElementById("username");
const passwordInputElement = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");
const termsCheckboxElement = document.getElementById("terms");

// Errors
const errorsContainer = document.querySelector(".errors");
const errorsList = document.querySelector(".errors-list");

// form
const formElement = document.querySelector("form");

formElement.addEventListener("submit", (event) => {
  let errors = [];
  const userNameInput = usernameInputElement.value;
  if (!userNameInput) {
    errors.push("Username is required");
  }
  if (userNameInput.length <= 5) {
    errors.push("Username must be atleast 6 characters long.");
  }
  if (errors.length > 0) {
    event.preventDefault();
    errorsContainer.classList.add("show");
    errorsList.innerHTML = errors.map((error) => `<li>${error}</li>`).join("");
  } else {
    errorsContainer.classList.remove("show");
  }
});
