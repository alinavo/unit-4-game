
//name variables (random number, count, user wins, and losses)
var number = "";
var wins = 0;
var losses = 0;
var counter = 0;
var images = ["../assets/images/cup.jpg", "../assets/images/diadem.jpg", "../assets/images/locket.jpg", "../assets/images/ring.jpg"];

// Functions

	function randomNumer () {
		number = Math.floor(Math.random() * 102) + 19;
	}

	function resethorcruxes () {
		for (var i = 0; i < images.length; i++) {
			var horcrux = $("<img>");
			horcrux.addClass("horcrux");
			horcrux.attr("src", images[i]);
			horcrux.attr("value", (Math.floor(Math.random() * 12) + 1));
			horcrux.attr("height", "100");
			$(".horcrux-images").append(horcrux);
		}
	}

	function resetHTML () {
		$(".target-number").html(number);
		$(".win-lose-counter").html("<p>Wins: " + wins + "</p>" + "<p>Losses: " + losses + "</p>");
		$(".score-number").html(counter);
		$(".horcrux-images").empty();
	}

	function totalReset () {
		randomNumer ();
		counter = 0;
		resetHTML ();
		resethorcruxes ();
	}

// Running Code

	// Sets page up to run random number functin
  randomNumer();
  //runs random number function
  resetHTML (); 
  //RESET RESET RESET !!!!!!
	resethorcruxes ();

// click functions for horcruxs to add numbers
	function horcruxClick () {
    //attr returns first value of selected html element
    //use parseInt to change to integer  
		counter += parseInt($(this).attr("value"));
		$(".score-number").html(counter);
		if (counter == number) {
			wins++;
			totalReset();
		}
		else if (counter > number) {
			losses++;
			totalReset();
		};
	};

	//Throughout life cycle of the document, accounting for every single time document is dynamically changed execute horcruxClick function
	$(document).on("click", ".horcrux", horcruxClick);