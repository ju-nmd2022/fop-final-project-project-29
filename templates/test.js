function car(x, y, rotation) {
  translate(x, y);
  rotate(rotation);
  fill("#f4ab78");
  rect(-50, -30, 60, 30);
  fill(0);
  rect(-5, -25, 10, 20);
}

let x = 200;
let y = 200;
let rotation = 0;
let speed = 0;
let acceleration = 0.3;
 
function draw() {
  background(255);
  car(x, y, rotation);

  speed = speed + acceleration;

  x = x + Math.cos(rotation) * speed;
  y = y + Math.sin(rotation) * speed;

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
