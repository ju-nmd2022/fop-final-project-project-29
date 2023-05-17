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

createCanvas(950, 712);

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

let carX = 553;
let carY = 330;
let rotation = 0;
let speed = 0;
let acceleration = 0;

let isGameActive = true;
let whichSectionOnMap = 12;

//borders to the road
function suburbanBoundries() {
  strokeWeight(3);
  noFill();
  if (whichSectionOnMap === 1) {
    line(496, 0, 497, 203);
    line(497, 203, 949, 203);
    line(253, 0, 253, 386);
    beginShape();
    vertex(253, 386);
    bezierVertex(258, 419, 283, 437, 307, 437);
    endShape();
    line(307, 437, 950, 437);
  } else if (whichSectionOnMap === 2) {
    line(0, 203, 366, 202);
    line(366, 202, 366, 0);
    line(0, 436, 505, 435);
    beginShape();
    vertex(505, 435);
    bezierVertex(561, 430, 599, 405, 606, 350);
    endShape();
    line(606, 350, 608, 0);
  } else if (whichSectionOnMap === 3) {
    line(609, 711, 607, 366);
    line(607, 366, 950, 399);
    line(365, 711, 363, 186);
    beginShape();
    vertex(363, 186);
    bezierVertex(362, 138, 393, 96, 463, 110);
    endShape();
    line(463, 110, 949, 154);
  } else if (whichSectionOnMap === 4) {
    line(0, 154, 261, 178);
    beginShape();
    vertex(261, 178);
    bezierVertex(320, 63, 404, 20, 504, 17);
    bezierVertex(705, 27, 786, 153, 790, 306);
    bezierVertex(784, 447, 716, 504, 619, 556);
    endShape();
    line(619, 556, 621, 711);
    line(0, 399, 260, 425);
    line(260, 425, 292, 475);
    line(292, 475, 428, 365);
    beginShape();
    vertex(428, 365);
    bezierVertex(383, 290, 426, 197, 506, 199);
    bezierVertex(630, 210, 633, 350, 559, 396);
    vertex(442, 387);
    vertex(312, 497);
    vertex(384, 547);
    vertex(383, 711);
    endShape();
  } else if (whichSectionOnMap === 5) {
    line(384, 0, 382, 344);
    beginShape();
    vertex(382, 344);
    bezierVertex(384, 386, 411, 435, 457, 448);
    vertex(950, 573);
    endShape();
    line(622, 0, 624, 234);
    line(624, 234, 950, 320);
  } else if (whichSectionOnMap === 6) {
    line(0, 320, 90, 344);
    line(90, 344, 631, 368);
    line(631, 368, 650, 0);
    line(0, 573, 40, 583);
    line(40, 583, 673, 616);
    beginShape();
    vertex(673, 616);
    bezierVertex(804, 603, 859, 532, 876, 434);
    vertex(897, 0);
    endShape();
  } else if (whichSectionOnMap === 7) {
    line(649, 711, 668, 334);
    line(668, 334, 278, 211);
    beginShape();
    vertex(278, 211);
    bezierVertex(230, 198, 213, 170, 212, 126);
    vertex(213, 0);
    endShape();
    line(456, 0, 456, 13);
    line(456, 13, 786, 121);
    beginShape();
    vertex(786, 121);
    bezierVertex(868, 144, 919, 209, 917, 291);
    vertex(897, 712);
    endShape();
  } else if (whichSectionOnMap === 8) {
    line(458, 712, 458, 654);
    line(458, 654, 565, 654);
    beginShape();
    vertex(565, 654);
    bezierVertex(641, 651, 708, 580, 719, 496);
    vertex(718, 139);
    bezierVertex(716, 96, 685, 69, 644, 68);
    vertex(0, 68);
    endShape();
    line(0, 312, 474, 310);
    line(474, 310, 474, 403);
    beginShape();
    vertex(474, 403);
    bezierVertex(311, 394, 221, 463, 218, 571);
    vertex(216, 713);
    endShape();
  } else if (whichSectionOnMap === 9) {
    line(0, 595, 553, 594);
    beginShape();
    vertex(553, 594);
    bezierVertex(646, 585, 707, 518, 715, 439);
    vertex(714, 313);
    vertex(950, 312);
    endShape();
    line(0, 354, 470, 356);
    line(470, 356, 470, 246);
    beginShape();
    vertex(470, 246);
    bezierVertex(480, 152, 527, 87, 632, 67);
    vertex(951, 67);
    endShape();
  } else if (whichSectionOnMap === 10) {
    line(0, 38, 355, 44);
    beginShape();
    vertex(355, 44);
    bezierVertex(409, 44, 454, 83, 454, 136);
    vertex(454, 352);
    vertex(950, 354);
    endShape();
    line(950, 595, 328, 596);
    beginShape();
    vertex(328, 596);
    bezierVertex(249, 606, 213, 572, 208, 511);
    vertex(210, 290);
    vertex(0, 284);
    endShape();
  } else if (whichSectionOnMap === 11) {
    line(463, 713, 431, 485);
    line(431, 485, 432, 270);
    line(432, 270, 950, 282);
    beginShape();
    vertex(216, 713);
    vertex(189, 515);
    vertex(190, 175);
    bezierVertex(205, 73, 300, 3, 460, 27);
    vertex(950, 37);
    endShape();
  } else if (whichSectionOnMap === 12) {
    line(465, 0, 494, 209);
    line(494, 209, 496, 712);
    line(216, 0, 252, 256);
    line(252, 256, 252, 713);
  }
}

