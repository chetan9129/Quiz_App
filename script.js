const quizData = [
  {
    question: "How old is Florin?",
    a: "10",
    b: "15",
    c: "24",
    d: "17",
    correct: "c",
  },
  {
    question:
      "In which decade was the American Institute of Electrical Engineers (AIEE) founded?",
    a: "1850s",
    b: "1880s",
    c: "1930s",
    d: "1950s",
    correct: "b",
  },
  {
    question:
      "What is part of a database that holds only one type of information?",
    a: "Report",
    b: "Field",
    c: "Record",
    d: "File",
    correct: "b",
  },
  {
    question: "'.MOV' extension refers usually to what kind of file?",
    a: "Image File",
    b: "Animation/movie file",
    c: "Audio File",
    d: "MS Office document",
    correct: "b",
  },
  {
    question: "Who developed Yahoo?",
    a: "Dennis Ritchie & Ken Thompson",
    b: "David Filo & Jerry Yang",
    c: "Vint Cerf & Robert Kahn",
    d: "Steve Case & Jeff Bezos",
    correct: "b",
  },
  {
    question:
      "Made from a variety of materials, such as carbon, which inhibits the flow of current...?",
    a: "Choke",
    b: "Inductor",
    c: "Resistor",
    d: "Capacitors",
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

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  // check to see the answer
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
                  <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                  
                  <button onclick="location.reload()">Reload</button>
              `;
    }
  }
});
