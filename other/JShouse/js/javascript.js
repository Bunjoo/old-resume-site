//Draws the background (includes grass + paving + sun + clouds)
function drawBG(){
	var canvas = document.getElementById("myHouse");
	var ctx = canvas.getContext("2d");
	//Grass
	ctx.beginPath();
	ctx.moveTo(0,230);
	ctx.lineTo(0,300);
	ctx.lineTo(300,300);
	ctx.lineTo(300,200);
	ctx.fillStyle = "green";
	ctx.fill();
	//pathway
	ctx.beginPath();
	ctx.moveTo(150,264);
	ctx.lineTo(230,300);
	ctx.lineTo(300,300);
	ctx.lineTo(300,290)
	ctx.lineTo(192,260);
	ctx.fillStyle = "#636356";
	ctx.fill();
	
	//sun
	ctx.beginPath();
	ctx.arc(290, 0, 40, 0, 2 * Math.PI, false);
	ctx.fillStyle = "yellow";
	ctx.fill();
	ctx.lineWidth= 4;
	//rays
	ctx.beginPath();
	ctx.moveTo(242,10);
	ctx.lineTo(215,12);
	
	ctx.moveTo(246,25);
	ctx.lineTo(220,38);
	
	ctx.moveTo(260,35);
	ctx.lineTo(240,60);
	
	ctx.moveTo(275,43);
	ctx.lineTo(268,65);
	
	ctx.moveTo(292,45);
	ctx.lineTo(293,65);
	ctx.strokeStyle = "yellow";
	ctx.stroke();
	//Clouds
	ctx.beginPath();
	ctx.arc(30, 45, 15, 0, 2 * Math.PI, false);
	ctx.arc(50, 40, 20, 0, 2 * Math.PI, false);
	ctx.arc(70, 40, 15, 0, 2 * Math.PI, false);
	ctx.fillStyle = "#EEEEE6";
	ctx.fill();
	
	ctx.beginPath();
	ctx.arc(230, 90, 15, 0, 2 * Math.PI, false);
	ctx.arc(250, 90, 20, 0, 2 * Math.PI, false);
	ctx.arc(270, 95, 15, 0, 2 * Math.PI, false);
	ctx.fillStyle = "#EAEAE0";
	ctx.fill();
	
}
//Draws house body (includes front facing wall + side wall)
function drawHouseBody(){
	var canvas = document.getElementById("myHouse");
	var ctx = canvas.getContext("2d");
	ctx.lineWidth = 2;

	//house ( color )
	//Body FACE WALL color
	ctx.beginPath();
	ctx.moveTo(213,65);
	ctx.lineTo(130,164);
	ctx.lineTo(130,265);
	ctx.lineTo(270,252);
	ctx.lineTo(270,150);
	ctx.lineTo(213,65);
	ctx.fillStyle = "#CC0000";
	ctx.fill();
	
	//body SIDE WALL color
	ctx.beginPath();
	ctx.moveTo(130,163);
	ctx.lineTo(116,180);
	ctx.lineTo(25,174);
	ctx.lineTo(25,245);
	ctx.lineTo(130,265);
	ctx.lineTo(130,166);
	ctx.fillStyle = "#A30000";
	ctx.fill();
	
	//body face shadow
	ctx.beginPath();
	ctx.moveTo(213,65);
	ctx.lineTo(270,150);
	ctx.lineTo(270,163);
	ctx.lineTo(203,60);
	ctx.fillStyle = "A30000";
	ctx.fill();
	
	//house (lines)
	ctx.beginPath();
	ctx.moveTo(25,175); 
	ctx.lineTo(25,245);
	ctx.lineTo(130,265); // lowest possible point
	ctx.lineTo(270,252); 
	ctx.lineTo(270,150);
	ctx.moveTo(130,265);
	ctx.lineTo(130,166);
	//ctx.stroke();
}
//Draws door and windows 
function drawDoorWindows(){
	var canvas = document.getElementById("myHouse");
	var ctx = canvas.getContext("2d");
	ctx.lineWidth = 2;
	// L window 
	ctx.beginPath();
	ctx.moveTo(35,175);
	ctx.lineTo(35,215);
	ctx.lineTo(65,220);
	ctx.lineTo(65,177);
	// R window
	ctx.moveTo(80,178);
	ctx.lineTo(80,221);
	ctx.lineTo(113,226);
	ctx.lineTo(113,181);
	ctx.fillStyle = "white"; 
	ctx.fill();
	//left window shadow
	ctx.beginPath();
	ctx.moveTo(37,174.5);
	ctx.lineTo(37,213);
	ctx.lineTo(63,217);
	ctx.lineTo(63,176);
	ctx.fillStyle = "#545443";
	ctx.fill();
	ctx.beginPath();
	ctx.moveTo(37,174.5);
	ctx.lineTo(37,213);
	ctx.lineTo(63,217);
	ctx.strokeStyle = "#3B3B2F";
	ctx.stroke();
	
	//right window shadow
	ctx.beginPath();
	ctx.moveTo(82,177.5);
	ctx.lineTo(82,220);
	ctx.lineTo(111,224);
	ctx.lineTo(111,180);
	ctx.fillStyle = "#545443";
	ctx.fill();
	ctx.beginPath();
	ctx.moveTo(82,177.5);
	ctx.lineTo(82, 219);
	ctx.lineTo(111,223);
	ctx.strokeStyle = "#3B3B2F";
	ctx.stroke();
	
	// door window
	ctx.beginPath();
	ctx.moveTo(206,172);
	ctx.lineTo(206,221);
	ctx.lineTo(250,218);
	ctx.lineTo(250,170);
	ctx.lineTo(206,172);
	ctx.fillStyle = "white";
	ctx.fill();
	//door window colors
	ctx.beginPath();
	ctx.moveTo(209,176);
	ctx.lineTo(209,217.5);
	ctx.lineTo(247,215.5);
	ctx.lineTo(247,174.5);
	ctx.lineTo(210,176);
	ctx.fillStyle = "#545443";
	ctx.fill();
	ctx.beginPath();
	ctx.moveTo(246,175);
	ctx.lineTo(246,215);
	ctx.lineTo(209,217);
	ctx.lineWidth = 3;
	ctx.strokeStyle = "#3B3B2F";
	ctx.stroke();
	
	//circle window
	ctx.save(); 
	ctx.translate(300 / 2.5, 300 / 2.5); //translate context
	ctx.scale(.65, .8); //scale
	ctx.beginPath(); //circle that'll be stretched
	ctx.arc(130, -5, 20, 0, 2 * Math.PI, false);
	//restore original state
	ctx.restore();
	ctx.fill();
	ctx.strokeStyle = "white";
	ctx.stroke();

	ctx.lineWidth = 2; // changing line widthback to 2
	
	//door 
	//ctx.strokeStyle = "red";
	ctx.beginPath();
	ctx.moveTo(150,264);
	ctx.lineTo(150,173);
	ctx.lineTo(194,172);
	ctx.lineTo(194,260);
	ctx.fillStyle = "#FFFFCC";
	ctx.fill();
	//ctx.stroke();
	
	//Door colorings
	ctx.beginPath();
	ctx.moveTo(154,264);
	ctx.lineTo(154,177);
	ctx.lineTo(190,176);
	ctx.lineTo(190,260);
	ctx.fillStyle = "#CFCFA6";// door gray
	ctx.fill();
	ctx.beginPath();
	ctx.moveTo(190,260);
	ctx.lineTo(190,176);
	ctx.lineTo(154,177);
	ctx.strokeStyle = "#A7A786" // shadow - dark gray
	ctx.stroke();
	ctx.beginPath();
	ctx.arc(185, 220, 2, 0, 2 * Math.PI, false);
	ctx.fillStyle = "white";
	ctx.fill();
}
//Draws roof 
function drawRoof(){
	var canvas = document.getElementById("myHouse");
	var ctx = canvas.getContext("2d");
	ctx.lineWidth = 2;
	//roof
	ctx.beginPath();
	ctx.strokeStyle = "black";
	ctx.moveTo(213,65); // start point
	ctx.lineTo(117,181);// 
	ctx.lineTo(0,172); // furthest left
	ctx.lineTo(87,70);
	ctx.lineTo(215,52); // above start point
	ctx.lineTo(300,174);
	ctx.lineTo(270,173);
	ctx.lineTo(270,150);
	ctx.lineTo(213,65); //end 
	//ctx.stroke();
	//roof color
	ctx.fillStyle = "#624200"; //brown
	ctx.fill();
	//roof shadow
	ctx.beginPath();
	ctx.moveTo(213,65);
	ctx.lineTo(270,150);
	ctx.lineTo(270,173);
	ctx.lineTo(293,174);
	ctx.lineTo(218,63)
	ctx.fillStyle = "#3F2A00";
	ctx.fill();
	//Left side of roof's color
	ctx.beginPath();
	ctx.moveTo(215,52);
	ctx.lineTo(111,181)
	ctx.lineTo(0,172);
	ctx.lineTo(87,70);
	ctx.lineTo(215,52);
	ctx.fillStyle = "#4F3500";
	ctx.fill();
}
//Draws the chimney
function drawChimney(){
	var canvas = document.getElementById("myHouse");
	var ctx = canvas.getContext("2d");
	ctx.lineWidth = 2;
	//chimney
	//right side
	ctx.beginPath();
	ctx.moveTo(115,75); // start
	ctx.lineTo(115,100);
	ctx.lineTo(103,113); // lowest
	ctx.lineTo(103,75);
	ctx.lineTo(100,70);
	ctx.lineTo(120,70);
	ctx.lineTo(120,75);
	ctx.lineTo(115,75);
	ctx.fillStyle = "#392600";
	ctx.fill();
	//ctx.lineTo(103,75);
	//left side
	ctx.beginPath();
	ctx.moveTo(103,113);// Lowest
	ctx.lineTo(95,113);
	ctx.lineTo(95,75);
	ctx.lineTo(90,75);
	ctx.lineTo(90,70);
	ctx.lineTo(103,70);
	ctx.fillStyle = "#624200";
	ctx.fill();
}
//Draws all above.
function drawAll(){
	var canvas = document.getElementById("myHouse");
	var ctx = canvas.getContext("2d");
	//ctx.translate(0,25);
	
	drawBG();
	drawHouseBody();
	drawRoof();
	drawDoorWindows();
	drawChimney();
	
	
}	
		
