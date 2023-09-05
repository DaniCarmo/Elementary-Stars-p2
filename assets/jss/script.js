let questions = [
    {
        question: "What color is the body of the boat?",
        answers: [
            { text: "Orange", correct: false },
            { text: "Blue", correct: true },
            { text: "Red", correct: false },
            { text: "Green", correct: false }
        ]
    },
    {
        question: "How many circle windows does the boat have?",
        answers: [
            { text: "Five", correct: false },
            { text: "Three", correct: false },
            { text: "Ten", correct: false },
            { text: "Eight", correct: true}
        ]
    },
    {
        question: "What animal can you see swimming by the boat?",
        answers: [
            { text: "Fish", correct: true },
            { text: "Dog", correct: false },
            { text: "Elephant", correct: false },
            { text: "Bird", correct: false }
        ]
    },
    {
        question: "What other animals swim in the sea?",
        answers: [
            { text: "Cats", correct: true },
            { text: "Giraffes", correct: false },
            { text: "Sheep", correct: false },
            { text: "Dolphins", correct: true }
        ]
    }
];
let questionElement = document.getElementsByClassName("question")
let answerButton = document.getElementsByClassName("answer-buttons");
let nextButton = document.getElementsByClassName("next-btn");
let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    
    currentQuestion.answers.forEach(answer => {
        let button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    })
}
function resetState() {
    nextButton.style.display = "none";
    while(answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild)
    }
}
function selectAnswer() {
    let selectedBtn = e.target;
    let isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}
function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length) {
        showQuestion();
    }else{
        showScore();
    }
}
nextButton.addEventListener("click", ()=> {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})
startQuiz();