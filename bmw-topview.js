let carX = 260;
let carY = 180;
background(255);

//Base Body
fill(217, 109, 37);
beginShape();
vertex(carX - 184, carY - 37);
vertex(carX - 180, carY - 41);
vertex(carX - 174, carY - 63);
vertex(carX - 164, carY - 70);
vertex(carX - 159, carY - 76);
vertex(carX - 94, carY - 75);
vertex(carX - 79, carY - 71);
vertex(carX + 24, carY - 71);
vertex(carX + 69, carY - 78);
vertex(carX + 126, carY - 78);
vertex(carX + 150, carY - 68);
vertex(carX + 174, carY - 65);
bezierVertex(
  carX + 178,
  carY - 62,
  carX + 182,
  carY - 61,
  carX + 181,
  carY - 53
);
vertex(carX + 181, carY + 59);
bezierVertex(
  carX + 181,
  carY + 67,
  carX + 178,
  carY + 70,
  carX + 174,
  carY + 70
);
vertex(carX + 150, carY + 73);
vertex(carX + 126, carY + 82);
vertex(carX + 69, carY + 82);
vertex(carX + 24, carY + 76);
vertex(carX - 79, carY + 76);
vertex(carX - 94, carY + 80);
vertex(carX - 159, carY + 81);
vertex(carX - 164, carY + 76);
vertex(carX - 174, carY + 69);
vertex(carX - 180, carY + 49);
vertex(carX - 184, carY + 45);
bezierVertex(
  carX - 189,
  carY + 24,
  carX - 189,
  carY - 15,
  carX - 184,
  carY - 37
);
endShape();

//Headlights
push();
fill(255, 242, 215);
beginShape();
vertex(carX - 162, carY - 72);
vertex(carX - 174, carY - 63);
vertex(carX - 178, carY - 47);
vertex(carX - 164, carY - 48);
vertex(carX - 162, carY - 72);
endShape();

beginShape();
vertex(carX - 162, carY + 78);
vertex(carX - 174, carY + 69);
vertex(carX - 178, carY + 54);
vertex(carX - 164, carY + 54);
vertex(carX - 162, carY + 78);
endShape();
pop();

//Hood
beginShape();
vertex(carX + 125, carY - 63);
bezierVertex(carX - 29, carY - 66, carX - 83, carY - 66, carX - 155, carY - 63);
bezierVertex(
  carX - 165,
  carY - 63,
  carX - 168,
  carY - 62,
  carX - 169,
  carY - 52
);
vertex(carX - 174, carY - 28);
vertex(carX - 179, carY - 24);
bezierVertex(
  carX - 181,
  carY - 10,
  carX - 181,
  carY + 10,
  carX - 179,
  carY + 29
);
vertex(carX - 174, carY + 32);
vertex(carX - 169, carY + 60);
bezierVertex(
  carX - 168,
  carY + 66,
  carX - 165,
  carY + 67,
  carX - 155,
  carY + 67
);
bezierVertex(carX - 83, carY + 70, carX + 29, carY + 70, carX + 125, carY + 70);
endShape();

//Detail of Hood
line(carX - 174, carY - 28, carX - 89, carY - 38);
line(carX - 174, carY + 32, carX - 89, carY + 42);

//Backlights
push();
fill(255, 0, 0);
beginShape();
vertex(carX + 177, carY - 63);
vertex(carX + 177, carY - 41);
vertex(carX + 181, carY - 41);
vertex(carX + 181, carY - 56);
bezierVertex(
  carX + 181,
  carY - 62,
  carX + 179,
  carY - 62,
  carX + 177,
  carY - 63
);
endShape();

beginShape();
vertex(carX + 177, carY + 70);
vertex(carX + 177, carY + 48);
vertex(carX + 181, carY + 48);
vertex(carX + 181, carY + 63);
bezierVertex(
  carX + 181,
  carY + 69,
  carX + 179,
  carY + 69,
  carX + 177,
  carY + 70
);
endShape();
pop();

//Trunk
beginShape();
vertex(carX + 164, carY - 49);
vertex(carX + 186, carY - 48);
bezierVertex(
  carX + 192,
  carY - 23,
  carX + 192,
  carY + 22,
  carX + 186,
  carY + 55
);
vertex(carX + 164, carY + 56);
endShape();

//Windshield
push();
fill(35, 31, 32);
beginShape();
vertex(carX - 79, carY - 55);
vertex(carX - 35, carY - 45);
bezierVertex(carX - 40, carY - 20, carX - 40, carY + 23, carX - 35, carY + 49);
vertex(carX - 79, carY + 59);
bezierVertex(carX - 94, carY + 39, carX - 94, carY - 42, carX - 79, carY - 55);
endShape();

//long window right
beginShape();
vertex(carX - 21, carY - 47);
vertex(carX + 77, carY - 45);
vertex(carX + 106, carY - 56);
vertex(carX - 55, carY - 60);
vertex(carX - 21, carY - 47);
endShape();

//long window left
beginShape();
vertex(carX - 21, carY + 51);
vertex(carX + 77, carY + 49);
vertex(carX + 106, carY + 60);
vertex(carX - 55, carY + 64);
vertex(carX - 21, carY + 51);
endShape();

//Backwindow
beginShape();
vertex(carX + 84, carY - 33);
vertex(carX + 128, carY - 46);
bezierVertex(
  carX + 142,
  carY - 21,
  carX + 142,
  carY + 30,
  carX + 128,
  carY + 50
);
vertex(carX + 84, carY + 37);
bezierVertex(carX + 87, carY + 27, carX + 87, carY - 24, carX + 84, carY - 33);
endShape();
pop();

//mirror right
beginShape();
vertex(carX - 55, carY - 55);
vertex(carX - 54, carY - 66);
vertex(carX - 49, carY - 64);
vertex(carX - 47, carY - 79);
bezierVertex(carX - 61, carY - 78, carX - 63, carY - 66, carX - 63, carY - 59);
bezierVertex(carX - 63, carY - 56, carX - 59, carY - 54, carX - 55, carY - 55);
endShape();

//mirror left
beginShape();
vertex(carX - 55, carY + 59);
vertex(carX - 54, carY + 70);
vertex(carX - 49, carY + 68);
vertex(carX - 47, carY + 83);
bezierVertex(carX - 61, carY + 82, carX - 63, carY + 70, carX - 63, carY + 63);
bezierVertex(carX - 63, carY + 60, carX - 59, carY + 58, carX - 55, carY + 59);
endShape();
