// TODO: Select all elements needed
//    Use the HTML to figure out what classes/ids will work best for selecting each element
const formElement = document.querySelector("form");
const errorUlElement = document.querySelector(".errors-list");
const textInputElement = document.querySelector("input[type='text']");
const passwordInputElement = document.getElementById("password");
const confirmPasswordInputElement = document.getElementById(
  "password-confirmation"
);
const termsInputElement = document.getElementById("terms");

// TODO: Create an event listener for when the form is submitted and do the following inside of it.
//    TODO: Create an array to store all error messages and clear any old error messages
//    TODO: Define the following validation checks with appropriate error messages
//      1. Ensure the username is at least 6 characters long
//      2. Ensure the password is at least 10 characters long
//      3. Ensure the password and confirmation password match
//      4. Ensure the terms checkbox is checked
//    TODO: If there are any errors then prevent the form from submitting and show the error messages
formElement.addEventListener("submit", (e) => {
  e.preventDefault();
  const errorContainer = [];
  const acceptUserName = textInputElement.value.trim();
  if (acceptUserName.length < 6) {
    errorContainer.push("Ensure the username is at least 6 characters long");
  }
  const acceptPassword = passwordInputElement.value.trim();
  if (acceptPassword.length < 10) {
    errorContainer.push("Ensure the password is at least 10 characters long");
  }
  const confirmPassword = confirmPasswordInputElement.value.trim();
  if (acceptPassword.length !== confirmPassword.length) {
    errorContainer.push("Ensure the password and confirmation password match");
  }
  if (!termsInputElement.checked) {
    errorContainer.push("Please agree to the terms");
  }
  // Display errors if any
  if (errorContainer.length > 0) {
    showErrors(errorContainer);
  } else {
    formElement.submit();
  }
});

// TODO: Define this function
function clearErrors() {
  // Loop through all the children of the error-list element and remove them
  // IMPORTANT: This cannot be done with a forEach loop or a normal for loop since as you remove children it will modify the list you are looping over which will not work
  // I recommend using a while loop to accomplish this task
  // This is the trickiest part of this exercise so if you get stuck and are unable to progress you can also set the innerHTML property of the error-list to an empty string and that will also clear the children. I recommend trying to accomplish this with a while loop, though, for practice.
  // Also, make sure you remove the show class to the errors container
  while (errorUlElement.firstChild) {
    errorUlElement.removeChild(errorUlElement.firstChild);
  }
  document.querySelector(".errors").classList.remove("show");
}

// TODO: Define this function
function showErrors(errorMessages) {
  // Add each error to the error-list element
  // Make sure to use an li as the element for each error
  // Also, make sure you add the show class to the errors container
  errorMessages.forEach(function (errorMessage) {
    const li = document.createElement("li");
    li.textContent = errorMessage;
    errorUlElement.appendChild(li);
  });
  document.querySelector(".errors").classList.add("show");
}
