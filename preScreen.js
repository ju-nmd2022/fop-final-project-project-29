let bg = loadImage("./TrackyTokyo.png");

createCanvas(1200, 900);

function startButton() {
  let button;
  button = createButton("START");
  button.size(150, 80);
  button.position(10, 10);
  button.style("font-family", "Verdana");
  button.style("font-size", "36px");
}

function draw() {
  background(bg);
  startButton();
}
