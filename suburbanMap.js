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
//the position of the car has to be updated/changed when entering the necarXt screen

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
//let nr = 1;

let gameStart = true;
createCanvas(1200, 900);
//console.log(whichSectionOnMap);
let whichSectionOnMap = 0;

function checkCarPosition(whichSectionOnMap) {
  if (whichSectionOnMap === 1 && carX >= 1200 && (254 < carY && carY < 552)) {
    whichSectionOnMap += 1;
    carX = 5;
    carY = 400;
  } else if (whichSectionOnMap === 2 && carY <= 0 && carX > 463 && carX < 767) {
    whichSectionOnMap += 1;
    background(subMapSection3);
  }
  /*else if (whichSectionOnMap === 3 && carY > 194 && carY < 504) {
    whichSectionOnMap = 4;
    background(subMapSection4);
  } else if (whichSectionOnMap === 4 && carX > 483 && carX < 783) {
    whichSectionOnMap = 5;
    background(subMapSection5);
  } else if (whichSectionOnMap === 5 && carY > 404 && carY < 724) {
    whichSectionOnMap = 6;
    background(subMapSection6);
  } else if (whichSectionOnMap === 6 && carX > 821 && carX < 1130) {
    whichSectionOnMap = 7;
    background(subMapSection7);
  } else if (whichSectionOnMap === 7 && carX > 269 && carX < 575) {
    whichSectionOnMap = 8;
    background(subMapSection8);
  } else if (whichSectionOnMap === 8 && carY > 87 && carY < 395) {
    whichSectionOnMap = 9;
    background(subMapSection9);
  } else if (whichSectionOnMap === 9 && carY > 448 && carY < 753) {
    whichSectionOnMap = 10;
    background(subMapSection10);
  } else if (whichSectionOnMap === 10 && carY > 48 && carY < 360) {
    whichSectionOnMap = 11;
    background(subMapSection11);
  } else if (whichSectionOnMap === 11 && carX > 266 && carX < 574) {
    whichSectionOnMap = 12;
    background(subMapSection12);
  } else if (whichSectionOnMap === 12 && carY > 319 && carY < 625) {
    whichSectionOnMap = 1;
    background(subMapSection1);
  }  */
}
function updateScreen(whichSectionOnMap) {
  if (whichSectionOnMap === 0) {
    whichSectionOnMap += 1;
    console.log(whichSectionOnMap);
  } else if (whichSectionOnMap === 1) {
    background(subMapSection1);
    console.log("HELLOO");
  } else if (whichSectionOnMap === 2) {
    background(subMapSection2);
  }
}

function draw() {
  checkCarPosition();
  updateScreen();

  car(carX, carY, rotation);

  speed = speed + acceleration;

  carX = carX + Math.cos(rotation) * speed;
  carY = carY + Math.sin(rotation) * speed;

  if (keyIsDown(38)) {
    speed = 5;
  } else if (keyIsDown(40)) {
    speed = -5;
  } else {
    speed = 0;
  }

  if (keyIsDown(37)) {
    rotation = rotation - 0.05;
  } else if (keyIsDown(39)) {
    rotation = rotation + 0.05;
  }
}
