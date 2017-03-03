//original code from:http://creative-coding.decontextualize.com/text-and-type/
//edited by Kiki Woo Feb2017

var sourceText = "Don't take everything for granted";
function setup() {
  createCanvas(500, 500);
  frameRate(10);
}
function draw() {
  background(232,149,35);
  fill(255);
  textSize(20);
  textAlign(CENTER, CENTER);
  var middle = sourceText.length / 2;
  var left = middle - ((mouseX / width) * middle);
  var right = middle + ((mouseX / width) * middle);
  text(
    sourceText.substring(left, right+1),
    width/2, height/2);
}