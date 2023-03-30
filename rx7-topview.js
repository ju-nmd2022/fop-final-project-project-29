let carX = 350;
let carY = 250;
let carScale = 1.1;
background(255);

//BaseBody
fill("#ed11a4");
beginShape();
vertex(carX - 187 * carScale, carY - 67 * carScale);
bezierVertex(
  carX - 173 * carScale,
  carY - 75 * carScale,
  carX - 154 * carScale,
  carY - 80 * carScale,
  carX - 125 * carScale,
  carY - 78 * carScale
);
bezierVertex(
  carX - 62 * carScale,
  carY - 72 * carScale,
  carX + 9 * carScale,
  carY - 70 * carScale,
  carX + 100 * carScale,
  carY - 75 * carScale
);
bezierVertex(
  carX + 124 * carScale,
  carY - 77 * carScale,
  carX + 165 * carScale,
  carY - 72 * carScale,
  carX + 180 * carScale,
  carY - 69 * carScale
);
bezierVertex(
  carX + 192 * carScale,
  carY - 66 * carScale,
  carX + 194 * carScale,
  carY - 52 * carScale,
  carX + 194 * carScale,
  carY
);

bezierVertex(
  carX + 194 * carScale,
  carY + 52 * carScale,
  carX + 192 * carScale,
  carY + 66 * carScale,
  carX + 180 * carScale,
  carY + 69 * carScale
);
bezierVertex(
  carX + 165 * carScale,
  carY + 72 * carScale,
  carX + 124 * carScale,
  carY + 77 * carScale,
  carX + 100 * carScale,
  carY + 75 * carScale
);
bezierVertex(
  carX + 9 * carScale,
  carY + 70 * carScale,
  carX - 62 * carScale,
  carY + 72 * carScale,
  carX - 125 * carScale,
  carY + 78 * carScale
);
bezierVertex(
  carX - 154 * carScale,
  carY + 80 * carScale,
  carX - 173 * carScale,
  carY + 75 * carScale,
  carX - 187 * carScale,
  carY + 67 * carScale
);

bezierVertex(
  carX - 213 * carScale,
  carY + 25 * carScale,
  carX - 213 * carScale,
  carY - 35 * carScale,
  carX - 187 * carScale,
  carY - 67 * carScale
);
endShape();

//spoiler
beginShape();
vertex(carX + 205 * carScale, carY - 57 * carScale);
bezierVertex(
  carX + 210 * carScale,
  carY - 25 * carScale,
  carX + 210 * carScale,
  carY + 25 * carScale,
  carX + 205 * carScale,
  carY + 57 * carScale
);
vertex(carX + 180 * carScale, carY + 57 * carScale);
bezierVertex(
  carX + 185 * carScale,
  carY + 25 * carScale,
  carX + 185 * carScale,
  carY - 25 * carScale,
  carX + 180 * carScale,
  carY - 57 * carScale
);
vertex(carX + 205 * carScale, carY - 57 * carScale);
endShape();

beginShape();
vertex(carX + 160 * carScale, carY - 60 * carScale);
vertex(carX + 210 * carScale, carY - 60 * carScale);
vertex(carX + 210 * carScale, carY - 55 * carScale);
vertex(carX + 160 * carScale, carY - 55 * carScale);
endShape();

beginShape();
vertex(carX + 160 * carScale, carY + 60 * carScale);
vertex(carX + 210 * carScale, carY + 60 * carScale);
vertex(carX + 210 * carScale, carY + 55 * carScale);
vertex(carX + 160 * carScale, carY + 55 * carScale);
endShape();

//hood
line(
  carX - 184 * carScale,
  carY - 41 * carScale,
  carX - 186 * carScale,
  carY + 41 * carScale
);
line(
  carX - 158 * carScale,
  carY - 63 * carScale,
  carX - 68 * carScale,
  carY - 61 * carScale
);
line(
  carX - 158 * carScale,
  carY + 63 * carScale,
  carX - 68 * carScale,
  carY + 61 * carScale
);

//details in teh back
push();
noFill();
beginShape();
vertex(carX + 91 * carScale, carY + 62 * carScale);
bezierVertex(
  carX + 119 * carScale,
  carY + 65 * carScale,
  carX + 133 * carScale,
  carY + 65 * carScale,
  carX + 148 * carScale,
  carY + 59 * carScale
);
endShape();

beginShape();
vertex(carX + 91 * carScale, carY - 62 * carScale);
bezierVertex(
  carX + 119 * carScale,
  carY - 65 * carScale,
  carX + 133 * carScale,
  carY - 65 * carScale,
  carX + 148 * carScale,
  carY - 59 * carScale
);
endShape();
pop();

//headlights
fill(179, 11, 123);
beginShape();
vertex(carX - 155 * carScale, carY - 67 * carScale);
vertex(carX - 156 * carScale, carY - 42 * carScale);
vertex(carX - 187 * carScale, carY - 41 * carScale);
bezierVertex(
  carX - 185 * carScale,
  carY - 65 * carScale,
  carX - 181 * carScale,
  carY - 66 * carScale,
  carX - 155 * carScale,
  carY - 67 * carScale
);
endShape();

