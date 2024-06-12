
let grammar = tracery.createGrammar({
"origin":["A HOUSE OF #material#"],
"material":["STICKS","PLASTIC","RUBBER","FOAM","PAPER",
            "PAINT","OIL","WATER","INK","GLASS","GRASS",
            "LINEN","WOOD","TAPE","METHANE","WAX","SILICONE"]
//"placement":["IN A CABIN","IN THE MIDDLE OF NOWHERE","ON A MOUNTAIN"]
//"conducting":[]
//"whom":[]

});

let poem = grammar.flatten('#origin#');

function setup() {
  createCanvas(800, 800);
  frameRate(0.40);
  noLoop();
}

function draw() {
  background(220);
  poem = grammar.flatten("#origin#");
  textFont("courier new");
  textSize(40);
  text(poem,50,150);
}