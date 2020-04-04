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
		question: "In Europe, coffee was known as what?",
		correctAnswer: "Arabian Wine",
		answers: ["Bitter Sludge", "The Devil's Tea", "Undrinkable Swill", "Arabian Wine"]
	},
	{
		question: "Castle beer is produced in what country?",
		correctAnswer: "South Africa",
		answers: ["South Africa", "Germany", "Sweden", "Norway"]
	},
	{
		question: "What country drinks the most beer?",
		correctAnswer: "Germany",
		answers: ["Mexico", "Italy", "Germany", "Australia"]
	},
	{
		question: "In second place behind California, what state makes the most wine?",
		correctAnswer: "New York",
		answers: ["Wisconsin", "New York", "Vermont", "Florida"]
	},
	{
		question: "In which nation did the word plonk, meaning wine, originally come from?",
		correctAnswer: "Australia",
		answers: ["Russia", "Italy", "Germany", "Australia"]
	},
	{
		question: "Kloster beer is brewed where?",
		correctAnswer: "Thailand",
		answers: ["Germany", "Thailand", "Austria", "Canada"]
	},
	{
		question: "What is Romeo's Rouser?",
		correctAnswer: "An ale",
		answers: ["An ale", "A lager", "A whiskey", "A wine"]
	},
	{
		question: "Sukhindol wine is made in what country?",
		correctAnswer: "Bulgaria",
		answers: ["Norway", "Russia", "Bulgaria", "Finland"]
	},
	{
		question: "Where is Tiger beer brewed?",
		correctAnswer: "Sinagpore",
		answers: ["Greenwich", "Yokohama", "Brisbane", "Singapore"]
	},
	{
		question: "There are 33 words on the back of a bottle of what brand of beer",
		correctAnswer: "Rolling Rock",
		answers: ["New Castle", "Rolling Rock", "Coor's Light", "Pabst Blue Ribbon"]
	},
	{
		question: "Which country produces Bulls Blood wine?",
		correctAnswer: "Hungary",
		answers: ["Hungary", "China", "Spain", "Mexico"]
	},
	{
		question: "What give's root beer it's flavor?",
		correctAnswer: "Sasparilla",
		answers: ["Hops", "Sasparilla", "Yeast", "Sugar"]
	},
	{
		question: "There are how many gallons in a Puncheon wine barrel?",
		correctAnswer: "83",
		answers: ["50", "27", "83", "9"]
	},
	{
		question: "In the 13th century European children were baptized with what?",
		correctAnswer: "Beer",
		answers: ["Wine", "Beer", "Water", "Whiskey"]
	},
	{
		question: "In a Moscow mule, what spirit is mixed with ginger beer?",
		correctAnswer: "Vodka",
		answers: ["Whiskey", "Vodka", "Peppermint Liquore", "Beer"]
	},
	{
		question: "The Munich beer festival is held in what month?",
		correctAnswer: "October",
		answers: ["November", "October", "July", "March"]
	},
	{
		question: "The alien ET drank what brand of beer?",
		correctAnswer: "Coors",
		answers: ["Coors", "Bud", "High Life", "Miller Lite"]
	},
	{
		question: "Cobra beer is made in what country?",
		correctAnswer: "India",
		answers: ["China", "Vietnam", "India", "Japan"]
	},
	{
		question: "What state drinks the most beer?",
		correctAnswer: "California",
		answers: ["Texas", "Pennsylvania", "Wisconsin", "California"]
	},
	{
		question: "What was unusual about Co-op winter warmer ale's label?",
		correctAnswer: "It was in Braille",
		answers: ["Co-op mispelled their brand name", "It was a numbered release", "It was unlabeled", "It was in Braille"]
	},
	{
		question: "On January 24, 1935, what did drinkers see for the first time ever?",
		correctAnswer: "Beer Cans",
		answers: ["Brown Bottles", "Beer Cans", "High Life", "Non-Alcoholic Beers"]
	},
	{
		question: "The average Britain drinks about 14,571 of what over their life?",
		correctAnswer: "Pints of Beer",
		answers: ["Gallons of Beer", "CCs of Beer", "Pints of Beer", "Cartons of Milk"]
	},
	{
		question: "In what year was the Boston Beer company founded?",
		correctAnswer: "1984",
		answers: ["1943", "1852", "1776", "1984"]
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
