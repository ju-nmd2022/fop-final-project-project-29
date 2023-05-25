function setup() {
  createCanvas(800, 800);
}
let x = 210;
let y = 135;
let carScale = 0.4;
let rotation = 0;
let speed = 0;
let acceleration = 0.3;
let targetColor = [255, 0, 0]; // Color to detect (red)

function car(x, y, rotation) {
  translate(x, y);
  rotate(rotation);
  //Base Body
  fill(217, 109, 37);
  beginShape();
  vertex(-180 * carScale, -41 * carScale);
  vertex(-176 * carScale, -45 * carScale);
  vertex(-170 * carScale, -67 * carScale);
  vertex(-160 * carScale, -74 * carScale);
  vertex(-155 * carScale, -80 * carScale);
  vertex(-90 * carScale, -79 * carScale);
  vertex(-75 * carScale, -75 * carScale);
  vertex(28 * carScale, -75 * carScale);
  vertex(73 * carScale, -82 * carScale);
  vertex(130 * carScale, -82 * carScale);
  vertex(154 * carScale, -72 * carScale);
  vertex(178 * carScale, -69 * carScale);
  bezierVertex(
    182 * carScale,
    -66 * carScale,
    185 * carScale,
    -65 * carScale,
    185 * carScale,
    -57 * carScale
  );
  vertex(185 * carScale, 55 * carScale);
  bezierVertex(
    185 * carScale,
    63 * carScale,
    182 * carScale,
    66 * carScale,
    178 * carScale,
    66 * carScale
  );
  vertex(154 * carScale, 69 * carScale);
  vertex(130 * carScale, 78 * carScale);
  vertex(73 * carScale, 78 * carScale);
  vertex(28 * carScale, 72 * carScale);
  vertex(-75 * carScale, 72 * carScale);
  vertex(-90 * carScale, 76 * carScale);
  vertex(-155 * carScale, 77 * carScale);
  vertex(-160 * carScale, 72 * carScale);
  vertex(-170 * carScale, 65 * carScale);
  vertex(-176 * carScale, 45 * carScale);
  vertex(-180 * carScale, 41 * carScale);
  bezierVertex(
    -185 * carScale,
    20 * carScale,
    -185 * carScale,
    -19 * carScale,
    -180 * carScale,
    -41 * carScale
  );
  endShape();

  //Headlights
  push();
  fill(255, 242, 215);
  beginShape();
  vertex(-158 * carScale, -76 * carScale);
  vertex(-170 * carScale, -67 * carScale);
  vertex(-174 * carScale, -51 * carScale);
  vertex(-160 * carScale, -52 * carScale);
  vertex(-158 * carScale, -76 * carScale);
  endShape();

  beginShape();
  vertex(-158 * carScale, 74 * carScale);
  vertex(-170 * carScale, 65 * carScale);
  vertex(-174 * carScale, 50 * carScale);
  vertex(-160 * carScale, 50 * carScale);
  vertex(-158 * carScale, 74 * carScale);
  endShape();
  pop();

  //Hood
  beginShape();
  vertex(129 * carScale, -67 * carScale);
  bezierVertex(
    33 * carScale,
    -70 * carScale,
    -79 * carScale,
    -70 * carScale,
    -151 * carScale,
    -67 * carScale
  );
  bezierVertex(
    -161 * carScale,
    -67 * carScale,
    -164 * carScale,
    -66 * carScale,
    -165 * carScale,
    -56 * carScale
  );
  vertex(-170 * carScale, -32 * carScale);
  vertex(-175 * carScale, -28 * carScale);
  bezierVertex(
    -177 * carScale,
    -14 * carScale,
    -177 * carScale,
    6 * carScale,
    -175 * carScale,
    24 * carScale
  );
  vertex(-170 * carScale, 28 * carScale);
  vertex(-165 * carScale, 56 * carScale);
  bezierVertex(
    -164 * carScale,
    62 * carScale,
    -161 * carScale,
    63 * carScale,
    -151 * carScale,
    63 * carScale
  );
  bezierVertex(
    -79 * carScale,
    66 * carScale,
    33 * carScale,
    66 * carScale,
    129 * carScale,
    66 * carScale
  );
  endShape();

  //Detail of Hood
  line(-170 * carScale, -32 * carScale, -85 * carScale, -42 * carScale);
  line(-170 * carScale, 28 * carScale, -85 * carScale, 38 * carScale);

  //Backlights
  push();
  fill(255, 0, 0);
  beginShape();
  vertex(181 * carScale, -67 * carScale);
  vertex(181 * carScale, -45 * carScale);
  vertex(185 * carScale, -45 * carScale);
  vertex(185 * carScale, -60 * carScale);
  bezierVertex(
    185 * carScale,
    -66 * carScale,
    183 * carScale,
    -66 * carScale,
    181 * carScale,
    -67 * carScale
  );
  endShape();

  beginShape();
  vertex(181 * carScale, 66 * carScale);
  vertex(181 * carScale, 44 * carScale);
  vertex(185 * carScale, 44 * carScale);
  vertex(185 * carScale, 59 * carScale);
  bezierVertex(
    185 * carScale,
    65 * carScale,
    183 * carScale,
    65 * carScale,
    181 * carScale,
    66 * carScale
  );
  endShape();
  pop();

  //Trunk
  beginShape();
  vertex(168 * carScale, -53 * carScale);
  vertex(190 * carScale, -52 * carScale);
  bezierVertex(
    196 * carScale,
    -27 * carScale,
    196 * carScale,
    18 * carScale,
    190 * carScale,
    51 * carScale
  );
  vertex(168 * carScale, 52 * carScale);
  endShape();

  //Windshield
  fill(35, 31, 32);
  beginShape();
  vertex(-75 * carScale, -59 * carScale);
  vertex(-31 * carScale, -49 * carScale);
  bezierVertex(
    -36 * carScale,
    -24 * carScale,
    -36 * carScale,
    19 * carScale,
    -31 * carScale,
    45 * carScale
  );
  vertex(-75 * carScale, 55 * carScale);
  bezierVertex(
    -90 * carScale,
    35 * carScale,
    -90 * carScale,
    -46 * carScale,
    -75 * carScale,
    -59 * carScale
  );
  endShape();

  //long window right
  beginShape();
  vertex(-17 * carScale, -51 * carScale);
  vertex(81 * carScale, -49 * carScale);
  vertex(110 * carScale, -60 * carScale);
  vertex(-51 * carScale, -64 * carScale);
  vertex(-17 * carScale, -51 * carScale);
  endShape();

  //long window left
  beginShape();
  vertex(-17 * carScale, 47 * carScale);
  vertex(81 * carScale, 45 * carScale);
  vertex(110 * carScale, 56 * carScale);
  vertex(-51 * carScale, 60 * carScale);
  vertex(-17 * carScale, 47 * carScale);
  endShape();

  //Backwindow
  beginShape();
  vertex(88 * carScale, -37 * carScale);
  vertex(132 * carScale, -50 * carScale);
  bezierVertex(
    146 * carScale,
    -25 * carScale,
    146 * carScale,
    26 * carScale,
    132 * carScale,
    46 * carScale
  );
  vertex(88 * carScale, 33 * carScale);
  bezierVertex(
    91 * carScale,
    23 * carScale,
    91 * carScale,
    -28 * carScale,
    88 * carScale,
    -37 * carScale
  );
  endShape();

  //mirror right
  fill(217, 109, 37);
  beginShape();
  vertex(-51 * carScale, -59 * carScale);
  vertex(-50 * carScale, -70 * carScale);
  vertex(-45 * carScale, -68 * carScale);
  vertex(-43 * carScale, -83 * carScale);
  bezierVertex(
    -57 * carScale,
    -82 * carScale,
    -59 * carScale,
    -70 * carScale,
    -59 * carScale,
    -63 * carScale
  );
  bezierVertex(
    -59 * carScale,
    -60 * carScale,
    -55 * carScale,
    -58 * carScale,
    -51 * carScale,
    -59 * carScale
  );
  endShape();

  //mirror left
  beginShape();
  vertex(-51 * carScale, 55 * carScale);
  vertex(-50 * carScale, 66 * carScale);
  vertex(-45 * carScale, 64 * carScale);
  vertex(-43 * carScale, 79 * carScale);
  bezierVertex(
    -57 * carScale,
    78 * carScale,
    -59 * carScale,
    66 * carScale,
    -59 * carScale,
    59 * carScale
  );
  bezierVertex(
    -59 * carScale,
    56 * carScale,
    -55 * carScale,
    54 * carScale,
    -51 * carScale,
    55 * carScale
  );
  endShape();
}