beginShape();
vertex(carX - 155 * carScale, carY + 67 * carScale);
vertex(carX - 156 * carScale, carY + 42 * carScale);
vertex(carX - 187 * carScale, carY + 41 * carScale);
bezierVertex(
  carX - 185 * carScale,
  carY + 65 * carScale,
  carX - 181 * carScale,
  carY + 66 * carScale,
  carX - 155 * carScale,
  carY + 67 * carScale
);
endShape();

//windshield
push();
fill(35, 31, 32);
beginShape();
vertex(carX - 64 * carScale, carY - 63 * carScale);
vertex(carX - 30 * carScale, carY - 48 * carScale);
bezierVertex(
  carX - 40 * carScale,
  carY - 17 * carScale,
  carX - 40 * carScale,
  carY + 17 * carScale,
  carX - 30 * carScale,
  carY + 48 * carScale
);
vertex(carX - 64 * carScale, carY + 63 * carScale);
bezierVertex(
  carX - 105 * carScale,
  carY + 45 * carScale,
  carX - 105 * carScale,
  carY - 55 * carScale,
  carX - 64 * carScale,
  carY - 63 * carScale
);
endShape();

//window right
beginShape();
vertex(carX - 57 * carScale, carY - 65 * carScale);
vertex(carX - 16 * carScale, carY - 49 * carScale);
bezierVertex(
  carX + 32 * carScale,
  carY - 42 * carScale,
  carX + 45 * carScale,
  carY - 54 * carScale,
  carX + 57 * carScale,
  carY - 64 * carScale
);
vertex(carX - 57 * carScale, carY - 65 * carScale);
endShape();

//window left
beginShape();
vertex(carX - 57 * carScale, carY + 65 * carScale);
vertex(carX - 16 * carScale, carY + 49 * carScale);
bezierVertex(
  carX + 32 * carScale,
  carY + 42 * carScale,
  carX + 45 * carScale,
  carY + 54 * carScale,
  carX + 57 * carScale,
  carY + 64 * carScale
);
vertex(carX - 57 * carScale, carY + 65 * carScale);
endShape();

//back window
beginShape();
vertex(carX + 68 * carScale, carY - 43 * carScale);
vertex(carX + 91 * carScale, carY - 58 * carScale);
bezierVertex(
  carX + 165 * carScale,
  carY - 43 * carScale,
  carX + 165 * carScale,
  carY + 43 * carScale,
  carX + 91 * carScale,
  carY + 58 * carScale
);
vertex(carX + 68 * carScale, carY + 43 * carScale);
vertex(carX + 68 * carScale, carY - 43 * carScale);
endShape();
pop();

push();
noFill();
beginShape();
vertex(carX + 62 * carScale, carY - 43 * carScale);
vertex(carX + 91 * carScale, carY - 62 * carScale);
bezierVertex(
  carX + 172 * carScale,
  carY - 43 * carScale,
  carX + 172 * carScale,
  carY + 43 * carScale,
  carX + 91 * carScale,
  carY + 62 * carScale
);
vertex(carX + 62 * carScale, carY + 43 * carScale);
vertex(carX + 62 * carScale, carY - 43 * carScale);
endShape();
pop();

//mirror right
beginShape();
vertex(carX - 68 * carScale, carY - 70 * carScale);
bezierVertex(
  carX - 67 * carScale,
  carY - 81 * carScale,
  carX - 60 * carScale,
  carY - 87 * carScale,
  carX - 53 * carScale,
  carY - 91 * carScale
);
vertex(carX - 57 * carScale, carY - 75 * carScale);
vertex(carX - 59 * carScale, carY - 75 * carScale);
vertex(carX - 60 * carScale, carY - 67 * carScale);
bezierVertex(
  carX - 65 * carScale,
  carY - 68 * carScale,
  carX - 66 * carScale,
  carY - 68 * carScale,
  carX - 68 * carScale,
  carY - 70 * carScale
);
endShape();

//mirror left
beginShape();
vertex(carX - 68 * carScale, carY + 70 * carScale);
bezierVertex(
  carX - 67 * carScale,
  carY + 81 * carScale,
  carX - 60 * carScale,
  carY + 87 * carScale,
  carX - 53 * carScale,
  carY + 91 * carScale
);
vertex(carX - 57 * carScale, carY + 75 * carScale);
vertex(carX - 59 * carScale, carY + 75 * carScale);
vertex(carX - 60 * carScale, carY + 67 * carScale);
bezierVertex(
  carX - 65 * carScale,
  carY + 68 * carScale,
  carX - 66 * carScale,
  carY + 68 * carScale,
  carX - 68 * carScale,
  carY + 70 * carScale
);
endShape();
