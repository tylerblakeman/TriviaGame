//global gameplay variables
var questionTime
var quizTime
var questionsAndAnswers = [{
    question: "Question One?",
    correctAnswer: "Correct Answer",
    answers: ["Incorrect 1", "Incorrect 2", "Incorrect 3"]
},
{
    question: "Question Two?",
    correctAnswer: "Correct Answer",
    answers: ["Incorrect 1", "Incorrect 2", "Incorrect 3", "Correct Answer"]
},
{
    question: "Question Three?",
    correctAnswer: "Correct Answer",
    answers: ["Incorrect 1", "Incorrect 2", "Incorrect 3", "Correct Answer"]
},
{
    question: "Question Four?",
    correctAnswer: "Correct Answer",
    answers: ["Incorrect 1", "Incorrect 2", "Incorrect 3", "Correct Answer"]
},
{
    question: "Question Five?",
    correctAnswer: "Correct Answer",
    answers: ["Incorrect 1", "Incorrect 2", "Incorrect 3", "Correct Answer"]
},
{
    question: "Question Six?",
    correctAnswer: "Correct Answer",
    answers: ["Incorrect 1", "Incorrect 2", "Incorrect 3", "Correct Answer"]
},
{
    question: "Question Seven?",
    correctAnswer: "Correct Answer",
    answers: ["Incorrect 1", "Incorrect 2", "Incorrect 3", "Correct Answer"]
}]


//html variables
var displayArea = document.getElementsByClassName("contentarea");

console.log(displayArea);


//select a random question
var randomQuestion = Math.floor(Math.random() * 6);

displayQuestion(randomQuestion);

//writing questions to html
function displayQuestion(x){
    displayArea[0].innerHTML = questionsAndAnswers[x].question;
}