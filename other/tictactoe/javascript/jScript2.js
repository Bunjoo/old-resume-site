var xTurn = true;
var countTurns = 0;
var hasWon = false;

function allowDrop(ev) {
	ev.preventDefault();
}
function drag(ev) {
	ev.dataTransfer.setData("Text",ev.target.id);
}

function drop(ev) {
	var data=ev.dataTransfer.getData("Text");
	//Makes copy of the x.
	var nodeCopy = document.getElementById(data).cloneNode(false);
	ev.target.appendChild(nodeCopy);
	//find out whos turn && hide's other icon 
	//x's turn creates blue bg, then hides x icon + shows o icon.
	if(xTurn){
		ev.target.style.background="#99CCFF";
		ev.target.setAttribute("class","hasX");
		document.querySelector(".piktor #X").style.display="none"; 
		document.querySelector(".piktor #O").style.display="inline-block"; 
		countTurns++;
		document.getElementById('X').draggable = false;
		xTurn = false;
	}
	//o's turn creates pink bg, then hides o icon + shows x icon.
	else{
		ev.target.style.background="#FFCCFF";
		ev.target.setAttribute("class","hasO");
		document.querySelector(".piktor #O").style.display="none"; 
		document.querySelector(".piktor #X").style.display="inline-block";
		countTurns++;
		document.getElementById('O').draggable = false;
		xTurn = true;
		
	}
	ev.preventDefault();
	ev.target.removeAttribute("ondragover");
	
	checky();
}

function checky(){
	var one = document.getElementById('div1').className;
	var two = document.getElementById('div2').className;
	var three = document.getElementById('div3').className;
	var four = document.getElementById('div4').className;
	var five = document.getElementById('div5').className;
	var six = document.getElementById('div6').className;
	var seven = document.getElementById('div7').className;
	var eight = document.getElementById('div8').className;
	var nine = document.getElementById('div9').className;
	
	if(one == two && one == three){
		win();
	}	
	else if(four == five && four == six){
		win();
	}	
	else if(seven == eight && seven == nine){
		win();
	}	
	else if(one == four && one == seven){
		win();
	}	
	else if(two == five && two == eight){
		win();
	}	
	else if(three == six && three == nine){
		win();
	}	
	else if(one == five && one == nine){
		win();
	}	
	else if(three == five && three == seven){
		win();
	}	
	else if(hasWon == false && countTurns > 8){
		alert("It's a draw!");
		playAgain();
	}
}

function win(){
	document.querySelector(".piktor #X").style.display="none"; 
	document.querySelector(".piktor #O").style.display="none"; 
	if(xTurn){
		hasWon = true;
		alert("Pig wins!");
	}
	else{
		hasWon = true;
		alert("Rat wins!");
	}
	hasWon = false;
	playAgain();
}

function playAgain(){
	if (confirm("Press Okay to play again!") == true) {
        location.reload();
    }
	else{
		document.write("Thanks for playing!");
	}
}

//hides O icon
function start(){
	document.querySelector(".piktor #O").style.display="none";
}