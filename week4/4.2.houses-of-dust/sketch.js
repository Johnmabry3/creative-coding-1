
let grammar = tracery.createGrammar({
"origin":["A HOUSE OF #material#\n#place#\nUSING #light_source#\nINHABITED BY #inhabitants#"],
"material":["STICKS","PLASTIC","RUBBER","FOAM","PAPER","PAINT","OIL","WATER","INK","GLASS","GRASS","LINEN","WOOD","TAPE","METHANE","WAX","SILICONE"],
"place":["IN A CABIN","IN THE MIDDLE OF NOWHERE","ON A MOUNTAIN","IN A WINTER PINE FOREST","ON A BEACHFRONT","ON THE HORIZON","ON CAPITOL HILL","ON A DESERTED ISLAND","IN A FACTORY","ON A FARM","ON THE MOON","IN WASHINGTON D.C."],
"light_source":["EVERY PIECE OF COAL","SUNLIGHT","CANDLELIGHT","LED LIGHTING","ELECTRICTY","GASLIGHTING"],
"inhabitants":["STRANGERS","ENEMIES","MAGICIANS AND SORCERERS","OIL COMPANIES","ALL OF MANKIND","ASTRONAUTS","ARCHITECTS","GREEDY PEOPLE"],

});

function setup() {
  createCanvas(800, 800);
  frameRate(0.15);
}

function draw() {
  background(220);
  poem = grammar.flatten("#origin#");
  textFont("courier new");
  textSize(32);
  strokeWeight(1);
  stroke(1);
  text(poem,50,150);
}