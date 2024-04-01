/*
  TODO: 2. Select all elements needed
    * The form element (has the id `quiz-form`)
    * The answer inputs (have the class `answer`)
    * BONUS: The questions (have the class `question-item`)
    * BONUS: The alert (has the id `alert`)
*/

// TODO: 3. Create a submit event listener for the form that does the following.
//    1. Prevent the default behaviour
//    2. Get all selected answers (use the `checked` property on the input to determine if it is selected or not)
//    3. Loop through the selected answer to see if they are correct or not (Check the value of the answer to see if it is the string "true")
//    4. For each correct answer add the class `correct` to the parent with the class `question-item` and remove the class `incorrect`.
//    5. For each incorrect answer add the class `incorrect` to the parent with the class `question-item` and remove the class `correct`.
//    6. BONUS: Make sure unanswered questions show up as incorrect. The easiest way to do this is to add the incorrect class and removing the correct class from all question items before checking the correct answers
//    7. BONUS: If all answers are correct show the element with the id `alert` and hide it after one second (look into setTimeout) (use the class active to show the alert and remove the class to hide it)

const formElement = document.querySelector('#quiz-form');

formElement.addEventListener('submit', (e) => {
    e.preventDefault();

    // 2. Get all selected answers
    const selectedAnswers = document.querySelectorAll('.answer:checked');

    // 6. Make sure unanswered questions show up as incorrect
    const questionItems = document.querySelectorAll('.question-item');
    questionItems.forEach(item => {
        item.classList.remove('correct');
        item.classList.add('incorrect');
    });

    // 3. Loop through the selected answers
    selectedAnswers.forEach(answer => {
        const parentQuestionItem = answer.closest('.question-item');
        // 4. For each correct answer add the class `correct`
        // 5. For each incorrect answer add the class `incorrect`
        if (answer.value === 'true') {
            parentQuestionItem.classList.remove('incorrect');
            parentQuestionItem.classList.add('correct');
        } else {
            parentQuestionItem.classList.remove('correct');
            parentQuestionItem.classList.add('incorrect');
        }
    });

    // 7. If all answers are correct show the alert
    const allCorrect = document.querySelectorAll('.correct').length === questionItems.length;
    const alertElement = document.querySelector('#alert');
    if (allCorrect) {
        alertElement.classList.add('active');
        // Hide the alert after one second
        setTimeout(() => {
            alertElement.classList.remove('active');
        }, 1000);
    }
});
