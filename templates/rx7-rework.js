let carX = 0;
let carY = 0;
let carScale = 0.4;

let rotation = 0;
let speed = 0;
let acceleration = 0.3;

function car(carX, carY, rotation) {
  translate(carX + 300, carY + 200);
  rotate(rotation );

  strokeWeight(1*carScale);
  //BaseBody
  fill("#ed11a4");
  beginShape();
  vertex(-187 * carScale, -67 * carScale);
  bezierVertex(
    -173 * carScale,
    -75 * carScale,
    -154 * carScale,
    -80 * carScale,
    -125 * carScale,
    -78 * carScale
  );
  bezierVertex(
    -62 * carScale,
    -72 * carScale,
    9 * carScale,
    -70 * carScale,
    100 * carScale,
    -75 * carScale
  );
  bezierVertex(
    124 * carScale,
    -77 * carScale,
    165 * carScale,
    -72 * carScale,
    180 * carScale,
    -69 * carScale
  );
  bezierVertex(
    192 * carScale,
    -66 * carScale,
    194 * carScale,
    -52 * carScale,
    194 * carScale,
    0 * carScale
  );

  bezierVertex(
    194 * carScale,
    52 * carScale,
    192 * carScale,
    66 * carScale,
    180 * carScale,
    69 * carScale
  );
  bezierVertex(
    165 * carScale,
    72 * carScale,
    124 * carScale,
    77 * carScale,
    100 * carScale,
    75 * carScale
  );
  bezierVertex(
    9 * carScale,
    70 * carScale,
    -62 * carScale,
    72 * carScale,
    -125 * carScale,
    78 * carScale
  );
  bezierVertex(
    -154 * carScale,
    80 * carScale,
    -173 * carScale,
    75 * carScale,
    -187 * carScale,
    67 * carScale
  );

  bezierVertex(
    -213 * carScale,
    25 * carScale,
    -213 * carScale,
    -35 * carScale,
    -187 * carScale,
    -67 * carScale
  );
  endShape();

  //mirror right
  beginShape();
  vertex(-68 * carScale, -70 * carScale);
  bezierVertex(
    -67 * carScale,
    -81 * carScale,
    -60 * carScale,
    -87 * carScale,
    -53 * carScale,
    -91 * carScale
  );
  vertex(-57 * carScale, -75 * carScale);
  vertex(-59 * carScale, -75 * carScale);
  vertex(-60 * carScale, -67 * carScale);
  bezierVertex(
    -65 * carScale,
    -68 * carScale,
    -66 * carScale,
    -68 * carScale,
    -68 * carScale,
    -70 * carScale
  );
  endShape();

  //mirror left
  beginShape();
  vertex(-68 * carScale, 70 * carScale);
  bezierVertex(
    -67 * carScale,
    81 * carScale,
    -60 * carScale,
    87 * carScale,
    -53 * carScale,
    91 * carScale
  );
  vertex(-57 * carScale, 75 * carScale);
  vertex(-59 * carScale, 75 * carScale);
  vertex(-60 * carScale, 67 * carScale);
  bezierVertex(
    -65 * carScale,
    68 * carScale,
    -66 * carScale,
    68 * carScale,
    -68 * carScale,
    70 * carScale
  );
  endShape();

  //spoiler
  beginShape();
  vertex(205*carScale, -57*carScale);
  bezierVertex(
    210 * carScale,
    -25 * carScale,
    210 * carScale,
    25 * carScale,
    205 * carScale,
    57 * carScale
  );
  vertex(180 * carScale, 57 * carScale);
  bezierVertex(
    185 * carScale,
    25 * carScale,
    185 * carScale,
    -25 * carScale,
    180 * carScale,
    -57 * carScale
  );
  vertex(205 * carScale, -57 * carScale);
  endShape();

  beginShape();
  vertex(160 * carScale, -60 * carScale);
  vertex(210 * carScale, -60 * carScale);
  vertex(210 * carScale, -55 * carScale);
  vertex(160 * carScale, -55 * carScale);
  endShape();

  beginShape();
  vertex(160 * carScale, 60 * carScale);
  vertex(210 * carScale, 60 * carScale);
  vertex(210 * carScale, 55 * carScale);
  vertex(160 * carScale, 55 * carScale);
  endShape();

  //hood
  line(-184 * carScale, -41 * carScale, -186 * carScale, 41 * carScale);
  line(-156 * carScale, -63 * carScale, -68 * carScale, -61 * carScale);
  line(-156 * carScale, 63 * carScale, -68 * carScale, 61 * carScale);

  //details on hood
  push();
  noFill();
  beginShape();
  vertex(-110 * carScale, -33 * carScale);
  vertex(-150 * carScale, -31 * carScale);
  vertex(-151 * carScale, -10 * carScale);
  vertex(-107 * carScale, -8 * carScale);
  endShape();

  beginShape();
  vertex(-107 * carScale, 8 * carScale);
  vertex(-151 * carScale, 10 * carScale);
  vertex(-150 * carScale, 31 * carScale);
  vertex(-110 * carScale, 33 * carScale);
  endShape();

  //details in the back
  beginShape();
  vertex(91 * carScale, 62 * carScale);
  bezierVertex(
    119 * carScale,
    65 * carScale,
    133 * carScale,
    65 * carScale,
    148 * carScale,
    59 * carScale
  );
  endShape();

  beginShape();
  vertex(91 * carScale, -62 * carScale);
  bezierVertex(
    119 * carScale,
    -65 * carScale,
    133 * carScale,
    -65 * carScale,
    148 * carScale,
    -59 * carScale
  );
  endShape();
  pop();

  //headlights

  fill(0, 0, 0, 80);
  beginShape();
  vertex(-155 * carScale, -67 * carScale);
  vertex(-156 * carScale, -42 * carScale);
  vertex(-187 * carScale, -41 * carScale);
  bezierVertex(
    -185 * carScale,
    -65 * carScale,
    -181 * carScale,
    -66 * carScale,
    -155 * carScale,
    -67 * carScale
  );
  endShape();

  beginShape();
  vertex(-155 * carScale, 67 * carScale);
  vertex(-156 * carScale, 42 * carScale);
  vertex(-187 * carScale, 41 * carScale);
  bezierVertex(
    -185 * carScale,
    65 * carScale,
    -181 * carScale,
    66 * carScale,
    -155 * carScale,
    67 * carScale
  );
  endShape();

  //windshield
  push();
  fill(35, 31, 32);
  beginShape();
  vertex(-64 * carScale, -63 * carScale);
  vertex(-30 * carScale, -48 * carScale);
  bezierVertex(
    -40 * carScale,
    -17 * carScale,
    -40 * carScale,
    17 * carScale,
    -30 * carScale,
    48 * carScale
  );
  vertex(-64 * carScale, 63 * carScale);
  bezierVertex(
    -105 * carScale,
    45 * carScale,
    -105 * carScale,
    -55 * carScale,
    -64 * carScale,
    -63 * carScale
  );
  endShape();

  //window right
  beginShape();
  vertex(-57 * carScale, -65 * carScale);
  vertex(-16 * carScale, -49 * carScale);
  bezierVertex(
    32 * carScale,
    -42 * carScale,
    45 * carScale,
    -54 * carScale,
    57 * carScale,
    -64 * carScale
  );
  vertex(-57 * carScale, -65 * carScale);
  endShape();

  //window left
  beginShape();
  vertex(-57 * carScale, 65 * carScale);
  vertex(-16 * carScale, 49 * carScale);
  bezierVertex(
    32 * carScale,
    42 * carScale,
    45 * carScale,
    54 * carScale,
    57 * carScale,
    64 * carScale
  );
  vertex(-57 * carScale, 65 * carScale);
  endShape();

  //back window
  beginShape();
  vertex(68 * carScale, -43 * carScale);
  vertex(91 * carScale, -58 * carScale);
  bezierVertex(
    165 * carScale,
    -43 * carScale,
    165 * carScale,
    43 * carScale,
    91 * carScale,
    58 * carScale
  );
  vertex(68 * carScale, 43 * carScale);
  vertex(68 * carScale, -43 * carScale);
  endShape();
  pop();

  push();
  noFill();
  beginShape();
  vertex(62 * carScale, -43 * carScale);
  vertex(91 * carScale, -62 * carScale);
  bezierVertex(
    172 * carScale,
    -43 * carScale,
    172 * carScale,
    43 * carScale,
    91 * carScale,
    62 * carScale
  );
  vertex(62 * carScale, 43 * carScale);
  vertex(62 * carScale, -43 * carScale);
  endShape();
  pop();

  //mirror right
  beginShape();
  vertex(-68 * carScale, -70 * carScale);
  bezierVertex(
    -67 * carScale,
    -81 * carScale,
    -60 * carScale,
    -87 * carScale,
    -53 * carScale,
    -91 * carScale
  );
  vertex(-57 * carScale, -75 * carScale);
  vertex(-59 * carScale, -75 * carScale);
  vertex(-60 * carScale, -67 * carScale);
  bezierVertex(
    -65 * carScale,
    -68 * carScale,
    -66 * carScale,
    -68 * carScale,
    -68 * carScale,
    -70 * carScale
  );
  endShape();

  //mirror left
  beginShape();
  vertex(-68 * carScale, 70 * carScale);
  bezierVertex(
    -67 * carScale,
    81 * carScale,
    -60 * carScale,
    87 * carScale,
    -53 * carScale,
    91 * carScale
  );
  vertex(-57 * carScale, 75 * carScale);
  vertex(-59 * carScale, 75 * carScale);
  vertex(-60 * carScale, 67 * carScale);
  bezierVertex(
    -65 * carScale,
    68 * carScale,
    -66 * carScale,
    68 * carScale,
    -68 * carScale,
    70 * carScale
  );
  endShape();
}

function draw() {
  background(255);
  car(carX, carY, rotation);

  //speed = speed + acceleration;

  carX = carX + Math.cos(rotation) * speed;
  carY = carY + Math.sin(rotation) * speed;

  if (keyIsDown(38)) {
    speed = -15;
  } else if (keyIsDown(40)) {
    speed = 15;
  } else {
    speed = 0;
  }

  if (keyIsDown(37)) {
    rotation = rotation - 0.05;
  } else if (keyIsDown(39)) {
    rotation = rotation + 0.05;
  }
}
