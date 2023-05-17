let cityMapSection1 = loadImage("cityMap1.png");
let cityMapSection2 = loadImage("map-city/cityMap2.png");
let cityMapSection3 = loadImage("map-city/cityMap3.png");
let cityMapSection4 = loadImage("map-city/cityMap4.png");
let cityMapSection5 = loadImage("map-city/cityMap5.png");
let cityMapSection6 = loadImage("map-city/cityMap6.png");
let cityMapSection7 = loadImage("map-city/cityMap7.png");
let cityMapSection8 = loadImage("map-city/cityMap8.png");
let cityMapSection9 = loadImage("map-city/cityMap9.png");
let cityMapSection10 = loadImage("map-city/cityMap10.png");


let whichBackground = 1;

function car(carX, carY, rotation) {
    translate(carX, carY);
    rotate(rotation);
    fill("#f4ab78");
    rect(-50, -30, 60, 30);
    fill(0);
    rect(-5, -25, 10, 20);
  }

  let carX = 160;
  let carY = 430;
  let rotation = 0;
  let speed = 0;
  let acceleration = 0.3;


//function that checks for wheels crossing white line -> stop game
let isGameActive = true;
let rightWheel = "something";
let leftWheel = "something else";

/* if(whichBackground === "city1" && rightWheel < 560){
    isGameActive = false;
}
if(whichBackground === "city1" && leftWheel > 335){
    isGameActive = false;
} */

//function that checks for car passing by border -> change background

createCanvas(950, 712);
function preload() {
        // Load the initial background image
        backgroundImage = loadImage("../map-city/cityMap1.png");
      }

function cityBoundries(){
  if(whichBackground === 1) {
    strokeWeight(1);
    stroke(255,0,0);
    line(0, 266, 950, 266);
    line(0, 444, 950, 444);
  } else if(whichBackground === 2){
    stroke(255,0,0);
    noFill();
    line(0, 266, 320, 266);
    line(0, 444, 414, 444);
    beginShape();
    vertex(414,444);
    bezierVertex(500, 444, 500, 350, 500, 350);
    endShape();
    line(500, 350, 500, 210);
    line(500, 210, 950, 213);
    line(320, 265, 320, 113);
    line(404, 31, 950, 31);
    beginShape();
    vertex(320,113);
    bezierVertex(320, 113, 320, 31, 404, 31);
    endShape();
  } else if(whichBackground === 3){
    line(0, 31, 405, 31);
    line(496, 111, 534, 712);
    line(0, 210, 324, 210);
    line(324, 210, 356, 712);
    beginShape();
    noFill();
    vertex(405,31);
    bezierVertex(496,31,496,111,496,111);
    endShape();
  } else if(whichBackground === 4){
    line(356, 0, 373, 293);
    beginShape();
    noFill();
    vertex(373, 293);
    bezierVertex(370, 335, 423, 381, 464, 381);
    endShape();
    line(464, 381, 950, 381);
    line(534, 0, 546, 201);
    line(546, 201, 950, 201);
  } else if(whichBackground === 5){
    line(0, 202, 409, 202);
    line(409, 202, 409, 0);
    line(0, 380, 501, 382);
    beginShape();
    noFill();
    vertex(501, 382);
    bezierVertex(558, 367, 585, 339, 588, 291);
    endShape();
    line(588, 291, 588, 0);
  }
}

function cityMap() {


    isGameActive = true;
    if(whichBackground === 1 && 266 < carY && carY < 444 && carX >= 950) {
        whichBackground += 1;
        backgroundImage = loadImage("../map-city/cityMap2.png");
        carX = 5;
    } else if(whichBackground === 2 && 30 < carY && carY < 211 && carX >= 950) {
        whichBackground += 1;
        backgroundImage = loadImage("../map-city/cityMap3.png");
        carX = 5;
    } else if(whichBackground === 3 && 355 < carX && carX < 533 && carY >= 712) {
        whichBackground += 1;
        backgroundImage = loadImage("../map-city/cityMap4.png");
        carY = 5;
    } else if(whichBackground === 4 && 200 < carY && carY < 380 && carX >= 950) {
        whichBackground += 1;
        backgroundImage = loadImage("../map-city/cityMap5.png");
        carX = 5;
    } else if(whichBackground === 5 && 410 < carX && carX < 588 && carY <= 0) {
        whichBackground += 1;
        backgroundImage = loadImage("../map-city/cityMap6.png");
        carY = 700;
    } else if(whichBackground === 6 && 410 < carX && carX < 588 && carY <= 0) {
        whichBackground += 1;
        backgroundImage = loadImage("../map-city/cityMap7.png");
        carY = 700;
    } else if(whichBackground === 7 && 200 < carY && carY < 379 && carX >= 950) {
        whichBackground += 1;
        backgroundImage = loadImage("../map-city/cityMap8.png");
        carX = 5;
    } else if(whichBackground === 8 && 420 < carX && carX < 598 && carY >= 712) {
        whichBackground += 1;
        backgroundImage = loadImage("../map-city/cityMap9.png");
        carY = 5;
    } else if(whichBackground === 9 && 253 < carY && carY < 431 && carX >= 950) {
        whichBackground += 1;
        backgroundImage = loadImage("../map-city/cityMap10.png");
        carX = 5;
    } else if(whichBackground === 10 && 253 < carY && carY < 431 && carX >= 695) {
        whichBackground += 1;
        backgroundImage = loadImage("../map-city/cityMap10.png");
        isGameActive = false;
    } 
  }
  
  function draw() {
  
    background(backgroundImage);
  cityMap();
cityBoundries();
  
    car(carX, carY, rotation);
if (isGameActive === true){
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
  } else if (isGameActive === false){
    speed = 0;
    acceleration = 0;
    carX = carX + Math.cos(rotation) * speed;
    carY = carY + Math.sin(rotation) * speed;
  if (keyIsDown(38)) {
    speed = 0;
  } else if (keyIsDown(40)) {
    speed = 0;
  } else {
    speed = 0;
  }

  if (keyIsDown(37)) {
    rotation = 0;
  } else if (keyIsDown(39)) {
    rotation = 0;
  }
console.log(isGameActive);
  }
  
}

