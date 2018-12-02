
//variables
var number = "";
var wins = 0;
var losses = 0;
var counter = 0;
var images = ["<img src = assets/images/locket.jpg>", "assets/images/cup.jpg", "assets/images/diadem.jpg", "assets/images/ring.jpg"];

// Functions 
function randomNumber() {
	number = Math.floor(Math.random() * 102) + 19;
 //assigns target number to var number
console.log(number)};



//resets photo
function resetHorcruxes() {
	for (var i = 0; i < images.length; i++) {
		//image
		var horcrux = $("<img>");
		//adds class horcruxes
		horcrux.addClass("horcruxes");
		// image from array
		horcrux.attr("src", images[i]);
		// adds random value
		horcrux.attr("value", (Math.floor(Math.random() * 12) + 1));
		horcrux.attr("height", "100");
		$(".horcrux-images").append(horcrux);
	};
	
}
//reset HTML page
function resetHTML() {
	$(".target-number").html(number); //prints number in html
	$(".win-lose-counter").html("<p>Wins: " + wins + "</p>" + "<p>Losses: " + losses + "</p>");
	$(".score-number").html(counter); //prints score in html
	$(".horcrux-images").empty();
};

function totalReset() {
	randomNumber();
	counter = 0;
	resetHTML();
	resetHorcruxes();
};

// Running Code

randomNumber();
resetHTML();
resetHorcruxes();



// Click Functions
function horcruxClick() {
	//attr returns first value of selected html element
	counter += parseInt($(this).attr("value"));
	$(".score-number").html(counter);
	if (counter) {
		wins++;
		totalReset();
	}
	else if (counter) {
		losses++;
		totalReset();
	};
};

//click for every horcrux
$(document).on("click", ".horcruxes", horcruxClick);