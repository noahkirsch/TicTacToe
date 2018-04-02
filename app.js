window.onload = function() {
	var turn = 0;
	var gameOver = false;
	var clickedNode = null;
	var xWins = 0;
	var oWins = 0;
	var previousWinner = 'X';
	var firstPlayer = 'X';
	var secondPlayer = 'O';

	var isValidMove = function() {
		if (gameOver) {
			alert("The game is over, hit reset to play again!");
			return false;
		} else if (clickedNode.childNodes[0].nodeValue !== ' ') {
			alert("This square is taken, pick another square.");
			return false;
		}
		return true;
	}

	var displayMark = function() {
		clickedNode = this;
		if (isValidMove()) {
			if (turn % 2 === 0) {
				document.getElementById(this.id).innerHTML = firstPlayer;
			} else {
				document.getElementById(this.id).innerHTML = secondPlayer;
			}
			displayWinner();
			turn++;

			document.getElementsByClassName('switch')[0].childNodes[3].checked;
			if (document.getElementsByClassName('switch')[0].childNodes[3].checked && !gameOver) {
				rotateBoard();
				gravity();
			}
		}
	}

	var rotateBoard = function() {
		var board = getBoardState();
		var firstStep = [3, 0, 1, 6, 4, 2, 7, 8, 5];
		var secondStep = [6, 3, 0, 7, 4, 1, 8, 5, 2];

		var elements = document.getElementsByClassName('grid-item');
		for (var i = 0; i < elements.length; i++) {
			elements[i].innerHTML = board[firstStep[i]];
		}
		for (var i = 0; i < elements.length; i++) {
			elements[i].innerHTML = board[secondStep[i]];
		}
	}

	var gravity = function() {
		var board = getBoardState();
		var column = 0;
		var testBoard = [board[0], board[3], board[6]];
		var newBoard = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];

		while (column < 3) {
			if (column === 1) {
				testBoard = [board[1], board[4], board[7]];
			} if (column === 2) {
				testBoard = [board[2], board[5], board[8]];
			}

			if (testBoard[0] !== ' ' && testBoard[1] !== ' ') {
				testBoard[2] = testBoard[1];
				testBoard[1] = testBoard[0];
				testBoard[0] = ' ';
			} else if (testBoard[0] !== ' ' && testBoard[2] !== ' ') {
				testBoard[1] = testBoard[0];
				testBoard[0] = ' ';
			} else if (testBoard[1] !== ' ') {
				testBoard[2] = testBoard[1];
				testBoard[1] = ' ';
			} else if (testBoard[0] !== ' ') {
				testBoard[2] = testBoard[0];
				testBoard[0] = ' ';
			}
			if (column === 0) {
				newBoard[0] = testBoard[0];
				newBoard[3] = testBoard[1];
				newBoard[6] = testBoard[2];
			} else if (column === 1) {
				newBoard[1] = testBoard[0];
				newBoard[4] = testBoard[1];
				newBoard[7] = testBoard[2];
			} else if (column === 2) {
				newBoard[2] = testBoard[0];
				newBoard[5] = testBoard[1];
				newBoard[8] = testBoard[2];
			}
			column++;
		}

		var elements = document.getElementsByClassName('grid-item');
		for (var i = 0; i < elements.length; i++) {
			elements[i].innerHTML = newBoard[i];
		}
	}

	var updateScoreboard = function(winner) {
		if (winner === 'X') {
			xWins++;
			document.getElementById('scoreboard_x').innerHTML = ("X Wins: " + xWins);
		} else {
			oWins++;
			document.getElementById('scoreboard_o').innerHTML = ("O Wins: " + oWins);
		}
	}

	var resetGame = function() {
		turn = 0;
		gameOver = false;
		firstPlayer = previousWinner;

		if (firstPlayer === 'X') {
			secondPlayer = 'O';
		} else {
			secondPlayer = 'X';
		}

		var elements = document.getElementsByClassName('grid-item');
		for (var i = 0; i < elements.length; i++) {
			elements[i].innerHTML = ' ';
		}
		document.getElementById('status').innerHTML = (previousWinner + " Goes First");
		clickedNode = null;
	}

	var getBoardState = function() {
		var elements = document.getElementsByClassName('grid-item');
		var boardState = [];

		for (var i = 0; i < elements.length; i++) {
			boardState.push(elements[i].childNodes[0].nodeValue);
		}	
		return boardState;
	}

	var displayWinner = function() {
		var board = getBoardState();
		var test;

		if (turn % 2 === 0) {
			test = firstPlayer;
		} else {
			test = secondPlayer;
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

		if (gameOver) {
			updateScoreboard(test);
			previousWinner = test;
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