let x = 0;
let y = 0;
let xspeed = 4;
let yspeed = 4;


function setup() {
  createCanvas(400, 300);
  fill("green");
}

function draw() {
  background(220);
  

  translate(width / 2, height / 2);

  rect(x,y,55);


  if (x > 145 | x < -200){
    xspeed = - xspeed;
    fill(random(255),random(255),random(255));
  }

  if (y > 95 | y < -150){
    yspeed = - yspeed;
    fill(random(255),random(255),random(255));
  }

  x += xspeed;
  y += yspeed;
  
}