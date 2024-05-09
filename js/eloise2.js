textArray = ["I","am","a","city","child",",","I","live","at","The","Plaza"];

var index = 0;
var font;
var currentTextTopLine = "";
var currentTextBottomLine = "";

function preload(){
  font= loadFont('img/bodoflo.ttf');
}



function setup() {
  createCanvas(700, 700);
  textSize(30);
}

function draw() {
  background('white');
  text(currentTextTopLine, width / 4, height / 1.5);
  textFont(font);
  }
function mouseClicked(){
  if (index <= 10) {
    currentTextTopLine += " " + textArray[index];
  } else if (index <= textArray .length -1) {
    currentTextBottomLine += " " + textArray[index];
  }
  index += 1;
}