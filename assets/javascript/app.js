//global gameplay variables
var questionTime;
var numberOfQuestions = 6;
var randomQuestion;
var questionsToAsk = [];
var questionsRight = 0;
var questionsWrong = 0;
var timerInterval;
var timerInterval2;
var questionsAndAnswers = [
	{
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
	}
];
var x;
var userSelection;

var questiondiv = `<div class = "question">`;
var closediv = "<div>";
var answerdiv = "<div id=answers>";
var button = "<button>";

//html variables
var displayArea = document.getElementById("contentarea");
var startButton = document.getElementById("start");
var timeHtml = document.getElementById("timer");
var timeRemaining = document.getElementById("timeremaining");
var button0;
var button1;
var button2;
var button3;

//select a random question - picking from array length, allowing for an assortment of questions
function randomQuestions() {
	for (let i = 0; i < numberOfQuestions; i++) {
		randomQuestion = Math.floor(Math.random() * questionsAndAnswers.length);
		questionsToAsk.push(questionsAndAnswers[randomQuestion]);
		questionsAndAnswers.splice(randomQuestion, 1);
	}
}

//start button click starts the game and calls for the first question - this is displayed at the start of the game and the end of the game
startButton.onclick = function() {
	if (questionsAndAnswers.length < numberOfQuestions) {
		displayArea.InnerHTML =
			"I'm all out of questions - come back later and I might have more.";
	} else {
		resetGame();
		randomQuestions();
		displayArea.innerHTML = "";
		displayQuestion();
		console.log(numberOfQuestions);
	}
};

//start button click starts the game and calls for the first question - this is displayed at the start of the game and the end of the game

//writing questions to html - currently testing that it can display for 6 seconds.
function displayQuestion() {
	x = questionsRight + questionsWrong;
    var questionPush = questiondiv + questionsToAsk[x].question + closediv + answerdiv;
	console.log(questionPush);
	var answerPush = "";
	for (let i = 0; i < questionsToAsk[x].answers.length; i++) {
		answerPush = answerPush + `<button id=button` + i + `>` + questionsToAsk[x].answers[i];
	}
    console.log(answerPush);
    timer();
        displayArea.innerHTML = questionPush + answerPush;
        var answerArea = document.getElementById("answerdiv");
        button0 = document.getElementById("button0");
        button1 = document.getElementById("button1");
        button2 = document.getElementById("button2");
        button3 = document.getElementById("button3");
        buttonsActive();
}

//countdown timer reset and call timer - pulled from https://github.com/tylerblakeman/Playing-With-Timers - my collaboration with Zach Hassler for this project - I struggled with timers and worked through this with him
function timer() {
	questionTime = 30;
	timerInterval = setInterval(countdown, 1000);
	countdown();
}

//countdown timer function
function countdown() {
	if (questionTime == 0) {
		clearInterval(timerInterval);
		timeRemaining.innerHTML = "Your time is up!";
        questionsWrong++;
        endOfGame();
	} else {
		console.log(questionTime);
		questionTime--;
        if (questionTime <= 30) {
            timeRemaining.innerHTML = questionTime + " seconds";
            }
	}
}

//check answer function
function checkAnswer() {
	if (userSelection == questionsToAsk[x].correctAnswer) {
		questionsRight++;
		console.log("YAYAYAYYAYAY!");
        displayArea.innerHTML = "YayyayyayyayyyyY!";
        endOfGame ()
	} else {
		questionsWrong++;
		console.log("booooo!");
        displayArea.innerHTML = "BooooooooO!";
        endOfGame();

	}
}

//game over?
function endOfGame() {
    timeRemaining.innerHTML = " ";
	if (numberOfQuestions == questionsRight + questionsWrong) {
		console.log("End of Game!");
		displayArea.innerHTML =
			questiondiv +
			"would you like to play again?" +
			closediv +
			`<button id="start2">Start Game</button>`;
		var answerPercentage = (questionsRight / numberOfQuestions) * 100;
		answerPercentage = answerPercentage.toFixed(2);
		timeRemaining.innerHTML = "Your score is " + answerPercentage + "%";
		var startButton2 = document.getElementById("start2");
		startButton2.onclick = function() {
			if (questionsAndAnswers.length < numberOfQuestions) {
				displayArea.innerHTML =
					"I'm all out of questions - come back later and I might have more.";
			} else {
				displayArea.innerHTML = "";
				resetGame();
				randomQuestions();
				displayQuestion();
				console.log(numberOfQuestions);
			}
		};
	} else {
        displayQuestion();
	}
}

function resetGame() {
	questionsToAsk = [];
	questionsRight = 0;
	questionsWrong = 0;
}

//makes answer buttons activate and then after selecting an answer
function buttonsActive() {
	button0.onclick = function() {
		clearInterval(timerInterval);
		userSelection = questionsToAsk[x].answers[0];
        console.log(userSelection);
		checkAnswer();
	};
	button1.onclick = function() {
		clearInterval(timerInterval);
		userSelection = questionsToAsk[x].answers[1];
		checkAnswer();
	};
	button2.onclick = function() {
		clearInterval(timerInterval);
		userSelection = questionsToAsk[x].answers[2];
		checkAnswer();
	};
	button3.onclick = function() {
		clearInterval(timerInterval);
		userSelection = questionsToAsk[x].answers[3];
		checkAnswer();
	};
}
