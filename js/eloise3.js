var font;
var isFirstClick = true;

function preload(){
  font=loadFont('img/bodoflo.ttf')
}

function setup() {
  createCanvas(600, 600);
   background('white');
  textSize(30)
  textFont(font)
  textAlign(CENTER);
  text('click here',width/2,height/2);
}

function draw() {
 
}

function mouseClicked(){
  if(isFirstClick){
    background('white');
    isFirstClick = false;
  }
  text('Ooooo I absolutely love The Plaza',mouseX,mouseY);
}

