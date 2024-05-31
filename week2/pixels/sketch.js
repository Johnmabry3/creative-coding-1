
let img;
let sampleX = 20;
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

  noStroke();

  translate(0,0);
  image(img,0,0,600,745);

  for (let x = 0; x <= img.width; x += sampleX){
    for (let y = 0; y <= img.height; y += sampleY){
      var index = (x + y * img.width) * 2
      var r = img.pixels[index + 0];
      var g = img.pixels[index + 1];
      var b = img.pixels[index + 2];

      fill(random(0,20),random(0,20),b);
      //fill(r,g,b);
      ellipse(x,y,sampleX,sampleY);

    }
  }


}