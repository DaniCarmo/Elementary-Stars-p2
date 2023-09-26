// Quiz Questions
let easyQuestions = [
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
            { text: "Eight", correct: true }
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
            { text: "Cats", correct: false },
            { text: "Giraffes", correct: false },
            { text: "Sheep", correct: false },
            { text: "Dolphins", correct: true }
        ]
    },
    {
        question: "What sea life starts with the letter 'S'?",
        answers: [
            { text: "Whale", correct: false },
            { text: "Shark", correct: true },
            { text: "Octopus", correct: false },
            { text: "Starfish", correct: false }
        ]
    }
];
let smartQuestions = [
    {
        question: "How many animals are in the picture above?",
        answers: [
            { text: "Five", correct: false },
            { text: "Eleven", correct: false },
            { text: "Nine", correct: true },
            { text: "Seven", correct: false }
        ]
    },
    {
        question: "What color is the animal beginning with 'M'?",
        answers: [
            { text: "White", correct: false },
            { text: "Pink", correct: false },
            { text: "Yellow", correct: false },
            { text: "Brown", correct: true }
        ]
    },
    {
        question: "What are the smallest and largest animals in the picture?",
        answers: [
            { text: "Mouse and Horse", correct: true },
            { text: "Dog and Chicken", correct: false },
            { text: "Bird and Sheep", correct: false },
            { text: "Pig and Horse", correct: false }
        ]
    },
    {
        question: "Which animal's name comes first in the alphabet?",
        answers: [
            { text: "Dog", correct: false },
            { text: "Chicken", correct: false },
            { text: "Sheep", correct: false },
            { text: "Bird", correct: true }
        ]
    },
    {
        question: "Where would you see these animals together?",
        answers: [
            { text: "Zoo", correct: false },
            { text: "Farm", correct: true },
            { text: "Circus", correct: false },
            { text: "Playground", correct: false }
        ]
    }
];
let masterQuestions = [
    {
        question: "What color do you get if you mix blue and yellow?",
        answers: [
            { text: "Orange", correct: false },
            { text: "Green", correct: true },
            { text: "Red", correct: false },
            { text: "Purple", correct: false }
        ]
    },
    {
        question: "How many colors are in a rainbow?",
        answers: [
            { text: "Seven", correct: true },
            { text: "Three", correct: false },
            { text: "Five", correct: false },
            { text: "Ten", correct: false }
        ]
    },
    {
        question: "What letter does Octopus and Orange start with?",
        answers: [
            { text: "O", correct: true },
            { text: "P", correct: false },
            { text: "E", correct: false },
            { text: "Z", correct: false }
        ]
    },
    {
        question: "What is four apples plus three apples?",
        answers: [
            { text: "Two apples", correct: false },
            { text: "Six apples", correct: false },
            { text: "One apple", correct: false },
            { text: "Seven apples", correct: true }
        ]
    },
    {
        question: "How many sides does a rectangle have?",
        answers: [
            { text: "Six", correct: false },
            { text: "Four", correct: true },
            { text: "Three", correct: false },
            { text: "None", correct: false }
        ]
    }
];
//function to shuffle array questions
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // Generate a random index between 0 and i
        // Swap array[i] and array[j]
        [array[i], array[j]] = [array[j], array[i]];
    }
}
// Get DOM elements
let popup = document.getElementById("popup");
let questionElement = document.getElementById("question");
let answerButton = document.getElementById("answer-buttons");
let nextButton = document.getElementById("next-btn");

// Set quiz variables
let currentQuestionIndex = 0;
let score = 0;
let questions = [];

// Function for validating the user name form value and adding it to localstorage
function validateForm() {
    let nameValue = document.forms.myForm.username.value;
    if (nameValue == "") {
        document.getElementById("error").innerHTML = ("Please enter a username!");
        return false;
    }
    else {
        try {
            localStorage.setItem("userNameKey", nameValue);
            return true;
        } catch (exception) {
            return false;
        }
    }
}

// For retrieving localstorage values and displaying on the homepage only
if (window.location.pathname === '/index.html') {
    let userNameValue = localStorage.getItem("userNameKey");
    let scoreValue = localStorage.getItem("scoreKey");

    if (userNameValue) {
        document.getElementById("username").value = userNameValue;
        document.getElementById("welcomeback").innerHTML = ("Welcome back " + userNameValue + "! Let's try to beat your last score of " + scoreValue + "!");
    }
}

// Function to set questions based on difficulty
function setDifficulty() {
    let difficulty = document.getElementById("difficulty");
    // If the DOM element exists, get its value and set the questions
    if (difficulty) {
        difficulty = difficulty.innerHTML;
        if (difficulty === "Kindergarten Stars / Easy-Peasy") {
            questions = easyQuestions;
            shuffleArray(questions);
        } else if (difficulty === "Kindergarten Stars / Smartie Pants") {
            questions = smartQuestions;
            shuffleArray(questions);
        } else {
            questions = masterQuestions;
            shuffleArray(questions);
        }
    }
}

// Function to start the quiz
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    setDifficulty();
    showQuestion();
}

// Function to display a question
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
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

// Function to reset the state and hide the next button
function resetState() {
    nextButton.style.display = "none";
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
    }
}

// Function to handle the answer selected
function selectAnswer(e) {
    let selectedBtn = e.target;
    let isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}
let navbar = document.getElementById("navbar");

if(navbar) {
    window.addEventListener("scroll", function () {
        if (window.scrollY > 100) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }
    });
}

// Function to hide the navbar
function hideNavbar() {
    navbar.classList.add("hidden-navbar");
}
// Function to show the navbar
function showNavbar() {
    navbar.classList.remove("hidden-navbar");
}
// Function to open the score popup
function openPopup() {
    popup.classList.add("open-popup");
    hideNavbar();
}
// Function to close the score popup
function closePopup() {
    popup.classList.remove("open-popup");
    showNavbar();
}

// Function to display the final score
function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
    openPopup();
    try {
        localStorage.setItem("scoreKey", score);
        return true;
    } catch (exception) {
        return false;
    }
}

// Function to handle the next question or show the score
function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

// If the next button exists add an event listener for next Q or restart the quiz
if (nextButton) {

    nextButton.addEventListener("click", () => {
        if (currentQuestionIndex < questions.length) {
            handleNextButton();
        } else {
            startQuiz();
        }
    });

    startQuiz();
}