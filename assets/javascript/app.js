//global gameplay variables
var questionTime;
var timerInterval;
var numberOfQuestions = 2;
var randomQuestion;
var questionsToAsk = [];
var questionsRight = 0;
var questionsWrong = 0;
var questionsAndAnswers = [{
    question: "Question One?",
    correctAnswer: "Correct Answer",
    answers: ["Incorrect 1", "Incorrect 2", "Incorrect 3", "Correct Answer"]
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


var questiondiv = `<div class = "question">`;
var closediv = "<\div>";
var answerdiv = "<div id=answers>";
var button = "<button>";

//html variables
var displayArea = document.getElementById("contentarea");
var startButton = document.getElementById("start");
var timeHtml = document.getElementById("timer");
var timeRemaining = document.getElementById("timeremaining")


 //select a random question - picking from array length, allowing for an assortment of questions
function randomQuestions(){
    for (let i = 0; i < numberOfQuestions; i++) {
    randomQuestion = Math.floor(Math.random() * (questionsAndAnswers.length));
    questionsToAsk.push(questionsAndAnswers[randomQuestion]);
    questionsAndAnswers.splice(randomQuestion, 1);
}
}

//start button click starts the game and calls for the first question - this is displayed at the start of the game and the end of the game
startButton.onclick = function(){
    resetGame();
    randomQuestions();
    displayArea.innerHTML = "";
    displayQuestion()
    console.log(numberOfQuestions)
}

//start button click starts the game and calls for the first question - this is displayed at the start of the game and the end of the game


//writing questions to html - currently testing that it can display for 6 seconds.
function displayQuestion(){
    var x = questionsRight + questionsWrong;
    var questionPush = questiondiv + questionsToAsk[x].question + closediv + answerdiv;
    console.log(questionPush)
    var answerPush ="";
    for (let i = 0; i < questionsToAsk[x].answers.length; i++) {
        answerPush = answerPush + `<button id=`+i+`>` + questionsToAsk[x].answers[i];
        }
    console.log(answerPush)
    displayArea.innerHTML = questionPush + answerPush;
    var answerArea = document.getElementById("answerdiv");
    timer()
}


//countdown timer reset and call timer - pulled from https://github.com/tylerblakeman/Playing-With-Timers - my collaboration with Zach Hassler for this project - I struggled with timers and worked through this with him
function timer(){
    questionTime = 5;
    timerInterval = setInterval(countdown, 1000)
    countdown()
    }
    
//countdown timer function
function countdown() {
    if (questionTime == 0) {
    clearInterval(timerInterval)
    timeRemaining.innerHTML = "Your time is up!";
    questionsWrong++;
    endOfGame();
    } else {
    console.log(questionTime)
    questionTime--;
    timeRemaining.innerHTML = questionTime + " seconds";
    }
}

//check answer function
function checkAnswer(){
    if (userSelection = questionsToAsk[x].correctAnswer){
        questionsRight++;
        endOfGame()
    }
    else {
        questionsWrong++
        endOfGame()
    }
}

//game over?
function endOfGame(){
    if (numberOfQuestions == questionsRight + questionsWrong) {
        console.log("End of Game!");
        displayArea.innerHTML = questiondiv + "would you like to play again?" + closediv + `<button id="start2">Start Game</button>`;
        var startButton2 = document.getElementById("start2")
        startButton2.onclick = function(){
            displayArea.innerHTML = "";
            resetGame();
            randomQuestions();
            displayQuestion()
            console.log(numberOfQuestions)
        }
        }
    else {
        displayQuestion();
    }
}

function resetGame(){
    questionsToAsk = [];
    questionsRight = 0;
    questionsWrong = 0;
}

