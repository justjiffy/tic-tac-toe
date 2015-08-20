	function box(num) { 
		return $('#board').children()[num].innerHTML 
	};

	var playCount = 0;
	var player1 = true;

	$('#board').children().on('click', function(){
		if (this.innerHTML=="") { makePlay(this); win(); }
			else { invalidMove(this); win(); };

	});

	function makePlay(elm) {
		if (player1 === true)  { $(elm).html('X'); player1 = false; playCount++; }
			else { $(elm).html("O"); player1 = true; playCount++; }
	};

	function invalidMove(elm) { $(elm).effect('shake') };

	function win() {
			console.log(playCount);
			console.log(box(0));
			console.log(box(3));
			console.log(box(6));
			console.log(box(0) == box(3) && box(3) == box(6) && playCount != 0);
		  if ( box(0) == box(1) && box(1) == box(2) && playCount !== 0 ) { whichWinner(0) }
		  else if ( box(0) == box(3) && box(3) == box(6) && playCount != 0 ) { whichWinner(0) }
		  else if ( box(3) == box(4) && box(4) == box(5) && playCount != 0 ) { whichWinner(3) }
		  else if ( box(6) == box(7) && box(7) == box(8) && playCount != 0 ) { whichWinner(6) }
		  else if ( box(2) == box(5) && box(5) == box(8) && playCount != 0 ) { whichWinner(2) }
		  else if ( box(1) == box(4) && box(4) == box(7) && playCount != 0 ) { whichWinner(1) }
		  else if ( box(0) == box(4) && box(4) == box(8) && playCount != 0 ) { whichWinner(0) }
		  else if ( box(2) == box(4) && box(4) == box(6) && playCount != 0 ) { whichWinner(2) }
		  else if (playCount > 8) { $('#catsGame').css({ display: 'block' }); };
		};

function whichWinner(n) {
	if ( box(n) === "X" ) { playerWins(1); }
	else if ( box(n) === "O" ) { playerWins(2); }
};

function playerWins(who) {
	if (who == 1) { $('#winner1').css({ display: 'block' }); }
	else if (who == 2) { $('#winner2').css({ display: 'block' }); }
};
