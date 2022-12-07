// this is when user click on the the button to start the game
const startButton = document.getElementById("start-btn");

const questionContainerElement = document.getElementById("question-container");
const questionElement  = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
// answerButtonsElement.addEventListener('click', nextQuestion);
// const correctIncorrectEl = document.getElementById("correct-incorrect-text");
var container1 = document.getElementsByClassName("container1");
// var correctIncorrectEl = document.getElementById("correct-incorrect-text");
 const nextButton = document.getElementById("next-btn");
//timer element.
var timerEl = document.getElementById("timer-seconds");
var secondsLeft = 15;

// let questionIndex

let shuffledQuestions, questionIndex;

// 15 second timer
var timerInterval = setInterval(function() {
    timerEl.innerHTML=secondsLeft + " seconds left until melt down!!!.";
    if(secondsLeft === 0){
        clearInterval(timerInterval); 
        timerEl.innerHTML = "Time is up";
        initialsEl.classList.remove('hide-form');
        questionContainerElement.classList.add('hide');
    }
    secondsLeft--;
}, 1500);



startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
    questionIndex++;
    setNextQuestion();
})
// this function is used when user clicks on the start button. Once the user click on the button it will hide that start button and then it will show our questions.
function startGame() {
    console.log("Started");
    startButton.classList.add("hide");
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    questionIndex = 0;
    questionContainerElement.classList.remove("hide");    
    setNextQuestion();
}



function setNextQuestion() {
    showQuestion(shuffledQuestions[questionIndex])
//     // questionIndex++;
    // resetState();
//     showQuestion();
}

function showQuestion(question) {
    // var activeQuestion = questionsList[questionIndex];
    // var activeAnswer = activeQuestion.answers;
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer);
        answerButtonsElement.appendChild(button);
    })
}
// function resetState() {
//     clearStatusClass(document.body);
//     nextButton.classList.add("hide");
//     while (answerButtonsElement.firstChild) {
//         answerButtonsElement.removeChild(answerButtonsElement.firstChild)
//     }
// }

    // nextButton.classList.remove("hide");

    function selectAnswer(e) {
        const selectedButton = e.target
        const correct = selectedButton.dataset.correct
        setStatusClass(document.body, correct);
        Array.from(answerButtonsElement.children).forEach(button => {
            setStatusClass(button, button.dataset.correct);
        })
        if (shuffledQuestions.length > questionIndex + 1) {
            nextButton.classList.remove("hide");
        } else {
            startButton.innerText = "Restart"
            startButton.classList.remove("hide");
    
        }
        
    }

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add("correct");
    } else {
        element.classList.add("incorrect");
    }
}

function clearStatusClass(element) {
    element.classList.remove("correct");
    element.classList.remove("incorrect");

}

// var questionIndex = 0;
// let questionsList = [

//Questions for the users
let questions = [
    {
    question: "[Bonus] who is Billie Jeans that Michael Jackson was singing about on his hit song 'Billie Jeans?'",
    answers: [
        { text: "Levis Jeans", correct: false },
        { text: "Jean Jacket", correct: false },
        { text: "Canadian Tuxedo", correct: false },
        { text: "A girl who claims that he is the one", correct: true },
]
    },
    {
    question: "What are opening and close tags for HTML?",
    answers: [
        { text: "{ },{/}", correct: false },
        { text: "[ ],[?]", correct: false },
        { text: "( ),(/)", correct: false },
        { text: "< >,</>", correct: true },
]
    },
]
