function setup() {
  createCanvas(1425, 1425);
  noLoop();
}

function draw() {
  background(220);


  // push the grid out of the corner
  translate(80,80);

  for (let x = 0; x < 8; x += 1){
    for (let y = 0; y < 8; y +=1){
      push();

      // move the drawing plan to
      // add a new circle
      translate(x * 160, y * 160);

      // line thickness
      strokeWeight( random(1,8) );

      // line color
      stroke(random(0,255),255,72);

      // fill color
      fill(28,random(0,185),80);

      // draw the quad
      quad(0,0,60,124,172,100,100,140,28,100);

      pop();
    }
  }
}