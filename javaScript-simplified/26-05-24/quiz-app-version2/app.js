const alertDiv = document.getElementById("alert");
const formElement = document.querySelector("form");
// Select all input elements with the name "answer-1"
const answer1Inputs = document.querySelectorAll('input[name="answer-1"]');
// Select all input elements with the name "answer-2"
const answer2Inputs = document.querySelectorAll('input[name="answer-2"]');
// Select all input elements with the name "answer-3"
const answer3Inputs = document.querySelectorAll('input[name="answer-3"]');

// Button
const button = document.querySelectorAll("button");

formElement.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the form from submitting and refreshing the page

  const answers = formElement.querySelectorAll(".answer:checked");
  let score = 0;

  answers.forEach(function (answer) {
    if (answer.value === "true") {
      score++;
    }
  });

  const alertBox = document.getElementById("alert");
  const alertTitle = alertBox.querySelector(".alert-title");

  // Update the alert box with the score
  alertTitle.textContent = `You scored ${score} out of ${answers.length}!`;

  // Show the alert box
  alertBox.style.display = "block";
});
