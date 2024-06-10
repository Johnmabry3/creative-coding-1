let x_hour = 50;
let x_minute = 50;
let x_second = 50;
let x_hour2 = 50;
let x_minute2 = 50;
let x_second2 = 50;
let x_hour3 = 50;
let x_minute3 = 50;
let x_second3 = 50;
let x_hour4 = 50;
let x_minute4 = 50;
let x_second4 = 50;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background('lightblue');

  translate(5,40);

  //textSize(30);
  //text("hour: " + hour(), 50, 50);
  //text("minute: " + minute(), 50, 80);
  //text("second: " + second(), 50, 110);
  //text("month: " + month(), 50, 140);
  //text("day: " + day(), 50, 170);
  //text("year: " + year(), 50, 200);

  push();

  // far left line
  stroke('magenta');
  line(50, 20, 50, 500);

  // middle top time line
  line(50, 200, 550, 200);
  // middle center time line
  line(50, 260, 550, 260);
  // middle bottom time line
  line(50, 320, 550, 320);

  // far right line
  line(550, 20, 550, 500);

  // top three horizontal lines
  line(50, 20, 550, 20);
  line(50, 80, 550, 80);
  line(50, 140, 550, 140);

  // bottom three horizontal lines
  line(50, 500, 550, 500);
  line(50, 440, 550, 440);
  line(50, 380, 550, 380);

  line(100, 20, 100, 500);
  line(150, 20, 150, 500);
  line(200, 20, 200, 500);
  line(250, 20, 250, 500);
  line(300, 20, 300, 500);
  line(350, 20, 350, 500);
  line(400, 20, 400, 500);
  line(450, 20, 450, 500);
  line(500, 20, 500, 500);
  pop();

  // draw the rectangles and circles
  push();
  noStroke();
  fill(50, random(0,185), 80);

  // rectangle values
  // assign value to x_hour using map()
  x_hour = map(hour(),0, 23, 50, 550);
  rect(x_hour, 180, 40);
  // assign value to x_minute using map()
  x_minute = map(minute(), 0, 59, 50, 550);
  rect(x_minute, 240, 40);
  // assign value to x_second using map()
  x_second = map(second(), 0, 59, 50, 550);
  rect(x_second, 300, 40);

  // circle values
  // assign value to x_hour2 using map()
  x_hour2 = map(hour(), 23, 0, 50, 550);
  circle(x_hour2, 200, 40);
  // assign value to x_minute2 using map()
  x_minute2 = map(minute(), 59, 0, 50, 550);
  circle(x_minute2, 260, 40);
  //assign value to x_second2 using map()
  x_second2 = map(second(), 59, 0, 50, 550);
  circle(x_second2, 320,40);

  // triangle values
  // assign value to x_hour3 using map()
  x_hour3 = map(hour(), 0, 23, 50, 550);
  triangle(x_hour3, 20, 50, 180, 80, 150);
  // assign value to x_minute3 using map() 
  x_minute3 = map(minute(), 0, 59, 50, 550);
  triangle(x_minute3, 20, 50, 180, 80, 150);
  // assign value to x_second3 using map()
  x_second3 = map(second(), 0, 59, 50, 550);
  triangle(x_second3, 20, 50, 180, 80, 150);

  x_hour4 = map(hour(), 23, 0, 50, 550);
  triangle(x_hour4, 500, 550, 340, 520, 375);
  x_minute4 = map(minute(), 59, 0, 50, 550);
  triangle(x_minute4, 500, 550, 340, 520, 375);
  x_second4 = map(second(), 59, 0, 50, 550);
  triangle(x_second4, 500, 550, 340, 520, 375);
  pop();

}