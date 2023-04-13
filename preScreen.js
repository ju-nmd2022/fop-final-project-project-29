let bg = loadImage("./TrackyTokyo.png");

createCanvas(1200, 900);

function startButton() {
  let button;
  button = createButton("START");
  button.size(160, 80);
  button.position(width / 2 - 80, 800);
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
