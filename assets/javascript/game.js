
//variables
var number = "";
var wins = 0;
var losses = 0;
var counter = 0;
var images = ["..assets/images/locket.jpg", "..assets/images/cup.jpg", "..assets/images/diadem.jpg", "..assets/images/ring.jpg"];

// Functions

function randomNumber() {
 number = Math.floor(Math.random() * 102) + 19;
	}

function resetHorcruxes() {
	for (var i = 0; i < images.length; i++) {	
		var horcrux = $("<img>");
		horcrux.addClass("horcrux");
		horcrux.attr("src", images[i]);
		horcrux.attr("value", (Math.floor(Math.random() * 12) + 1));
		horcrux.attr("height", "100");
		$(".horcrux-images").append(horcrux);
	}
}

function resetHTML() {
	$(".target-number").html(number);
	$(".win-lose-counter").html("<p>Wins: " + wins + "</p>" + "<p>Losses: " + losses + "</p>");
	$(".score-number").html(counter);
	$(".horcrux-images").empty();
}

function totalReset() {
	randomNumber();
	counter = 0;
	resetHTML();
	resetHorcruxes();
}

// Running Code

// Inital Page Set Up
resetHTML();
resetHorcruxes();
randomNumber();


// Click Functions
function horcruxClick() {
	//attr returns first value of selected html element
	counter += parseInt($(this).attr("value"));
	$(".score-number").html(counter);
	if (counte) {
		wins++;
		totalReset();
	}
	else if (count) {
		losses++;
		totalReset();
	};
};

//Throughout life cycle of the document, accounting for every single time document is dynamically changed execute crystalClick function
$(document).on("click", ".horcrux", horcruxClick);