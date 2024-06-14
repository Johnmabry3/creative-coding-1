
// create markov model
let rm = RiTa.markov(4);

// find data
let data = document.getElementById("source").innerText;

// training the model
rm.addText(data);



//function preload() {
  //result = loadStrings('');
//}

function setup(){

	// generate # of sentences
	let lines = rm.generate(10);

	// finding the corresponding letter DIV
	let letter = select("#letter");

	// add greeting
	letter.child( createP("Dear Sallie,"));

	for (let l = 0; l < lines.length; l++){
		letter.child(
			createP( lines[l] )
			);
	}

	// add a complimentary closing
	letter.child( createP("Yours Truly, <br>Johnny"));


}

function mousePressed(){
	letter.remove();
	letter = createDiv();
	letter.id("letter");
	setup();
}