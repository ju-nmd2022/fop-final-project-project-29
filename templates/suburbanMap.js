let subMapSection1 = loadImage("../suburbanMap/SuburbanMap-9.png");
let subMapSection2 = loadImage("../suburbanMap/SuburbanMap-10.png");
let subMapSection3 = loadImage("../suburbanMap/SuburbanMap-6.png");
let subMapSection4 = loadImage("../suburbanMap/SuburbanMap-7.png");
let subMapSection5 = loadImage("../suburbanMap/SuburbanMap-11.png");
let subMapSection6 = loadImage("../suburbanMap/SuburbanMap-12.png");
let subMapSection7 = loadImage("../suburbanMap/SuburbanMap-8.png");
let subMapSection8 = loadImage("../suburbanMap/SuburbanMap-4.png");
let subMapSection9 = loadImage("../suburbanMap/SuburbanMap-3.png");
let subMapSection10 = loadImage("../suburbanMap/SuburbanMap-2.png");
let subMapSection11 = loadImage("../suburbanMap/SuburbanMap-1.png");
let subMapSection12 = loadImage("../suburbanMap/SuburbanMap-5.png");

//add borders to the road

function preload() {
  // Load the initial background image
  backgroundImage = loadImage("../suburbanMap/SuburbanMap-9.png");
}

function car(carX, carY, rotation) {
  translate(carX, carY);
  rotate(rotation);
  fill("#f4ab78");
  rect(-50, -30, 60, 30);
  fill(0);
  rect(-5, -25, 10, 20);
}

let carX = 553;
let carY = 330;
let rotation = 0;
let speed = 0;
let acceleration = 0.3;


let isGameActive = true;
createCanvas(950, 712);
let whichSectionOnMap = 1;

function checkCarPosition() {
  /*  if (keyIsDown(32) && isGameActive === false) {
    isGameActive = true;
    console.log("hello?");
  } else if (whichSectionOnMap === 1 && isGameActive === true && carX > 640 && carX < 700 && carY > 258 && carY < 552) {
    isGameActive = false;
    console.log("win");
  }  */

  if (whichSectionOnMap === 1 && carX >= 900 && (203 < carY && carY < 435)) {
    whichSectionOnMap += 1;
    carX = 0;
    backgroundImage = loadImage("../suburbanMap/SuburbanMap-10.png");
  } else if (whichSectionOnMap === 2 && carY <= 0 && carX > 366 && carX < 607) {
    whichSectionOnMap += 1;
    carY = 712;
    backgroundImage = loadImage("../suburbanMap/SuburbanMap-6.png");
  } else if (whichSectionOnMap === 3 && carX >= 900 && carY > 154 && carY < 399) {
    whichSectionOnMap += 1;
    carX = 0;
    backgroundImage = loadImage("../suburbanMap/SuburbanMap-7.png");
  } else if (whichSectionOnMap === 4 && carY >= 712 && carX > 383 && carX < 620) {
    whichSectionOnMap += 1;
    carY = 0;
    backgroundImage = loadImage("../suburbanMap/SuburbanMap-11.png");
  } else if (whichSectionOnMap === 5 && carX >= 900 && carY > 320 && carY < 572) {
    whichSectionOnMap += 1;
    carX = 0;
    backgroundImage = loadImage("../suburbanMap/SuburbanMap-12.png");
  } else if (whichSectionOnMap === 6 && carY <= 0 && carX > 650 && carX < 896) {
    whichSectionOnMap += 1;
    carY = 712;
    backgroundImage = loadImage("../suburbanMap/SuburbanMap-8.png");
  } else if (whichSectionOnMap === 7 && carY <= 0 && carX > 213 && carX < 455) {
    whichSectionOnMap += 1;
    carY = 712;
    backgroundImage = loadImage("../suburbanMap/SuburbanMap-4.png");
  } else if (whichSectionOnMap === 8 && carX <= 0 && carY > 68 && carY < 312) {
    whichSectionOnMap += 1;
    carX = 900;
    backgroundImage = loadImage("../suburbanMap/SuburbanMap-3.png");
  } else if (whichSectionOnMap === 9 && carX <= 0 && carY > 354 && carY < 594) {
    whichSectionOnMap += 1;
    carX = 900;
    backgroundImage = loadImage("../suburbanMap/SuburbanMap-2.png");
  } else if (whichSectionOnMap === 10 && carX <= 0 && carY > 38 && carY < 284) {
    whichSectionOnMap += 1;
    carX = 900;
    backgroundImage = loadImage("../suburbanMap/SuburbanMap-1.png");
  } else if (whichSectionOnMap === 11 && carY >= 712 && carX > 215 && carX < 463) {
    whichSectionOnMap += 1;
    carY = 0;
    backgroundImage = loadImage("../suburbanMap/SuburbanMap-5.png");
  } else if (whichSectionOnMap === 12 && carY >= 712 && carX > 214 && carX < 463) {
    whichSectionOnMap += 1;
    carY = 0;
    backgroundImage = loadImage("../suburbanMap/SuburbanMap-9.png");
  } else if (whichSectionOnMap === 13 && carX >= 544 && carY > 200 && carY < 437){
 // win statement
 // stop timer
  }
}

function draw() {
  background(backgroundImage);
  checkCarPosition();

  car(carX, carY, rotation);

  if (isGameActive === false) {
    acceleration = 0;
  } else if (isGameActive === true) {
    acceleration = 0.3;
    speed = speed + acceleration;
    carX = carX + Math.cos(rotation) * speed;
    carY = carY + Math.sin(rotation) * speed;

    if (keyIsDown(38)) {
      speed = 10;
    } else if (keyIsDown(40)) {
      speed = -10;
    } else {
      speed = 0;
    }

    if (keyIsDown(37)) {
      rotation = rotation - 0.05;
    } else if (keyIsDown(39)) {
      rotation = rotation + 0.05;
    }
  }
}
