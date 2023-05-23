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

let carScale = 0.3;

function car(carX, carY, rotation) {
  translate(carX +10, carY - 70);
  rotate(PI + rotation);

  beginShape();
  stroke(0);
  fill(0, 255, 0);
  strokeWeight(1 * carScale);
  vertex(-215 * carScale, 0 * carScale);
  bezierVertex(
    -215 * carScale,
    -30 * carScale,
    -210 * carScale,
    -50 * carScale,
    -186 * carScale,
    -70 * carScale
  );
  bezierVertex(
    -185 * carScale,
    -72 * carScale,
    -178 * carScale,
    -73 * carScale,
    -175 * carScale,
    -76 * carScale
  );
  bezierVertex(
    -173 * carScale,
    -78 * carScale,
    -165 * carScale,
    -81 * carScale,
    -157 * carScale,
    -86 * carScale
  );
  bezierVertex(
    -157 * carScale,
    -87 * carScale,
    -151 * carScale,
    -87 * carScale,
    -148 * carScale,
    -88 * carScale
  );
  bezierVertex(
    40 * carScale,
    -80 * carScale,
    40 * carScale,
    -80 * carScale,
    73 * carScale,
    -82 * carScale
  );
  bezierVertex(
    73 * carScale,
    -82 * carScale,
    103 * carScale,
    -87 * carScale,
    123 * carScale,
    -87 * carScale
  );
  vertex(182 * carScale, -65 * carScale);
  bezierVertex(
    182 * carScale,
    -65 * carScale,
    185 * carScale,
    -63 * carScale,
    190 * carScale,
    -55 * carScale
  );
  bezierVertex(
    210 * carScale,
    -40 * carScale,
    210 * carScale,
    0,
    210 * carScale,
    0
  );
  vertex(210 * carScale, 0);
  bezierVertex(
    210 * carScale,
    0,
    210 * carScale,
    40 * carScale,
    190 * carScale,
    55 * carScale
  );
  bezierVertex(
    190 * carScale,
    55 * carScale,
    185 * carScale,
    63 * carScale,
    182 * carScale,
    65 * carScale
  );
  vertex(123 * carScale, 87 * carScale);
  bezierVertex(
    103 * carScale,
    87 * carScale,
    73 * carScale,
    82 * carScale,
    73 * carScale,
    82 * carScale
  );
  bezierVertex(
    40 * carScale,
    80 * carScale,
    40 * carScale,
    80 * carScale,
    -148 * carScale,
    90 * carScale
  );
  bezierVertex(
    -148 * carScale,
    90 * carScale,
    -159 * carScale,
    93 * carScale,
    -171 * carScale,
    84 * carScale
  );
  bezierVertex(
    -200 * carScale,
    70 * carScale,
    -186 * carScale,
    70 * carScale,
    -200 * carScale,
    60 * carScale
  );
  bezierVertex(
    -210 * carScale,
    50 * carScale,
    -215 * carScale,
    30 * carScale,
    -215 * carScale,
    0
  );
  endShape();

  //front window
  beginShape();
  fill(35, 31, 32);
  vertex(-21 * carScale, -50 * carScale);
  bezierVertex(
    -25 * carScale,
    -40 * carScale,
    -25 * carScale,
    40 * carScale,
    -21 * carScale,
    50 * carScale
  );
  bezierVertex(
    -19 * carScale,
    56 * carScale,
    -26 * carScale,
    59 * carScale,
    -26 * carScale,
    60 * carScale
  );
  bezierVertex(
    -77 * carScale,
    74 * carScale,
    -77 * carScale,
    74 * carScale,
    -77 * carScale,
    74 * carScale
  );
  bezierVertex(
    -92 * carScale,
    58 * carScale,
    -103 * carScale,
    26 * carScale,
    -103 * carScale,
    0
  );
  bezierVertex(
    -103 * carScale,
    -40 * carScale,
    -77 * carScale,
    -70 * carScale,
    -77 * carScale,
    -72 * carScale
  );
  vertex(-26 * carScale, -60 * carScale);
  bezierVertex(
    -26 * carScale,
    -60 * carScale,
    -19 * carScale,
    -56 * carScale,
    -21 * carScale,
    -50 * carScale
  );
  endShape();

  //back window
  beginShape();
  vertex(75 * carScale, 0);
  vertex(75 * carScale, 42 * carScale);
  bezierVertex(
    76 * carScale,
    48 * carScale,
    82 * carScale,
    49 * carScale,
    91 * carScale,
    52 * carScale
  );
  bezierVertex(
    129 * carScale,
    60 * carScale,
    129 * carScale,
    57 * carScale,
    129 * carScale,
    58 * carScale
  );
  bezierVertex(
    148 * carScale,
    52 * carScale,
    144 * carScale,
    27 * carScale,
    146 * carScale,
    0
  );
  bezierVertex(
    144 * carScale,
    -27 * carScale,
    148 * carScale,
    -52 * carScale,
    129 * carScale,
    -58 * carScale
  );
  bezierVertex(
    129 * carScale,
    -57 * carScale,
    129 * carScale,
    -60 * carScale,
    91 * carScale,
    -52 * carScale
  );
  bezierVertex(
    82 * carScale,
    -48 * carScale,
    76 * carScale,
    -48 * carScale,
    75 * carScale,
    -32 * carScale
  );
  vertex(75 * carScale, 0);
  endShape();

  //side window right
  beginShape();
  vertex(-66 * carScale, -76 * carScale);
  bezierVertex(
    -26 * carScale,
    -62 * carScale,
    6 * carScale,
    -60 * carScale,
    15 * carScale,
    -58 * carScale
  );
  bezierVertex(
    52 * carScale,
    -57 * carScale,
    54 * carScale,
    -60 * carScale,
    75 * carScale,
    -65 * carScale
  );
  bezierVertex(
    80 * carScale,
    -67 * carScale,
    80 * carScale,
    -69 * carScale,
    76 * carScale,
    -72 * carScale
  );
  bezierVertex(
    50 * carScale,
    -77 * carScale,
    -12 * carScale,
    -79 * carScale,
    -66 * carScale,
    -76 * carScale
  );
  endShape();

  //side window left
  beginShape();
  vertex(-66 * carScale, 76 * carScale);
  bezierVertex(
    -26 * carScale,
    62 * carScale,
    6 * carScale,
    60 * carScale,
    15 * carScale,
    58 * carScale
  );
  bezierVertex(
    52 * carScale,
    57 * carScale,
    54 * carScale,
    60 * carScale,
    75 * carScale,
    65 * carScale
  );
  bezierVertex(
    80 * carScale,
    67 * carScale,
    80 * carScale,
    69 * carScale,
    76 * carScale,
    72 * carScale
  );
  bezierVertex(
    50 * carScale,
    77 * carScale,
    -12 * carScale,
    79 * carScale,
    -66 * carScale,
    76 * carScale
  );
  endShape();

  //wing
  beginShape();
  noFill();
  vertex(175 * carScale, 51 * carScale);
  vertex(141 * carScale, 66 * carScale);
  vertex(181 * carScale, 62 * carScale);
  vertex(191 * carScale, 54 * carScale);
  endShape();

  beginShape();
  vertex(175 * carScale, -51 * carScale);
  vertex(141 * carScale, -66 * carScale);
  vertex(181 * carScale, -62 * carScale);
  vertex(191 * carScale, -54 * carScale);
  endShape();

  beginShape();
  vertex(175 * carScale, -51 * carScale);
  bezierVertex(
    186 * carScale,
    -20 * carScale,
    186 * carScale,
    20 * carScale,
    175 * carScale,
    51 * carScale
  );
  endShape();

  //hood
  beginShape();
  noFill();
  vertex(-77 * carScale, -72 * carScale);
  bezierVertex(
    -205 * carScale,
    -95 * carScale,
    -205 * carScale,
    -33 * carScale,
    -205 * carScale,
    0
  );
  bezierVertex(
    -205 * carScale,
    33 * carScale,
    -205 * carScale,
    95 * carScale,
    -77 * carScale,
    74 * carScale
  );
  endShape();

  beginShape();
  vertex(-104 * carScale, -45 * carScale);
  bezierVertex(
    -122 * carScale,
    -44 * carScale,
    -170 * carScale,
    -40 * carScale,
    -182 * carScale,
    -36 * carScale
  );
  endShape();

  beginShape();
  vertex(-104 * carScale, 45 * carScale);
  bezierVertex(
    -122 * carScale,
    44 * carScale,
    -170 * carScale,
    40 * carScale,
    -182 * carScale,
    36 * carScale
  );
  endShape();

  beginShape();
  vertex(-116 * carScale, -18 * carScale);
  vertex(-116 * carScale, 18 * carScale);
  vertex(-156 * carScale, 21 * carScale);
  vertex(-156 * carScale, -21 * carScale);
  vertex(-116 * carScale, -18 * carScale);
  endShape();

  //headlights
  beginShape();
  fill(255, 242, 215);
  vertex(-181 * carScale, -68 * carScale);
  bezierVertex(
    -195 * carScale,
    -58 * carScale,
    -201 * carScale,
    -48 * carScale,
    -206 * carScale,
    -36 * carScale
  );
  bezierVertex(
    -207 * carScale,
    -33 * carScale,
    -207 * carScale,
    -25 * carScale,
    -189 * carScale,
    -35 * carScale
  );
  bezierVertex(
    -184 * carScale,
    -46 * carScale,
    -181 * carScale,
    -57 * carScale,
    -179 * carScale,
    -59 * carScale
  );
  bezierVertex(
    -177 * carScale,
    -64 * carScale,
    -178 * carScale,
    -66 * carScale,
    -181 * carScale,
    -68 * carScale
  );
  endShape();

  beginShape();
  vertex(-181 * carScale, 68 * carScale);
  bezierVertex(
    -195 * carScale,
    58 * carScale,
    -201 * carScale,
    48 * carScale,
    -206 * carScale,
    36 * carScale
  );
  bezierVertex(
    -207 * carScale,
    33 * carScale,
    -203 * carScale,
    25 * carScale,
    -189 * carScale,
    35 * carScale
  );
  bezierVertex(
    -184 * carScale,
    46 * carScale,
    -181 * carScale,
    57 * carScale,
    -179 * carScale,
    59 * carScale
  );
  bezierVertex(
    -177 * carScale,
    64 * carScale,
    -178 * carScale,
    64 * carScale,
    -181 * carScale,
    68 * carScale
  );
  endShape();

  //side-mirrors
  beginShape();
  fill(0, 255, 0);
  vertex(-70 * carScale, -81 * carScale);
  bezierVertex(
    -65 * carScale,
    -78 * carScale,
    -65 * carScale,
    -78 * carScale,
    -62 * carScale,
    -81 * carScale
  );
  vertex(-56 * carScale, -81 * carScale);
  vertex(-48 * carScale, -103 * carScale);
  bezierVertex(
    -54 * carScale,
    -110 * carScale,
    -65 * carScale,
    -92 * carScale,
    -70 * carScale,
    -81 * carScale
  );
  endShape();

  beginShape();
  vertex(-70 * carScale, 81 * carScale);
  bezierVertex(
    -65 * carScale,
    78 * carScale,
    -65 * carScale,
    78 * carScale,
    -62 * carScale,
    81 * carScale
  );
  vertex(-56 * carScale, 81 * carScale);
  vertex(-48 * carScale, 103 * carScale);
  bezierVertex(
    -54 * carScale,
    110 * carScale,
    -65 * carScale,
    92 * carScale,
    -70 * carScale,
    81 * carScale
  );
  endShape();

  //backdetails
  beginShape();
  noFill();
  vertex(79 * carScale, -77 * carScale);
  bezierVertex(
    101 * carScale,
    -80 * carScale,
    128 * carScale,
    -78 * carScale,
    148 * carScale,
    -71 * carScale
  );
  endShape();

  beginShape();
  noFill();
  vertex(79 * carScale, 77 * carScale);
  bezierVertex(
    101 * carScale,
    80 * carScale,
    128 * carScale,
    78 * carScale,
    148 * carScale,
    71 * carScale
  );
  endShape();
  }

  let carX = 160;
  let carY = 430;
  let rotation = 0;
  let speed = 2;
  let acceleration = 0.5;

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
        backgroundImage = loadImage("map-city/cityMap1.png");
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
  } else if(whichBackground === 6){
    line(409, 0, 409, 712);
    line(589,0 ,589, 712);
  } else if(whichBackground === 7){
    line(409, 289, 409, 712);
    line(589,380, 589, 712);
    line(589, 380, 950, 380);
    line(502, 201, 950, 201);
    beginShape();
    noFill();
    vertex(409, 289);
    bezierVertex(420 ,236, 451, 205, 502, 201);
    endShape();
  } else if(whichBackground === 8){
    line(0, 200, 510, 200);
    line(0, 379, 419, 379);
    line(419, 379, 419, 712);
    line(597, 282, 597, 712);
    beginShape();
    noFill();
    vertex(510, 200);
    bezierVertex(555, 202, 598, 242, 597, 282);
    endShape();
  } else if(whichBackground === 9){
    line(419, 0, 419, 350);
    line(598, 0 ,598, 253);
    line(598, 253, 950, 253);
    line(506, 432, 950, 432);
    beginShape();
    noFill();
    vertex(419, 350);
    bezierVertex(426, 393, 460, 424, 506, 432);
    endShape();
  } else if(whichBackground === 10){
    line(0, 253, 694, 253);
    line(0, 432, 694, 432);
    line(694, 253, 694, 432);
  }
}