function draw() {
  background(220);
push();
  stroke(targetColor);
  line(378, 556, 899, 554);
  pop();
  // Draw the object
  car(x, y, rotation);
  
  //speed = speed + acceleration;

  x = x + Math.cos(rotation) * speed;
  y = y + Math.sin(rotation) * speed;

  if (keyIsDown(38)) {
    speed = -15;
  } else if (keyIsDown(40)) {
    speed = 15;
  } else {
    speed = 0;
  }

  if (keyIsDown(37)) {
    rotation = rotation - 0.1;
  } else if (keyIsDown(39)) {
    rotation = rotation + 0.1;
  }
  // Check if the object touches the target color
  if (detectCollision()) {
    // Change the screen or perform desired action
    changeScreen();
  }
}

function detectCollision() {
    // Define the bounding box of the car
    let carXMin = x - 185 * carScale;
    let carXMax = x + 185 * carScale;
    let carYMin = y - 82 * carScale;
    let carYMax = y + 82 * carScale;
  
    // Iterate over the pixels within the bounding box
    for (let i = carXMin; i <= carXMax; i++) {
      for (let j = carYMin; j <= carYMax; j++) {
        let pixelColor = get(i, j);
  
        // Check if the pixel color is red
        if (pixelColor[0] === 255 && pixelColor[1] === 0 && pixelColor[2] === 0) {
          return true; // Collision detected
        }
      } 
    } 
    
    return false; // No collision
  }

function changeScreen() {
  // Your code to change the screen or perform an action goes here
  console.log("omg, its working");
}
