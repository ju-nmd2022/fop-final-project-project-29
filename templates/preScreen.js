let bg = loadImage("./preview.png");

createCanvas(1200, 900);

function startButton() {
  let button;
  button = createButton("START");
  button.size(200, 80);
  button.position(540, 600);
  button.style("font-family", "Verdana");
  button.style("font-size", "30px");
  button.style("color: #ffffff");
  button.style("border-radius: 30px");
  button.style("border: 5px outset");
  button.style("border-color: #FFFFFF");
  button.style("background-color: #ec008c");
}

function draw() {
  background(bg);
  startButton();
}
