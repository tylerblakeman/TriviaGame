//global gameplay variables
var questionTime;
var timerInterval;
var numberOfQuestions = 6;
var questionsRemaining;
var randomQuestion;
var questionsToAsk = [];
var questionsRight = 0;
var questionsWrong = 0;
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
    question: "Question 22?",
    correctAnswer: "Correct Answer",
    answers: ["Incorrect 1", "Incorrect 2", "Incorrect 3", "Correct Answer"]
},
{
    question: "Question 23?",
    correctAnswer: "Correct Answer",
    answers: ["Incorrect 1", "Incorrect 2", "Incorrect 3", "Correct Answer"]
}];


//html variables
var displayArea = document.getElementById("contentarea");
var startButton = document.getElementById("start");
var timeHtml = document.getElementById("timer")


 
//select a random question - picking from array length, allowing for an assortment of questions
function randomQuestions(){
    for (let i = 0; i < numberOfQuestions; i++) {
    randomQuestion = Math.floor(Math.random() * (questionsAndAnswers.length));
    questionsToAsk.push(questionsAndAnswers[randomQuestion]);
    questionsAndAnswers.splice(randomQuestion, 1);
    //allows us to ask all of the questions 
    questionsRemaining = numberOfQuestions;
}
}

//start button click starts the game and calls for the first question - this is displayed at the start of the game and the end of the game
startButton.onclick = function(){
    randomQuestions();
    displayArea.innerHTML = "";
    displayQuestion()
    numberOfQuestions--
    console.log(numberOfQuestions)
    displayQuestion();
}

//writing questions to html - currently testing that it can display for 6 seconds.
function displayQuestion(){
    displayArea.innerHTML = "blah blah blah blah blah blah";    
}


//countdown timer reset and call timer - pulled from https://github.com/tylerblakeman/Playing-With-Timers - my collaboration with Zach Hassler
function timer(){
    questionTime = 5;
    timerInterval = setInterval(countdown, 1000)
    countdown()
    }
    
//countdown timer function
function countdown() {
    if (questionTime == 0) {
    clearInterval(timerInterval)
    return console.log("time's up!...TYLER!");
    } else {
    console.log(questionTime)
    questionTime--;
    }
}