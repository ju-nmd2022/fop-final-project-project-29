createCanvas(1200, 900);
let currentScreen = "suburbanMap";

/* content of pre screen */
let bg = loadImage("./preview.png");
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
function preScreen() {
  background(bg);
  startButton();
}

/* content of start screen */
function playButton() {
  let button;
  button = createButton("START");
  button.size(250, 120);
  button.style("borderRadius", "30px");
  button.position(900, 250);
  button.style("font-family", "Verdana");
  button.style("font-size", "42px");
  button.style("background-color", "#ec008c");
  button.style("border-width", "5px");
  button.style("border-color", "#ffffff");
  button.style("color", "#ffffff");
  button.style("border-style", "outset");
}
function carCustomButton() {
  let button;
  button = createButton("Customize Car");
  button.size(250, 60);
  button.style("borderRadius", "20px");
  button.position(900, 450);
  button.style("font-family", "Verdana");
  button.style("font-size", "24px");
  button.style("background-color", "#00C5C5");
  button.style("border-width", "5px");
  button.style("border-color", "#ffffff");
  button.style("color", "#ffffff");
  button.style("border-style", "outset");
}
function mapCustomButton() {
  let button;
  button = createButton("Change Map");
  button.size(250, 60);
  button.style("borderRadius", "20px");
  button.position(900, 520);
  button.style("font-family", "Verdana");
  button.style("font-size", "24px");
  button.style("background-color", "#00C5C5");
  button.style("border-width", "5px");
  button.style("border-color", "#ffffff");
  button.style("color", "#ffffff");
  button.style("border-style", "outset");
}
let startBg = loadImage("./opt3.jpeg");
let carStartImg = loadImage("bmw-45view/bmw-blue.png");
let logo = loadImage("logo.png");
function startScreen() {
  //https://p5js.org/examples/image-background-image.html
  background(startBg);
  image(carStartImg, 150, 500, 600, 248);
  image(logo, 100, 0, 700, 450);

  //play button
  playButton();
  carCustomButton();
  mapCustomButton();
}

/* content for car slection */
let bgChooseScreen = loadImage("./garage.png");
//bmw
let blueBmw = loadImage("bmw-45view/bmw-blue.png");
let greenBmw = loadImage("bmw-45view/bmw-green.png");
let blackBmw = loadImage("bmw-45view/bmw-grey.png");
let orangeBmw = loadImage("bmw-45view/bmw-orange.png");
let pinkBmw = loadImage("bmw-45view/bmw-pink.png");
let purpleBmw = loadImage("bmw-45view/bmw-purple.png");
let redBmw = loadImage("bmw-45view/bmw-red.png");
let whiteBmw = loadImage("bmw-45view/bmw-white.png");
let yellowBmw = loadImage("bmw-45view/bmw-yellow.png");
//rx7
let blueRx7 = loadImage("rx7-45view/rx7-blue.png");
let greenRx7 = loadImage("rx7-45view/rx7-green.png");
let blackRx7 = loadImage("rx7-45view/rx7-grey.png");
let orangeRx7 = loadImage("rx7-45view/rx7-orange.png");
let pinkRx7 = loadImage("rx7-45view/rx7-pink.png");
let purpleRx7 = loadImage("rx7-45view/rx7-purple.png");
let redRx7 = loadImage("rx7-45view/rx7-red.png");
let whiteRx7 = loadImage("rx7-45view/rx7-white.png");
let yellowRx7 = loadImage("rx7-45view/rx7-yellow.png");
//supra
let blueSupra = loadImage("supra-45view/Supra-light-blue.png");
let greenSupra = loadImage("supra-45view/Supra-green.png");
let blackSupra = loadImage("supra-45view/Supra-black.png");
let orangeSupra = loadImage("supra-45view/Supra-orange.png");
let pinkSupra = loadImage("supra-45view/Supra-pink.png");
let purpleSupra = loadImage("supra-45view/Supra-purple.png");
let redSupra = loadImage("supra-45view/Supra-red.png");
let whiteSupra = loadImage("supra-45view/Supra-white.png");
let yellowSupra = loadImage("supra-45view/Supra-yellow.png");

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
function headline() {
  fill(255);
  textFont("verdana");
  textStyle(BOLD);
  textSize(55);
  text("Chose Your Car", 410, 75);
}

