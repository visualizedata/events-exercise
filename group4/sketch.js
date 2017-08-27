//var url = "https://raw.githubusercontent.com/visualizedata/orientation/master/events.json"; 
//data = loadJSON(url);

//coordinates for the triangle

//new p5.Element(,[pInst])


var line_coortx=[515, 570];

var line_coorty=[154, 136.4];

//coordinates for the square
var line_coorsx=[570, 350, 240, 570, 570, 240, 295, 350, 350, 405, 405, 405];

var line_coorsy=[12.2, 67.2, 58.4, 23.2, 54, 62.8, 23.2, 36.4, 54, 23.2, 32, 76];

//coordinates for the circle
var line_coorcx=[515];

var line_coorcy=[230.6];

var canvas;

function setup(){
  canvas = createCanvas(700, 288);
  canvas.parent('sketch-holder');
  background(255,255);
  canvas.mouseOver(seeInfo);
  
}

function draw() {

  strokeWeight(0);
  
  //first bar conferences
  fill(240, 239, 228);
  rect(20, 30, 66, 66);
  fill(255, 254, 242);
  rect(86, 30, 66, 66);
  fill(240, 239, 228);
  rect(152, 30, 66, 66);
  fill(255, 254, 242);
  rect(218, 30, 66, 66);
  fill(240, 239, 228);
  rect(284, 30, 66, 66);
  fill(255, 254, 242);
  rect(350, 30, 66, 66);
  fill(240, 239, 228);
  rect(416, 30, 66, 66);
  fill(255, 254, 242);
  rect(482, 30, 66, 66);
  fill(240, 239, 228);
  rect(548, 30, 66, 66);
  fill(255, 254, 242);
  rect(614, 30, 66, 66)
  
  //second bar talks
  fill(240, 239, 228);
  rect(20, 116, 66, 66);
  fill(255, 254, 242);
  rect(86, 116, 66, 66);
  fill(240, 239, 228);
  rect(152, 116, 66, 66);
  fill(255, 254, 242);
  rect(218, 116, 66, 66);
  fill(240, 239, 228);
  rect(284, 116, 66, 66);
  fill(255, 254, 242);
  rect(350, 116, 66, 66);
  fill(240, 239, 228);
  rect(416, 116, 66, 66);
  fill(255, 254, 242);
  rect(482, 116, 66, 66);
  fill(240, 239, 228);
  rect(548, 116, 66, 66);
  fill(255, 254, 242);
  rect(614, 116, 66, 66);
  
  //third bar exhibitions
  fill(240, 239, 228);
  rect(20, 202, 66, 66);
  fill(255, 254, 242);
  rect(86, 202, 66, 66);
  fill(240, 239, 228);
  rect(152, 202, 66, 66);
  fill(255, 254, 242);
  rect(218, 202, 66, 66);
  fill(240, 239, 228);
  rect(284, 202, 66, 66);
  fill(255, 254, 242);
  rect(350, 202, 66, 66);
  fill(240, 239, 228);
  rect(416, 202, 66, 66);
  fill(255, 254, 242);
  rect(482, 202, 66, 66);
  fill(240, 239, 228);
  rect(548, 202, 66, 66);
  fill(255, 254, 242);
  rect(614, 202, 66, 66);

  strokeWeight(2);
  fill(255, 255, 255);
  line(20,275, 680, 275);
  triangle(325, 285, 350, 260, 375, 285)
  
  for (var i = 0; i < line_coortx.length; i=i+1){
    var x1 = line_coortx[i];
    var y1 = line_coorty[i];
		push();
		translate(line_coortx[i], line_coorty[i]);
	  drawTriangleSymbol();
		pop();
		}

  for (var i = 0; i < line_coorsx.length ; i=i+1){
    var x1 = line_coorsx[i];
    var y1 = line_coorsy[i];
		push();
		translate(line_coorsx[i], line_coorsy[i]);
	  drawSquareSymbol();
		pop();
  }
	

  for (var i = 0; i < line_coorcx.length; i=i+1){
    var x1 = line_coorcx[i];
    var y1 = line_coorcy[i];
		push();
		translate(line_coorcx[i], line_coorcy[i]);
	  drawCircleSymbol();
		pop();
		}
  noLoop();

} 

function drawTriangleSymbol() {
  strokeWeight(1);
  fill(255, 255, 255);
  triangle(10, 16, 18, 0, 26, 16);
}
function drawSquareSymbol() {
  strokeWeight(1);
  fill(255, 255, 255);
  rect(0,0, 16, 16);
}

function drawCircleSymbol(){
  strokeWeight(1);
  fill(255, 255, 255);
  ellipse(16, 16, 16, 16);
}

function seeInfo() {
  fill(33, 32, 43);
   }


//var startDate
//var endDate
//var name
//var type
//var location
//var url

//function preload(){

//	var url = "https://raw.githubusercontent.com/visualizedata/orientation/master/events.json";
//	data = loadJSON(url);

//}