/**
 * PROJECT SimpleJSTicTacToe
 */


/**
 * Listen to clicks made by user on each box on the 3x3 grid
 * 
 */
document.getElementById("1,1").addEventListener("click", function(){putThenCount("pos1,1")});
document.getElementById("1,2").addEventListener("click", function(){putThenCount("pos1,2")});
document.getElementById("1,3").addEventListener("click", function(){putThenCount("pos1,3")});
document.getElementById("2,1").addEventListener("click", function(){putThenCount("pos2,1")});
document.getElementById("2,2").addEventListener("click", function(){putThenCount("pos2,2")});
document.getElementById("2,3").addEventListener("click", function(){putThenCount("pos2,3")});
document.getElementById("3,1").addEventListener("click", function(){putThenCount("pos3,1")});
document.getElementById("3,2").addEventListener("click", function(){putThenCount("pos3,2")});
document.getElementById("3,3").addEventListener("click", function(){putThenCount("pos3,3")});

/*
* Initializing turn values. "now" means the current player. "next" is next player.
*
*/
var now = 0;
var next = 1;
var turn = " ";

/*
* Function to get the current turn. It can produce "X" and "O" output alternatively.
*
*/
function getNow() {
	now++;
	if (now%2 != 0) {
		turn = "X";
		
	} else {
		turn = "O";
	}
	return turn;
}

/*
* Function to get the next turn. It can produce "X" or "O" outputs alternatively.
*
*/
function getNext() {
	next++;
	if (next%2 != 0) {
		turn = "X";
		
	} else {
		turn = "O";
	}
	return turn;
}

/*
* Initializing arrays that store and "X" and "O". 
* There are also variables that store count of "X" and "O" in 
* straight line directions
*
*/
var XcolCount = [0, 0, 0];
var XPosDiaCount = 0;
var XNegDiaCount = 0;
var XrowCount = [0, 0, 0];
var OcolCount = [0, 0, 0];
var OPosDiaCount = 0;
var ONegDiaCount = 0;
var OrowCount = [0, 0, 0];

/*
* Function to put "X" or "O" on the 3x3 grid and also checking if 
* there is 3 same symbol in a row in any straight line directions.
*/

function putThenCount(nowOnBoard) {
	var now = getNow();
	var next = getNext();
	document.getElementById(nowOnBoard).innerHTML = now;
	document.getElementById("next").innerHTML = next;
	var posA = parseInt(nowOnBoard.substring(3, 4));
	var posB = parseInt(nowOnBoard.substring(5, 6));
	var sumAB = posA + posB;
	
	switch (now) {
	/*
	* For both cases "X" and "O", below just detect the symbols put by player and increase their the counter 
	* in respective arrays.
	*/
		case "X" :
			XrowCount[posA-1]++; 
			XcolCount[posB-1]++; 
			if (sumAB % 2 == 0) {
				if (sumAB == 4) {
					if (posA == 2 && posB == 2) {
						XNegDiaCount++;
						XPosDiaCount++;
					} else {
						XPosDiaCount++;
					}
				} else {
					XNegDiaCount++;
				}
			} 
			break;
		case "O" : 
			OrowCount[posA-1]++; 
			OcolCount[posB-1]++; 
			if (sumAB % 2 == 0) {
				if (sumAB == 4) {
					if (posA == 2 && posB == 2) {
						ONegDiaCount++;
						OPosDiaCount++;
					} else {
						OPosDiaCount++;
					}
				} else {
					ONegDiaCount++;
				}
			} 
			break;
	}
	
	/*
	* Check if there is 3 same symbols in any straight line direction and declare winner.
	*/
	if (XrowCount[posA-1] == 3 || 
		OrowCount[posA-1] == 3 ||
		XcolCount[posB-1] == 3 || 
		OcolCount[posB-1] == 3 ||
		XNegDiaCount == 3 ||
		XPosDiaCount == 3 ||
		ONegDiaCount == 3 ||
		OPosDiaCount == 3) {
		alert("uwin");
	}	
}


