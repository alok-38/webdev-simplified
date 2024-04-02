document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('quiz-form');
    const answerInputs = document.querySelectorAll('.answer');
    const questions = document.querySelectorAll('.question-item');
    const alertElement = document.getElementById('alert');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Reset classes for all question items
        questions.forEach(function (question) {
            question.classList.remove('correct', 'incorrect');
        });

        let allCorrect = true;

        answerInputs.forEach(function (input) {
            const parentQuestionItem = input.closest('.question-item');

            if (input.checked) {
                if (input.value === 'true') {
                    parentQuestionItem.classList.add('correct');
                } else {
                    parentQuestionItem.classList.add('incorrect');
                    allCorrect = false;
                }
            } else {
                parentQuestionItem.classList.add('incorrect');
                allCorrect = false;
            }
        });

        // Bonus: Show/hide alert based on allCorrect
        if (allCorrect) {
            alertElement.classList.add('active');
            setTimeout(function () {
                alertElement.classList.remove('active');
            }, 1000);
        }
    });
});
