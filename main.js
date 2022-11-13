
function check(){

	var question1 = document.test.question1.value;
	var question2 = document.test.question2.value;
	var question3 = document.test.question3.value;
	var correct = 0;


	if (question1 == "URL адрес най-отпред е изписано https://, като “s”") {
		correct++;
}
	if (question2 == "Малки,големи букви, цифри и специални символи") {
		correct++;
}	
	if (question3 == "tAVUHVpeGPJJED!*6!H920") {
		correct++;
	}

	
	var pictures = ["img/win.gif", "img/meh.jpeg", "img/lose.gif"];
	var messages = ["Great job!", "That's just okay", "Ми брат... опитай пак"];
	var score;

	if (correct == 0) {
		score = 2;
	}

	if (correct > 0 && correct < 3) {
		score = 1;
	}

	if (correct == 3) {
		score = 0;
	}


	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "Имаш " + correct + " точки/a.";
	document.getElementById("picture").src = pictures[score];
	}
	
