let carX = 0;
let carY = 0;
let carScale = 0.5;

let rotation = 0;
let speed = 0;
let acceleration = 0.3;

//outline
function car(carX, carY, rotation) {
  translate(carX + 200, carY + 200);
  rotate(rotation);

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
