let x = 0;
let y = 0;
let xspeed = 4;
let yspeed = 4;

function setup() {
  createCanvas(800, 500);
}

function draw() {
  background(220);


  translate(width / 2, height / 2);
  stroke(random(255), random(255), random(255));
  strokeWeight(5);
  line(x,y,80,70);

  if (x > 300 | x < -200){
    xspeed = - xspeed;
  }

  if (y > 200 | y < -150){
    yspeed = - yspeed;
  }

  x += xspeed;
  y += yspeed;
}