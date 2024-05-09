
var font;
var font2;


var sixY;
var eloiseY;

function preload() {
  font= loadFont('../img/bodoflo.ttf');
  font2 = loadFont('../img/bambank.ttf');
  
}

function setup() {
  createCanvas(400, 400);
  sixY = height/1.5;
  eloiseY = height/2;
}

function draw() {
  background(255, 212, 223); 
  textSize(50);
  textAlign(CENTER);
  
  fill('black');
  textFont(font);
  text("I am", width/3.4, height/2); 
  
  textFont(font2);
  fill('red');
  text(" Eloise", width/1.5, eloiseY); 
  
  textFont(font);
  fill('black');
  text("I am", width/3, height/1.5);
  
  textFont(font);
  fill('red');
  text("6", width/2, sixY); 

 
  
  if (keyIsPressed){
    eloiseY = height/1.5;
    sixY = height/2;
  } else {
    eloiseY = height/2;
    sixY = height/1.5;
  }
  

}