function cityMap() {
    isGameActive = true;
    if(whichBackground === 1 && 266 < carY && carY < 444 && carX >= 950) {
        whichBackground += 1;
        backgroundImage = loadImage("map-city/cityMap2.png");
        carX = 5;
    } else if(whichBackground === 2 && 30 < carY && carY < 211 && carX >= 950) {
        whichBackground += 1;
        backgroundImage = loadImage("map-city/cityMap3.png");
        carX = 5;
    } else if(whichBackground === 3 && 355 < carX && carX < 533 && carY >= 712) {
        whichBackground += 1;
        backgroundImage = loadImage("map-city/cityMap4.png");
        carY = 5;
    } else if(whichBackground === 4 && 200 < carY && carY < 380 && carX >= 950) {
        whichBackground += 1;
        backgroundImage = loadImage("map-city/cityMap5.png");
        carX = 5;
    } else if(whichBackground === 5 && 410 < carX && carX < 588 && carY <= 0) {
        whichBackground += 1;
        backgroundImage = loadImage("map-city/cityMap6.png");
        carY = 700;
    } else if(whichBackground === 6 && 410 < carX && carX < 588 && carY <= 0) {
        whichBackground += 1;
        backgroundImage = loadImage("map-city/cityMap7.png");
        carY = 700;
    } else if(whichBackground === 7 && 200 < carY && carY < 379 && carX >= 950) {
        whichBackground += 1;
        backgroundImage = loadImage("map-city/cityMap8.png");
        carX = 5;
    } else if(whichBackground === 8 && 420 < carX && carX < 598 && carY >= 712) {
        whichBackground += 1;
        backgroundImage = loadImage("map-city/cityMap9.png");
        carY = 5;
    } else if(whichBackground === 9 && 253 < carY && carY < 431 && carX >= 950) {
        whichBackground += 1;
        backgroundImage = loadImage("map-city/cityMap10.png");
        carX = 5;
    } else if(whichBackground === 10 && 253 < carY && carY < 431 && carX >= 695) {
        whichBackground += 1;
        backgroundImage = loadImage("map-city/cityMap10.png");
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

function drivingOverBorder(){
  if (whichBackground === 1 && carY <  320){
    console.log("over top line 1");
  } else  if (whichBackground === 1 && carY >  490){
    console.log("over bot line 1");
  } else  if (whichBackground === 2 && carY >  490){
    console.log("over top line 2");
  } else  if (whichBackground === 2 && carY >  490){
    console.log("over bot line 2");
  } else  if (whichBackground === 3 && carY >  490){
    console.log("over top line 3");
  }
}

drivingOverBorder();

}