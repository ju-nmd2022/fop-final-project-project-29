let bg = loadImage("./TrackyTokyo.png");
function setUp() {
  createCanvas(1200, 900);
}

function startButton() {
  let button;
  button = createButton("BOOP!");
  button.size(200, 100);
  button.position(10, 10);
  button.style("font-family", "Bodoni");
  button.style("font-size", "48px");
}

function draw() {
  background(bg);
}
