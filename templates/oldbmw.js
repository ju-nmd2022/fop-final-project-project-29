let x = 210;
let y = 135;

let rotation = 0;
let speed = 0;
let acceleration = 0.3;

function car(x, y, rotation) {
    translate(x, y);
    rotate(rotation);
//Base Body
fill(217, 109, 37);
beginShape();
vertex(-180, -41);
vertex(-176, -45);
vertex(-170, -67);
vertex(-160, -74);
vertex(-155, -80);
vertex(-90, -79);
vertex(-75, -75);
vertex(28, -75);
vertex(73, -82);
vertex(130, -82);
vertex(154, -72);
vertex(178, -69);
bezierVertex(182, -66, 185, -65, 185, -57);
vertex(185, 55);
bezierVertex(185, 63, 182, 66, 178, 66);
vertex(154, 69);
vertex(130, 78);
vertex(73, 78);
vertex(28, 72);
vertex(-75, 72);
vertex(-90, 76);
vertex(-155, 77);
vertex(-160, 72);
vertex(-170, 65);
vertex(-176, 45);
vertex(-180, 41);
bezierVertex(-185, 20, -185, -19, -180, -41);
endShape();

//Headlights
push();
fill(255, 242, 215);
beginShape();
vertex(-158, -76);
vertex(-170, -67);
vertex(-174, -51);
vertex(-160, -52);
vertex(-158, -76);
endShape();

beginShape();
vertex(-158, 74);
vertex(-170, 65);
vertex(-174, 50);
vertex(-160, 50);
vertex(-158, 74);
endShape();
pop();

//Hood
beginShape();
vertex(129, -67);
bezierVertex(33, -70, -79, -70, -151, -67);
bezierVertex(-161, -67, -164, -66, -165, -56);
vertex(-170, -32);
vertex(-175, -28);
bezierVertex(-177, -14, -177, 6, -175, 24);
vertex(-170, 28);
vertex(-165, 56);
bezierVertex(-164, 62, -161, 63, -151, 63);
bezierVertex(-79, 66, 33, 66, 129, 66);
endShape();

//Detail of Hood
line(-170, -32, -85, -42);
line(-170, 28, -85, 38);

//Backlights
push();
fill(255, 0, 0);
beginShape();
vertex(181, -67);
vertex(181, -45);
vertex(185, -45);
vertex(185, -60);
bezierVertex(185, -66, 183, -66, 181, -67);
endShape();

beginShape();
vertex(181, 66);
vertex(181, 44);
vertex(185, 44);
vertex(185, 59);
bezierVertex(185, 65, 183, 65, 181, 66);
endShape();
pop();

//Trunk
beginShape();
vertex(168, -53);
vertex(190, -52);
bezierVertex(196, -27, 196, 18, 190, 51);
vertex(168, 52);
endShape();

//Windshield
fill(35, 31, 32);
beginShape();
vertex(-75, -59);
vertex(-31, -49);
bezierVertex(-36, -24, -36, 19, -31, 45);
vertex(-75, 55);
bezierVertex(-90, 35, -90, -46, -75, -59);
endShape();

//long window right
beginShape();
vertex(-17, -51);
vertex(81, -49);
vertex(110, -60);
vertex(-51, -64);
vertex(-17, -51);
endShape();

//long window left
beginShape();
vertex(-17, 47);
vertex(81, 45);
vertex(110, 56);
vertex(-51, 60);
vertex(-17, 47);
endShape();

//Backwindow
beginShape();
vertex(88, -37);
vertex(132, -50);
bezierVertex(146, -25, 146, 26, 132, 46);
vertex(88, 33);
bezierVertex(91, 23, 91, -28, 88, -37);
endShape();

//mirror right
fill(217, 109, 37);
beginShape();
vertex(-51,-59);
vertex(-50, -70);
vertex(-45, -68);
vertex(-43, -83);
bezierVertex(-57, -82, -59, -70, -59, -63);
bezierVertex(-59, -60, -55, -58, -51, -59);
endShape();

//mirror left
beginShape();
vertex(-51, 55);
vertex(-50, 66);
vertex(-45, 64);
vertex(-43, 79);
bezierVertex(-57, 78, -59, 66, -59, 59);
bezierVertex(-59, 56, -55, 54, -51, 55);
endShape();
}

function draw() {
    background(255);
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
      rotation = rotation - 0.05;
    } else if (keyIsDown(39)) {
      rotation = rotation + 0.05;
    }
  }