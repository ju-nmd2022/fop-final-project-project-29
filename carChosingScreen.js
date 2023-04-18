let bgCHoseScreen = loadImage("./garage.png");
//bmw
let blueBmw = loadImage("bmw-45view/bmw-blue.png");
let greenBmw = loadImage("bmw-45view/bmw-green.png");
let greyBmw = loadImage("bmw-45view/bmw-grey.png");
let orangeBmw = loadImage("bmw-45view/bmw-orange.png");
let pinkBmw = loadImage("bmw-45view/bmw-pink.png");
let purpleBmw = loadImage("bmw-45view/bmw-purple.png");
let redBmw = loadImage("bmw-45view/bmw-red.png");
let whiteBmw = loadImage("bmw-45view/bmw-white.png");
let yellowBmw = loadImage("bmw-45view/bmw-yellow.png");
//rx7
let blueRx7 = loadImage("rx7-45view/rx7-blue.png");
let greenRx7 = loadImage("rx7-45view/rx7-green.png");
let greyRx7 = loadImage("rx7-45view/rx7-grey.png");
let orangeRx7 = loadImage("rx7-45view/rx7-orange.png");
let pinkRx7 = loadImage("rx7-45view/rx7-pink.png");
let purpleRx7 = loadImage("rx7-45view/rx7-purple.png");
let redRx7 = loadImage("rx7-45view/rx7-red.png");
let whiteRx7 = loadImage("rx7-45view/rx7-white.png");
let yellowRx7 = loadImage("rx7-45view/rx7-yellow.png");
//supra
let blueSupra = loadImage("supra-45view/Supra-light-blue.png");
let greenSupra = loadImage("supra-45view/Supra-green.png");
let greySupra = loadImage("supra-45view/Supra-black.png");
let orangeSupra = loadImage("supra-45view/Supra-orange.png");
let pinkSupra = loadImage("supra-45view/Supra-pink.png");
let purpleSupra = loadImage("supra-45view/Supra-purple.png");
let redSupra = loadImage("supra-45view/Supra-red.png");
let whiteSupra = loadImage("supra-45view/Supra-white.png");
let yellowSupra = loadImage("supra-45view/Supra-yellow.png");

createCanvas(1200, 900);

let carColors = {
  green: color("#00FF00"),
  blue: color("#00FFFF"),
  red: color("#FF0000"),
  black: color("#262626"),
  yellow: color("#ddd312"),
  pink: color("#ed11a4"),
  purple: color("#7125ba"),
  white: color("#e5e5e5"),
  orange: color("#d96d25"),
};

/* let coloredCar = {
    green: 
} */

function headline() {
  fill(255);
  textFont("verdana");
  textStyle(BOLD);
  textSize(55);
  text("Chose Your Car", 420, 75);
}

function colorBoxes() {
  push();
  fill(0, 0, 0, 80);
  rect(125, 675, 540, 180);
  pop();
  noStroke();
  fill(carColors.red);
  rect(210, 700, 50, 50, 10);
  fill(carColors.green);
  rect(290, 700, 50, 50, 10);
  fill(carColors.blue);
  rect(370, 700, 50, 50, 10);
  fill(carColors.black);
  rect(450, 700, 50, 50, 10);
  fill(carColors.yellow);
  rect(530, 700, 50, 50, 10);
  fill(carColors.pink);
  rect(210, 780, 50, 50, 10);
  fill(carColors.purple);
  rect(290, 780, 50, 50, 10);
  fill(carColors.white);
  rect(370, 780, 50, 50, 10);
  fill(carColors.orange);
  rect(450, 780, 50, 50, 10);
  fill(carColors.black);
  rect(530, 780, 50, 50, 10);
  push();
  textSize(40);
  fill("#00c5c5");
  stroke("#ec008c");
  strokeWeight(4);
  text("?", 543, 819);
  pop();
}

let currentCar = "bmw";
let currentColor = "white";

function selectCar(currentCar) {
  fill(0, 0, 0, 80);
  rect(817, 176, 355, 590);
  image(whiteBmw, 855, 222, 277, 118);
  image(whiteRx7, 855, 400, 289, 123);
  image(whiteSupra, 855, 575, 289, 123);
  //big car
  if (currentCar === "bmw") {
    image(whiteBmw, 80, 340, 647, 276);
  } else if (currentCar === "rx7") {
    image(whiteRx7, 80, 340, 647, 276);
  } else if (currentCar === "supra") {
    image(whiteSupra, 80, 340, 647, 276);
  }
}

function draw() {
  background(bgCHoseScreen);
  headline();

  if (
    mouseIsPressed &&
    mouseX > 861 &&
    mouseX < 1133 &&
    mouseY > 222 &&
    mouseY < 339
  ) {
    currentCar = "bmw";
    console.log(currentCar);
  } else if (
    mouseIsPressed &&
    mouseX > 849 &&
    mouseY < 1147 &&
    mouseY > 395 &&
    mouseY < 518
  ) {
    currentCar = "rx7";
    console.log(currentCar);
  } else if (
    mouseIsPressed &&
    mouseX > 853 &&
    mouseX < 1148 &&
    mouseY > 569 &&
    mouseY < 701
  ) {
    currentCar = "supra";
    console.log(currentCar);
  }
  selectCar(currentCar);
  colorBoxes();
}
/* function mouseClicked() {
  console.log("click for bmw");
} */
