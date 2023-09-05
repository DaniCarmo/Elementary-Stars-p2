let questions = [
    {
        question: "What color is the body of the boat?",
        answers: [
            { text: "Orange", correct: false }
            { text: "Blue", correct: true }
            { text: "Red", correct: false }
            { text: "Green", correct: false }
        ]
    },
    {
        question: "How many circle windows does the boat have?",
        answers: [
            { text: "Five", correct: false }
            { text: "Three", correct: false }
            { text: "Ten", correct: false }
            { text: "Eight", correct: true}
        ]
    },
    {
        question: "What animal can you see swimming by the boat?",
        answers: [
            { text: "Fish", correct: true }
            { text: "Dog", correct: false }
            { text: "Elephant", correct: false }
            { text: "Bird", correct: false }
        ]
    },
    {
        question: "What other animals swim in the sea?",
        answers: [
            { text: "Cats", correct: true }
            { text: "Giraffes", correct: false }
            { text: "Sheep", correct: false }
            { text: "Dolphins", correct: true }
        ]
    }
]
let questionElement = document.getElementsByClassName("question")
let answerButton = document.getElementsByClassName("answer-buttons");
let nextButton = document.getElementsByClassName("next-btn");
let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestions();
}
function showQuestions() {
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innterHTML = questionNo + ". " + currentQuestion.question;
    
    currentQuestion.answers.forEach(answer => {
        let button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
    })
}