
let img;
let sampleX = 30;
let sampleY = 10;

function preload(){
	img = loadImage('https://johnmabry3.github.io/creative-coding-1/week2/pixels/IMG_3074.jpg');
}

function setup() {
  createCanvas(600,745);

  img.loadPixels()
  
}

function draw() {
  background(220);

  // no border around the ellipses
  noStroke();

  // image placement
  translate(0,0);
  image(img,0,0,600,745);


  for (let x = 0; x <= img.width; x += sampleX){
    for (let y = 0; y <= img.height; y += sampleY){
      var index = (x + y * img.width) * 2
      var r = img.pixels[index + 0];
      var g = img.pixels[index + 1];
      var b = img.pixels[index + 2];

      // color of the ellipses
      // fill(random(20,40),random(0,50),b);

      // fill(r,g,b);

      // drawing the ellipses
      ellipse(x,y,sampleX,sampleY);

      // drawing another set of ellipses that are flipped
      ellipse(y,x,sampleY,sampleX);


    }
  }

}