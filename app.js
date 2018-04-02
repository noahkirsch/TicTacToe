window.onload = function() {
	var turn = 0;			//reset will make this 0
	var gameOver = false;
	var clickedNode = null;

	var isValidMove = function() {
		console.log(typeof clickedNode.childNodes[0].nodeValue);
		if (gameOver) {
			alert("The game is over, hit reset to play again!");
			return false;
		} else if (clickedNode.childNodes[0].nodeValue !== '[ ]') {
			alert("This square is taken, pick another square");
			return false;
		}
		return true;
	}

	var displayMark = function() {
		clickedNode = this;
		if (isValidMove()) {
			if (turn % 2 === 0) {
				document.getElementById(this.id).innerHTML = "[X]";
			} else {
				document.getElementById(this.id).innerHTML = "[O]";
			}
			displayWinner();
			turn++;
		}
	}

	var resetGame = function() {
		turn = 0;
		gameOver = false;
		var elements = document.getElementsByTagName('span');
		for (var i = 0; i < elements.length; i++) {
			elements[i].innerHTML = '[ ]';
		}
		document.getElementById('status').innerHTML = "X Goes First";
		clickedNode = null;
	}

	var getBoardState = function() {
		var elements = document.getElementsByTagName('span');
		var boardState = [];

		for (var i = 0; i < elements.length; i++) {
			boardState.push(elements[i].childNodes[0].nodeValue.slice(1,2));
		}	
		return boardState;
	}

	var displayWinner = function() {
		var board = getBoardState();
		var test;

		if (turn % 2 === 0) {
			test = 'X';
		} else {
			test = 'O';
		}

		if (board[0] === test && board[1] === test && board[2] === test) {
			document.getElementById('status').innerHTML = (test + " Wins!");
			gameOver = true;
		} else if (board[3] === test && board[4] === test && board[5] === test) {
			document.getElementById('status').innerHTML = (test + " Wins!");
			gameOver = true;
		} else if (board[6] === test && board[7] === test && board[8] === test) {
			document.getElementById('status').innerHTML = (test + " Wins!");
			gameOver = true;
		} else if (board[0] === test && board[3] === test && board[6] === test) {
			document.getElementById('status').innerHTML = (test + " Wins!");
			gameOver = true;
		} else if (board[1] === test && board[4] === test && board[7] === test) {
			document.getElementById('status').innerHTML = (test + " Wins!");
			gameOver = true;
		} else if (board[2] === test && board[5] === test && board[8] === test) {
			document.getElementById('status').innerHTML = (test + " Wins!");
			gameOver = true;
		} else if (board[0] === test && board[4] === test && board[8] === test) {
			document.getElementById('status').innerHTML = (test + " Wins!");
			gameOver = true;
		} else if (board[2] === test && board[4] === test && board[6] === test) {
			document.getElementById('status').innerHTML = (test + " Wins!");
			gameOver = true;
		} else if (turn === 8) {
			alert('Tie, hit reset to begin a new game!');
		} else {
			//Display whose turn it is
			if (turn % 2 === 0) {
				document.getElementById('status').innerHTML = "X's Turn";
			} else {
				document.getElementById('status').innerHTML = "O's Turn";
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


}