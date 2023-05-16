let carX = 0;
let carY = 0;
let carScale = 1;

let rotation = 0;
let speed = 0;
let acceleration = 0.3;

function car(carX, carY, rotation) {
    translate(carX +300, carY +200);
    rotate(rotation);

strokeWeight(1);
//BaseBody
fill("#ed11a4");
beginShape();
vertex(-187 ,-67 );
bezierVertex(-173 ,-75 ,-154 ,-80 ,-125, -78);
bezierVertex(-62, -72, 9, -70, 100, -75 );
bezierVertex(124, -77, 165, -72, 180, -69 );
bezierVertex(192 , -66, 194, -52, 194, 0);

bezierVertex(194, 52, 192, 66, 180, 69);
bezierVertex(165, 72, 124, 77, 100, 75);
bezierVertex(9, 70, -62, 72, -125, 78);
bezierVertex(-154, 80, -173, 75, -187, 67);

bezierVertex( -213, 25, -213, -35, -187, -67);
endShape();

//mirror right
beginShape();
vertex(-68 , -70 );
bezierVertex(-67, -81, -60, -87, -53, -91);
vertex(-57, -75);
vertex(-59, -75);
vertex(-60 , -67);
bezierVertex(-65, -68, -66, -68, -68, -70);
endShape();

//mirror left
beginShape();
vertex(-68, 70);
bezierVertex(-67, 81, -60, 87, -53, 91);
vertex(-57, 75);
vertex(-59, 75);
vertex(-60, 67);
bezierVertex(-65, 68, -66, 68, -68, 70);
endShape();

//spoiler
beginShape();
vertex(205 , -57);
bezierVertex(210, -25, 210, 25, 205, 57);
vertex(180, 57);
bezierVertex( 185, 25, 185, -25, 180, -57);
vertex(205, -57);
endShape();

beginShape();
vertex(160, -60);
vertex(210, -60);
vertex(210, -55);
vertex(160, -55);
endShape();

beginShape();
vertex(160, 60);
vertex(210, 60);
vertex(210, 55);
vertex(160, 55);
endShape();

//hood
line(-184, -41, -186, 41);
line(-156, -63, -68, -61);
line(-156, 63, -68, 61);

//details on hood
push();
noFill();
beginShape();
vertex(-110, -33);
vertex(-150, -31);
vertex(-151, -10);
vertex(-107, -8);
endShape();

beginShape();
vertex(- 107, 8);
vertex(- 151, 10);
vertex(- 150, 31);
vertex(- 110, 33);
endShape();

//details in the back
beginShape();
vertex(91, 62);
bezierVertex(119, 65, 133, 65, 148, 59);
endShape();

beginShape();
vertex(91 , -62);
bezierVertex(119, -65, 133, -65, 148, -59);
endShape();
pop();

//headlights

fill(0, 0, 0, 80);
beginShape();
vertex(-155, -67);
vertex(-156, -42);
vertex(-187, -41);
bezierVertex(-185, -65, -181, -66, -155, -67);
endShape();

beginShape();
vertex(-155, 67);
vertex(-156, 42);
vertex(-187, 41);
bezierVertex(-185, 65, -181, 66, -155, 67);
endShape();

//windshield
push();
fill(35, 31, 32);
beginShape();
vertex(-64, - 63);
vertex(-30, - 48);
bezierVertex(-40, -17, -40, 17 , -30, 48);
vertex(-64, 63);
bezierVertex(-105, 45, -105, -55, -64, -63);
endShape();

//window right
beginShape();
vertex(-57, -65);
vertex(-16, -49);
bezierVertex(32, -42, 45, -54, 57, -64);
vertex(-57, -65);
endShape();

//window left
beginShape();
vertex(-57, 65 );
vertex(-16, 49 );
bezierVertex(32, 42, 45, 54, 57, 64);
vertex(-57, 65);
endShape();

//back window
beginShape();
vertex(68, -43);
vertex(91, -58);
bezierVertex(165, -43, 165, 43, 91, 58);
vertex(68, 43);
vertex(68, -43);
endShape();
pop();

push();
noFill();
beginShape();
vertex(62, -43);
vertex(91, -62);
bezierVertex(172, -43, 172, 43, 91, 62);
vertex(62, 43);
vertex(62 , -43);
endShape();
pop();

//mirror right
beginShape();
vertex(-68, -70);
bezierVertex(-67, -81, -60, -87, -53, -91);
vertex(-57, -75);
vertex(-59, -75);
vertex(-60, -67);
bezierVertex(-65, -68, -66, -68, -68, -70);
endShape();

//mirror left
beginShape();
vertex(-68 ,70);
bezierVertex(-67, 81, -60, 87, -53, 91);
vertex(-57, 75);
vertex(-59, 75);
vertex(-60, 67);
bezierVertex(-65, 68, -66, 68, -68, 70);
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