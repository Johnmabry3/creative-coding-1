let line_size = 35;
let columns = 20;
let rows = 20;
let cushion = 5;

function setup() {
  createCanvas(800, 800);
  noLoop();
}

function draw() {
  background(242,242,230);

  // line framing
  translate(50,40);


  for (let x = 0; x < line_size * columns; x += line_size){
    for (let y = 0; y < line_size * rows; y += line_size){

        push();
        translate(x,y);

        // line thickness
        strokeWeight(7);

        // line color
        stroke( random(20,185), 45, random(0,95)); 


        // line positions
        let x_offset = random(-38,95);
        let y_offset = random(-105,80);

        let y_shift = map(y,0,rows * line_size,0, y_offset);
        let x_shift = map(x,0, columns * line_size,0, x_offset);

        // drawing of the lines
        line(x_shift, y_shift, line_size - cushion, line_size - cushion);

        line(x_shift, y_shift, line_size + cushion, line_size + cushion);

        line(x_shift, y_shift, line_size - cushion, line_size - cushion);

        line(x_shift, y_shift, line_size + cushion, line_size + cushion);

        line(25,60,35,25);
        pop();


    }


  }
}