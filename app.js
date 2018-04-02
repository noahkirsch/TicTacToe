window.onload = function() {
	var turn = 0;			//reset will make this 0

	var displayMark = function() {
		if (turn % 2 === 0) {
			document.getElementById(this.id).innerHTML = "[X]";
		} else {
			document.getElementById(this.id).innerHTML = "[O]";
		}
		turn++;
		displayWinner();
	}

	var resetGame = function() {
		console.log('clicked');
		turn = 0;
	}

	var displayWinner = function() {
		if (false) {

		} else if (false) {

		} else {
			//Display whose turn it is
			if (turn % 2 === 0) {
				document.getElementById('turn').innerHTML = "X's Turn";
			} else {
				document.getElementById('turn').innerHTML = "O's Turn";
			}
		}
	}

	// console.log(document.getElementById('reset'));

	document.getElementById("reset").addEventListener("click", resetGame);

	document.getElementById("space_0-0").addEventListener("click", displayMark);
	document.getElementById("space_0-1").addEventListener("click", displayMark);
	document.getElementById("space_0-2").addEventListener("click", displayMark);
	document.getElementById("space_1-0").addEventListener("click", displayMark);
	document.getElementById("space_1-1").addEventListener("click", displayMark);
	document.getElementById("space_1-2").addEventListener("click", displayMark);
	document.getElementById("space_2-0").addEventListener("click", displayMark);
	document.getElementById("space_2-1").addEventListener("click", displayMark);
	document.getElementById("space_2-2").addEventListener("click", displayMark);

	//Click event
	//call displayMark


	//Edge Case: Prevent people from clicking something that has already been changed
}