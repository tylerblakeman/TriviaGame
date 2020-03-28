//global gameplay variables
var questionTime;
var quizTime;
var numberOfQuestions = 6;
var randomQuestion;
var questionsToAsk = [];
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
},
{
    question: "Question 8?",
    correctAnswer: "Correct Answer",
    answers: ["Incorrect 1", "Incorrect 2", "Incorrect 3", "Correct Answer"]
},
{
    question: "Question 9?",
    correctAnswer: "Correct Answer",
    answers: ["Incorrect 1", "Incorrect 2", "Incorrect 3", "Correct Answer"]
},
{
    question: "Question 10?",
    correctAnswer: "Correct Answer",
    answers: ["Incorrect 1", "Incorrect 2", "Incorrect 3", "Correct Answer"]
},
{
    question: "Question 11?",
    correctAnswer: "Correct Answer",
    answers: ["Incorrect 1", "Incorrect 2", "Incorrect 3", "Correct Answer"]
},
{
    question: "Question 12?",
    correctAnswer: "Correct Answer",
    answers: ["Incorrect 1", "Incorrect 2", "Incorrect 3", "Correct Answer"]
},
{
    question: "Question 13?",
    correctAnswer: "Correct Answer",
    answers: ["Incorrect 1", "Incorrect 2", "Incorrect 3", "Correct Answer"]
},
{
    question: "Question 14?",
    correctAnswer: "Correct Answer",
    answers: ["Incorrect 1", "Incorrect 2", "Incorrect 3", "Correct Answer"]
},
{
    question: "Question 15?",
    correctAnswer: "Correct Answer",
    answers: ["Incorrect 1", "Incorrect 2", "Incorrect 3", "Correct Answer"]
},
{
    question: "Question 16?",
    correctAnswer: "Correct Answer",
    answers: ["Incorrect 1", "Incorrect 2", "Incorrect 3", "Correct Answer"]
},
{
    question: "Question 17?",
    correctAnswer: "Correct Answer",
    answers: ["Incorrect 1", "Incorrect 2", "Incorrect 3", "Correct Answer"]
},
{
    question: "Question 18?",
    correctAnswer: "Correct Answer",
    answers: ["Incorrect 1", "Incorrect 2", "Incorrect 3", "Correct Answer"]
},
{
    question: "Question 19?",
    correctAnswer: "Correct Answer",
    answers: ["Incorrect 1", "Incorrect 2", "Incorrect 3", "Correct Answer"]
},
{
    question: "Question 20?",
    correctAnswer: "Correct Answer",
    answers: ["Incorrect 1", "Incorrect 2", "Incorrect 3", "Correct Answer"]
},
{
    question: "Question 21?",
    correctAnswer: "Correct Answer",
    answers: ["Incorrect 1", "Incorrect 2", "Incorrect 3", "Correct Answer"]
},
{
    question: "Question 21?",
    correctAnswer: "Correct Answer",
    answers: ["Incorrect 1", "Incorrect 2", "Incorrect 3", "Correct Answer"]
},
{
    question: "Question 22?",
    correctAnswer: "Correct Answer",
    answers: ["Incorrect 1", "Incorrect 2", "Incorrect 3", "Correct Answer"]
}]


//html variables
var displayArea = document.getElementsByClassName("contentarea");

console.log(displayArea);


//select a random question - picking from array length, allowing for an assortment of questions
for (let i = 0; i < numberOfQuestions; i++) {
    randomQuestion = Math.floor(Math.random() * (questionsAndAnswers.length));
    questionsToAsk.push(questionsAndAnswers[randomQuestion]);
    
}

console.log("Questions to ask")
console.log(questionsToAsk);





displayQuestion(randomQuestion);

//writing questions to html
function displayQuestion(x){
    displayArea[0].innerHTML = questionsAndAnswers[x].question;
}