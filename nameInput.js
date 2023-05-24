function setup() {
  createCanvas(900, 712);
}

function nameInput() {
  fill(240);
  stroke(0, 197, 197);
  strokeWeight(15);

  rect(200, 180, 550, 300, 50);

  fill(236, 0, 140);
  stroke(236, 0, 140);
  strokeWeight(2);
  textSize(55);
  text("What's your name?", 237, 300);

  let inp = createInput("");
  inp.position(380, 400);
  inp.size(200);
  inp.input(myInputEvent);
}

function myInputEvent() {
    // add here the saving for the name, I think
  console.log("you are typing: ", this.value());
}

function enterButton() {
  fill(240);
  stroke(0, 197, 197);
  strokeWeight(15);

  rect(340, 550, 250, 120, 40);

  fill(236, 0, 140);
  stroke(236, 0, 140);
  strokeWeight(1);
  textSize(50);
  text("Done", 404, 628);

  if (
    mouseX >= 340 &&
    mouseX <= 340 + 250 &&
    mouseY >= 550 &&
    mouseY <= 550 + 120
  ) {
    if (mapSelected === "suburban") {
      currentScreen = "suburbanMap";
    } else if (mapSelected === "city") {
      currentScreen = "cityMap";
    }
  }
}

function draw() {
  nameInput();
  enterButton();
}
