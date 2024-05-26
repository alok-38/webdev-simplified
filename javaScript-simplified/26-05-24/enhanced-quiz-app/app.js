const quizData = [
  {
    question: "What is the capital of France?",
    a: "Berlin",
    b: "Madrid",
    c: "Paris",
    d: "Lisbon",
    correct: "c",
  },
  {
    question: "Who is the CEO of Tesla?",
    a: "Jeff Bezos",
    b: "Elon Musk",
    c: "Bill Gates",
    d: "Tony Stark",
    correct: "b",
  },
  {
    question: "The iPhone was created by which company?",
    a: "Apple",
    b: "Intel",
    c: "Amazon",
    d: "Microsoft",
    correct: "a",
  },
  {
    question: "How many Harry Potter books are there?",
    a: "5",
    b: "6",
    c: "7",
    d: "8",
    correct: "c",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
const timerEl = document.getElementById("time");
const currentQuestionEl = document.getElementById("currentQuestion");
const totalQuestionsEl = document.getElementById("totalQuestions");

let currentQuiz = 0;
let score = 0;
let timeLeft = 10;
let timer;

totalQuestionsEl.innerText = quizData.length;

loadQuiz();

function loadQuiz() {
  clearInterval(timer);
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;

  currentQuestionEl.innerText = currentQuiz + 1;
  timeLeft = 10;
  timerEl.innerText = timeLeft;
  timer = setInterval(countdown, 1000);
}

function countdown() {
  if (timeLeft <= 0) {
    clearInterval(timer);
    showFeedback(false);
    loadNextQuestion();
  } else {
    timeLeft--;
    timerEl.innerText = timeLeft;
  }
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    clearInterval(timer);
    if (answer === quizData[currentQuiz].correct) {
      score++;
      showFeedback(true);
    } else {
      showFeedback(false);
    }
    loadNextQuestion();
  }
});

function loadNextQuestion() {
  currentQuiz++;
  if (currentQuiz < quizData.length) {
    setTimeout(loadQuiz, 1000);
  } else {
    quiz.innerHTML = `
            <h2>You answered ${score}/${quizData.length} questions correctly</h2>
            <button onclick="location.reload()">Reload</button>
        `;
  }
}

function showFeedback(isCorrect) {
  if (isCorrect) {
    quiz.style.backgroundColor = "#d4edda";
  } else {
    quiz.style.backgroundColor = "#f8d7da";
  }
  setTimeout(() => {
    quiz.style.backgroundColor = "#fff";
  }, 1000);
}
