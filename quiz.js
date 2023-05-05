//kysymykset ja vast. vaihtoehdot

var questions = [
	{
		question: "How much do you enjoy spending time with friends?",
		answers: [
			{ answer: "Not at all", score: 1 },
			{ answer: "A little bit", score: 2 },
			{ answer: "Moderately", score: 3 },
			
		]
	},
	{
		question: "How often do you exercise?",
		answers: [
			{ answer: "Never", score: 1 },
			{ answer: "Rarely", score: 2 },
			{ answer: "Sometimes", score: 3 },
			
		]
	}
];
//pidä kirjaa kysymyksestä ja kertyneistä vastauksista
var currentQuestionIndex = 0;
var currentScore = 0;

//elementit
var questionElement = document.getElementById("question");
var answerButtonsElement = document.getElementById("answer-buttons");
var resultContainer = document.getElementById("result-container");
var resultElement = document.getElementById("result");
var retakeButton = document.getElementById("retake-button")


retakeButton.addEventListener("click", resetQuiz);

showQuestion(currentQuestionIndex);

//näytä kysymys indeksillä 'questionIndex', luo vast. vaihtoehtojen napit
function showQuestion(questionIndex) {
	var question = questions[questionIndex];
	questionElement.innerText = question.question;
	answerButtonsElement.innerHTML = "";
	for (var i = 0; i < question.answers.length; i++) {
		var answer = question.answers[i];
		var button = document.createElement("button");
		button.innerText = answer.answer;
		button.classList.add("answer-button");
        // tallenna buttoniin vastaukseen yhdistettu arvo
		button.dataset.score = answer.score;
        // vastausta klikatessa kutsutaan selectAnswer
		button.addEventListener("click", selectAnswer);
		answerButtonsElement.appendChild(button);
	}
	
}
// renderöi seuraava kysymys tai tulos
function showNextQuestion() {
	currentQuestionIndex++;
	if (currentQuestionIndex >= questions.length) {
		showResult();
	} else {
		showQuestion(currentQuestionIndex);
	}
}


// ottaa parametriksi vastauksen klikkauksen ja päivittää scorea sen sisältämällä arvolla
function selectAnswer(e) {
	var selectedButton = e.target;
	var score = parseInt(selectedButton.dataset.score);
	currentScore += score;
	showNextQuestion();
}

// resetoi quizin
function resetQuiz(){
    questionElement.style.display = "flex";
	answerButtonsElement.style.display = "flex";
	
	resultContainer.style.display = "none";
    retakeButton.style.display = "none";

    currentScore = 0
    currentQuestionIndex = 0
    showQuestion(currentQuestionIndex);


}
// näyttää vastauksen viimeisen kysymyksen jälkeen
function showResult() {
	questionElement.style.display = "none";
	answerButtonsElement.style.display = "none";
	
    
	resultContainer.style.display = "flex";
    retakeButton.style.display = "flex";
    resultElement.style.display = "flex";



    //mahd. lopputekstit
	var resultText;
	if (currentScore <= 5) {
		resultText = "You are not very social and don't enjoy spending time with others.";
	} else if (currentScore <= 10) {
		resultText = "You are somewhat social and like to spend time with others occasionally.";
	} else if (currentScore <= 15) {
		resultText = "You are fairly social and enjoy spending time with others frequently.";
	} else {
		resultText = "You are very social and enjoy spending time with others almost all the time.";
	}

	resultElement.innerText = resultText;
}