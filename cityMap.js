let cityMapSection1 = loadImage("map-city/cityMap1.png");
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
let isGameActive = false;
let rightWheel = "something";
let leftWheel = "something else";

/* if(whichBackground === "city1" && rightWheel < 560){
    isGameActive = false;
}
if(whichBackground === "city1" && leftWheel > 335){
    isGameActive = false;
} */

//function that checks for car passing by border -> change background

createCanvas(1200, 900);
function preload() {
        // Load the initial background image
        backgroundImage = loadImage("map-city/cityMap1.png");
      }

function cityMap() {
    
    //background(backgroundImage);

    isGameActive = true;
    if(whichBackground === 1 && 335 < carY && carY < 560 && carX >= 1200) {
        whichBackground += 1;
        backgroundImage = loadImage("map-city/cityMap2.png");
        carX = 5;
     } else if(whichBackground === 2 && 335 < carY && carY < 560 && carX >= 1200) {
        whichBackground += 1;
        backgroundImage = loadImage("map-city/cityMap3.png");
        carX = 5;
    } /*else if(whichBackground === "city3" && carY === 900 && 451 < carX < 898) {
        whichBackground = 4;
    } else if(whichBackground === "city4" && 689 < carY < 719 && carX === 1200) {
        whichBackground = 5;
    } else if(whichBackground === "city5" && carY === 0 && 516 < carX < 744) {
        whichBackground = 6;
    } else if(whichBackground === "city6" && carY === 0 && 516 < carX < 744) {
        whichBackground = 7;
    } else if(whichBackground === "city7" && 252 < carY < 479 && carX === 1200) {
        whichBackground = 8;
    } else if(whichBackground === "city8" && carY === 900 && 531 < carX < 755) {
        whichBackground = 9;
    } else if(whichBackground === "city9" && 320 < carY < 545 && carX === 1200) {
        whichBackground = 10;
    }else if(whichBackground === "city10" && 320 < carY < 545 && carX === 830) {
        //win
    } */
  }
  
  function draw() {
  
    background(backgroundImage);
  cityMap();
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

