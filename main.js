let carColors;
function setup() {
  window.createCanvas(950, 712);
  frameRate(30);
  carColors = {
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
  carRotation = PI;
}
let preBg;
let startBg;
let carStartImg;
let logo;
let bgChooseScreen;
let blueBmw;
let greenBmw;
let blackBmw;
let orangeBmw;
let pinkBmw;
let purpleBmw;
let redBmw;
let whiteBmw;
let yellowBmw;
let blueRx7;
let greenRx7;
let blackRx7;
let orangeRx7;
let pinkRx7;
let purpleRx7;
let redRx7;
let whiteRx7;
let yellowRx7;
let blueSupra;
let greenSupra;
let blackSupra;
let orangeSupra;
let pinkSupra;
let purpleSupra;
let redSupra;
let whiteSupra;
let yellowSupra;
let backgroundImageCity;
let backgroundImageSub;
let mapSelectBg;
let tokyoCityImg;

function preload() {
  /* pre screen */
  preBg = loadImage("./preview.png");
  /* start screen */
  startBg = loadImage("./opt3.jpeg");
  carStartImg = loadImage("bmw-45view/bmw-blue.png");
  logo = loadImage("logo.png");
  /* car choose screen */
  bgChooseScreen = loadImage("./garage.png");
  //bmw
  blueBmw = loadImage("bmw-45view/bmw-blue.png");
  greenBmw = loadImage("bmw-45view/bmw-green.png");
  blackBmw = loadImage("bmw-45view/bmw-grey.png");
  orangeBmw = loadImage("bmw-45view/bmw-orange.png");
  pinkBmw = loadImage("bmw-45view/bmw-pink.png");
  purpleBmw = loadImage("bmw-45view/bmw-purple.png");
  redBmw = loadImage("bmw-45view/bmw-red.png");
  whiteBmw = loadImage("bmw-45view/bmw-white.png");
  yellowBmw = loadImage("bmw-45view/bmw-yellow.png");
  //rx7
  blueRx7 = loadImage("rx7-45view/rx7-blue.png");
  greenRx7 = loadImage("rx7-45view/rx7-green.png");
  blackRx7 = loadImage("rx7-45view/rx7-grey.png");
  orangeRx7 = loadImage("rx7-45view/rx7-orange.png");
  pinkRx7 = loadImage("rx7-45view/rx7-pink.png");
  purpleRx7 = loadImage("rx7-45view/rx7-purple.png");
  redRx7 = loadImage("rx7-45view/rx7-red.png");
  whiteRx7 = loadImage("rx7-45view/rx7-white.png");
  yellowRx7 = loadImage("rx7-45view/rx7-yellow.png");
  //supra
  blueSupra = loadImage("supra-45view/Supra-light-blue.png");
  greenSupra = loadImage("supra-45view/Supra-green.png");
  blackSupra = loadImage("supra-45view/Supra-black.png");
  orangeSupra = loadImage("supra-45view/Supra-orange.png");
  pinkSupra = loadImage("supra-45view/Supra-pink.png");
  purpleSupra = loadImage("supra-45view/Supra-purple.png");
  redSupra = loadImage("supra-45view/Supra-red.png");
  whiteSupra = loadImage("supra-45view/Supra-white.png");
  yellowSupra = loadImage("supra-45view/Supra-yellow.png");
  // Load the initial background image for City
  backgroundImageCity = loadImage("map-city/cityMap1.png");
  // Load the initial background image for Suburban
  backgroundImageSub = loadImage("suburbanMap/SuburbanMap-9.png");
  /* map select screen */
  mapSelectBg = loadImage("asphalt.jpeg");
  tokyoCityImg = "url('logo.png')";
}

let currentScreen = "startScreen";

/* content of pre screen */
let buttonStart = null;
function startButton() {
  //The following 3 lines of code were made with the help of a teaching assistent
  if (buttonStart != null) {
    buttonStart.remove();
  }
  buttonStart = createButton("START");
  buttonStart.size(200, 80);
  buttonStart.position(windowWidth / 2 - 100, 600);
  buttonStart.style("font-family", "Verdana");
  buttonStart.style("font-size", "30px");
  buttonStart.style("color: #ffffff");
  buttonStart.style("border-radius: 30px");
  buttonStart.style("border: 5px outset");
  buttonStart.style("border-color: #FFFFFF");
  buttonStart.style("background-color: #ec008c");
}

function changeToStartScreen() {
  currentScreen = "startScreen";

  buttonStart.remove();
}

function preScreen() {
  background(preBg);
  startButton();
  buttonStart.mousePressed(changeToStartScreen);
}

let buttonPlay = null;
/* content of start screen */
function playButton() {
  if (buttonPlay != null) {
    buttonPlay.remove();
  }
  buttonPlay = createButton("START");
  buttonPlay.size(250, 120);
  buttonPlay.style("borderRadius", "30px");
  buttonPlay.position(windowWidth / 2 + 200, 320);
  buttonPlay.style("font-family", "Verdana");
  buttonPlay.style("font-size", "42px");
  buttonPlay.style("background-color", "#ec008c");
  buttonPlay.style("border-width", "5px");
  buttonPlay.style("border-color", "#ffffff");
  buttonPlay.style("color", "#ffffff");
  buttonPlay.style("border-style", "outset");
}

let buttonCarCustom = null;
function carCustomButton() {
  if (buttonCarCustom != null) {
    buttonCarCustom.remove();
  }
  buttonCarCustom = createButton("Customize Car");
  buttonCarCustom.size(250, 60);
  buttonCarCustom.style("borderRadius", "20px");
  buttonCarCustom.position(windowWidth / 2 + 200, 520);
  buttonCarCustom.style("font-family", "Verdana");
  buttonCarCustom.style("font-size", "24px");
  buttonCarCustom.style("background-color", "#00C5C5");
  buttonCarCustom.style("border-width", "5px");
  buttonCarCustom.style("border-color", "#ffffff");
  buttonCarCustom.style("color", "#ffffff");
  buttonCarCustom.style("border-style", "outset");
}

let buttonMapCustom = null;
function mapCustomButton() {
  if (buttonMapCustom != null) {
    buttonMapCustom.remove();
  }
  buttonMapCustom = createButton("Change Map");
  buttonMapCustom.size(250, 60);
  buttonMapCustom.style("borderRadius", "20px");
  buttonMapCustom.position(windowWidth / 2 + 200, 590);
  buttonMapCustom.style("font-family", "Verdana");
  buttonMapCustom.style("font-size", "24px");
  buttonMapCustom.style("background-color", "#00C5C5");
  buttonMapCustom.style("border-width", "5px");
  buttonMapCustom.style("border-color", "#ffffff");
  buttonMapCustom.style("color", "#ffffff");
  buttonMapCustom.style("border-style", "outset");
}

function changeToCarSelection() {
  currentScreen = "carSelection";

  buttonCarCustom.remove();
  buttonMapCustom.remove();
  buttonPlay.remove();
}

function changeToMapSelection() {
  currentScreen = "mapSelection";

  buttonCarCustom.remove();
  buttonMapCustom.remove();
  buttonPlay.remove();
}

function startGame() {
  if (mapSelected === "suburban") {
    currentScreen = "suburbanMap";
  } else if (mapSelected === "city") {
    currentScreen = "cityMap";
  }
  buttonCarCustom.remove();
  buttonMapCustom.remove();
  buttonPlay.remove();
}

function startScreen() {
  //https://p5js.org/examples/image-background-image.html
  background(startBg);
  image(carStartImg, 50, 450, 600, 248);
  image(logo, 0, 0, 700, 450);

  //play button
  playButton();
  carCustomButton();
  mapCustomButton();

  buttonPlay.mousePressed(startGame);
  buttonCarCustom.mousePressed(changeToCarSelection);
  buttonMapCustom.mousePressed(changeToMapSelection);
}

/* content for car slection */

function headline() {
  fill(255);
  textFont("verdana");
  textStyle(BOLD);
  textSize(55);
  text("Chose Your Car", 245, 75);
}

let buttonBack = null;
function backButton() {
  if (buttonBack != null) {
    buttonBack.remove();
  }
  buttonBack = createButton("BACK");
  buttonBack.size(130, 60);
  buttonBack.position(windowWidth / 2 - 450, 130);
  buttonBack.style("font-family", "Verdana");
  buttonBack.style("font-size", "27px");
  buttonBack.style("color: #ffffff");
  buttonBack.style("border-radius: 30px");
  buttonBack.style("border: 5px outset");
  buttonBack.style("border-color: #FFFFFF");
  buttonBack.style("background-color: #bd0271");
}

function backToStartScreen() {
  currentScreen = "startScreen";

  buttonBack.remove();
}

function colorBoxes() {
  push();
  fill(0, 0, 0, 80);
  rect(70, 515, 540, 160);
  pop();
  noStroke();
  fill(carColors.red);
  rect(150, 530, 50, 50, 10);
  fill(carColors.green);
  rect(230, 530, 50, 50, 10);
  fill(carColors.blue);
  rect(310, 530, 50, 50, 10);
  fill(carColors.black);
  rect(390, 530, 50, 50, 10);
  fill(carColors.yellow);
  rect(470, 530, 50, 50, 10);
  fill(carColors.pink);
  rect(150, 610, 50, 50, 10);
  fill(carColors.purple);
  rect(230, 610, 50, 50, 10);
  fill(carColors.white);
  rect(310, 610, 50, 50, 10);
  fill(carColors.orange);
  rect(390, 610, 50, 50, 10);
  fill(carColors.black);
  rect(470, 610, 50, 50, 10);
  push();
  textSize(40);
  fill("#00c5c5");
  stroke("#ec008c");
  strokeWeight(4);
  text("?", 484, 650);
  pop();
}
let currentCar = "bmw";
let currentColor = "white";
function selectCar(currentCar) {
  fill(0, 0, 0, 80);
  rect(675, 176, 260, 500);
  image(whiteBmw, 695, 202, 222, 94);
  image(whiteRx7, 695, 380, 222, 94);
  image(whiteSupra, 695, 555, 222, 94);
  //big car
  if (currentCar === "bmw") {
    image(whiteBmw, 80, 260, 517, 220);
  } else if (currentCar === "rx7") {
    image(whiteRx7, 80, 260, 517, 220);
  } else if (currentCar === "supra") {
    image(whiteSupra, 80, 260, 517, 220);
  }
}
//the following 4 lines of code were done with the help of ChatGPT
function selectRandomColor(obj) {
  let keys = Object.keys(obj);
  return keys[Math.floor(Math.random() * keys.length)];
}
function selectColor(currentCar, currentColor) {
  if (currentCar === "bmw") {
    if (currentColor === "red") {
      image(redBmw, 80, 260, 517, 220);
    } else if (currentColor === "green") {
      image(greenBmw, 80, 260, 517, 220);
    } else if (currentColor === "blue") {
      image(blueBmw, 80, 260, 517, 220);
    } else if (currentColor === "black") {
      image(blackBmw, 80, 260, 517, 220);
    } else if (currentColor === "yellow") {
      image(yellowBmw, 80, 260, 517, 220);
    } else if (currentColor === "pink") {
      image(pinkBmw, 80, 260, 517, 220);
    } else if (currentColor === "purple") {
      image(purpleBmw, 80, 260, 517, 220);
    } else if (currentColor === "white") {
      image(whiteBmw, 80, 260, 517, 220);
    } else if (currentColor === "orange") {
      image(orangeBmw, 80, 260, 517, 220);
    }
  } else if (currentCar === "rx7") {
    if (currentColor === "red") {
      image(redRx7, 80, 260, 517, 220);
    } else if (currentColor === "green") {
      image(greenRx7, 80, 260, 517, 220);
    } else if (currentColor === "blue") {
      image(blueRx7, 80, 260, 517, 220);
    } else if (currentColor === "black") {
      image(blackRx7, 80, 260, 517, 220);
    } else if (currentColor === "yellow") {
      image(yellowRx7, 80, 260, 517, 220);
    } else if (currentColor === "pink") {
      image(pinkRx7, 80, 260, 517, 220);
    } else if (currentColor === "purple") {
      image(purpleRx7, 80, 260, 517, 220);
    } else if (currentColor === "white") {
      image(whiteRx7, 80, 260, 517, 220);
    } else if (currentColor === "orange") {
      image(orangeRx7, 80, 260, 517, 220);
    }
  } else if (currentCar === "supra") {
    if (currentColor === "red") {
      image(redSupra, 80, 260, 517, 220);
    } else if (currentColor === "green") {
      image(greenSupra, 80, 260, 517, 220);
    } else if (currentColor === "blue") {
      image(blueSupra, 80, 260, 517, 220);
    } else if (currentColor === "black") {
      image(blackSupra, 80, 260, 517, 220);
    } else if (currentColor === "yellow") {
      image(yellowSupra, 80, 260, 517, 220);
    } else if (currentColor === "pink") {
      image(pinkSupra, 80, 260, 517, 220);
    } else if (currentColor === "purple") {
      image(purpleSupra, 80, 260, 517, 220);
    } else if (currentColor === "white") {
      image(whiteSupra, 80, 260, 517, 220);
    } else if (currentColor === "orange") {
      image(orangeSupra, 80, 260, 517, 220);
    }
  }
}
function carSelection() {
  background(bgChooseScreen);
  headline();
  backButton();
  colorBoxes();
  buttonBack.mousePressed(backToStartScreen);
  //section for choosing car
  if (
    mouseIsPressed &&
    mouseX > 695 &&
    mouseX < 917 &&
    mouseY > 202 &&
    mouseY < 296
  ) {
    currentCar = "bmw";
  } else if (
    mouseIsPressed &&
    mouseX > 695 &&
    mouseY < 917 &&
    mouseY > 380 &&
    mouseY < 474
  ) {
    currentCar = "rx7";
  } else if (
    mouseIsPressed &&
    mouseX > 695 &&
    mouseX < 917 &&
    mouseY > 555 &&
    mouseY < 649
  ) {
    currentCar = "supra";
  }
  selectCar(currentCar);
  //section for choosing color
  if (
    mouseIsPressed &&
    mouseX > 150 &&
    mouseX < 200 &&
    mouseY > 530 &&
    mouseY < 580
  ) {
    currentColor = "red";
  } else if (
    mouseIsPressed &&
    mouseX > 230 &&
    mouseX < 280 &&
    mouseY > 530 &&
    mouseY < 580
  ) {
    currentColor = "green";
  } else if (
    mouseIsPressed &&
    mouseX > 310 &&
    mouseX < 360 &&
    mouseY > 530 &&
    mouseY < 580
  ) {
    currentColor = "blue";
  } else if (
    mouseIsPressed &&
    mouseX > 390 &&
    mouseX < 440 &&
    mouseY > 530 &&
    mouseY < 580
  ) {
    currentColor = "black";
  } else if (
    mouseIsPressed &&
    mouseX > 470 &&
    mouseX < 520 &&
    mouseY > 530 &&
    mouseY < 580
  ) {
    currentColor = "yellow";
  } else if (
    mouseIsPressed &&
    mouseX > 150 &&
    mouseX < 200 &&
    mouseY > 610 &&
    mouseY < 660
  ) {
    currentColor = "pink";
  } else if (
    mouseIsPressed &&
    mouseX > 230 &&
    mouseX < 280 &&
    mouseY > 610 &&
    mouseY < 660
  ) {
    currentColor = "purple";
  } else if (
    mouseIsPressed &&
    mouseX > 310 &&
    mouseX < 360 &&
    mouseY > 610 &&
    mouseY < 660
  ) {
    currentColor = "white";
  } else if (
    mouseIsPressed &&
    mouseX > 390 &&
    mouseX < 440 &&
    mouseY > 610 &&
    mouseY < 660
  ) {
    currentColor = "orange";
  } else if (
    mouseIsPressed &&
    mouseX > 470 &&
    mouseX < 520 &&
    mouseY > 610 &&
    mouseY < 660
  ) {
    selectRandomColor(carColors);
    //the following 2 lines of code were done with the help of ChatGPT
    let randomColor = selectRandomColor(carColors);
    let randomColorStr = String(randomColor);
    currentColor = randomColorStr;
  }

  selectColor(currentCar, currentColor);
}

/* content for map selection */

let mapIsChosen = false;
let doneGoBack = false;
let buttonCity = null;
let mapSelected = "";
function cityMapButton() {
  if (buttonCity != null) {
    buttonCity.remove();
  }
  buttonCity = createButton("Tokyo City");
  buttonCity.size(400, 300);
  buttonCity.style("borderRadius", "30px");
  buttonCity.position(windowWidth / 2 + 20, 200);
  buttonCity.style("font-family", "Verdana");
  buttonCity.style("font-size", "42px");
  buttonCity.style("background-color", "#ec008c");
  buttonCity.style("border-width", "5px");
  buttonCity.style("border-color", "#ffffff");
  buttonCity.style("color", "#ffffff");
  buttonCity.style("border-style", "outset");
  if (
    mouseIsPressed &&
    mouseX > 130 &&
    mouseX < 527 &&
    mouseY > 230 &&
    mouseY < 525
  ) {
    mapIsChosen = true;
    console.log("ok");
  }
  buttonCity.mouseOver(function () {
    buttonCity.style("background-color", "transparent");
    buttonCity.style("background-image", "url('map-city/cityMap1.png')");
    buttonCity.style("background-repeat", "no-repeat");
    buttonCity.style("background-size", "cover");
  });
  buttonCity.mousePressed(function () {
    mapSelected = "city";
    //add localstorage function
  });
  buttonCity.mouseOut(function () {
    buttonCity.style("background-color", "#ec008c");
  });
}

let buttonSuburban = null;
function suburbanMapButton() {
  if (buttonSuburban != null) {
    buttonSuburban.remove();
  }
  buttonSuburban = createButton("Suburbs");
  buttonSuburban.size(400, 300);
  buttonSuburban.style("borderRadius", "30px");
  buttonSuburban.position(windowWidth / 2 - 420, 200);
  buttonSuburban.style("font-family", "Verdana");
  buttonSuburban.style("font-size", "42px");
  buttonSuburban.style("background-color", "#ec008c");
  buttonSuburban.style("width", "400px");
  buttonSuburban.style("height", "300px");
  buttonSuburban.style("border-width", "5px");
  buttonSuburban.style("border-color", "#ffffff");
  buttonSuburban.style("color", "#ffffff");
  buttonSuburban.style("border-style", "outset");
  if (
    mouseIsPressed &&
    mouseX > 660 &&
    mouseX < 1080 &&
    mouseY > 230 &&
    mouseY < 525
  ) {
    mapIsChosen = true;
    console.log("ok");
  }
  buttonSuburban.mouseOver(function () {
    buttonSuburban.style("background-color", "transparent");
    buttonSuburban.style(
      "background-image",
      "url('suburbanMap/SuburbanMap-1.png')"
    );
    buttonSuburban.style("background-repeat", "no-repeat");
    buttonSuburban.style("background-size", "cover");
  });
  buttonSuburban.mousePressed(function () {
    mapSelected = "suburban";
    //add localstorage function
  });
  buttonSuburban.mouseOut(function () {
    buttonSuburban.style("background-color", "#ec008c");
  });
}

let buttonDone = null;
function selectButton() {
  if (buttonDone != null) {
    buttonDone.remove();
  }
  buttonDone = createButton("Done");
  buttonDone.style("borderRadius", "30px");
  buttonDone.position(windowWidth / 2 - 200, 550);
  buttonDone.style("font-family", "Verdana");
  buttonDone.style("font-size", "42px");
  buttonDone.style("background-color", "#ec008c");
  buttonDone.style("width", "400px");
  buttonDone.style("height", "100px");
  buttonDone.style("border-width", "5px");
  buttonDone.style("border-color", "#ffffff");
  buttonDone.style("color", "#ffffff");
  buttonDone.style("border-style", "outset");
  if (
    mouseIsPressed &&
    mouseX > 420 &&
    mouseX < 820 &&
    mouseY > 680 &&
    mouseY < 780
  ) {
    doneGoBack = true;
    console.log("done");
  }
  buttonDone.mouseOver(function () {
    buttonDone.style("background-color", "#a90059");
    buttonDone.style("background-repeat", "no-repeat");
    buttonDone.style("background-size", "cover");
  });
  buttonDone.mousePressed(function () {
    currentScreen = "startScreen";
    buttonSuburban.remove();
    buttonCity.remove();
    buttonDone.remove();
  });
  buttonDone.mouseOut(function () {
    buttonDone.style("background-color", "#ec008c");
  });
}
//let currentMap = "";
function mapSelection() {
  background(mapSelectBg);
  suburbanMapButton();
  cityMapButton();
  selectButton();
  /* if one map is selected - > done button show up */
}

/* content for the cars that will drive */

let carX = 0;
let carY = 0;
let carScale = 0.35;
let colorSelected = "";
let carRotation;

function addSelectedColor() {
  if (currentColor === "red") {
    colorSelected = carColors.red;
  } else if (currentColor === "green") {
    colorSelected = carColors.green;
  } else if (currentColor === "blue") {
    colorSelected = carColors.blue;
  } else if (currentColor === "black") {
    colorSelected = carColors.black;
  } else if (currentColor === "yellow") {
    colorSelected = carColors.yellow;
  } else if (currentColor === "pink") {
    colorSelected = carColors.pink;
  } else if (currentColor === "purple") {
    colorSelected = carColors.purple;
  } else if (currentColor === "white") {
    colorSelected = carColors.white;
  } else if (currentColor === "orange") {
    colorSelected = carColors.orange;
  }
}

function bmw(carX, carY, carRotation) {
  addSelectedColor(colorSelected);
  translate(carX, carY);
  rotate(carRotation);
  strokeWeight(1 * carScale);
  stroke(0, 0, 0);
  //Base Body
  fill(colorSelected);
  beginShape();
  vertex(-180 * carScale, -41 * carScale);
  vertex(-176 * carScale, -45 * carScale);
  vertex(-170 * carScale, -67 * carScale);
  vertex(-160 * carScale, -74 * carScale);
  vertex(-155 * carScale, -80 * carScale);
  vertex(-90 * carScale, -79 * carScale);
  vertex(-75 * carScale, -75 * carScale);
  vertex(28 * carScale, -75 * carScale);
  vertex(73 * carScale, -82 * carScale);
  vertex(130 * carScale, -82 * carScale);
  vertex(154 * carScale, -72 * carScale);
  vertex(178 * carScale, -69 * carScale);
  bezierVertex(
    182 * carScale,
    -66 * carScale,
    185 * carScale,
    -65 * carScale,
    185 * carScale,
    -57 * carScale
  );
  vertex(185 * carScale, 55 * carScale);
  bezierVertex(
    185 * carScale,
    63 * carScale,
    182 * carScale,
    66 * carScale,
    178 * carScale,
    66 * carScale
  );
  vertex(154 * carScale, 69 * carScale);
  vertex(130 * carScale, 78 * carScale);
  vertex(73 * carScale, 78 * carScale);
  vertex(28 * carScale, 72 * carScale);
  vertex(-75 * carScale, 72 * carScale);
  vertex(-90 * carScale, 76 * carScale);
  vertex(-155 * carScale, 77 * carScale);
  vertex(-160 * carScale, 72 * carScale);
  vertex(-170 * carScale, 65 * carScale);
  vertex(-176 * carScale, 45 * carScale);
  vertex(-180 * carScale, 41 * carScale);
  bezierVertex(
    -185 * carScale,
    20 * carScale,
    -185 * carScale,
    -19 * carScale,
    -180 * carScale,
    -41 * carScale
  );
  endShape();

  //Headlights
  push();
  fill(255, 242, 215);
  beginShape();
  vertex(-158 * carScale, -76 * carScale);
  vertex(-170 * carScale, -67 * carScale);
  vertex(-174 * carScale, -51 * carScale);
  vertex(-160 * carScale, -52 * carScale);
  vertex(-158 * carScale, -76 * carScale);
  endShape();

  beginShape();
  vertex(-158 * carScale, 74 * carScale);
  vertex(-170 * carScale, 65 * carScale);
  vertex(-174 * carScale, 50 * carScale);
  vertex(-160 * carScale, 50 * carScale);
  vertex(-158 * carScale, 74 * carScale);
  endShape();
  pop();

  //Hood
  beginShape();
  vertex(129 * carScale, -67 * carScale);
  bezierVertex(
    33 * carScale,
    -70 * carScale,
    -79 * carScale,
    -70 * carScale,
    -151 * carScale,
    -67 * carScale
  );
  bezierVertex(
    -161 * carScale,
    -67 * carScale,
    -164 * carScale,
    -66 * carScale,
    -165 * carScale,
    -56 * carScale
  );
  vertex(-170 * carScale, -32 * carScale);
  vertex(-175 * carScale, -28 * carScale);
  bezierVertex(
    -177 * carScale,
    -14 * carScale,
    -177 * carScale,
    6 * carScale,
    -175 * carScale,
    24 * carScale
  );
  vertex(-170 * carScale, 28 * carScale);
  vertex(-165 * carScale, 56 * carScale);
  bezierVertex(
    -164 * carScale,
    62 * carScale,
    -161 * carScale,
    63 * carScale,
    -151 * carScale,
    63 * carScale
  );
  bezierVertex(
    -79 * carScale,
    66 * carScale,
    33 * carScale,
    66 * carScale,
    129 * carScale,
    66 * carScale
  );
  endShape();

  //Detail of Hood
  line(-170 * carScale, -32 * carScale, -85 * carScale, -42 * carScale);
  line(-170 * carScale, 28 * carScale, -85 * carScale, 38 * carScale);

  //Backlights
  push();
  fill(255, 0, 0);
  beginShape();
  vertex(181 * carScale, -67 * carScale);
  vertex(181 * carScale, -45 * carScale);
  vertex(185 * carScale, -45 * carScale);
  vertex(185 * carScale, -60 * carScale);
  bezierVertex(
    185 * carScale,
    -66 * carScale,
    183 * carScale,
    -66 * carScale,
    181 * carScale,
    -67 * carScale
  );
  endShape();

  beginShape();
  vertex(181 * carScale, 66 * carScale);
  vertex(181 * carScale, 44 * carScale);
  vertex(185 * carScale, 44 * carScale);
  vertex(185 * carScale, 59 * carScale);
  bezierVertex(
    185 * carScale,
    65 * carScale,
    183 * carScale,
    65 * carScale,
    181 * carScale,
    66 * carScale
  );
  endShape();
  pop();

  //Trunk
  beginShape();
  vertex(168 * carScale, -53 * carScale);
  vertex(190 * carScale, -52 * carScale);
  bezierVertex(
    196 * carScale,
    -27 * carScale,
    196 * carScale,
    18 * carScale,
    190 * carScale,
    51 * carScale
  );
  vertex(168 * carScale, 52 * carScale);
  endShape();

  //Windshield
  fill(35, 31, 32);
  beginShape();
  vertex(-75 * carScale, -59 * carScale);
  vertex(-31 * carScale, -49 * carScale);
  bezierVertex(
    -36 * carScale,
    -24 * carScale,
    -36 * carScale,
    19 * carScale,
    -31 * carScale,
    45 * carScale
  );
  vertex(-75 * carScale, 55 * carScale);
  bezierVertex(
    -90 * carScale,
    35 * carScale,
    -90 * carScale,
    -46 * carScale,
    -75 * carScale,
    -59 * carScale
  );
  endShape();

  //long window right
  beginShape();
  vertex(-17 * carScale, -51 * carScale);
  vertex(81 * carScale, -49 * carScale);
  vertex(110 * carScale, -60 * carScale);
  vertex(-51 * carScale, -64 * carScale);
  vertex(-17 * carScale, -51 * carScale);
  endShape();

  //long window left
  beginShape();
  vertex(-17 * carScale, 47 * carScale);
  vertex(81 * carScale, 45 * carScale);
  vertex(110 * carScale, 56 * carScale);
  vertex(-51 * carScale, 60 * carScale);
  vertex(-17 * carScale, 47 * carScale);
  endShape();

  //Backwindow
  beginShape();
  vertex(88 * carScale, -37 * carScale);
  vertex(132 * carScale, -50 * carScale);
  bezierVertex(
    146 * carScale,
    -25 * carScale,
    146 * carScale,
    26 * carScale,
    132 * carScale,
    46 * carScale
  );
  vertex(88 * carScale, 33 * carScale);
  bezierVertex(
    91 * carScale,
    23 * carScale,
    91 * carScale,
    -28 * carScale,
    88 * carScale,
    -37 * carScale
  );
  endShape();

  //mirror right
  fill(colorSelected);
  beginShape();
  vertex(-51 * carScale, -59 * carScale);
  vertex(-50 * carScale, -70 * carScale);
  vertex(-45 * carScale, -68 * carScale);
  vertex(-43 * carScale, -83 * carScale);
  bezierVertex(
    -57 * carScale,
    -82 * carScale,
    -59 * carScale,
    -70 * carScale,
    -59 * carScale,
    -63 * carScale
  );
  bezierVertex(
    -59 * carScale,
    -60 * carScale,
    -55 * carScale,
    -58 * carScale,
    -51 * carScale,
    -59 * carScale
  );
  endShape();

  //mirror left
  beginShape();
  vertex(-51 * carScale, 55 * carScale);
  vertex(-50 * carScale, 66 * carScale);
  vertex(-45 * carScale, 64 * carScale);
  vertex(-43 * carScale, 79 * carScale);
  bezierVertex(
    -57 * carScale,
    78 * carScale,
    -59 * carScale,
    66 * carScale,
    -59 * carScale,
    59 * carScale
  );
  bezierVertex(
    -59 * carScale,
    56 * carScale,
    -55 * carScale,
    54 * carScale,
    -51 * carScale,
    55 * carScale
  );
  endShape();
}
function supra(carX, carY, carRotation) {
  addSelectedColor(colorSelected);
  translate(carX, carY);
  rotate(carRotation);
  beginShape();
  stroke(0, 0, 0);
  fill(colorSelected);
  strokeWeight(1 * carScale);
  vertex(-215 * carScale, 0 * carScale);
  bezierVertex(
    -215 * carScale,
    -30 * carScale,
    -210 * carScale,
    -50 * carScale,
    -186 * carScale,
    -70 * carScale
  );
  bezierVertex(
    -185 * carScale,
    -72 * carScale,
    -178 * carScale,
    -73 * carScale,
    -175 * carScale,
    -76 * carScale
  );
  bezierVertex(
    -173 * carScale,
    -78 * carScale,
    -165 * carScale,
    -81 * carScale,
    -157 * carScale,
    -86 * carScale
  );
  bezierVertex(
    -157 * carScale,
    -87 * carScale,
    -151 * carScale,
    -87 * carScale,
    -148 * carScale,
    -88 * carScale
  );
  bezierVertex(
    40 * carScale,
    -80 * carScale,
    40 * carScale,
    -80 * carScale,
    73 * carScale,
    -82 * carScale
  );
  bezierVertex(
    73 * carScale,
    -82 * carScale,
    103 * carScale,
    -87 * carScale,
    123 * carScale,
    -87 * carScale
  );
  vertex(182 * carScale, -65 * carScale);
  bezierVertex(
    182 * carScale,
    -65 * carScale,
    185 * carScale,
    -63 * carScale,
    190 * carScale,
    -55 * carScale
  );
  bezierVertex(
    210 * carScale,
    -40 * carScale,
    210 * carScale,
    0,
    210 * carScale,
    0
  );
  vertex(210 * carScale, 0);
  bezierVertex(
    210 * carScale,
    0,
    210 * carScale,
    40 * carScale,
    190 * carScale,
    55 * carScale
  );
  bezierVertex(
    190 * carScale,
    55 * carScale,
    185 * carScale,
    63 * carScale,
    182 * carScale,
    65 * carScale
  );
  vertex(123 * carScale, 87 * carScale);
  bezierVertex(
    103 * carScale,
    87 * carScale,
    73 * carScale,
    82 * carScale,
    73 * carScale,
    82 * carScale
  );
  bezierVertex(
    40 * carScale,
    80 * carScale,
    40 * carScale,
    80 * carScale,
    -148 * carScale,
    90 * carScale
  );
  bezierVertex(
    -148 * carScale,
    90 * carScale,
    -159 * carScale,
    93 * carScale,
    -171 * carScale,
    84 * carScale
  );
  bezierVertex(
    -200 * carScale,
    70 * carScale,
    -186 * carScale,
    70 * carScale,
    -200 * carScale,
    60 * carScale
  );
  bezierVertex(
    -210 * carScale,
    50 * carScale,
    -215 * carScale,
    30 * carScale,
    -215 * carScale,
    0
  );
  endShape();

  //front window
  beginShape();
  fill(35, 31, 32);
  vertex(-21 * carScale, -50 * carScale);
  bezierVertex(
    -25 * carScale,
    -40 * carScale,
    -25 * carScale,
    40 * carScale,
    -21 * carScale,
    50 * carScale
  );
  bezierVertex(
    -19 * carScale,
    56 * carScale,
    -26 * carScale,
    59 * carScale,
    -26 * carScale,
    60 * carScale
  );
  bezierVertex(
    -77 * carScale,
    74 * carScale,
    -77 * carScale,
    74 * carScale,
    -77 * carScale,
    74 * carScale
  );
  bezierVertex(
    -92 * carScale,
    58 * carScale,
    -103 * carScale,
    26 * carScale,
    -103 * carScale,
    0
  );
  bezierVertex(
    -103 * carScale,
    -40 * carScale,
    -77 * carScale,
    -70 * carScale,
    -77 * carScale,
    -72 * carScale
  );
  vertex(-26 * carScale, -60 * carScale);
  bezierVertex(
    -26 * carScale,
    -60 * carScale,
    -19 * carScale,
    -56 * carScale,
    -21 * carScale,
    -50 * carScale
  );
  endShape();

  //back window
  beginShape();
  vertex(75 * carScale, 0);
  vertex(75 * carScale, 42 * carScale);
  bezierVertex(
    76 * carScale,
    48 * carScale,
    82 * carScale,
    49 * carScale,
    91 * carScale,
    52 * carScale
  );
  bezierVertex(
    129 * carScale,
    60 * carScale,
    129 * carScale,
    57 * carScale,
    129 * carScale,
    58 * carScale
  );
  bezierVertex(
    148 * carScale,
    52 * carScale,
    144 * carScale,
    27 * carScale,
    146 * carScale,
    0
  );
  bezierVertex(
    144 * carScale,
    -27 * carScale,
    148 * carScale,
    -52 * carScale,
    129 * carScale,
    -58 * carScale
  );
  bezierVertex(
    129 * carScale,
    -57 * carScale,
    129 * carScale,
    -60 * carScale,
    91 * carScale,
    -52 * carScale
  );
  bezierVertex(
    82 * carScale,
    -48 * carScale,
    76 * carScale,
    -48 * carScale,
    75 * carScale,
    -32 * carScale
  );
  vertex(75 * carScale, 0);
  endShape();

  //side window right
  beginShape();
  vertex(-66 * carScale, -76 * carScale);
  bezierVertex(
    -26 * carScale,
    -62 * carScale,
    6 * carScale,
    -60 * carScale,
    15 * carScale,
    -58 * carScale
  );
  bezierVertex(
    52 * carScale,
    -57 * carScale,
    54 * carScale,
    -60 * carScale,
    75 * carScale,
    -65 * carScale
  );
  bezierVertex(
    80 * carScale,
    -67 * carScale,
    80 * carScale,
    -69 * carScale,
    76 * carScale,
    -72 * carScale
  );
  bezierVertex(
    50 * carScale,
    -77 * carScale,
    -12 * carScale,
    -79 * carScale,
    -66 * carScale,
    -76 * carScale
  );
  endShape();

  //side window left
  beginShape();
  vertex(-66 * carScale, 76 * carScale);
  bezierVertex(
    -26 * carScale,
    62 * carScale,
    6 * carScale,
    60 * carScale,
    15 * carScale,
    58 * carScale
  );
  bezierVertex(
    52 * carScale,
    57 * carScale,
    54 * carScale,
    60 * carScale,
    75 * carScale,
    65 * carScale
  );
  bezierVertex(
    80 * carScale,
    67 * carScale,
    80 * carScale,
    69 * carScale,
    76 * carScale,
    72 * carScale
  );
  bezierVertex(
    50 * carScale,
    77 * carScale,
    -12 * carScale,
    79 * carScale,
    -66 * carScale,
    76 * carScale
  );
  endShape();

  //wing
  beginShape();
  noFill();
  vertex(175 * carScale, 51 * carScale);
  vertex(141 * carScale, 66 * carScale);
  vertex(181 * carScale, 62 * carScale);
  vertex(191 * carScale, 54 * carScale);
  endShape();

  beginShape();
  vertex(175 * carScale, -51 * carScale);
  vertex(141 * carScale, -66 * carScale);
  vertex(181 * carScale, -62 * carScale);
  vertex(191 * carScale, -54 * carScale);
  endShape();

  beginShape();
  vertex(175 * carScale, -51 * carScale);
  bezierVertex(
    186 * carScale,
    -20 * carScale,
    186 * carScale,
    20 * carScale,
    175 * carScale,
    51 * carScale
  );
  endShape();

  //hood
  beginShape();
  noFill();
  vertex(-77 * carScale, -72 * carScale);
  bezierVertex(
    -205 * carScale,
    -95 * carScale,
    -205 * carScale,
    -33 * carScale,
    -205 * carScale,
    0
  );
  bezierVertex(
    -205 * carScale,
    33 * carScale,
    -205 * carScale,
    95 * carScale,
    -77 * carScale,
    74 * carScale
  );
  endShape();

  beginShape();
  vertex(-104 * carScale, -45 * carScale);
  bezierVertex(
    -122 * carScale,
    -44 * carScale,
    -170 * carScale,
    -40 * carScale,
    -182 * carScale,
    -36 * carScale
  );
  endShape();

  beginShape();
  vertex(-104 * carScale, 45 * carScale);
  bezierVertex(
    -122 * carScale,
    44 * carScale,
    -170 * carScale,
    40 * carScale,
    -182 * carScale,
    36 * carScale
  );
  endShape();

  beginShape();
  vertex(-116 * carScale, -18 * carScale);
  vertex(-116 * carScale, 18 * carScale);
  vertex(-156 * carScale, 21 * carScale);
  vertex(-156 * carScale, -21 * carScale);
  vertex(-116 * carScale, -18 * carScale);
  endShape();

  //headlights
  beginShape();
  fill(255, 242, 215);
  vertex(-181 * carScale, -68 * carScale);
  bezierVertex(
    -195 * carScale,
    -58 * carScale,
    -201 * carScale,
    -48 * carScale,
    -206 * carScale,
    -36 * carScale
  );
  bezierVertex(
    -207 * carScale,
    -33 * carScale,
    -207 * carScale,
    -25 * carScale,
    -189 * carScale,
    -35 * carScale
  );
  bezierVertex(
    -184 * carScale,
    -46 * carScale,
    -181 * carScale,
    -57 * carScale,
    -179 * carScale,
    -59 * carScale
  );
  bezierVertex(
    -177 * carScale,
    -64 * carScale,
    -178 * carScale,
    -66 * carScale,
    -181 * carScale,
    -68 * carScale
  );
  endShape();

  beginShape();
  vertex(-181 * carScale, 68 * carScale);
  bezierVertex(
    -195 * carScale,
    58 * carScale,
    -201 * carScale,
    48 * carScale,
    -206 * carScale,
    36 * carScale
  );
  bezierVertex(
    -207 * carScale,
    33 * carScale,
    -203 * carScale,
    25 * carScale,
    -189 * carScale,
    35 * carScale
  );
  bezierVertex(
    -184 * carScale,
    46 * carScale,
    -181 * carScale,
    57 * carScale,
    -179 * carScale,
    59 * carScale
  );
  bezierVertex(
    -177 * carScale,
    64 * carScale,
    -178 * carScale,
    64 * carScale,
    -181 * carScale,
    68 * carScale
  );
  endShape();

  //side-mirrors
  beginShape();
  fill(colorSelected);
  vertex(-70 * carScale, -81 * carScale);
  bezierVertex(
    -65 * carScale,
    -78 * carScale,
    -65 * carScale,
    -78 * carScale,
    -62 * carScale,
    -81 * carScale
  );
  vertex(-56 * carScale, -81 * carScale);
  vertex(-48 * carScale, -103 * carScale);
  bezierVertex(
    -54 * carScale,
    -110 * carScale,
    -65 * carScale,
    -92 * carScale,
    -70 * carScale,
    -81 * carScale
  );
  endShape();

  beginShape();
  vertex(-70 * carScale, 81 * carScale);
  bezierVertex(
    -65 * carScale,
    78 * carScale,
    -65 * carScale,
    78 * carScale,
    -62 * carScale,
    81 * carScale
  );
  vertex(-56 * carScale, 81 * carScale);
  vertex(-48 * carScale, 103 * carScale);
  bezierVertex(
    -54 * carScale,
    110 * carScale,
    -65 * carScale,
    92 * carScale,
    -70 * carScale,
    81 * carScale
  );
  endShape();

  //backdetails
  beginShape();
  noFill();
  vertex(79 * carScale, -77 * carScale);
  bezierVertex(
    101 * carScale,
    -80 * carScale,
    128 * carScale,
    -78 * carScale,
    148 * carScale,
    -71 * carScale
  );
  endShape();

  beginShape();
  noFill();
  vertex(79 * carScale, 77 * carScale);
  bezierVertex(
    101 * carScale,
    80 * carScale,
    128 * carScale,
    78 * carScale,
    148 * carScale,
    71 * carScale
  );
  endShape();
}
function rx7(carX, carY, carRotation) {
  addSelectedColor(colorSelected);
  translate(carX, carY);
  rotate(carRotation);
  stroke(0, 0, 0);
  strokeWeight(1 * carScale);
  //BaseBody
  fill(colorSelected);
  beginShape();
  vertex(-187 * carScale, -67 * carScale);
  bezierVertex(
    -173 * carScale,
    -75 * carScale,
    -154 * carScale,
    -80 * carScale,
    -125 * carScale,
    -78 * carScale
  );
  bezierVertex(
    -62 * carScale,
    -72 * carScale,
    9 * carScale,
    -70 * carScale,
    100 * carScale,
    -75 * carScale
  );
  bezierVertex(
    124 * carScale,
    -77 * carScale,
    165 * carScale,
    -72 * carScale,
    180 * carScale,
    -69 * carScale
  );
  bezierVertex(
    192 * carScale,
    -66 * carScale,
    194 * carScale,
    -52 * carScale,
    194 * carScale,
    0 * carScale
  );

  bezierVertex(
    194 * carScale,
    52 * carScale,
    192 * carScale,
    66 * carScale,
    180 * carScale,
    69 * carScale
  );
  bezierVertex(
    165 * carScale,
    72 * carScale,
    124 * carScale,
    77 * carScale,
    100 * carScale,
    75 * carScale
  );
  bezierVertex(
    9 * carScale,
    70 * carScale,
    -62 * carScale,
    72 * carScale,
    -125 * carScale,
    78 * carScale
  );
  bezierVertex(
    -154 * carScale,
    80 * carScale,
    -173 * carScale,
    75 * carScale,
    -187 * carScale,
    67 * carScale
  );

  bezierVertex(
    -213 * carScale,
    25 * carScale,
    -213 * carScale,
    -35 * carScale,
    -187 * carScale,
    -67 * carScale
  );
  endShape();

  //mirror right
  beginShape();
  vertex(-68 * carScale, -70 * carScale);
  bezierVertex(
    -67 * carScale,
    -81 * carScale,
    -60 * carScale,
    -87 * carScale,
    -53 * carScale,
    -91 * carScale
  );
  vertex(-57 * carScale, -75 * carScale);
  vertex(-59 * carScale, -75 * carScale);
  vertex(-60 * carScale, -67 * carScale);
  bezierVertex(
    -65 * carScale,
    -68 * carScale,
    -66 * carScale,
    -68 * carScale,
    -68 * carScale,
    -70 * carScale
  );
  endShape();

  //mirror left
  beginShape();
  vertex(-68 * carScale, 70 * carScale);
  bezierVertex(
    -67 * carScale,
    81 * carScale,
    -60 * carScale,
    87 * carScale,
    -53 * carScale,
    91 * carScale
  );
  vertex(-57 * carScale, 75 * carScale);
  vertex(-59 * carScale, 75 * carScale);
  vertex(-60 * carScale, 67 * carScale);
  bezierVertex(
    -65 * carScale,
    68 * carScale,
    -66 * carScale,
    68 * carScale,
    -68 * carScale,
    70 * carScale
  );
  endShape();

  //spoiler
  beginShape();
  vertex(205 * carScale, -57 * carScale);
  bezierVertex(
    210 * carScale,
    -25 * carScale,
    210 * carScale,
    25 * carScale,
    205 * carScale,
    57 * carScale
  );
  vertex(180 * carScale, 57 * carScale);
  bezierVertex(
    185 * carScale,
    25 * carScale,
    185 * carScale,
    -25 * carScale,
    180 * carScale,
    -57 * carScale
  );
  vertex(205 * carScale, -57 * carScale);
  endShape();

  beginShape();
  vertex(160 * carScale, -60 * carScale);
  vertex(210 * carScale, -60 * carScale);
  vertex(210 * carScale, -55 * carScale);
  vertex(160 * carScale, -55 * carScale);
  endShape();

  beginShape();
  vertex(160 * carScale, 60 * carScale);
  vertex(210 * carScale, 60 * carScale);
  vertex(210 * carScale, 55 * carScale);
  vertex(160 * carScale, 55 * carScale);
  endShape();

  //hood
  line(-184 * carScale, -41 * carScale, -186 * carScale, 41 * carScale);
  line(-156 * carScale, -63 * carScale, -68 * carScale, -61 * carScale);
  line(-156 * carScale, 63 * carScale, -68 * carScale, 61 * carScale);

  //details on hood
  push();
  noFill();
  beginShape();
  vertex(-110 * carScale, -33 * carScale);
  vertex(-150 * carScale, -31 * carScale);
  vertex(-151 * carScale, -10 * carScale);
  vertex(-107 * carScale, -8 * carScale);
  endShape();

  beginShape();
  vertex(-107 * carScale, 8 * carScale);
  vertex(-151 * carScale, 10 * carScale);
  vertex(-150 * carScale, 31 * carScale);
  vertex(-110 * carScale, 33 * carScale);
  endShape();

  //details in the back
  beginShape();
  vertex(91 * carScale, 62 * carScale);
  bezierVertex(
    119 * carScale,
    65 * carScale,
    133 * carScale,
    65 * carScale,
    148 * carScale,
    59 * carScale
  );
  endShape();

  beginShape();
  vertex(91 * carScale, -62 * carScale);
  bezierVertex(
    119 * carScale,
    -65 * carScale,
    133 * carScale,
    -65 * carScale,
    148 * carScale,
    -59 * carScale
  );
  endShape();
  pop();

  //headlights

  fill(0, 0, 0, 80);
  beginShape();
  vertex(-155 * carScale, -67 * carScale);
  vertex(-156 * carScale, -42 * carScale);
  vertex(-187 * carScale, -41 * carScale);
  bezierVertex(
    -185 * carScale,
    -65 * carScale,
    -181 * carScale,
    -66 * carScale,
    -155 * carScale,
    -67 * carScale
  );
  endShape();

  beginShape();
  vertex(-155 * carScale, 67 * carScale);
  vertex(-156 * carScale, 42 * carScale);
  vertex(-187 * carScale, 41 * carScale);
  bezierVertex(
    -185 * carScale,
    65 * carScale,
    -181 * carScale,
    66 * carScale,
    -155 * carScale,
    67 * carScale
  );
  endShape();

  //windshield
  push();
  fill(35, 31, 32);
  beginShape();
  vertex(-64 * carScale, -63 * carScale);
  vertex(-30 * carScale, -48 * carScale);
  bezierVertex(
    -40 * carScale,
    -17 * carScale,
    -40 * carScale,
    17 * carScale,
    -30 * carScale,
    48 * carScale
  );
  vertex(-64 * carScale, 63 * carScale);
  bezierVertex(
    -105 * carScale,
    45 * carScale,
    -105 * carScale,
    -55 * carScale,
    -64 * carScale,
    -63 * carScale
  );
  endShape();

  //window right
  beginShape();
  vertex(-57 * carScale, -65 * carScale);
  vertex(-16 * carScale, -49 * carScale);
  bezierVertex(
    32 * carScale,
    -42 * carScale,
    45 * carScale,
    -54 * carScale,
    57 * carScale,
    -64 * carScale
  );
  vertex(-57 * carScale, -65 * carScale);
  endShape();

  //window left
  beginShape();
  vertex(-57 * carScale, 65 * carScale);
  vertex(-16 * carScale, 49 * carScale);
  bezierVertex(
    32 * carScale,
    42 * carScale,
    45 * carScale,
    54 * carScale,
    57 * carScale,
    64 * carScale
  );
  vertex(-57 * carScale, 65 * carScale);
  endShape();

  //back window
  beginShape();
  vertex(68 * carScale, -43 * carScale);
  vertex(91 * carScale, -58 * carScale);
  bezierVertex(
    165 * carScale,
    -43 * carScale,
    165 * carScale,
    43 * carScale,
    91 * carScale,
    58 * carScale
  );
  vertex(68 * carScale, 43 * carScale);
  vertex(68 * carScale, -43 * carScale);
  endShape();
  pop();

  push();
  noFill();
  beginShape();
  vertex(62 * carScale, -43 * carScale);
  vertex(91 * carScale, -62 * carScale);
  bezierVertex(
    172 * carScale,
    -43 * carScale,
    172 * carScale,
    43 * carScale,
    91 * carScale,
    62 * carScale
  );
  vertex(62 * carScale, 43 * carScale);
  vertex(62 * carScale, -43 * carScale);
  endShape();
  pop();

  //mirror right
  beginShape();
  vertex(-68 * carScale, -70 * carScale);
  bezierVertex(
    -67 * carScale,
    -81 * carScale,
    -60 * carScale,
    -87 * carScale,
    -53 * carScale,
    -91 * carScale
  );
  vertex(-57 * carScale, -75 * carScale);
  vertex(-59 * carScale, -75 * carScale);
  vertex(-60 * carScale, -67 * carScale);
  bezierVertex(
    -65 * carScale,
    -68 * carScale,
    -66 * carScale,
    -68 * carScale,
    -68 * carScale,
    -70 * carScale
  );
  endShape();

  //mirror left
  beginShape();
  vertex(-68 * carScale, 70 * carScale);
  bezierVertex(
    -67 * carScale,
    81 * carScale,
    -60 * carScale,
    87 * carScale,
    -53 * carScale,
    91 * carScale
  );
  vertex(-57 * carScale, 75 * carScale);
  vertex(-59 * carScale, 75 * carScale);
  vertex(-60 * carScale, 67 * carScale);
  bezierVertex(
    -65 * carScale,
    68 * carScale,
    -66 * carScale,
    68 * carScale,
    -68 * carScale,
    70 * carScale
  );
  endShape();
}

/* content of boost */
let boostX = 100;
let boostY = 300;
let boostScale = 3;
function nosBoost() {
  //tanslate for the correct postition of the pulse
  //metal neck
  noStroke();
  fill(250);

  rect(
    boostX - 3 * boostScale,
    boostY - 85 * boostScale,
    6 * boostScale,
    10 * boostScale
  );

  //bottle
  fill(0, 40, 200);

  rect(
    boostX - 20 * boostScale,
    boostY - 50 * boostScale,
    40 * boostScale,
    80 * boostScale,
    5 * boostScale
  );

  ellipse(boostX, boostY - 47 * boostScale, 40 * boostScale);

  //reflection
  fill(0, 80, 220);
  rect(
    boostX - 11 * boostScale,
    boostY - 60 * boostScale,
    6 * boostScale,
    80 * boostScale,
    2 * boostScale
  );

  //bottle neck
  fill(0, 40, 200);

  rect(
    boostX - 5 * boostScale,
    boostY - 75 * boostScale,
    10 * boostScale,
    10 * boostScale
  );

  // knob
  fill(20 /* 0, 70, 200 */);

  ellipse(boostX, boostY - 94 * boostScale, 8 * boostScale);

  ellipse(boostX - 4 * boostScale, boostY - 90 * boostScale, 8 * boostScale);

  ellipse(boostX - 2 * boostScale, boostY - 84 * boostScale, 8 * boostScale);

  ellipse(boostX + 2 * boostScale, boostY - 84 * boostScale, 8 * boostScale);

  ellipse(boostX + 4 * boostScale, boostY - 90 * boostScale, 8 * boostScale);

  fill(10 /* 0, 40, 180 */);
  ellipse(boostX, boostY - 89 * boostScale, 8 * boostScale);

  // Label
  fill(255, 120, 30);
  stroke(255);
  rect(
    boostX - 15 * boostScale,
    boostY - 53 * boostScale,
    30 * boostScale,
    40 * boostScale,
    5 * boostScale
  );

  //Power symbol
  beginShape();
  stroke(250, 195, 42);
  strokeWeight(0.5 * boostScale);
  fill(255, 203, 59);

  vertex(boostX + 2 * boostScale, boostY - 47 * boostScale);
  vertex(boostX - 8 * boostScale, boostY - 32 * boostScale);
  vertex(boostX, boostY - 32 * boostScale);
  vertex(boostX - 2 * boostScale, boostY - 19 * boostScale);
  vertex(boostX + 8 * boostScale, boostY - 37 * boostScale);
  vertex(boostX, boostY - 37 * boostScale);
  vertex(boostX + 2 * boostScale, boostY - 47 * boostScale);
  vertex(boostX - 8 * boostScale, boostY - 32 * boostScale);
  endShape();
}

/* content of city map */
let whichBackgroundCity = 1;
let isGameActive = false;

function cityConditions() {
  isGameActive = true;
  if (whichBackgroundCity === 1 && 266 < carY && carY < 444 && carX >= 950) {
    whichBackgroundCity += 1;
    backgroundImageCity = loadImage("map-city/cityMap2.png");
    carX = 5;
  } else if (
    whichBackgroundCity === 2 &&
    30 < carY &&
    carY < 211 &&
    carX >= 950
  ) {
    whichBackgroundCity += 1;
    backgroundImageCity = loadImage("map-city/cityMap3.png");
    carX = 5;
  } else if (
    whichBackgroundCity === 3 &&
    355 < carX &&
    carX < 533 &&
    carY >= 712
  ) {
    whichBackgroundCity += 1;
    backgroundImageCity = loadImage("map-city/cityMap4.png");
    carY = 5;
  } else if (
    whichBackgroundCity === 4 &&
    200 < carY &&
    carY < 380 &&
    carX >= 950
  ) {
    whichBackgroundCity += 1;
    backgroundImageCity = loadImage("map-city/cityMap5.png");
    carX = 5;
  } else if (
    whichBackgroundCity === 5 &&
    410 < carX &&
    carX < 588 &&
    carY <= 0
  ) {
    whichBackgroundCity += 1;
    backgroundImageCity = loadImage("map-city/cityMap6.png");
    carY = 900;
  } else if (
    whichBackgroundCity === 6 &&
    410 < carX &&
    carX < 588 &&
    carY <= 0
  ) {
    whichBackgroundCity += 1;
    backgroundImageCity = loadImage("map-city/cityMap7.png");
    carY = 900;
  } else if (
    whichBackgroundCity === 7 &&
    200 < carY &&
    carY < 379 &&
    carX >= 950
  ) {
    whichBackgroundCity += 1;
    backgroundImageCity = loadImage("map-city/cityMap8.png");
    carX = 5;
  } else if (
    whichBackgroundCity === 8 &&
    420 < carX &&
    carX < 598 &&
    carY >= 712
  ) {
    whichBackgroundCity += 1;
    backgroundImageCity = loadImage("map-city/cityMap9.png");
    carY = 5;
  } else if (
    whichBackgroundCity === 9 &&
    253 < carY &&
    carY < 431 &&
    carX >= 950
  ) {
    whichBackgroundCity += 1;
    backgroundImageCity = loadImage("map-city/cityMap10.png");
    carX = 5;
  } else if (
    whichBackgroundCity === 10 &&
    253 < carY &&
    carY < 431 &&
    carX >= 695
  ) {
    whichBackgroundCity += 1;
    backgroundImageCity = loadImage("map-city/cityMap10.png");
    isGameActive = false;
    currentScreen = "resultScreen";
  }
}

function cityCarSetup() {
  carX = 70;
  carY = 350;
  carScale = 0.3;
}

//the following 7 lines of code were done wiht the help of ChatGPT
let called = false;

function callOnceCarCity() {
  if (!called) {
    cityCarSetup();
    called = true;
  }
}

let speed = 0;
let acceleration = -3;

function carControls(carX, carY, carRotation, speed, acceleration) {
  //speed = speed + acceleration;
  carX = carX + Math.cos(carRotation) * speed;
  carY = carY + Math.sin(carRotation) * speed;

  if (keyIsDown(38)) {
    speed = -10;
  } else if (keyIsDown(40)) {
    speed = 10;
  } else {
    speed = 0;
  }

  if (keyIsDown(37)) {
    carRotation = carRotation - 0.05;
  } else if (keyIsDown(39)) {
    carRotation = carRotation + 0.05;
  }
  //the following line of code were done with the help of ChatGPT
  return [carX, carY, carRotation, speed];
}

function cityBoundries() {
    stroke(0, 0, 0);
  if (whichBackgroundCity === 1) {
    strokeWeight(1);
    line(0, 266, 950, 266);
    line(0, 444, 950, 444);
  } else if (whichBackgroundCity === 2) {
    noFill();
    line(0, 266, 320, 266);
    line(0, 444, 414, 444);
    beginShape();
    vertex(414, 444);
    bezierVertex(500, 444, 500, 350, 500, 350);
    endShape();
    line(500, 350, 500, 210);
    line(500, 210, 950, 213);
    line(320, 265, 320, 113);
    line(404, 31, 950, 31);
    beginShape();
    vertex(320, 113);
    bezierVertex(320, 113, 320, 31, 404, 31);
    endShape();
  } else if (whichBackgroundCity === 3) {
    line(0, 31, 405, 31);
    line(496, 111, 534, 712);
    line(0, 210, 324, 210);
    line(324, 210, 356, 712);
    beginShape();
    noFill();
    vertex(405, 31);
    bezierVertex(496, 31, 496, 111, 496, 111);
    endShape();
  } else if (whichBackgroundCity === 4) {
    line(356, 0, 373, 293);
    beginShape();
    noFill();
    vertex(373, 293);
    bezierVertex(370, 335, 423, 381, 464, 381);
    endShape();
    line(464, 381, 950, 381);
    line(534, 0, 546, 201);
    line(546, 201, 950, 201);
  } else if (whichBackgroundCity === 5) {
    line(0, 202, 409, 202);
    line(409, 202, 409, 0);
    line(0, 380, 501, 382);
    beginShape();
    noFill();
    vertex(501, 382);
    bezierVertex(558, 367, 585, 339, 588, 291);
    endShape();
    line(588, 291, 588, 0);
  } else if (whichBackgroundCity === 6) {
    line(409, 0, 409, 712);
    line(589, 0, 589, 712);
  } else if (whichBackgroundCity === 7) {
    line(409, 289, 409, 712);
    line(589, 380, 589, 712);
    line(589, 380, 950, 380);
    line(502, 201, 950, 201);
    beginShape();
    noFill();
    vertex(409, 289);
    bezierVertex(420, 236, 451, 205, 502, 201);
    endShape();
  } else if (whichBackgroundCity === 8) {
    line(0, 200, 510, 200);
    line(0, 379, 419, 379);
    line(419, 379, 419, 712);
    line(597, 282, 597, 712);
    beginShape();
    noFill();
    vertex(510, 200);
    bezierVertex(555, 202, 598, 242, 597, 282);
    endShape();
  } else if (whichBackgroundCity === 9) {
    line(419, 0, 419, 350);
    line(598, 0, 598, 253);
    line(598, 253, 950, 253);
    line(506, 432, 950, 432);
    beginShape();
    noFill();
    vertex(419, 350);
    bezierVertex(426, 393, 460, 424, 506, 432);
    endShape();
  } else if (whichBackgroundCity === 10) {
    line(0, 253, 694, 253);
    line(0, 432, 694, 432);
    line(694, 253, 694, 432);
  }
}

function cityMap() {
  background(backgroundImageCity);
  cityBoundries();
  callOnceCarCity();
  cityConditions();
  //the following line of code were done with the help of ChatGPT
  [carX, carY, carRotation, speed] = carControls(
    carX,
    carY,
    carRotation,
    speed,
    acceleration
  );

  if (currentCar === "bmw") {
    bmw(carX, carY, carRotation);
  } else if (currentCar === "rx7") {
    rx7(carX, carY, carRotation);
  } else if (currentCar === "supra") {
    supra(carX, carY, carRotation);
  }

  if (detectCollision()) {
    currentScreen = "crashScreen";
  }
}

/* content of suburban map */
let whichSectionOnMap = 1;

function suburbanConditions() {
  if (whichSectionOnMap === 1 && carX >= 900 && 203 < carY && carY < 435) {
    whichSectionOnMap += 1;
    carX = 0;
    backgroundImageSub = loadImage("suburbanMap/SuburbanMap-10.png");
  } else if (whichSectionOnMap === 2 && carY <= 0 && carX > 366 && carX < 607) {
    whichSectionOnMap += 1;
    carY = 712;
    backgroundImageSub = loadImage("suburbanMap/SuburbanMap-6.png");
  } else if (
    whichSectionOnMap === 3 &&
    carX >= 900 &&
    carY > 154 &&
    carY < 399
  ) {
    whichSectionOnMap += 1;
    carX = 0;
    backgroundImageSub = loadImage("suburbanMap/SuburbanMap-7.png");
  } else if (
    whichSectionOnMap === 4 &&
    carY >= 712 &&
    carX > 383 &&
    carX < 620
  ) {
    whichSectionOnMap += 1;
    carY = 0;
    backgroundImageSub = loadImage("suburbanMap/SuburbanMap-11.png");
  } else if (
    whichSectionOnMap === 5 &&
    carX >= 900 &&
    carY > 320 &&
    carY < 572
  ) {
    whichSectionOnMap += 1;
    carX = 0;
    backgroundImageSub = loadImage("suburbanMap/SuburbanMap-12.png");
  } else if (whichSectionOnMap === 6 && carY <= 0 && carX > 650 && carX < 896) {
    whichSectionOnMap += 1;
    carY = 712;
    backgroundImageSub = loadImage("suburbanMap/SuburbanMap-8.png");
  } else if (whichSectionOnMap === 7 && carY <= 0 && carX > 213 && carX < 455) {
    whichSectionOnMap += 1;
    carY = 712;
    backgroundImageSub = loadImage("suburbanMap/SuburbanMap-4.png");
  } else if (whichSectionOnMap === 8 && carX <= 0 && carY > 68 && carY < 312) {
    whichSectionOnMap += 1;
    carX = 900;
    backgroundImageSub = loadImage("suburbanMap/SuburbanMap-3.png");
  } else if (whichSectionOnMap === 9 && carX <= 0 && carY > 354 && carY < 594) {
    whichSectionOnMap += 1;
    carX = 900;
    backgroundImageSub = loadImage("suburbanMap/SuburbanMap-2.png");
  } else if (whichSectionOnMap === 10 && carX <= 0 && carY > 38 && carY < 284) {
    whichSectionOnMap += 1;
    carX = 900;
    backgroundImageSub = loadImage("suburbanMap/SuburbanMap-1.png");
  } else if (
    whichSectionOnMap === 11 &&
    carY >= 712 &&
    carX > 215 &&
    carX < 463
  ) {
    whichSectionOnMap += 1;
    carY = 0;
    backgroundImageSub = loadImage("suburbanMap/SuburbanMap-5.png");
  } else if (
    whichSectionOnMap === 12 &&
    carY >= 712 &&
    carX > 214 &&
    carX < 463
  ) {
    whichSectionOnMap += 1;
    carY = 0;
    backgroundImageSub = loadImage("suburbanMap/SuburbanMap-9.png");
  } else if (
    whichSectionOnMap === 13 &&
    carX > 570 &&
    203 < carY &&
    carY < 435
  ) {
    currentScreen = "resultScreen";
  }
}

function suburbanBoundries() {
  strokeWeight(3);
  noFill();
  if (whichSectionOnMap === 1) {
    line(496, 0, 497, 203);
    line(497, 203, 949, 203);
    line(253, 0, 253, 386);
    beginShape();
    vertex(253, 386);
    bezierVertex(258, 419, 283, 437, 307, 437);
    endShape();
    line(307, 437, 950, 437);
  } else if (whichSectionOnMap === 2) {
    line(0, 203, 366, 202);
    line(366, 202, 366, 0);
    line(0, 436, 505, 435);
    beginShape();
    vertex(505, 435);
    bezierVertex(561, 430, 599, 405, 606, 350);
    endShape();
    line(606, 350, 608, 0);
  } else if (whichSectionOnMap === 3) {
    line(609, 711, 607, 366);
    line(607, 366, 950, 399);
    line(365, 711, 363, 186);
    beginShape();
    vertex(363, 186);
    bezierVertex(362, 138, 393, 96, 463, 110);
    endShape();
    line(463, 110, 949, 154);
  } else if (whichSectionOnMap === 4) {
    line(0, 154, 261, 178);
    beginShape();
    vertex(261, 178);
    bezierVertex(320, 63, 404, 20, 504, 17);
    bezierVertex(705, 27, 786, 153, 790, 306);
    bezierVertex(784, 447, 716, 504, 619, 556);
    endShape();
    line(619, 556, 621, 711);
    line(0, 399, 260, 425);
    line(260, 425, 292, 475);
    line(292, 475, 428, 365);
    beginShape();
    vertex(428, 365);
    bezierVertex(383, 290, 426, 197, 506, 199);
    bezierVertex(630, 210, 633, 350, 559, 396);
    vertex(442, 387);
    vertex(312, 497);
    vertex(384, 547);
    vertex(383, 711);
    endShape();
  } else if (whichSectionOnMap === 5) {
    line(384, 0, 382, 344);
    beginShape();
    vertex(382, 344);
    bezierVertex(384, 386, 411, 435, 457, 448);
    vertex(950, 573);
    endShape();
    line(622, 0, 624, 234);
    line(624, 234, 950, 320);
  } else if (whichSectionOnMap === 6) {
    line(0, 320, 90, 344);
    line(90, 344, 631, 368);
    line(631, 368, 650, 0);
    line(0, 573, 40, 583);
    line(40, 583, 673, 616);
    beginShape();
    vertex(673, 616);
    bezierVertex(804, 603, 859, 532, 876, 434);
    vertex(897, 0);
    endShape();
  } else if (whichSectionOnMap === 7) {
    line(649, 711, 668, 334);
    line(668, 334, 278, 211);
    beginShape();
    vertex(278, 211);
    bezierVertex(230, 198, 213, 170, 212, 126);
    vertex(213, 0);
    endShape();
    line(456, 0, 456, 13);
    line(456, 13, 786, 121);
    beginShape();
    vertex(786, 121);
    bezierVertex(868, 144, 919, 209, 917, 291);
    vertex(897, 712);
    endShape();
  } else if (whichSectionOnMap === 8) {
    line(458, 712, 458, 654);
    line(458, 654, 565, 654);
    beginShape();
    vertex(565, 654);
    bezierVertex(641, 651, 708, 580, 719, 496);
    vertex(718, 139);
    bezierVertex(716, 96, 685, 69, 644, 68);
    vertex(0, 68);
    endShape();
    line(0, 312, 474, 310);
    line(474, 310, 474, 403);
    beginShape();
    vertex(474, 403);
    bezierVertex(311, 394, 221, 463, 218, 571);
    vertex(216, 713);
    endShape();
  } else if (whichSectionOnMap === 9) {
    line(0, 595, 553, 594);
    beginShape();
    vertex(553, 594);
    bezierVertex(646, 585, 707, 518, 715, 439);
    vertex(714, 313);
    vertex(950, 312);
    endShape();
    line(0, 354, 470, 356);
    line(470, 356, 470, 246);
    beginShape();
    vertex(470, 246);
    bezierVertex(480, 152, 527, 87, 632, 67);
    vertex(951, 67);
    endShape();
  } else if (whichSectionOnMap === 10) {
    line(0, 38, 355, 44);
    beginShape();
    vertex(355, 44);
    bezierVertex(409, 44, 454, 83, 454, 136);
    vertex(454, 352);
    vertex(950, 354);
    endShape();
    line(950, 595, 328, 596);
    beginShape();
    vertex(328, 596);
    bezierVertex(249, 606, 213, 572, 208, 511);
    vertex(210, 290);
    vertex(0, 284);
    endShape();
  } else if (whichSectionOnMap === 11) {
    line(463, 713, 431, 485);
    line(431, 485, 432, 270);
    line(432, 270, 950, 282);
    beginShape();
    vertex(216, 713);
    vertex(189, 515);
    vertex(190, 175);
    bezierVertex(205, 73, 300, 3, 460, 27);
    vertex(950, 37);
    endShape();
  } else if (whichSectionOnMap === 12) {
    line(465, 0, 494, 209);
    line(494, 209, 496, 712);
    line(216, 0, 252, 256);
    line(252, 256, 252, 713);
  }
}

function suburbanCarSetup() {
  carX = 460;
  carY = 360;
  carScale = 0.35;
}

//the following 7 lines of code were done wiht the help of ChatGPT
function callOnceCarSuburban() {
  if (!called) {
    suburbanCarSetup();
    called = true;
  }
}

function suburbanMap() {
  background(backgroundImageSub);
  suburbanBoundries();
  suburbanConditions();
  callOnceCarSuburban();
  //the following line of code were done with the help of ChatGPT
  [carX, carY, carRotation, speed] = carControls(
    carX,
    carY,
    carRotation,
    speed,
    acceleration
  );

  if (currentCar === "bmw") {
    bmw(carX, carY, carRotation);
  } else if (currentCar === "rx7") {
    rx7(carX, carY, carRotation);
  } else if (currentCar === "supra") {
    supra(carX, carY, carRotation);
  }

   if (detectCollision()) {
    currentScreen = "crashScreen";
  }
}

function detectCollision() {
    // Define the bounding box of the car
    let carXMin = carX - 185 * carScale;
    let carXMax = carX + 185 * carScale;
    let carYMin = carY - 82 * carScale;
    let carYMax = carY + 82 * carScale;
  
    // Iterate over the pixels within the bounding box
    for (let i = carXMin; i <= carXMax; i++) {
      for (let j = carYMin; j <= carYMax; j++) {
        let pixelColor = get(i, j);
  
        // Check if the pixel color is red
        if (pixelColor[0] === 0 && pixelColor[1] === 0 && pixelColor[2] === 0) {
          return true; // Collision detected
        }
      } 
    } 
    
    return false; // No collision
  }


/* content for the result screen */
function highscore() {
  fill(240);
  stroke(0, 197, 197);
  strokeWeight(15);

  rect(200, 80, 550, 400, 50);

  fill(236, 0, 140);
  stroke(236, 0, 140);
  strokeWeight(2);
  textSize(40);
  text("HIGH SCORES", 340, 154);
  line(300, 166, 650, 166);

  fill(236, 0, 140);
  stroke(236, 0, 140);
  strokeWeight(0);
  textSize(30);
  text("1.", 225, 224);
  text("2.", 225, 274);
  text("3.", 225, 324);
  text("4.", 225, 374);
  text("5.", 225, 424);

  text("best", 300, 224);
  text("second best", 300, 274);
  text("third place", 300, 324);
  text("fourth..", 300, 374);
  text("atleast I made it", 300, 424);

  text("00:00:00", 600, 224);
  text("00:00:00", 600, 274);
  text("00:00:00", 600, 324);
  text("00:00:00", 600, 374);
  text("00:00:00", 600, 424);
}
function retryButton() {
  fill(240);
  stroke(0, 197, 197);
  strokeWeight(15);

  rect(200, 550, 250, 120, 40);

  fill(236, 0, 140);
  stroke(236, 0, 140);
  strokeWeight(1);
  textSize(40);
  text("RETRY", 257, 624);

  if (
    mouseIsPressed & (mouseX >= 200) &&
    mouseX <= 450 &&
    mouseY >= 550 &&
    mouseY <= 670
  ) {
    if (mapSelected === "suburban") {
      currentScreen = "suburbanMap";
      whichSectionOnMap = 1;
      suburbanCarSetup();
      backgroundImageSub = loadImage("suburbanMap/SuburbanMap-9.png");
      carRotation = PI;
    } else if (mapSelected === "city") {
      currentScreen = "cityMap";
      whichBackgroundCity = 1;
      backgroundImageCity = loadImage("map-city/cityMap1.png");
      cityCarSetup();
      carRotation = PI;
    }
  }
}

function goBackToStartButton() {
  fill(240);
  stroke(0, 197, 197);
  strokeWeight(15);

  rect(500, 550, 250, 120, 40);

  fill(236, 0, 140);
  stroke(236, 0, 140);
  strokeWeight(1);
  textSize(40);
  text("GO BACK", 530, 624);

  if (
    mouseIsPressed & (mouseX >= 500) &&
    mouseX <= 750 &&
    mouseY >= 550 &&
    mouseY <= 670
  ) {
    currentScreen = "startScreen";
  }
}

function resultScreen() {
  highscore();
  retryButton();
  goBackToStartButton();
}

/* content of the start screen */
function crashBox() {
  fill(240);
  stroke(0, 197, 197);
  strokeWeight(15);

  rect(200, 180, 550, 300, 50);

  fill(236, 0, 140);
  stroke(236, 0, 140);
  strokeWeight(2);
  textSize(60);
  text("YOU CRASHED", 255, 344);
}

function crashScreen() {
  crashBox();
  retryButton();
  goBackToStartButton();
}

function draw() {
  if (currentScreen === "preScreen") {
    clear();
    preScreen();
  } else if (currentScreen === "startScreen") {
    startScreen();
  } else if (currentScreen === "carSelection") {
    carSelection();
  } else if (currentScreen === "mapSelection") {
    mapSelection();
  } else if (currentScreen === "cityMap") {
    cityMap();
  } else if (currentScreen === "suburbanMap") {
    suburbanMap();
  } else if (currentScreen === "resultScreen") {
    resultScreen();
  } else if (currentScreen === "crashScreen") {
    crashScreen();
  }
}