function backButton() {
  let button;
  button = createButton("BACK");
  button.size(130, 60);
  button.position(40, 40);
  button.style("font-family", "Verdana");
  button.style("font-size", "27px");
  button.style("color: #ffffff");
  button.style("border-radius: 30px");
  button.style("border: 5px outset");
  button.style("border-color: #FFFFFF");
  button.style("background-color: #bd0271");
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
//the following 4 lines of code were done with the help of ChatGPT
function selectRandomColor(obj) {
  let keys = Object.keys(obj);
  return keys[Math.floor(Math.random() * keys.length)];
}
function selectColor(currentCar, currentColor) {
  if (currentCar === "bmw") {
    if (currentColor === "red") {
      image(redBmw, 80, 340, 647, 276);
    } else if (currentColor === "green") {
      image(greenBmw, 80, 340, 647, 276);
    } else if (currentColor === "blue") {
      image(blueBmw, 80, 340, 647, 276);
    } else if (currentColor === "black") {
      image(blackBmw, 80, 340, 647, 276);
    } else if (currentColor === "yellow") {
      image(yellowBmw, 80, 340, 647, 276);
    } else if (currentColor === "pink") {
      image(pinkBmw, 80, 340, 647, 276);
    } else if (currentColor === "purple") {
      image(purpleBmw, 80, 340, 647, 276);
    } else if (currentColor === "white") {
      image(whiteBmw, 80, 340, 647, 276);
    } else if (currentColor === "orange") {
      image(orangeBmw, 80, 340, 647, 276);
    }
  } else if (currentCar === "rx7") {
    if (currentColor === "red") {
      image(redRx7, 80, 340, 647, 276);
    } else if (currentColor === "green") {
      image(greenRx7, 80, 340, 647, 276);
    } else if (currentColor === "blue") {
      image(blueRx7, 80, 340, 647, 276);
    } else if (currentColor === "black") {
      image(blackRx7, 80, 340, 647, 276);
    } else if (currentColor === "yellow") {
      image(yellowRx7, 80, 340, 647, 276);
    } else if (currentColor === "pink") {
      image(pinkRx7, 80, 340, 647, 276);
    } else if (currentColor === "purple") {
      image(purpleRx7, 80, 340, 647, 276);
    } else if (currentColor === "white") {
      image(whiteRx7, 80, 340, 647, 276);
    } else if (currentColor === "orange") {
      image(orangeRx7, 80, 340, 647, 276);
    }
  } else if (currentCar === "supra") {
    if (currentColor === "red") {
      image(redSupra, 80, 340, 647, 276);
    } else if (currentColor === "green") {
      image(greenSupra, 80, 340, 647, 276);
    } else if (currentColor === "blue") {
      image(blueSupra, 80, 340, 647, 276);
    } else if (currentColor === "black") {
      image(blackSupra, 80, 340, 647, 276);
    } else if (currentColor === "yellow") {
      image(yellowSupra, 80, 340, 647, 276);
    } else if (currentColor === "pink") {
      image(pinkSupra, 80, 340, 647, 276);
    } else if (currentColor === "purple") {
      image(purpleSupra, 80, 340, 647, 276);
    } else if (currentColor === "white") {
      image(whiteSupra, 80, 340, 647, 276);
    } else if (currentColor === "orange") {
      image(orangeSupra, 80, 340, 647, 276);
    }
  }
}
function carSelection() {
  background(bgChooseScreen);
  headline();
  backButton();
  colorBoxes();
  //section for choosing car
  if (
    mouseIsPressed &&
    mouseX > 861 &&
    mouseX < 1133 &&
    mouseY > 222 &&
    mouseY < 339
  ) {
    currentCar = "bmw";
  } else if (
    mouseIsPressed &&
    mouseX > 849 &&
    mouseY < 1147 &&
    mouseY > 395 &&
    mouseY < 518
  ) {
    currentCar = "rx7";
  } else if (
    mouseIsPressed &&
    mouseX > 853 &&
    mouseX < 1148 &&
    mouseY > 569 &&
    mouseY < 701
  ) {
    currentCar = "supra";
  }
  selectCar(currentCar);
  //section for choosing color
  if (
    mouseIsPressed &&
    mouseX > 210 &&
    mouseX < 260 &&
    mouseY > 700 &&
    mouseY < 750
  ) {
    currentColor = "red";
  } else if (
    mouseIsPressed &&
    mouseX > 290 &&
    mouseX < 340 &&
    mouseY > 700 &&
    mouseY < 750
  ) {
    currentColor = "green";
  } else if (
    mouseIsPressed &&
    mouseX > 370 &&
    mouseX < 420 &&
    mouseY > 700 &&
    mouseY < 750
  ) {
    currentColor = "blue";
  } else if (
    mouseIsPressed &&
    mouseX > 450 &&
    mouseX < 500 &&
    mouseY > 700 &&
    mouseY < 750
  ) {
    currentColor = "black";
  } else if (
    mouseIsPressed &&
    mouseX > 530 &&
    mouseX < 580 &&
    mouseY > 700 &&
    mouseY < 750
  ) {
    currentColor = "yellow";
  } else if (
    mouseIsPressed &&
    mouseX > 210 &&
    mouseX < 260 &&
    mouseY > 780 &&
    mouseY < 830
  ) {
    currentColor = "pink";
  } else if (
    mouseIsPressed &&
    mouseX > 290 &&
    mouseX < 340 &&
    mouseY > 780 &&
    mouseY < 830
  ) {
    currentColor = "purple";
  } else if (
    mouseIsPressed &&
    mouseX > 370 &&
    mouseX < 420 &&
    mouseY > 780 &&
    mouseY < 830
  ) {
    currentColor = "white";
  } else if (
    mouseIsPressed &&
    mouseX > 450 &&
    mouseX < 500 &&
    mouseY > 780 &&
    mouseY < 830
  ) {
    currentColor = "orange";
  } else if (
    mouseIsPressed &&
    mouseX > 530 &&
    mouseX < 580 &&
    mouseY > 780 &&
    mouseY < 830
  ) {
    selectRandomColor(carColors);
    //the following 2 lines of code were done with the help of ChatGPT
    let randomColor = selectRandomColor(carColors);
    let randomColorStr = String(randomColor);
    currentColor = randomColorStr;
    console.log(randomColorStr);
  }

  selectColor(currentCar, currentColor);
}

/* conetnt for map selection */
let mapSelectBg = loadImage("asphalt.jpeg");
let tokyoCityImg = "url('logo.png')";
let mapIsChosen = false;
let doneGoBack = false;

function cityMapButton() {
  let button;
  button = createButton("Tokyo City");
  button.size(400, 300);
  button.style("borderRadius", "30px");
  button.position(150, 250);
  button.style("font-family", "Verdana");
  button.style("font-size", "42px");
  button.style("background-color", "#ec008c");
  button.style("border-width", "5px");
  button.style("border-color", "#ffffff");
  button.style("color", "#ffffff");
  button.style("border-style", "outset");
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
  button.mouseOver(function () {
    button.style("background-color", "transparent");
    //button.style.backgroundImage = "url('logo.png')";
    button.style("background-image", "url('logo.png')");
    button.style("background-repeat", "no-repeat");
    button.style("background-size", "cover");
  });
  button.mouseOut(function () {
    button.style("background-color", "#ec008c");
  });
}
function suburbanMapButton() {
  let button;
  button = createButton("Suburbs");
  button.size(400, 300);
  button.style("borderRadius", "30px");
  button.position(680, 250);
  button.style("font-family", "Verdana");
  button.style("font-size", "42px");
  button.style("background-color", "#ec008c");
  button.style("width", "400px");
  button.style("height", "300px");
  button.style("border-width", "5px");
  button.style("border-color", "#ffffff");
  button.style("color", "#ffffff");
  button.style("border-style", "outset");
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
  /* button.mouseOver(function() {
        button.style("background-color", "");
        button.style("background-img", "url('logo.png')");
        button.style("background-repeat", "no-repeat");
        button.style("background-size", "cover");
      });
    button.mouseOut(function() {
        button.style("background-color", "#ec008c");
      });  */
}
function selectButton() {
  let button;
  button = createButton("Done");
  button.style("borderRadius", "30px");
  button.position(420, 680);
  button.style("font-family", "Verdana");
  button.style("font-size", "42px");
  button.style("background-color", "#ec008c");
  button.style("width", "400px");
  button.style("height", "100px");
  button.style("border-width", "5px");
  button.style("border-color", "#ffffff");
  button.style("color", "#ffffff");
  button.style("border-style", "outset");
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
}
let currentMap = "";
function mapSelection() {
  background(mapSelectBg);
  suburbanMapButton();

  if (doneGoBack === true) {
    //switch screen
  }
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
function preloadCity() {
  // Load the initial background image
  backgroundImageCity = loadImage("map-city/cityMap1.png");
}
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
function cityMap(backgroundImageCity) {
  background(backgroundImageCity);
  cityConditions();
}

/* content of suburban map */
let whichSectionOnMap = 1;
function preloadSuburban(backgroundImageSub) {
  // Load the initial background image
  backgroundImageSub = loadImage("suburbanMap/SuburbanMap-9.png");
}
function suburbanConditions(backgroundImageSub) {
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