function checkCarPosition() {
  if (whichSectionOnMap === 1 && carX >= 900 && 203 < carY && carY < 435) {
    whichSectionOnMap += 1;
    carX = 0;
    backgroundImage = loadImage("suburbanMap/SuburbanMap-10.png");
  } else if (whichSectionOnMap === 2 && carY <= 0 && carX > 366 && carX < 607) {
    whichSectionOnMap += 1;
    carY = 712;
    backgroundImage = loadImage("suburbanMap/SuburbanMap-6.png");
  } else if (
    whichSectionOnMap === 3 &&
    carX >= 900 &&
    carY > 154 &&
    carY < 399
  ) {
    whichSectionOnMap += 1;
    carX = 0;
    backgroundImage = loadImage("suburbanMap/SuburbanMap-7.png");
  } else if (
    whichSectionOnMap === 4 &&
    carY >= 712 &&
    carX > 383 &&
    carX < 620
  ) {
    whichSectionOnMap += 1;
    carY = 0;
    backgroundImage = loadImage("suburbanMap/SuburbanMap-11.png");
  } else if (
    whichSectionOnMap === 5 &&
    carX >= 900 &&
    carY > 320 &&
    carY < 572
  ) {
    whichSectionOnMap += 1;
    carX = 0;
    backgroundImage = loadImage("suburbanMap/SuburbanMap-12.png");
  } else if (whichSectionOnMap === 6 && carY <= 0 && carX > 650 && carX < 896) {
    whichSectionOnMap += 1;
    carY = 712;
    backgroundImage = loadImage("suburbanMap/SuburbanMap-8.png");
  } else if (whichSectionOnMap === 7 && carY <= 0 && carX > 213 && carX < 455) {
    whichSectionOnMap += 1;
    carY = 712;
    backgroundImage = loadImage("suburbanMap/SuburbanMap-4.png");
  } else if (whichSectionOnMap === 8 && carX <= 0 && carY > 68 && carY < 312) {
    whichSectionOnMap += 1;
    carX = 900;
    backgroundImage = loadImage("suburbanMap/SuburbanMap-3.png");
  } else if (whichSectionOnMap === 9 && carX <= 0 && carY > 354 && carY < 594) {
    whichSectionOnMap += 1;
    carX = 900;
    backgroundImage = loadImage("suburbanMap/SuburbanMap-2.png");
  } else if (whichSectionOnMap === 10 && carX <= 0 && carY > 38 && carY < 284) {
    whichSectionOnMap += 1;
    carX = 900;
    backgroundImage = loadImage("suburbanMap/SuburbanMap-1.png");
  } else if (
    whichSectionOnMap === 11 &&
    carY >= 712 &&
    carX > 215 &&
    carX < 463
  ) {
    whichSectionOnMap += 1;
    carY = 0;
    backgroundImage = loadImage("suburbanMap/SuburbanMap-5.png");
  } else if (
    whichSectionOnMap === 12 &&
    carY >= 712 &&
    carX > 214 &&
    carX < 463
  ) {
    whichSectionOnMap += 1;
    carY = 0;
    backgroundImage = loadImage("suburbanMap/SuburbanMap-9.png");
  } else if (
    whichSectionOnMap === 13 &&
    carX >= 544 &&
    carY > 200 &&
    carY < 437
  ) {
    // win statement
    // stop timer
  }
}

function draw() {
  background(subMapSection12);
  checkCarPosition();
  suburbanBoundries();
  car(carX, carY, rotation);

  if (isGameActive === false) {
    acceleration = 0;
  } else if (isGameActive === true) {
    acceleration = 0;
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
