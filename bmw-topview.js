let carX = 260;
let carY = 180;
let carScale = 1;
background(255);
//use array with all the colors

strokeWeight(1 * carScale);
//Base Body
fill(217, 109, 37);
beginShape();
vertex(carX - 184 * carScale, carY - 37 * carScale);
vertex(carX - 180 * carScale, carY - 41 * carScale);
vertex(carX - 174 * carScale, carY - 63 * carScale);
vertex(carX - 164 * carScale, carY - 70 * carScale);
vertex(carX - 159 * carScale, carY - 76 * carScale);
vertex(carX - 94 * carScale, carY - 75 * carScale);
vertex(carX - 79 * carScale, carY - 71 * carScale);
vertex(carX + 24 * carScale, carY - 71 * carScale);
vertex(carX + 69 * carScale, carY - 78 * carScale);
vertex(carX + 126 * carScale, carY - 78 * carScale);
vertex(carX + 150 * carScale, carY - 68 * carScale);
vertex(carX + 174 * carScale, carY - 65 * carScale);
bezierVertex(
  carX + 178 * carScale,
  carY - 62 * carScale,
  carX + 182 * carScale,
  carY - 61 * carScale,
  carX + 181 * carScale,
  carY - 53 * carScale
);
vertex(carX + 181 * carScale, carY + 59 * carScale);
bezierVertex(
  carX + 181 * carScale,
  carY + 67 * carScale,
  carX + 178 * carScale,
  carY + 70 * carScale,
  carX + 174 * carScale,
  carY + 70 * carScale
);
vertex(carX + 150 * carScale, carY + 73 * carScale);
vertex(carX + 126 * carScale, carY + 82 * carScale);
vertex(carX + 69 * carScale, carY + 82 * carScale);
vertex(carX + 24 * carScale, carY + 76 * carScale);
vertex(carX - 79 * carScale, carY + 76 * carScale);
vertex(carX - 94 * carScale, carY + 80 * carScale);
vertex(carX - 159 * carScale, carY + 81 * carScale);
vertex(carX - 164 * carScale, carY + 76 * carScale);
vertex(carX - 174 * carScale, carY + 69 * carScale);
vertex(carX - 180 * carScale, carY + 49 * carScale);
vertex(carX - 184 * carScale, carY + 45 * carScale);
bezierVertex(
  carX - 189 * carScale,
  carY + 24 * carScale,
  carX - 189 * carScale,
  carY - 15 * carScale,
  carX - 184 * carScale,
  carY - 37 * carScale
);
endShape();

//Headlights
push();
fill(255, 242, 215);
beginShape();
vertex(carX - 162 * carScale, carY - 72 * carScale);
vertex(carX - 174 * carScale, carY - 63 * carScale);
vertex(carX - 178 * carScale, carY - 47 * carScale);
vertex(carX - 164 * carScale, carY - 48 * carScale);
vertex(carX - 162 * carScale, carY - 72 * carScale);
endShape();

beginShape();
vertex(carX - 162 * carScale, carY + 78 * carScale);
vertex(carX - 174 * carScale, carY + 69 * carScale);
vertex(carX - 178 * carScale, carY + 54 * carScale);
vertex(carX - 164 * carScale, carY + 54 * carScale);
vertex(carX - 162 * carScale, carY + 78 * carScale);
endShape();
pop();

//Hood
beginShape();
vertex(carX + 125 * carScale, carY - 63 * carScale);
bezierVertex(
  carX - 29 * carScale,
  carY - 66 * carScale,
  carX - 83 * carScale,
  carY - 66 * carScale,
  carX - 155 * carScale,
  carY - 63 * carScale
);
bezierVertex(
  carX - 165 * carScale,
  carY - 63 * carScale,
  carX - 168 * carScale,
  carY - 62 * carScale,
  carX - 169 * carScale,
  carY - 52 * carScale
);
vertex(carX - 174 * carScale, carY - 28 * carScale);
vertex(carX - 179 * carScale, carY - 24 * carScale);
bezierVertex(
  carX - 181 * carScale,
  carY - 10 * carScale,
  carX - 181 * carScale,
  carY + 10 * carScale,
  carX - 179 * carScale,
  carY + 29 * carScale
);
vertex(carX - 174 * carScale, carY + 32 * carScale);
vertex(carX - 169 * carScale, carY + 60 * carScale);
bezierVertex(
  carX - 168 * carScale,
  carY + 66 * carScale,
  carX - 165 * carScale,
  carY + 67 * carScale,
  carX - 155 * carScale,
  carY + 67 * carScale
);
bezierVertex(
  carX - 83 * carScale,
  carY + 70 * carScale,
  carX + 29 * carScale,
  carY + 70 * carScale,
  carX + 125 * carScale,
  carY + 70 * carScale
);
endShape();

//Detail of Hood
line(
  carX - 174 * carScale,
  carY - 28 * carScale,
  carX - 89 * carScale,
  carY - 38 * carScale
);
line(
  carX - 174 * carScale,
  carY + 32 * carScale,
  carX - 89 * carScale,
  carY + 42 * carScale
);

