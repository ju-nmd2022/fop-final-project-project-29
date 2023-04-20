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


let whichBackground = 10;

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
        backgroundImage = loadImage("map-city/cityMap10.png");
      }

function cityMap() {
    
    //background(backgroundImage);

    isGameActive = true;
    if(whichBackground === 1 && 335 < carY && carY < 560 && carX >= 1200) {
        whichBackground += 1;
        backgroundImage = loadImage("map-city/cityMap2.png");
        carX = 5;
     } else if(whichBackground === 2 && 39 < carY && carY < 267 && carX >= 1200) {
        whichBackground += 1;
        backgroundImage = loadImage("map-city/cityMap3.png");
        carX = 5;
    } else if(whichBackground === 3 && 448 < carX && carX < 670 && carY >= 900) {
        whichBackground += 1;
        backgroundImage = loadImage("map-city/cityMap4.png");
        carY = 5;
    } else if(whichBackground === 4 && 256 < carY && carY < 482 && carX >= 1200) {
        whichBackground += 1;
        backgroundImage = loadImage("map-city/cityMap5.png");
        carX = 5;
    } else if(whichBackground === 5 && 517 < carX && carX < 745 && carY <= 0) {
        whichBackground += 1;
        backgroundImage = loadImage("map-city/cityMap6.png");
        carY = 900;
    } else if(whichBackground === 6 && 517 < carX && carX < 745 && carY <= 0) {
        whichBackground += 1;
        backgroundImage = loadImage("map-city/cityMap7.png");
        carY = 900;
    } else if(whichBackground === 7 && 254 < carY && carY < 479 && carX >= 1200) {
        whichBackground += 1;
        backgroundImage = loadImage("map-city/cityMap8.png");
        carX = 5;
    } else if(whichBackground === 8 && 530 < carX && carX < 755 && carY >= 900) {
        whichBackground += 1;
        backgroundImage = loadImage("map-city/cityMap9.png");
        carY = 5;
    } else if(whichBackground === 9 && 320 < carY && carY < 544 && carX >= 1200) {
        whichBackground += 1;
        backgroundImage = loadImage("map-city/cityMap10.png");
        carX = 5;
    } else if(whichBackground === 10 && 320 < carY && carY < 544 && carX >= 890) {
        whichBackground += 1;
        backgroundImage = loadImage("map-city/cityMap10.png");
        isGameActive = false;
    } 
  }
  
  function draw() {
  
    background(backgroundImage);
  cityMap();

  
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

