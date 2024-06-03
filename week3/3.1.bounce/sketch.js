let x = 0;
let y = 0;
let xspeed = 4;
let yspeed = 4;


function setup() {
  createCanvas(400, 300);
  fill("white");
  background('black');
}

function draw() {

  // initial position of rectangle 
  translate(width / 2, height / 2);

  // drawing the rectangle
  rect(x,y,60);

  // initial position of triangle
  translate(width / 12, height / 12);

  // drawing the triangle
  triangle(x,y,70,x,y,50);

  // initial position of line
  translate(width / 6, height / 6);

  // drawing the line
  line(x,y,80,70);


  // where the rectangle moves on the x-axis
  if (x > 145 | x < -200){
    xspeed = - xspeed;

    // change of background colors when the rectangle hits the left and right of canvas
    background(random(255),random(255),random(255));
 
  }

  // where the rectangle moves on the y-axis
  if (y > 95 | y < -150){
    yspeed = - yspeed;

    // change of background colors when the rectangle hits the top and bottom of canvas
    background(random(255),random(255),random(255));

  }

  // continuous speed of rectangle across x and y axis
  x += xspeed;
  y += yspeed;
  
}