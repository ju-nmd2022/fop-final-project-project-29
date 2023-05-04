let subMapSection1 = loadImage("suburbanMap/SuburbanMap-9.png");
let subMapSection2 = loadImage("suburbanMap/SuburbanMap-10.png");
let subMapSection3 = loadImage("suburbanMap/SuburbanMap-6.png");
let subMapSection4 = loadImage("suburbanMap/SuburbanMap-7.png");
let subMapSection5 = loadImage("suburbanMap/SuburbanMap-11.png");
let subMapSection6 = loadImage("suburbanMap/SuburbanMap-12.png");
let subMapSection7 = loadImage("suburbanMap/SuburbanMap-8.png");
let subMapSection8 = loadImage("suburbanMap/SuburbanMap-4.png");
let subMapSection9 = loadImage("suburbanMap/SuburbanMap-3.png");
let subMapSection10 = loadImage("suburbanMap/SuburbanMap-2.png");
let subMapSection11 = loadImage("suburbanMap/SuburbanMap-1.png");
let subMapSection12 = loadImage("suburbanMap/SuburbanMap-5.png");

//add borders to the road

function preload() {
  // Load the initial background image
  backgroundImage = loadImage("suburbanMap/SuburbanMap-9.png");
}

function car(carX, carY, rotation) {
  translate(carX, carY);
  rotate(rotation);
  fill("#f4ab78");
  rect(-50, -30, 60, 30);
  fill(0);
  rect(-5, -25, 10, 20);
}

let carX = 700;
let carY = 380;
let rotation = 0;
let speed = 0;
let acceleration = 0.3;


let isGameActive = false;
createCanvas(1200, 900);
let whichSectionOnMap = 1;

function checkCarPosition() {
   if (keyIsDown(32) && isGameActive === false) {
    isGameActive = true;
    console.log("hello?");
  } else if (whichSectionOnMap === 1 && isGameActive === true && carX > 640 && carX < 700 && carY > 258 && carY < 552) {
    isGameActive = false;
    console.log("win");
  } 

  if (whichSectionOnMap === 1 && carX >= 1200 && (254 < carY && carY < 552)) {
    whichSectionOnMap += 1;
    carX = 0;
    backgroundImage = loadImage("suburbanMap/SuburbanMap-10.png");
  } else if (whichSectionOnMap === 2 && carY <= 0 && carX > 463 && carX < 767) {
    whichSectionOnMap += 1;
    carY = 900;
    backgroundImage = loadImage("suburbanMap/SuburbanMap-6.png");
  } else if (whichSectionOnMap === 3 && carX >= 1200 && carY > 194 && carY < 504) {
    whichSectionOnMap += 1;
    carX = 0;
    backgroundImage = loadImage("suburbanMap/SuburbanMap-7.png");
  } else if (whichSectionOnMap === 4 && carY >= 900 && carX > 483 && carX < 783) {
    whichSectionOnMap += 1;
    carY = 0;
    backgroundImage = loadImage("suburbanMap/SuburbanMap-11.png");
  } else if (whichSectionOnMap === 5 && carX >= 1200 && carY > 404 && carY < 724) {
    whichSectionOnMap += 1;
    carX = 0;
    backgroundImage = loadImage("suburbanMap/SuburbanMap-12.png");
  } else if (whichSectionOnMap === 6 && carY <= 0 && carX > 821 && carX < 1130) {
    whichSectionOnMap += 1;
    carY = 900;
    backgroundImage = loadImage("suburbanMap/SuburbanMap-8.png");
  } else if (whichSectionOnMap === 7 && carY <= 0 && carX > 269 && carX < 575) {
    whichSectionOnMap += 1;
    carY = 900;
    backgroundImage = loadImage("suburbanMap/SuburbanMap-4.png");
  } else if (whichSectionOnMap === 8 && carX <= 0 && carY > 87 && carY < 395) {
    whichSectionOnMap += 1;
    carX = 1200;
    backgroundImage = loadImage("suburbanMap/SuburbanMap-3.png");
  } else if (whichSectionOnMap === 9 && carX <= 0 && carY > 448 && carY < 753) {
    whichSectionOnMap += 1;
    carX = 1200;
    backgroundImage = loadImage("suburbanMap/SuburbanMap-2.png");
  } else if (whichSectionOnMap === 10 && carX <= 0 && carY > 48 && carY < 360) {
    whichSectionOnMap += 1;
    carX = 1200;
    backgroundImage = loadImage("suburbanMap/SuburbanMap-1.png");
  } else if (whichSectionOnMap === 11 && carY >= 900 && carX > 266 && carX < 574) {
    whichSectionOnMap += 1;
    carY = 0;
    backgroundImage = loadImage("suburbanMap/SuburbanMap-5.png");
  } else if (whichSectionOnMap === 12 && carY >= 900 && carX > 319 && carX < 625) {
    whichSectionOnMap += 1;
    carY = 0;
    backgroundImage = loadImage("suburbanMap/SuburbanMap-9.png");
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
