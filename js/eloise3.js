var font;

function preload(){
  font=loadFont('../img/bodoflo.ttf')
}

function setup() {
  createCanvas(600, 600);
   background('white');
  textSize(30)
}

function draw() {
 
}

function mouseClicked(){
  textFont(font)
  text('Ooooo I absolutely love The Plaza',mouseX,mouseY);
}