//Backlights
push();
fill(255, 0, 0);
beginShape();
vertex(carX + 177 * carScale, carY - 63 * carScale);
vertex(carX + 177 * carScale, carY - 41 * carScale);
vertex(carX + 181 * carScale, carY - 41 * carScale);
vertex(carX + 181 * carScale, carY - 56 * carScale);
bezierVertex(
  carX + 181 * carScale,
  carY - 62 * carScale,
  carX + 179 * carScale,
  carY - 62 * carScale,
  carX + 177 * carScale,
  carY - 63 * carScale
);
endShape();

beginShape();
vertex(carX + 177 * carScale, carY + 70 * carScale);
vertex(carX + 177 * carScale, carY + 48 * carScale);
vertex(carX + 181 * carScale, carY + 48 * carScale);
vertex(carX + 181 * carScale, carY + 63 * carScale);
bezierVertex(
  carX + 181 * carScale,
  carY + 69 * carScale,
  carX + 179 * carScale,
  carY + 69 * carScale,
  carX + 177 * carScale,
  carY + 70 * carScale
);
endShape();
pop();

//Trunk
beginShape();
vertex(carX + 164 * carScale, carY - 49 * carScale);
vertex(carX + 186 * carScale, carY - 48 * carScale);
bezierVertex(
  carX + 192 * carScale,
  carY - 23 * carScale,
  carX + 192 * carScale,
  carY + 22 * carScale,
  carX + 186 * carScale,
  carY + 55 * carScale
);
vertex(carX + 164 * carScale, carY + 56 * carScale);
endShape();

//Windshield
push();
fill(35, 31, 32);
beginShape();
vertex(carX - 79 * carScale, carY - 55 * carScale);
vertex(carX - 35 * carScale, carY - 45 * carScale);
bezierVertex(
  carX - 40 * carScale,
  carY - 20 * carScale,
  carX - 40 * carScale,
  carY + 23 * carScale,
  carX - 35 * carScale,
  carY + 49 * carScale
);
vertex(carX - 79 * carScale, carY + 59 * carScale);
bezierVertex(
  carX - 94 * carScale,
  carY + 39 * carScale,
  carX - 94 * carScale,
  carY - 42 * carScale,
  carX - 79 * carScale,
  carY - 55 * carScale
);
endShape();

//long window right
beginShape();
vertex(carX - 21 * carScale, carY - 47 * carScale);
vertex(carX + 77 * carScale, carY - 45 * carScale);
vertex(carX + 106 * carScale, carY - 56 * carScale);
vertex(carX - 55 * carScale, carY - 60 * carScale);
vertex(carX - 21 * carScale, carY - 47 * carScale);
endShape();

//long window left
beginShape();
vertex(carX - 21 * carScale, carY + 51 * carScale);
vertex(carX + 77 * carScale, carY + 49 * carScale);
vertex(carX + 106 * carScale, carY + 60 * carScale);
vertex(carX - 55 * carScale, carY + 64 * carScale);
vertex(carX - 21 * carScale, carY + 51 * carScale);
endShape();

//Backwindow
beginShape();
vertex(carX + 84 * carScale, carY - 33 * carScale);
vertex(carX + 128 * carScale, carY - 46 * carScale);
bezierVertex(
  carX + 142 * carScale,
  carY - 21 * carScale,
  carX + 142 * carScale,
  carY + 30 * carScale,
  carX + 128 * carScale,
  carY + 50 * carScale
);
vertex(carX + 84 * carScale, carY + 37 * carScale);
bezierVertex(
  carX + 87 * carScale,
  carY + 27 * carScale,
  carX + 87 * carScale,
  carY - 24 * carScale,
  carX + 84 * carScale,
  carY - 33 * carScale
);
endShape();
pop();

//mirror right
beginShape();
vertex(carX - 55 * carScale, carY - 55 * carScale);
vertex(carX - 54 * carScale, carY - 66 * carScale);
vertex(carX - 49 * carScale, carY - 64 * carScale);
vertex(carX - 47 * carScale, carY - 79 * carScale);
bezierVertex(
  carX - 61 * carScale,
  carY - 78 * carScale,
  carX - 63 * carScale,
  carY - 66 * carScale,
  carX - 63 * carScale,
  carY - 59 * carScale
);
bezierVertex(
  carX - 63 * carScale,
  carY - 56 * carScale,
  carX - 59 * carScale,
  carY - 54 * carScale,
  carX - 55 * carScale,
  carY - 55 * carScale
);
endShape();

//mirror left
beginShape();
vertex(carX - 55 * carScale, carY + 59 * carScale);
vertex(carX - 54 * carScale, carY + 70 * carScale);
vertex(carX - 49 * carScale, carY + 68 * carScale);
vertex(carX - 47 * carScale, carY + 83 * carScale);
bezierVertex(
  carX - 61 * carScale,
  carY + 82 * carScale,
  carX - 63 * carScale,
  carY + 70 * carScale,
  carX - 63 * carScale,
  carY + 63 * carScale
);
bezierVertex(
  carX - 63 * carScale,
  carY + 60 * carScale,
  carX - 59 * carScale,
  carY + 58 * carScale,
  carX - 55 * carScale,
  carY + 59 * carScale
);
endShape();
