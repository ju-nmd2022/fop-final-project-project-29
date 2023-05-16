let carX = 0;
let carY = 0;
let carScale = 1;

let rotation = 0;
let speed = 0;
let acceleration = 0.3;

//outline
function car(carX, carY, rotation) {
    translate(carX +200, carY +200);
    rotate(rotation);
beginShape();
stroke(0);
fill(0,255,0);
strokeWeight(1);
vertex( - 215,0);
bezierVertex(-215, -30, -210, -50, -186, -70);
bezierVertex(-185, -72, -178, -73, -175, -76);
bezierVertex(-173, -78, -165, -81,-157, -86);
bezierVertex(-157, -87,-151, -87, -148, -88);
bezierVertex(40, -80,40, -80, 73, -82);
bezierVertex(73, -82, 103, -87, 123, -87);
vertex( 182, -65);
bezierVertex(182, -65, 185, -63, 190, -55);
bezierVertex(210, -40, 210, 0, 210, 0);
vertex( 210, 0);
bezierVertex(210, 0, 210, 40, 190, 55);
bezierVertex(190, 55, 185, 63, 182, 65);
vertex(123, 87);
bezierVertex(103, 87,73, 82,73, 82);
bezierVertex(40, 80, 40, 80, -148, 90);
bezierVertex(-148, 90, -159, 93, -171, 84);
bezierVertex(-200, 70, -186, 70, -200, 60);
bezierVertex(-210, 50, -215, 30, -215, 0);
endShape();

//front window
beginShape();
fill(35, 31, 32);
vertex(- 21, -50); 
bezierVertex(-25, -40, -25, 40, -21, 50);
bezierVertex(-19, 56, -26, 59, -26, 60);
bezierVertex(-77, 74, -77, 74, -77, 74);
bezierVertex(-92, 58, -103, 26, -103, 0);
bezierVertex(-103, -40, -77, -70, -77, -72);
vertex(- 26, -60);
bezierVertex(-26, -60, -19, -56, -21, -50);
endShape();

//back window
beginShape();
vertex(75,0);
vertex(75, 42);
bezierVertex(76, 48, 82, 49, 91, 52); 
bezierVertex(129, 60, 129, 57, 129, 58);
bezierVertex(148, 52, 144, 27, 146, 0);
bezierVertex(144, -27, 148, -52, 129, -58);
bezierVertex(129, -57, 129, -60, 91, -52);
bezierVertex(82, -48, 76, -48, 75, -32);
vertex(75, 0);
endShape();

//side window right
beginShape();
vertex(-66, -76);
bezierVertex(-26, -62, 06, -60, 15, -58);
bezierVertex(52, -57, 54, -60, 75, -65);
bezierVertex(80, -67, 80, -69, 76, -72);
bezierVertex(50, -77, -12, -79, - 66, -76); 
endShape();

//side window left
beginShape();
vertex(-66, 76);
bezierVertex(- 26, 62, 06, 60, 15, 58);
bezierVertex(52, 57, 54, 60, 75, 65);
bezierVertex(80, 67, 80, 69, 76, 72);
bezierVertex(50, 77, -12, 79, -66, 76); 
endShape();

//wing
beginShape();
noFill();
vertex(175, 51);
vertex(141, 66);
vertex(181, 62);
vertex(191, 54);
endShape();

beginShape();
vertex(175, -51);
vertex(141, -66);
vertex(181, -62);
vertex(191, -54);
endShape();

beginShape();
vertex(175, -51);
bezierVertex(186, -20, 186, +20, 175, 51);
endShape();

//hood
beginShape();
noFill();
vertex(-77, -72);
bezierVertex(-205, -95, -205, -33, -205, 0);
bezierVertex(-205, 33, -205, 95, -77, 74);
endShape();

beginShape();
vertex(-104, -45);
bezierVertex( -122, -44, -170, -40, -182, -36); 
endShape();

beginShape();
vertex(-104, 45);
bezierVertex(-122, 44, -170, 40, -182, 36);
endShape();

beginShape();
vertex(-116, -18);
vertex(-116, 18);
vertex(-156, 21);
vertex(-156, -21);
vertex(-116, -18);
endShape();

//headlights
 beginShape();
fill(255, 242, 215);
vertex(-181, -68);
bezierVertex(-195, -58, -201, -48, -206, -36);
bezierVertex(-207, -33, -207, -25, -189, -35);
bezierVertex(-184, -46, -181, -57, -179, -59);
bezierVertex(-177, -64, -178, -66, -181, -68);
endShape();

beginShape();
vertex(-181, 68);
bezierVertex(-195, 58, -201, 48, -206, 36);
bezierVertex(-207, 33, -203, 25, -189, 35);
bezierVertex(-184, 46, -181, 57, -179, 59);
bezierVertex(-177, 64, -178, 64, -181, 68);
endShape();

//side-mirrors
beginShape();
fill(0,255,0);
vertex(-70, -81);
bezierVertex(-65, -78, -65, -78, -62, -81);
vertex(-56, -81);
vertex(-48, -103);
bezierVertex(-54, -110, -65, -92, -70, -81);
endShape();

beginShape();
vertex(-70, 81);
bezierVertex(-65, 78, -65, 78, -62, 81);
vertex(-56, 81);
vertex(-48, 103);
bezierVertex(-54, 110, -65, 92, -70, 81);
endShape();

//backdetails
beginShape();
noFill();
vertex(79, -77);
bezierVertex(101, -80, 128, -78, 148, -71);
endShape();

beginShape();
noFill();
vertex(79, 77);
bezierVertex(101, 80, 128, 78, 148, 71);
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