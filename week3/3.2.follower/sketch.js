let debug = true
let x = 0;
let y = 0;
let d = 0;
let score = 0
let speedfactor = 6;
let speedx = speedfactor;
let speedy = speedfactor;
let goalx = 0;
let goaly = 0;
let goalSize = 40;

function preload(){
  img = loadImage('https://johnmabry3.github.io/creative-coding-1/week3/3.2.follower/Flash.jpg')
  //img = loadImage('https://johnmabry3.github.io/creative-coding-1/week3/3.2.follower/Pacman.jpg')

}

function setup() {
  createCanvas(800, 800);


  x = random(0, width);
  y = random(0, height);

  // initial goal position
  goalx = random(width);
  goaly = random(height);
}


function draw() {
  background('yellow');

  // image position
  translate(0,0);
  image(img,0,0,800,800);

  // goal position and size
  circle(goalx,goaly,goalSize,goalSize);

  // distance formula
  d = sqrt((x - mouseX)**2 + (y - mouseY)**2);

  // add movement
  x += speedx;
  y += speedy;

  // draw an ellipse chasing the mouse pointer
  ellipse(x,y,10);
  

  if (mouseX > x){
    // move to the right
    speedx = speedfactor

  }else{
    // move to the left
    speedx = - speedfactor
  }

  if (mouseY > y){
    // move up
    speedy = speedfactor

  }else{
    // move down
    speedy = - speedfactor
  }

  // check for collision with chaser
  if (d < 20){
    score -= 1
    x = random(width);
    y = random(height);  
  }

  // checking for collision with circle
  if (
    mouseX > goalx &
    mouseX < goalx + goalSize &
    mouseY > goaly &
    mouseY < goaly + goalSize
    ){
    score += 1;

    // randomizing next chaser position
    x = random(width);
    y = random(height);

    // randomizing next goal position
    goalx = random(width);
    goaly = random(height);
  }

if (debug){
  textSize(30);
  //text("mouseX: " + mouseX, 50, 40); 
  //text("mouseY: " + mouseY, 50, 70);
  //text("x: " + x, 50, 100);
  //text("y: " + y, 50, 130);
  //text("d: " + d, 50, 160);
  text("Your Score:" + score, 300, 80);


  }
}