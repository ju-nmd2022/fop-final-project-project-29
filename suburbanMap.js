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
//the position of the car has to be updated/changed when entering the next screen

let whichSectionOnMap = 2;
let carY = 100;
let carX = 100;
createCanvas(1200, 900);

function car() {
  //here car or import of code (oop)
}

function suburbanMap() {
  background(subMapSection12);
}

function draw() {
  suburbanMap();
  if (whichSectionOnMap === 1 && 254 > carY && carY < 552) {
    whichSectionOnMap = 2;
  } else if (whichSectionOnMap === 2 && carX > 463 && carX < 767) {
    whichSectionOnMap = 3;
  } else if (whichSectionOnMap === 3 && carY > 194 && carY < 504) {
    whichSectionOnMap = 4;
  } else if (whichSectionOnMap === 4 && carX > 483 && carX < 783) {
    whichSectionOnMap = 5;
  } else if (whichSectionOnMap === 5 && carY > 404 && carY < 724) {
    whichSectionOnMap = 6;
  } else if (whichSectionOnMap === 6 && carX > 821 && carX < 1130) {
    whichSectionOnMap = 7;
  } else if (whichSectionOnMap === 7 && carX > 269 && carX < 575) {
    whichSectionOnMap = 8;
  } else if (whichSectionOnMap === 8 && carY > 87 && carY < 395) {
    whichSectionOnMap = 9;
  } else if (whichSectionOnMap === 9 && carY > 448 && carY < 753) {
    whichSectionOnMap = 10;
  } else if (whichSectionOnMap === 10 && carY > 48 && carY < 360) {
    whichSectionOnMap = 11;
  } else if (whichSectionOnMap === 11 && carX > 266 && carX < 574) {
    whichSectionOnMap = 12;
  } else if (whichSectionOnMap === 12 && carX > 319 && carY < 625) {
    whichSectionOnMap = 1;
  }
}
