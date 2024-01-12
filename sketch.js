let hello = "brrr"
let content = 'I LOVE MY BOYFRIEND'; //variable for text string
let yStart = 0; //starting position of the text wall
let customFont;
let sWidth =200;
let sHeight =200;
let value = 40;

function preload(){
  customFont = loadFont('trick.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(customFont); //use the custom font for text display
  textAlign(CENTER, CENTER); //adjust the anchor point of text alignment to the horizontal and vertical centers
  textSize(50);
}

function draw() {
  background(140, 118, 109);
  ellipse(mouseX,mouseY,value,value);
  fill(0);
  
 
  //text(hello,25,25);
  for (let y = yStart; y < height; y += 58) { //use a for loop to draw the line of text multiple times down the vertical axis
    fill(46, 30, 23); //create a gradient by associating the fill color with the y location of the text
    text(content, width / 2, y); //display text
  }
  yStart--; //move the starting point of the loop up to create the scrolling animation, yStart-- is the same as yStart = yStart -1 or yStart-=1
}