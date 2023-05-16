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
let mapSelected = "";

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

let currentScreen = "preScreen";

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

function startScreen() {
  //https://p5js.org/examples/image-background-image.html
  background(startBg);
  image(carStartImg, 50, 450, 600, 248);
  image(logo, 0, 0, 700, 450);

  //play button
  playButton();
  carCustomButton();
  mapCustomButton();
  
  buttonPlay.mousePressed(/* add here function to start the game */);
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
//need to finish this screen -- button condition added later
/* content for map selection */
let mapIsChosen = false;
let doneGoBack = false;
let buttonCity = null;

function cityMapButton() {
  if (buttonCity != null) {
    buttonCity.remove();
  }
  buttonCity = createButton("Tokyo City");
  buttonCity.size(400, 300);
  buttonCity.style("borderRadius", "30px");
  buttonCity.position(windowWidth / 2 +20, 200);
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
  buttonCity.mousePressed(function (){
    mapSelected = "City";
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
    buttonSuburban.style("background-image", "url('suburbanMap/SuburbanMap-1.png')");
    buttonSuburban.style("background-repeat", "no-repeat");
    buttonSuburban.style("background-size", "cover");
  });
  buttonSuburban.mousePressed(function (){
    mapSelected = "Suburban";
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
  buttonDone.mousePressed(function(){
    currentScreen="startScreen";
    buttonSuburban.remove();
    buttonCity.remove();
    buttonDone.remove();
  });
  buttonDone.mouseOut(function () {
    buttonDone.style("background-color", "#ec008c");
  });
}
let currentMap = "";
function mapSelection() {
  background(mapSelectBg);
  suburbanMapButton();
  cityMapButton();
  selectButton();
  /* if one map is selected - > done button show up */

}
let carX = 260;
let carY = 180;
let carScale = 1;
function bmw() {
  strokeWeight(1 * carScale);
  //Base Body
  fill(217, 109, 37);
  beginShape();
  vertex(carX - 184 * carScale, carY - 37 * carScale);
  vertex(carX - 180 * carScale, carY - 41 * carScale);
  vertex(carX - 174 * carScale, carY - 63 * carScale);
  vertex(carX - 164 * carScale, carY - 70 * carScale);
  vertex(carX - 159 * carScale, carY - 76 * carScale);
  vertex(carX - 94 * carScale, carY - 75 * carScale);
  vertex(carX - 79 * carScale, carY - 71 * carScale);
  vertex(carX + 24 * carScale, carY - 71 * carScale);
  vertex(carX + 69 * carScale, carY - 78 * carScale);
  vertex(carX + 126 * carScale, carY - 78 * carScale);
  vertex(carX + 150 * carScale, carY - 68 * carScale);
  vertex(carX + 174 * carScale, carY - 65 * carScale);
  bezierVertex(
    carX + 178 * carScale,
    carY - 62 * carScale,
    carX + 182 * carScale,
    carY - 61 * carScale,
    carX + 181 * carScale,
    carY - 53 * carScale
  );
  vertex(carX + 181 * carScale, carY + 59 * carScale);
  bezierVertex(
    carX + 181 * carScale,
    carY + 67 * carScale,
    carX + 178 * carScale,
    carY + 70 * carScale,
    carX + 174 * carScale,
    carY + 70 * carScale
  );
  vertex(carX + 150 * carScale, carY + 73 * carScale);
  vertex(carX + 126 * carScale, carY + 82 * carScale);
  vertex(carX + 69 * carScale, carY + 82 * carScale);
  vertex(carX + 24 * carScale, carY + 76 * carScale);
  vertex(carX - 79 * carScale, carY + 76 * carScale);
  vertex(carX - 94 * carScale, carY + 80 * carScale);
  vertex(carX - 159 * carScale, carY + 81 * carScale);
  vertex(carX - 164 * carScale, carY + 76 * carScale);
  vertex(carX - 174 * carScale, carY + 69 * carScale);
  vertex(carX - 180 * carScale, carY + 49 * carScale);
  vertex(carX - 184 * carScale, carY + 45 * carScale);
  bezierVertex(
    carX - 189 * carScale,
    carY + 24 * carScale,
    carX - 189 * carScale,
    carY - 15 * carScale,
    carX - 184 * carScale,
    carY - 37 * carScale
  );
  endShape();

  //Headlights
  push();
  fill(255, 242, 215);
  beginShape();
  vertex(carX - 162 * carScale, carY - 72 * carScale);
  vertex(carX - 174 * carScale, carY - 63 * carScale);
  vertex(carX - 178 * carScale, carY - 47 * carScale);
  vertex(carX - 164 * carScale, carY - 48 * carScale);
  vertex(carX - 162 * carScale, carY - 72 * carScale);
  endShape();

  beginShape();
  vertex(carX - 162 * carScale, carY + 78 * carScale);
  vertex(carX - 174 * carScale, carY + 69 * carScale);
  vertex(carX - 178 * carScale, carY + 54 * carScale);
  vertex(carX - 164 * carScale, carY + 54 * carScale);
  vertex(carX - 162 * carScale, carY + 78 * carScale);
  endShape();
  pop();

  //Hood
  beginShape();
  vertex(carX + 125 * carScale, carY - 63 * carScale);
  bezierVertex(
    carX - 29 * carScale,
    carY - 66 * carScale,
    carX - 83 * carScale,
    carY - 66 * carScale,
    carX - 155 * carScale,
    carY - 63 * carScale
  );
  bezierVertex(
    carX - 165 * carScale,
    carY - 63 * carScale,
    carX - 168 * carScale,
    carY - 62 * carScale,
    carX - 169 * carScale,
    carY - 52 * carScale
  );
  vertex(carX - 174 * carScale, carY - 28 * carScale);
  vertex(carX - 179 * carScale, carY - 24 * carScale);
  bezierVertex(
    carX - 181 * carScale,
    carY - 10 * carScale,
    carX - 181 * carScale,
    carY + 10 * carScale,
    carX - 179 * carScale,
    carY + 29 * carScale
  );
  vertex(carX - 174 * carScale, carY + 32 * carScale);
  vertex(carX - 169 * carScale, carY + 60 * carScale);
  bezierVertex(
    carX - 168 * carScale,
    carY + 66 * carScale,
    carX - 165 * carScale,
    carY + 67 * carScale,
    carX - 155 * carScale,
    carY + 67 * carScale
  );
  bezierVertex(
    carX - 83 * carScale,
    carY + 70 * carScale,
    carX + 29 * carScale,
    carY + 70 * carScale,
    carX + 125 * carScale,
    carY + 70 * carScale
  );
  endShape();

  //Detail of Hood
  line(
    carX - 174 * carScale,
    carY - 28 * carScale,
    carX - 89 * carScale,
    carY - 38 * carScale
  );
  line(
    carX - 174 * carScale,
    carY + 32 * carScale,
    carX - 89 * carScale,
    carY + 42 * carScale
  );

  //Backlights
  push();
  fill(255, 0, 0);
  beginShape();
  vertex(carX + 177 * carScale, carY - 63 * carScale);
  vertex(carX + 177 * carScale, carY - 41 * carScale);
  vertex(carX + 181 * carScale, carY - 41 * carScale);
  vertex(carX + 181 * carScale, carY - 56 * carScale);
  bezierVertex(
    carX + 181 * carScale,
    carY - 62 * carScale,
    carX + 179 * carScale,
    carY - 62 * carScale,
    carX + 177 * carScale,
    carY - 63 * carScale
  );
  endShape();

  beginShape();
  vertex(carX + 177 * carScale, carY + 70 * carScale);
  vertex(carX + 177 * carScale, carY + 48 * carScale);
  vertex(carX + 181 * carScale, carY + 48 * carScale);
  vertex(carX + 181 * carScale, carY + 63 * carScale);
  bezierVertex(
    carX + 181 * carScale,
    carY + 69 * carScale,
    carX + 179 * carScale,
    carY + 69 * carScale,
    carX + 177 * carScale,
    carY + 70 * carScale
  );
  endShape();
  pop();

  //Trunk
  beginShape();
  vertex(carX + 164 * carScale, carY - 49 * carScale);
  vertex(carX + 186 * carScale, carY - 48 * carScale);
  bezierVertex(
    carX + 192 * carScale,
    carY - 23 * carScale,
    carX + 192 * carScale,
    carY + 22 * carScale,
    carX + 186 * carScale,
    carY + 55 * carScale
  );
  vertex(carX + 164 * carScale, carY + 56 * carScale);
  endShape();

  //Windshield
  push();
  fill(35, 31, 32);
  beginShape();
  vertex(carX - 79 * carScale, carY - 55 * carScale);
  vertex(carX - 35 * carScale, carY - 45 * carScale);
  bezierVertex(
    carX - 40 * carScale,
    carY - 20 * carScale,
    carX - 40 * carScale,
    carY + 23 * carScale,
    carX - 35 * carScale,
    carY + 49 * carScale
  );
  vertex(carX - 79 * carScale, carY + 59 * carScale);
  bezierVertex(
    carX - 94 * carScale,
    carY + 39 * carScale,
    carX - 94 * carScale,
    carY - 42 * carScale,
    carX - 79 * carScale,
    carY - 55 * carScale
  );
  endShape();

  //long window right
  beginShape();
  vertex(carX - 21 * carScale, carY - 47 * carScale);
  vertex(carX + 77 * carScale, carY - 45 * carScale);
  vertex(carX + 106 * carScale, carY - 56 * carScale);
  vertex(carX - 55 * carScale, carY - 60 * carScale);
  vertex(carX - 21 * carScale, carY - 47 * carScale);
  endShape();

  //long window left
  beginShape();
  vertex(carX - 21 * carScale, carY + 51 * carScale);
  vertex(carX + 77 * carScale, carY + 49 * carScale);
  vertex(carX + 106 * carScale, carY + 60 * carScale);
  vertex(carX - 55 * carScale, carY + 64 * carScale);
  vertex(carX - 21 * carScale, carY + 51 * carScale);
  endShape();

  //Backwindow
  beginShape();
  vertex(carX + 84 * carScale, carY - 33 * carScale);
  vertex(carX + 128 * carScale, carY - 46 * carScale);
  bezierVertex(
    carX + 142 * carScale,
    carY - 21 * carScale,
    carX + 142 * carScale,
    carY + 30 * carScale,
    carX + 128 * carScale,
    carY + 50 * carScale
  );
  vertex(carX + 84 * carScale, carY + 37 * carScale);
  bezierVertex(
    carX + 87 * carScale,
    carY + 27 * carScale,
    carX + 87 * carScale,
    carY - 24 * carScale,
    carX + 84 * carScale,
    carY - 33 * carScale
  );
  endShape();
  pop();

  //mirror right
  beginShape();
  vertex(carX - 55 * carScale, carY - 55 * carScale);
  vertex(carX - 54 * carScale, carY - 66 * carScale);
  vertex(carX - 49 * carScale, carY - 64 * carScale);
  vertex(carX - 47 * carScale, carY - 79 * carScale);
  bezierVertex(
    carX - 61 * carScale,
    carY - 78 * carScale,
    carX - 63 * carScale,
    carY - 66 * carScale,
    carX - 63 * carScale,
    carY - 59 * carScale
  );
  bezierVertex(
    carX - 63 * carScale,
    carY - 56 * carScale,
    carX - 59 * carScale,
    carY - 54 * carScale,
    carX - 55 * carScale,
    carY - 55 * carScale
  );
  endShape();

  //mirror left
  beginShape();
  vertex(carX - 55 * carScale, carY + 59 * carScale);
  vertex(carX - 54 * carScale, carY + 70 * carScale);
  vertex(carX - 49 * carScale, carY + 68 * carScale);
  vertex(carX - 47 * carScale, carY + 83 * carScale);
  bezierVertex(
    carX - 61 * carScale,
    carY + 82 * carScale,
    carX - 63 * carScale,
    carY + 70 * carScale,
    carX - 63 * carScale,
    carY + 63 * carScale
  );
  bezierVertex(
    carX - 63 * carScale,
    carY + 60 * carScale,
    carX - 59 * carScale,
    carY + 58 * carScale,
    carX - 55 * carScale,
    carY + 59 * carScale
  );
  endShape();
}
function rx7() {
  strokeWeight(1 * carScale);
  //BaseBody
  fill("#ed11a4");
  beginShape();
  vertex(carX - 187 * carScale, carY - 67 * carScale);
  bezierVertex(
    carX - 173 * carScale,
    carY - 75 * carScale,
    carX - 154 * carScale,
    carY - 80 * carScale,
    carX - 125 * carScale,
    carY - 78 * carScale
  );
  bezierVertex(
    carX - 62 * carScale,
    carY - 72 * carScale,
    carX + 9 * carScale,
    carY - 70 * carScale,
    carX + 100 * carScale,
    carY - 75 * carScale
  );
  bezierVertex(
    carX + 124 * carScale,
    carY - 77 * carScale,
    carX + 165 * carScale,
    carY - 72 * carScale,
    carX + 180 * carScale,
    carY - 69 * carScale
  );
  bezierVertex(
    carX + 192 * carScale,
    carY - 66 * carScale,
    carX + 194 * carScale,
    carY - 52 * carScale,
    carX + 194 * carScale,
    carY
  );

  bezierVertex(
    carX + 194 * carScale,
    carY + 52 * carScale,
    carX + 192 * carScale,
    carY + 66 * carScale,
    carX + 180 * carScale,
    carY + 69 * carScale
  );
  bezierVertex(
    carX + 165 * carScale,
    carY + 72 * carScale,
    carX + 124 * carScale,
    carY + 77 * carScale,
    carX + 100 * carScale,
    carY + 75 * carScale
  );
  bezierVertex(
    carX + 9 * carScale,
    carY + 70 * carScale,
    carX - 62 * carScale,
    carY + 72 * carScale,
    carX - 125 * carScale,
    carY + 78 * carScale
  );
  bezierVertex(
    carX - 154 * carScale,
    carY + 80 * carScale,
    carX - 173 * carScale,
    carY + 75 * carScale,
    carX - 187 * carScale,
    carY + 67 * carScale
  );

  bezierVertex(
    carX - 213 * carScale,
    carY + 25 * carScale,
    carX - 213 * carScale,
    carY - 35 * carScale,
    carX - 187 * carScale,
    carY - 67 * carScale
  );
  endShape();

  //mirror right
  beginShape();
  vertex(carX - 68 * carScale, carY - 70 * carScale);
  bezierVertex(
    carX - 67 * carScale,
    carY - 81 * carScale,
    carX - 60 * carScale,
    carY - 87 * carScale,
    carX - 53 * carScale,
    carY - 91 * carScale
  );
  vertex(carX - 57 * carScale, carY - 75 * carScale);
  vertex(carX - 59 * carScale, carY - 75 * carScale);
  vertex(carX - 60 * carScale, carY - 67 * carScale);
  bezierVertex(
    carX - 65 * carScale,
    carY - 68 * carScale,
    carX - 66 * carScale,
    carY - 68 * carScale,
    carX - 68 * carScale,
    carY - 70 * carScale
  );
  endShape();

  //mirror left
  beginShape();
  vertex(carX - 68 * carScale, carY + 70 * carScale);
  bezierVertex(
    carX - 67 * carScale,
    carY + 81 * carScale,
    carX - 60 * carScale,
    carY + 87 * carScale,
    carX - 53 * carScale,
    carY + 91 * carScale
  );
  vertex(carX - 57 * carScale, carY + 75 * carScale);
  vertex(carX - 59 * carScale, carY + 75 * carScale);
  vertex(carX - 60 * carScale, carY + 67 * carScale);
  bezierVertex(
    carX - 65 * carScale,
    carY + 68 * carScale,
    carX - 66 * carScale,
    carY + 68 * carScale,
    carX - 68 * carScale,
    carY + 70 * carScale
  );
  endShape();

  //spoiler
  beginShape();
  vertex(carX + 205 * carScale, carY - 57 * carScale);
  bezierVertex(
    carX + 210 * carScale,
    carY - 25 * carScale,
    carX + 210 * carScale,
    carY + 25 * carScale,
    carX + 205 * carScale,
    carY + 57 * carScale
  );
  vertex(carX + 180 * carScale, carY + 57 * carScale);
  bezierVertex(
    carX + 185 * carScale,
    carY + 25 * carScale,
    carX + 185 * carScale,
    carY - 25 * carScale,
    carX + 180 * carScale,
    carY - 57 * carScale
  );
  vertex(carX + 205 * carScale, carY - 57 * carScale);
  endShape();

  beginShape();
  vertex(carX + 160 * carScale, carY - 60 * carScale);
  vertex(carX + 210 * carScale, carY - 60 * carScale);
  vertex(carX + 210 * carScale, carY - 55 * carScale);
  vertex(carX + 160 * carScale, carY - 55 * carScale);
  endShape();

  beginShape();
  vertex(carX + 160 * carScale, carY + 60 * carScale);
  vertex(carX + 210 * carScale, carY + 60 * carScale);
  vertex(carX + 210 * carScale, carY + 55 * carScale);
  vertex(carX + 160 * carScale, carY + 55 * carScale);
  endShape();

  //hood
  line(
    carX - 184 * carScale,
    carY - 41 * carScale,
    carX - 186 * carScale,
    carY + 41 * carScale
  );
  line(
    carX - 156 * carScale,
    carY - 63 * carScale,
    carX - 68 * carScale,
    carY - 61 * carScale
  );
  line(
    carX - 156 * carScale,
    carY + 63 * carScale,
    carX - 68 * carScale,
    carY + 61 * carScale
  );

  //details on hood
  push();
  noFill();
  beginShape();
  vertex(carX - 110 * carScale, carY - 33 * carScale);
  vertex(carX - 150 * carScale, carY - 31 * carScale);
  vertex(carX - 151 * carScale, carY - 10 * carScale);
  vertex(carX - 107 * carScale, carY - 8 * carScale);
  endShape();

  beginShape();
  vertex(carX - 107 * carScale, carY + 8 * carScale);
  vertex(carX - 151 * carScale, carY + 10 * carScale);
  vertex(carX - 150 * carScale, carY + 31 * carScale);
  vertex(carX - 110 * carScale, carY + 33 * carScale);
  endShape();

  //details in the back
  beginShape();
  vertex(carX + 91 * carScale, carY + 62 * carScale);
  bezierVertex(
    carX + 119 * carScale,
    carY + 65 * carScale,
    carX + 133 * carScale,
    carY + 65 * carScale,
    carX + 148 * carScale,
    carY + 59 * carScale
  );
  endShape();

  beginShape();
  vertex(carX + 91 * carScale, carY - 62 * carScale);
  bezierVertex(
    carX + 119 * carScale,
    carY - 65 * carScale,
    carX + 133 * carScale,
    carY - 65 * carScale,
    carX + 148 * carScale,
    carY - 59 * carScale
  );
  endShape();
  pop();

  //headlights

  fill(0, 0, 0, 80);
  beginShape();
  vertex(carX - 155 * carScale, carY - 67 * carScale);
  vertex(carX - 156 * carScale, carY - 42 * carScale);
  vertex(carX - 187 * carScale, carY - 41 * carScale);
  bezierVertex(
    carX - 185 * carScale,
    carY - 65 * carScale,
    carX - 181 * carScale,
    carY - 66 * carScale,
    carX - 155 * carScale,
    carY - 67 * carScale
  );
  endShape();

  beginShape();
  vertex(carX - 155 * carScale, carY + 67 * carScale);
  vertex(carX - 156 * carScale, carY + 42 * carScale);
  vertex(carX - 187 * carScale, carY + 41 * carScale);
  bezierVertex(
    carX - 185 * carScale,
    carY + 65 * carScale,
    carX - 181 * carScale,
    carY + 66 * carScale,
    carX - 155 * carScale,
    carY + 67 * carScale
  );
  endShape();

  //windshield
  push();
  fill(35, 31, 32);
  beginShape();
  vertex(carX - 64 * carScale, carY - 63 * carScale);
  vertex(carX - 30 * carScale, carY - 48 * carScale);
  bezierVertex(
    carX - 40 * carScale,
    carY - 17 * carScale,
    carX - 40 * carScale,
    carY + 17 * carScale,
    carX - 30 * carScale,
    carY + 48 * carScale
  );
  vertex(carX - 64 * carScale, carY + 63 * carScale);
  bezierVertex(
    carX - 105 * carScale,
    carY + 45 * carScale,
    carX - 105 * carScale,
    carY - 55 * carScale,
    carX - 64 * carScale,
    carY - 63 * carScale
  );
  endShape();

  //window right
  beginShape();
  vertex(carX - 57 * carScale, carY - 65 * carScale);
  vertex(carX - 16 * carScale, carY - 49 * carScale);
  bezierVertex(
    carX + 32 * carScale,
    carY - 42 * carScale,
    carX + 45 * carScale,
    carY - 54 * carScale,
    carX + 57 * carScale,
    carY - 64 * carScale
  );
  vertex(carX - 57 * carScale, carY - 65 * carScale);
  endShape();

  //window left
  beginShape();
  vertex(carX - 57 * carScale, carY + 65 * carScale);
  vertex(carX - 16 * carScale, carY + 49 * carScale);
  bezierVertex(
    carX + 32 * carScale,
    carY + 42 * carScale,
    carX + 45 * carScale,
    carY + 54 * carScale,
    carX + 57 * carScale,
    carY + 64 * carScale
  );
  vertex(carX - 57 * carScale, carY + 65 * carScale);
  endShape();

  //back window
  beginShape();
  vertex(carX + 68 * carScale, carY - 43 * carScale);
  vertex(carX + 91 * carScale, carY - 58 * carScale);
  bezierVertex(
    carX + 165 * carScale,
    carY - 43 * carScale,
    carX + 165 * carScale,
    carY + 43 * carScale,
    carX + 91 * carScale,
    carY + 58 * carScale
  );
  vertex(carX + 68 * carScale, carY + 43 * carScale);
  vertex(carX + 68 * carScale, carY - 43 * carScale);
  endShape();
  pop();

  push();
  noFill();
  beginShape();
  vertex(carX + 62 * carScale, carY - 43 * carScale);
  vertex(carX + 91 * carScale, carY - 62 * carScale);
  bezierVertex(
    carX + 172 * carScale,
    carY - 43 * carScale,
    carX + 172 * carScale,
    carY + 43 * carScale,
    carX + 91 * carScale,
    carY + 62 * carScale
  );
  vertex(carX + 62 * carScale, carY + 43 * carScale);
  vertex(carX + 62 * carScale, carY - 43 * carScale);
  endShape();
  pop();

  //mirror right
  beginShape();
  vertex(carX - 68 * carScale, carY - 70 * carScale);
  bezierVertex(
    carX - 67 * carScale,
    carY - 81 * carScale,
    carX - 60 * carScale,
    carY - 87 * carScale,
    carX - 53 * carScale,
    carY - 91 * carScale
  );
  vertex(carX - 57 * carScale, carY - 75 * carScale);
  vertex(carX - 59 * carScale, carY - 75 * carScale);
  vertex(carX - 60 * carScale, carY - 67 * carScale);
  bezierVertex(
    carX - 65 * carScale,
    carY - 68 * carScale,
    carX - 66 * carScale,
    carY - 68 * carScale,
    carX - 68 * carScale,
    carY - 70 * carScale
  );
  endShape();

  //mirror left
  beginShape();
  vertex(carX - 68 * carScale, carY + 70 * carScale);
  bezierVertex(
    carX - 67 * carScale,
    carY + 81 * carScale,
    carX - 60 * carScale,
    carY + 87 * carScale,
    carX - 53 * carScale,
    carY + 91 * carScale
  );
  vertex(carX - 57 * carScale, carY + 75 * carScale);
  vertex(carX - 59 * carScale, carY + 75 * carScale);
  vertex(carX - 60 * carScale, carY + 67 * carScale);
  bezierVertex(
    carX - 65 * carScale,
    carY + 68 * carScale,
    carX - 66 * carScale,
    carY + 68 * carScale,
    carX - 68 * carScale,
    carY + 70 * carScale
  );
  endShape();
}
function supra() {
  //outline
  beginShape();
  stroke(0);
  fill(0, 255, 0);
  strokeWeight(1);
  vertex(carX - 215 * carScale, carY);
  bezierVertex(
    carX - 215 * carScale,
    carY - 30 * carScale,
    carX - 210 * carScale,
    carY - 50 * carScale,
    carX - 186 * carScale,
    carY - 70 * carScale
  );
  bezierVertex(
    carX - 185 * carScale,
    carY - 72 * carScale,
    carX - 178 * carScale,
    carY - 73 * carScale,
    carX - 175 * carScale,
    carY - 76 * carScale
  );
  bezierVertex(
    carX - 173 * carScale,
    carY - 78 * carScale,
    carX - 165 * carScale,
    carY - 81 * carScale,
    carX - 157 * carScale,
    carY - 86 * carScale
  );
  bezierVertex(
    carX - 157 * carScale,
    carY - 87 * carScale,
    carX - 151 * carScale,
    carY - 87 * carScale,
    carX - 148 * carScale,
    carY - 88 * carScale
  );
  bezierVertex(
    carX + 40 * carScale,
    carY - 80 * carScale,
    carX + 40 * carScale,
    carY - 80 * carScale,
    carX + 73 * carScale,
    carY - 82 * carScale
  );
  bezierVertex(
    carX + 73 * carScale,
    carY - 82 * carScale,
    carX + 103 * carScale,
    carY - 87 * carScale,
    carX + 123 * carScale,
    carY - 87 * carScale
  );
  vertex(carX + 182 * carScale, carY - 65 * carScale);
  bezierVertex(
    carX + 182 * carScale,
    carY - 65 * carScale,
    carX + 185 * carScale,
    carY - 63 * carScale,
    carX + 190 * carScale,
    carY - 55 * carScale
  );
  bezierVertex(
    carX + 210 * carScale,
    carY - 40 * carScale,
    carX + 210 * carScale,
    carY,
    carX + 210 * carScale,
    carY
  );
  vertex(carX + 210 * carScale, carY);
  bezierVertex(
    carX + 210 * carScale,
    carY,
    carX + 210 * carScale,
    carY + 40 * carScale,
    carX + 190 * carScale,
    carY + 55 * carScale
  );
  bezierVertex(
    carX + 190 * carScale,
    carY + 55 * carScale,
    carX + 185 * carScale,
    carY + 63 * carScale,
    carX + 182 * carScale,
    carY + 65 * carScale
  );
  vertex(carX + 123 * carScale, carY + 87 * carScale);
  bezierVertex(
    carX + 103 * carScale,
    carY + 87 * carScale,
    carX + 73 * carScale,
    carY + 82 * carScale,
    carX + 73 * carScale,
    carY + 82 * carScale
  );
  bezierVertex(
    carX + 40 * carScale,
    carY + 80 * carScale,
    carX + 40 * carScale,
    carY + 80 * carScale,
    carX - 148 * carScale,
    carY + 90 * carScale
  );
  bezierVertex(
    carX - 148 * carScale,
    carY + 90 * carScale,
    carX - 159 * carScale,
    carY + 93 * carScale,
    carX - 171 * carScale,
    carY + 84 * carScale
  );
  bezierVertex(
    carX - 200 * carScale,
    carY + 70 * carScale,
    carX - 186 * carScale,
    carY + 70 * carScale,
    carX - 200 * carScale,
    carY + 60 * carScale
  );
  bezierVertex(
    carX - 210 * carScale,
    carY + 50 * carScale,
    carX - 215 * carScale,
    carY + 30 * carScale,
    carX - 215 * carScale,
    carY
  );
  endShape();

  //front window
  beginShape();
  fill(35, 31, 32);
  vertex(carX - 21 * carScale, carY - 50 * carScale);
  bezierVertex(
    carX - 25 * carScale,
    carY - 40 * carScale,
    carX - 25 * carScale,
    carY + 40 * carScale,
    carX - 21 * carScale,
    carY + 50 * carScale
  );
  bezierVertex(
    carX - 19 * carScale,
    carY + 56 * carScale,
    carX - 26 * carScale,
    carY + 59 * carScale,
    carX - 26 * carScale,
    carY + 60 * carScale
  );
  bezierVertex(
    carX - 77 * carScale,
    carY + 74 * carScale,
    carX - 77 * carScale,
    carY + 74 * carScale,
    carX - 77 * carScale,
    carY + 74 * carScale
  );
  bezierVertex(
    carX - 92 * carScale,
    carY + 58 * carScale,
    carX - 103 * carScale,
    carY + 26 * carScale,
    carX - 103 * carScale,
    carY
  );
  bezierVertex(
    carX - 103 * carScale,
    carY - 40 * carScale,
    carX - 77 * carScale,
    carY - 70 * carScale,
    carX - 77 * carScale,
    carY - 72 * carScale
  );
  vertex(carX - 26 * carScale, carY - 60 * carScale);
  bezierVertex(
    carX - 26 * carScale,
    carY - 60 * carScale,
    carX - 19 * carScale,
    carY - 56 * carScale,
    carX - 21 * carScale,
    carY - 50 * carScale
  );
  endShape();

  //back window
  beginShape();
  vertex(carX + 75 * carScale, carY);
  vertex(carX + 75 * carScale, carY + 42 * carScale);
  bezierVertex(
    carX + 76 * carScale,
    carY + 48 * carScale,
    carX + 82 * carScale,
    carY + 49 * carScale,
    carX + 91 * carScale,
    carY + 52 * carScale
  );
  bezierVertex(
    carX + 129 * carScale,
    carY + 60 * carScale,
    carX + 129 * carScale,
    carY + 57 * carScale,
    carX + 129 * carScale,
    carY + 58 * carScale
  );
  bezierVertex(
    carX + 148 * carScale,
    carY + 52 * carScale,
    carX + 144 * carScale,
    carY + 27 * carScale,
    carX + 146 * carScale,
    carY
  );
  bezierVertex(
    carX + 144 * carScale,
    carY - 27 * carScale,
    carX + 148 * carScale,
    carY - 52 * carScale,
    carX + 129 * carScale,
    carY - 58 * carScale
  );
  bezierVertex(
    carX + 129 * carScale,
    carY - 57 * carScale,
    carX + 129 * carScale,
    carY - 60 * carScale,
    carX + 91 * carScale,
    carY - 52 * carScale
  );
  bezierVertex(
    carX + 82 * carScale,
    carY - 49 * carScale,
    carX + 76 * carScale,
    carY - 48 * carScale,
    carX + 75 * carScale,
    carY - 32 * carScale
  );
  vertex(carX + 75 * carScale, carY);
  endShape();

  //side window right
  beginShape();
  vertex(carX - 66 * carScale, carY - 76 * carScale);
  bezierVertex(
    carX - 26 * carScale,
    carY - 62 * carScale,
    carX + 06 * carScale,
    carY - 60 * carScale,
    carX + 15 * carScale,
    carY - 58 * carScale
  );
  bezierVertex(
    carX + 52 * carScale,
    carY - 57 * carScale,
    carX + 54 * carScale,
    carY - 60 * carScale,
    carX + 75 * carScale,
    carY - 65 * carScale
  );
  bezierVertex(
    carX + 80 * carScale,
    carY - 67 * carScale,
    carX + 80 * carScale,
    carY - 69 * carScale,
    carX + 76 * carScale,
    carY - 72 * carScale
  );
  bezierVertex(
    carX + 50 * carScale,
    carY - 77 * carScale,
    carX - 12 * carScale,
    carY - 79 * carScale,
    carX - 66 * carScale,
    carY - 76 * carScale
  );
  endShape();

  //side window left
  beginShape();
  vertex(carX - 66 * carScale, carY + 76 * carScale);
  bezierVertex(
    carX - 26 * carScale,
    carY + 62 * carScale,
    carX + 06 * carScale,
    carY + 60 * carScale,
    carX + 15 * carScale,
    carY + 58 * carScale
  );
  bezierVertex(
    carX + 52 * carScale,
    carY + 57 * carScale,
    carX + 54 * carScale,
    carY + 60 * carScale,
    carX + 75 * carScale,
    carY + 65 * carScale
  );
  bezierVertex(
    carX + 80 * carScale,
    carY + 67 * carScale,
    carX + 80 * carScale,
    carY + 69 * carScale,
    carX + 76 * carScale,
    carY + 72 * carScale
  );
  bezierVertex(
    carX + 50 * carScale,
    carY + 77 * carScale,
    carX - 12 * carScale,
    carY + 79 * carScale,
    carX - 66 * carScale,
    carY + 76 * carScale
  );
  endShape();

  //wing
  beginShape();
  noFill();
  vertex(carX + 175 * carScale, carY + 51 * carScale);
  vertex(carX + 141 * carScale, carY + 66 * carScale);
  vertex(carX + 181 * carScale, carY + 62 * carScale);
  vertex(carX + 191 * carScale, carY + 54 * carScale);
  endShape();

  beginShape();
  vertex(carX + 175 * carScale, carY - 51 * carScale);
  vertex(carX + 141 * carScale, carY - 66 * carScale);
  vertex(carX + 181 * carScale, carY - 62 * carScale);
  vertex(carX + 191 * carScale, carY - 54 * carScale);
  endShape();

  beginShape();
  vertex(carX + 175 * carScale, carY - 51 * carScale);
  bezierVertex(
    carX + 186 * carScale,
    carY - 20 * carScale,
    carX + 186 * carScale,
    carY + 20 * carScale,
    carX + 175 * carScale,
    carY + 51 * carScale
  );
  endShape();

  //hood
  beginShape();
  noFill();
  vertex(carX - 77 * carScale, carY - 72 * carScale);
  bezierVertex(
    carX - 205 * carScale,
    carY - 95 * carScale,
    carX - 205 * carScale,
    carY - 33 * carScale,
    carX - 205 * carScale,
    carY
  );
  bezierVertex(
    carX - 205 * carScale,
    carY + 33 * carScale,
    carX - 205 * carScale,
    carY + 95 * carScale,
    carX - 77 * carScale,
    carY + 74 * carScale
  );
  endShape();

  beginShape();
  vertex(carX - 104 * carScale, carY - 45 * carScale);
  bezierVertex(
    carX - 122 * carScale,
    carY - 44 * carScale,
    carX - 170 * carScale,
    carY - 40 * carScale,
    carX - 182 * carScale,
    carY - 36 * carScale
  );
  endShape();

  beginShape();
  vertex(carX - 104 * carScale, carY + 45 * carScale);
  bezierVertex(
    carX - 122 * carScale,
    carY + 44 * carScale,
    carX - 170 * carScale,
    carY + 40 * carScale,
    carX - 182 * carScale,
    carY + 36 * carScale
  );
  endShape();

  beginShape();
  vertex(carX - 116 * carScale, carY - 18 * carScale);
  vertex(carX - 116 * carScale, carY + 18 * carScale);
  vertex(carX - 156 * carScale, carY + 21 * carScale);
  vertex(carX - 156 * carScale, carY - 21 * carScale);
  vertex(carX - 116 * carScale, carY - 18 * carScale);
  endShape();

  //headlights
  beginShape();
  fill(255, 242, 215);
  vertex(carX - 181 * carScale, carY - 68 * carScale);
  bezierVertex(
    carX - 195 * carScale,
    carY - 58 * carScale,
    carX - 201 * carScale,
    carY - 48 * carScale,
    carX - 206 * carScale,
    carY - 36 * carScale
  );
  bezierVertex(
    carX - 207 * carScale,
    carY - 33 * carScale,
    carX - 207 * carScale,
    carY - 25 * carScale,
    carX - 189 * carScale,
    carY - 35 * carScale
  );
  bezierVertex(
    carX - 184 * carScale,
    carY - 46 * carScale,
    carX - 181 * carScale,
    carY - 57 * carScale,
    carX - 179 * carScale,
    carY - 59 * carScale
  );
  bezierVertex(
    carX - 177 * carScale,
    carY - 64 * carScale,
    carX - 178 * carScale,
    carY - 66 * carScale,
    carX - 181 * carScale,
    carY - 68 * carScale
  );
  endShape();

  beginShape();
  vertex(carX - 181 * carScale, carY + 68 * carScale);
  bezierVertex(
    carX - 195 * carScale,
    carY + 58 * carScale,
    carX - 201 * carScale,
    carY + 48 * carScale,
    carX - 206 * carScale,
    carY + 36 * carScale
  );
  bezierVertex(
    carX - 207 * carScale,
    carY + 33 * carScale,
    carX - 203 * carScale,
    carY + 25 * carScale,
    carX - 189 * carScale,
    carY + 35 * carScale
  );
  bezierVertex(
    carX - 184 * carScale,
    carY + 46 * carScale,
    carX - 181 * carScale,
    carY + 57 * carScale,
    carX - 179 * carScale,
    carY + 59 * carScale
  );
  bezierVertex(
    carX - 177 * carScale,
    carY + 64 * carScale,
    carX - 178 * carScale,
    carY + 64 * carScale,
    carX - 181 * carScale,
    carY + 68 * carScale
  );
  endShape();

  //side-mirrors
  beginShape();
  fill(0, 255, 0);
  vertex(carX - 70 * carScale, carY - 81 * carScale);
  bezierVertex(
    carX - 65 * carScale,
    carY - 78 * carScale,
    carX - 65 * carScale,
    carY - 78 * carScale,
    carX - 62 * carScale,
    carY - 81 * carScale
  );
  vertex(carX - 56 * carScale, carY - 81 * carScale);
  vertex(carX - 48 * carScale, carY - 103 * carScale);
  bezierVertex(
    carX - 54 * carScale,
    carY - 110 * carScale,
    carX - 65 * carScale,
    carY - 92 * carScale,
    carX - 70 * carScale,
    carY - 81 * carScale
  );
  endShape();

  beginShape();
  vertex(carX - 70 * carScale, carY + 81 * carScale);
  bezierVertex(
    carX - 65 * carScale,
    carY + 78 * carScale,
    carX - 65 * carScale,
    carY + 78 * carScale,
    carX - 62 * carScale,
    carY + 81 * carScale
  );
  vertex(carX - 56 * carScale, carY + 81 * carScale);
  vertex(carX - 48 * carScale, carY + 103 * carScale);
  bezierVertex(
    carX - 54 * carScale,
    carY + 110 * carScale,
    carX - 65 * carScale,
    carY + 92 * carScale,
    carX - 70 * carScale,
    carY + 81 * carScale
  );
  endShape();

  //backdetails
  beginShape();
  noFill();
  vertex(carX + 79 * carScale, carY - 77 * carScale);
  bezierVertex(
    carX + 101 * carScale,
    carY - 80 * carScale,
    carX + 128 * carScale,
    carY - 78 * carScale,
    carX + 148 * carScale,
    carY - 71 * carScale
  );
  endShape();

  beginShape();
  noFill();
  vertex(carX + 79 * carScale, carY + 77 * carScale);
  bezierVertex(
    carX + 101 * carScale,
    carY + 80 * carScale,
    carX + 128 * carScale,
    carY + 78 * carScale,
    carX + 148 * carScale,
    carY + 71 * carScale
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
  if (whichBackgroundCity === 1 && 335 < carY && carY < 560 && carX >= 1200) {
    whichBackgroundCity += 1;
    backgroundImageCity = loadImage("map-city/cityMap2.png");
    carX = 5;
  } else if (
    whichBackgroundCity === 2 &&
    39 < carY &&
    carY < 267 &&
    carX >= 1200
  ) {
    whichBackgroundCity += 1;
    backgroundImageCity = loadImage("map-city/cityMap3.png");
    carX = 5;
  } else if (
    whichBackgroundCity === 3 &&
    448 < carX &&
    carX < 670 &&
    carY >= 900
  ) {
    whichBackgroundCity += 1;
    backgroundImageCity = loadImage("map-city/cityMap4.png");
    carY = 5;
  } else if (
    whichBackgroundCity === 4 &&
    256 < carY &&
    carY < 482 &&
    carX >= 1200
  ) {
    whichBackgroundCity += 1;
    backgroundImageCity = loadImage("map-city/cityMap5.png");
    carX = 5;
  } else if (
    whichBackgroundCity === 5 &&
    517 < carX &&
    carX < 745 &&
    carY <= 0
  ) {
    whichBackgroundCity += 1;
    backgroundImageCity = loadImage("map-city/cityMap6.png");
    carY = 900;
  } else if (
    whichBackgroundCity === 6 &&
    517 < carX &&
    carX < 745 &&
    carY <= 0
  ) {
    whichBackgroundCity += 1;
    backgroundImageCity = loadImage("map-city/cityMap7.png");
    carY = 900;
  } else if (
    whichBackgroundCity === 7 &&
    254 < carY &&
    carY < 479 &&
    carX >= 1200
  ) {
    whichBackgroundCity += 1;
    backgroundImageCity = loadImage("map-city/cityMap8.png");
    carX = 5;
  } else if (
    whichBackgroundCity === 8 &&
    530 < carX &&
    carX < 755 &&
    carY >= 900
  ) {
    whichBackgroundCity += 1;
    backgroundImageCity = loadImage("map-city/cityMap9.png");
    carY = 5;
  } else if (
    whichBackgroundCity === 9 &&
    320 < carY &&
    carY < 544 &&
    carX >= 1200
  ) {
    whichBackgroundCity += 1;
    backgroundImageCity = loadImage("map-city/cityMap10.png");
    carX = 5;
  } else if (
    whichBackgroundCity === 10 &&
    320 < carY &&
    carY < 544 &&
    carX >= 890
  ) {
    whichBackgroundCity += 1;
    backgroundImageCity = loadImage("map-city/cityMap10.png");
    isGameActive = false;
  }
}
function cityMap() {
  background();
  cityConditions();
}

/* content of suburban map */
let whichSectionOnMap = 1;

function suburbanConditions() {
  if (whichSectionOnMap === 1 && carX >= 1200 && 254 < carY && carY < 552) {
    whichSectionOnMap += 1;
    carX = 0;
    backgroundImageSub = loadImage("suburbanMap/SuburbanMap-10.png");
  } else if (whichSectionOnMap === 2 && carY <= 0 && carX > 463 && carX < 767) {
    whichSectionOnMap += 1;
    carY = 900;
    backgroundImageSub = loadImage("suburbanMap/SuburbanMap-6.png");
  } else if (
    whichSectionOnMap === 3 &&
    carX >= 1200 &&
    carY > 194 &&
    carY < 504
  ) {
    whichSectionOnMap += 1;
    carX = 0;
    backgroundImageSub = loadImage("suburbanMap/SuburbanMap-7.png");
  } else if (
    whichSectionOnMap === 4 &&
    carY >= 900 &&
    carX > 483 &&
    carX < 783
  ) {
    whichSectionOnMap += 1;
    carY = 0;
    backgroundImageSub = loadImage("suburbanMap/SuburbanMap-11.png");
  } else if (
    whichSectionOnMap === 5 &&
    carX >= 1200 &&
    carY > 404 &&
    carY < 724
  ) {
    whichSectionOnMap += 1;
    carX = 0;
    backgroundImageSub = loadImage("suburbanMap/SuburbanMap-12.png");
  } else if (
    whichSectionOnMap === 6 &&
    carY <= 0 &&
    carX > 821 &&
    carX < 1130
  ) {
    whichSectionOnMap += 1;
    carY = 900;
    backgroundImageSub = loadImage("suburbanMap/SuburbanMap-8.png");
  } else if (whichSectionOnMap === 7 && carY <= 0 && carX > 269 && carX < 575) {
    whichSectionOnMap += 1;
    carY = 900;
    backgroundImageSub = loadImage("suburbanMap/SuburbanMap-4.png");
  } else if (whichSectionOnMap === 8 && carX <= 0 && carY > 87 && carY < 395) {
    whichSectionOnMap += 1;
    carX = 1200;
    backgroundImageSub = loadImage("suburbanMap/SuburbanMap-3.png");
  } else if (whichSectionOnMap === 9 && carX <= 0 && carY > 448 && carY < 753) {
    whichSectionOnMap += 1;
    carX = 1200;
    backgroundImageSub = loadImage("suburbanMap/SuburbanMap-2.png");
  } else if (whichSectionOnMap === 10 && carX <= 0 && carY > 48 && carY < 360) {
    whichSectionOnMap += 1;
    carX = 1200;
    backgroundImageSub = loadImage("suburbanMap/SuburbanMap-1.png");
  } else if (
    whichSectionOnMap === 11 &&
    carY >= 900 &&
    carX > 266 &&
    carX < 574
  ) {
    whichSectionOnMap += 1;
    carY = 0;
    backgroundImageSub = loadImage("suburbanMap/SuburbanMap-5.png");
  } else if (
    whichSectionOnMap === 12 &&
    carY >= 900 &&
    carX > 319 &&
    carX < 625
  ) {
    whichSectionOnMap += 1;
    carY = 0;
    backgroundImageSub = loadImage("suburbanMap/SuburbanMap-9.png");
  }
}
function suburbanMap() {
  background();
  suburbanConditions();
}

function resultScreen() {}

function crashScreen() {}

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
