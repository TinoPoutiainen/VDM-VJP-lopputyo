//kysymykset ja vast. vaihtoehdot

var questions = [
	{
		question: "Kuinka usein ostat keskimäärin uusia vaatteita?",
		answers: [
			{ answer: "Usein", score: 1 },
			{ answer: "Joskus", score: 2 },
			{ answer: "Harvoin", score: 3 },
			
		]
	},
	{
		question: "Millaisessa tilanteessa ostat uusia vaatteita?",
		answers: [
			{ answer: "Uusien trendien saapuessa", score: 1 },
			{ answer: "SpontaanistI", score: 2 },
			{ answer: "Tarpeeseen", score: 3 },
			
		]
	},
	{
		question: "Mistä hankit useimmat vaatteesi?",
		answers: [
			{ answer: "Kaupoista tai netistä", score: 1 },
			{ answer: "Käytettynä", score: 2 },
			{ answer: "Lainaan muiden", score: 3 },
			
		]
	},
	{
		question: "Mihin kiinnität eniten huomiota ostopäätöstä tehdessäsi?",
		answers: [
			{ answer: "Hintaan", score: 1 },
			{ answer: "Brändiin", score: 2 },
			{ answer: "Materiaaleihin", score: 3 },
			
		]
	},
	{
		question: "Tarvitset juhliin asun, eikä vaatekaapistasi löydy mitään sopivaa. Ostatko tällöin uusia vaatteita?",
		answers: [
			{ answer: "Usein", score: 1 },
			{ answer: "Joskus", score: 2 },
			{ answer: "Harvoin", score: 3 },
			
		]
	},
	{
		question: "Lainaatko vaatteita ystäviltä tai tutuilta?",
		answers: [
			{ answer: "Usein", score: 3 },
			{ answer: "Joskus", score: 2 },
			{ answer: "Harvoin", score: 1 },
			
		]
	},
	{
		question: "Onko vaatteiden ekologisuudella sinulle väliä?",
		answers: [
			{ answer: "Ei juurikaan", score: 1 },
			{ answer: "Osittain", score: 2 },
			{ answer: "Paljon", score: 3 },
			
		]
	},
	{
		question: "Mitä haluat vaatteidesi edustavan?",
		answers: [
			{ answer: "Ajankohtaisia trendejä", score: 1 },
			{ answer: "Käytännöllisyyttä", score: 2 },
			{ answer: "Omaa tyyliä", score: 3 },
			
		]
	},
	{
		question: "Seuraatko vaatetrendejä?",
		answers: [
			{ answer: "Usein", score: 3 },
			{ answer: "Joskus", score: 2 },
			{ answer: "Harvoin", score: 1 },
			
		]
	},
	{
		question: "Kiinnitätkö huomiota vaatteidesi huoltoon?",
		answers: [
			{ answer: "Melko vähän", score: 1 },
			{ answer: "Jonkin verran", score: 2 },
			{ answer: "Paljon", score: 3 },
			
		]
	},

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

var counter = document.getElementById("number");
var numOfQ = document.getElementById("numOfQ");
var index = document.getElementById("index");

retakeButton.addEventListener("click", resetQuiz);

numOfQ.innerHTML = questions.length
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
		index.innerHTML = currentQuestionIndex + 1
	}
	
}
// tarkista onko kysymyksiä jäljellä, renderöi seuraava kysymys tai tulos
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
	counter.style.display = "inline";
	
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
	counter.style.display = "none";
	
    
	resultContainer.style.display = "flex";
    retakeButton.style.display = "flex";
    resultElement.style.display = "flex";


	console.log(currentScore);
    //mahd. lopputekstit
	var resultText;
	if (currentScore < 18) {
		resultText = "Pidät vaatetrendien seuraamisesta ja pukeutumisessa sen helppous on sinulle merkittävää. Vaatekaappisi sisältö vaihtuu kohtuullisen tiuhaan ja ostat mielellään vaatteesi uutena. Haasta itsesi viettämään päivä second hand-liikkeissä tai tuttavan vaatekaapilla; uniikin aarteen löytäminen voi tuoda yllättävän paljon mielihyvää pitkäksikin ajaksi.";
	} else if (18 <= currentScore && currentScore < 23) {
		resultText = "Olet eräänlainen keskitien kuluttaja, jonka vaatekaapista löytyy niin uutta kuin vanhaa. Pukeutuminen on sinulle enemmänkin käytännöllisyyden asia, mutta toisinaan mukaasi tarttuu huomiosi kiinnittäneitä vaatteita spontaanisti niin nettikaupasta kuin kivijalkaliikkeen vaaterekistä. Mitäpä jos kertoisitkin vaatteidesi avulla tarinaa? Käytännöllisyys ja tarinan kertominen voi olla yllättävän helppoa ja palkitsevaa yhdistää.";
	} else {
		resultText = "Sinulle vaatteet edustavat tarinaa, jota muovaat hellästi ja huolellisesti. Huollat vaatteitasi ja ostat niitä tarpeen mukaan. Myös vaatteiden ekologisuudella on sinulle väliä. Inspiroidut ja hyödynnät tuttaviesi vaatekaappeja osana pukeutumistasi. Mitä jos järjestäisitte yhdessä vaatteiden vaihtoillan? ";
	}
	
	resultElement.innerText = resultText;
}