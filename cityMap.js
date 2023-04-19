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


//function that checks for wheels crossing white line -> stop game
let isGameActive = false;
let rightWheel = "something";
let leftWheel = "something else";

if(whichBackground === "city1" && rightWheel < 560){
    isGameActive = false;
}
if(whichBackground === "city1" && leftWheel > 335){
    isGameActive = false;
}

//function that checks for car passing by border -> change background

createCanvas(1200, 900);

function cityMap() {
    background(cityMapSection1);
    isGameActive = true;
    if(whichBackground === "city1" && 335 < carY < 560 && carX === 1200) {
        whichBackground = 2;
    }
    if(whichBackground === "city2" && 37 < carY < 265 && carX === 1200) {
        whichBackground = 3;
    }
    if(whichBackground === "city3" && carY === 900 && 451 < carX < 898) {
        whichBackground = 4;
    }
    if(whichBackground === "city4" && 689 < carY < 719 && carX === 1200) {
        whichBackground = 5;
    }
    if(whichBackground === "city5" && carY === 0 && 516 < carX < 744) {
        whichBackground = 6;
    }
    if(whichBackground === "city6" && carY === 0 && 516 < carX < 744) {
        whichBackground = 7;
    }
    if(whichBackground === "city7" && 252 < carY < 479 && carX === 1200) {
        whichBackground = 8;
    }
    if(whichBackground === "city8" && carY === 900 && 531 < carX < 755) {
        whichBackground = 9;
    }
    if(whichBackground === "city9" && 320 < carY < 545 && carX === 1200) {
        whichBackground = 10;
    }
    if(whichBackground === "city10" && 320 < carY < 545 && carX === 830) {
        //win
    }
  }
  
  function draw() {
    cityMap();
  }