//|------------------------------------------------------------------------------|
//|******************************************************************************|
//|------------------------------------------------------------------------------|
//|Smoke Effect|
//|------------------------------------------------------------------------------|
//|******************************************************************************|
//|------------------------------------------------------------------------------|


var interval = setInterval(function () { animateSmoke() }, 10);
var x = 105; // x position of smoke.
var y = 50; // y position of smoke.
var opacity = 0.4;
var o = 1;


function animateSmoke() {


drawSmoke();
if (y < 40) { //Go up quick at start.


y = y - .4 // Remove .4 to move the smoke upwards.
x = x + .1;
o = o - .01;
}

if (y >= 40) { // Go up slowly.
y = y - .8; // Remove .8 to move the smoke upwards.
x = x + .5;
o = o - .005;
}

if (y < -5) {//If Y hasn't hit the top, then keep going.

y = 50;
x = 105;
o = 1;

}
}


function drawSmoke() {


var canvas = document.getElementById("myHouse");


var context = canvas.getContext('2d'); ; // the Context.

var radius = 20; // radius of a circle.

context.clearRect(0, 0, 400, 400);

context.save();
context.globalAlpha = 1;
drawBG();
drawHouseBody();
drawRoof();
drawDoorWindows();
drawChimney();
context.restore();


//|******************************************************************************|
//|------------------------------------------------------------------------------|
//|Fill the smoke. |
//|------------------------------------------------------------------------------|
//|******************************************************************************|

context.beginPath();
context.globalAlpha = o;
context.arc(x, y, radius, -0, 6.28, false);
context.fillStyle = '#808080';

context.lineWidth = 3;
context.strokeStyle = '#000000';

context.arc(x + 12, y + 4, radius - 10, 2.5, -.7, false);

context.arc(x + 4, y - 14, radius, -.7, .6, false);

context.arc(x + 4, y - 14, 0.5, -.7, .6, false);

context.arc(x + 12, y - 20, 20 - 10, -2.7, -.2, false);

context.moveTo(115, y);
context.lineTo(115, y);

context.arc(x - 15, y - 21, 20, 1.8, -.2, false);
context.fill();


//|******************************************************************************|
//|------------------------------------------------------------------------------|
//| Do the outline of the smoke. |
//|------------------------------------------------------------------------------|
//|******************************************************************************|

context.beginPath();
context.globalAlpha = o;
context.arc(x, y, radius, -.2, 3.2, false);
context.fillStyle = '#808080';
context.lineWidth = 3;
context.strokeStyle = '#000000';
context.stroke();

context.beginPath();
context.globalAlpha = o;
context.arc(x + 12, y + 4, radius - 10, 2.5, -.7, false);
context.stroke();

context.beginPath();
context.globalAlpha = o;
context.arc(x + 4, y - 14, radius, -.7, .6, false);
context.stroke();

context.beginPath();
context.globalAlpha = o;
context.arc(x + 12, y - 20, radius - 10, -2.7, -.2, false);
context.stroke();

context.beginPath();
context.globalAlpha = o;
context.arc(x - 15, y - 21, radius, 1.3, -.2, false);
context.stroke();



}