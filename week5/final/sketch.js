
let bg;

// size of brightness/color information = noise
const noiseScale = 0.005;

// assortment of colors
const colors = [
  "#50654D",
  "#9C9177",
  "#655949",
  "#313831",
  ];

// direction and movement of scan
let y = 0;
let dir = 1;


// create canvas
function setup() {
  createCanvas(800, 800);
  bg = createGraphics(width,height);

  createBG();
}

// image drawn on canvas
function draw() {      
  image(bg, 0,0,width,height);

  // transparency of the line drawing
  strokeWeight(3);

  // lines drawn on canvas
  for(let x = 0; x < width; x ++) {
    const c = get(x,y);
    stroke(c);
    line(x,y,x,height);

  }
  // animation of lines to go down and up continously
  y += dir;
  if(y <= 0 || y > height) {
    dir *= -1;
  }
}



// thickness of bands which equates to the amount of separations between colors
function createBG() {
  const numBands = 256;

  // creation of pixels on the canvas
  for (let i = 0; i < bg.width; i ++) {
    for (let j = 0; j < bg.height; j ++) {

      // noise value
      const n = noise(i * noiseScale, j * noiseScale);

      // number of bands for your color values
      const band = int(n * numBands);
      const color = band % colors.length;

      // coloring the strokes and points of bands
      bg.stroke(colors[color]);
      bg.point(i,j);
      


    }
  }
}