let carX = 300;
let carY = 300;
let carScale = 1;
let carColor = color(0,255,0);

//outline
beginShape();
stroke(0);
fill(carColor);
strokeWeight(1);
vertex(carX - 215 * carScale, carY);
bezierVertex(
    carX - 215 * carScale, carY - 30 * carScale,
    carX - 210 * carScale, carY-  50 * carScale,
    carX - 186 * carScale, carY - 70 * carScale);
bezierVertex(
    carX - 185 * carScale, carY - 72 * carScale, 
    carX - 178 * carScale, carY - 73 * carScale, 
    carX - 175 * carScale, carY - 76 * carScale);
bezierVertex(
    carX - 173 * carScale, carY - 78 * carScale, 
    carX - 165 * carScale, carY - 81 * carScale,
    carX - 157 * carScale, carY - 86 * carScale);
bezierVertex(
    carX - 157 * carScale, carY - 87 * carScale,
    carX - 151 * carScale ,carY - 87 * carScale,
    carX - 148 * carScale, carY - 88 * carScale);
bezierVertex(
    carX + 40 * carScale, carY - 80 * carScale,
    carX + 40 * carScale, carY - 80 * carScale,
    carX + 73 * carScale, carY - 82 * carScale);
bezierVertex(
    carX + 73 * carScale, carY - 82 * carScale,
    carX + 103 * carScale, carY - 87 * carScale,
    carX + 123 * carScale, carY - 87 * carScale);
vertex(carX + 182 * carScale, carY - 65 * carScale);
bezierVertex(
    carX + 182 * carScale, carY - 65 * carScale, 
    carX + 185 * carScale, carY - 63 * carScale, 
    carX + 190 * carScale, carY - 55 * carScale);
bezierVertex(
    carX + 210 * carScale, carY - 40 * carScale, 
    carX + 210 * carScale, carY,
    carX + 210 * carScale, carY);
vertex(carX + 210 * carScale, carY);
bezierVertex(
    carX + 210 * carScale, carY,
    carX + 210 * carScale, carY + 40 * carScale, 
    carX + 190 * carScale, carY + 55 * carScale);
bezierVertex(
    carX + 190 * carScale, carY + 55 * carScale,
    carX + 185 * carScale, carY + 63 * carScale,
    carX + 182 * carScale, carY + 65 * carScale);
vertex(carX + 123 * carScale, carY + 87 * carScale);
bezierVertex(
    carX + 103 * carScale, carY + 87 * carScale,
    carX + 73 * carScale, carY + 82 * carScale,
    carX + 73 * carScale, carY + 82 * carScale);
bezierVertex(
    carX + 40 * carScale, carY + 80 * carScale,
    carX + 40 * carScale, carY + 80 * carScale,
    carX - 148 * carScale, carY + 90 * carScale);
bezierVertex(
    carX - 148 * carScale, carY + 90 * carScale,
    carX - 159 * carScale, carY + 93 * carScale,
    carX - 171 * carScale, carY + 84 * carScale);
bezierVertex(
    carX - 200 * carScale, carY + 70 * carScale,
    carX - 186 * carScale, carY + 70 * carScale,
    carX - 200 * carScale, carY + 60 * carScale);
bezierVertex(
    carX - 210 * carScale, carY + 50 * carScale,
    carX - 215 * carScale, carY + 30 * carScale,
    carX - 215 * carScale, carY);
endShape();

//front window
beginShape();
fill(35, 31, 32);
vertex(carX - 21 * carScale, carY - 50 * carScale); 
bezierVertex(
    carX - 25 * carScale, carY - 40 * carScale,
    carX - 25 * carScale, carY + 40 * carScale,
    carX - 21 * carScale, carY + 50 * carScale);
bezierVertex(
    carX - 19 * carScale, carY + 56 * carScale,
    carX - 26 * carScale, carY + 59 * carScale,
    carX - 26 * carScale, carY + 60 * carScale);
bezierVertex(
    carX - 77 * carScale, carY + 74 * carScale,
    carX - 77 * carScale, carY + 74 * carScale,
    carX - 77 * carScale, carY + 74 * carScale);
bezierVertex(
    carX - 92 * carScale, carY + 58 * carScale,
    carX - 103 * carScale, carY + 26 * carScale,
    carX - 103 * carScale, carY);
bezierVertex(
    carX - 103 * carScale, carY - 40 * carScale,
    carX - 77 * carScale, carY - 70 * carScale,
    carX - 77 * carScale, carY - 72 * carScale);
vertex(carX - 26 * carScale, carY - 60 * carScale);
bezierVertex(
    carX - 26 * carScale, carY - 60 * carScale,
    carX - 19 * carScale, carY - 56 * carScale,
    carX - 21 * carScale, carY - 50 * carScale);
endShape();

//back window
beginShape();
vertex(carX + 75 * carScale, carY);
vertex(carX + 75 * carScale, carY + 42 * carScale);
bezierVertex(
    carX + 76 * carScale, carY + 48 * carScale,
    carX + 82 * carScale, carY + 49 * carScale, 
    carX + 91 * carScale, carY + 52 * carScale); 
bezierVertex(
    carX + 129 * carScale, carY + 60 * carScale,
    carX + 129 * carScale, carY + 57 * carScale,
    carX + 129 * carScale, carY + 58 * carScale);
bezierVertex(
    carX + 148 * carScale, carY + 52 * carScale, 
    carX + 144 * carScale, carY + 27 * carScale,
    carX + 146 * carScale, carY);
bezierVertex(
    carX + 144 * carScale, carY - 27 * carScale,
    carX + 148 * carScale, carY - 52 * carScale,
    carX + 129 * carScale, carY - 58 * carScale);
bezierVertex(
    carX + 129 * carScale, carY - 57 * carScale,
    carX + 129 * carScale, carY - 60 * carScale,
    carX + 91 * carScale, carY - 52 * carScale);
bezierVertex(
    carX + 82 * carScale, carY -49 * carScale,
    carX + 76 * carScale, carY - 48 * carScale,
    carX + 75 * carScale, carY - 32 * carScale);
vertex(
    carX + 75 * carScale, carY);
endShape();

//side window right
beginShape();
vertex(carX - 66 * carScale, carY - 76 * carScale);
bezierVertex(
    carX - 26 * carScale, carY - 62 * carScale,
    carX + 06 * carScale, carY - 60 * carScale,
    carX + 15 * carScale, carY - 58 * carScale);
bezierVertex(
    carX + 52 * carScale, carY - 57 * carScale,
    carX + 54 * carScale, carY - 60 * carScale,
    carX + 75 * carScale, carY - 65 * carScale);
bezierVertex(
    carX + 80 * carScale, carY - 67 * carScale,
    carX + 80 * carScale, carY - 69 * carScale, 
    carX + 76 * carScale, carY - 72 * carScale);
bezierVertex(
    carX + 50 * carScale, carY - 77 * carScale, 
    carX - 12 * carScale, carY - 79 * carScale, 
    carX - 66 * carScale, carY - 76 * carScale); 
endShape();

//side window left
beginShape();
vertex(carX - 66 * carScale, carY + 76 * carScale);
bezierVertex(
    carX - 26 * carScale, carY + 62 * carScale,
    carX + 06 * carScale, carY + 60 * carScale,
    carX + 15 * carScale, carY + 58 * carScale);
bezierVertex(
    carX + 52 * carScale, carY + 57 * carScale,
    carX + 54 * carScale, carY + 60 * carScale,
    carX + 75 * carScale, carY + 65 * carScale);
bezierVertex(
    carX + 80 * carScale, carY + 67 * carScale,
    carX + 80 * carScale, carY + 69 * carScale,
    carX + 76 * carScale, carY + 72 * carScale);
bezierVertex(
    carX + 50 * carScale, carY + 77 * carScale,
    carX - 12 * carScale, carY + 79 * carScale,
    carX - 66 * carScale, carY + 76 * carScale); 
endShape();

//wing
beginShape();
noFill();
vertex(carX + 175 * carScale, carY + 51 * carScale);
vertex(carX + 141 * carScale, carY + 66 * carScale);
vertex(carX + 181 * carScale, carY + 62 * carScale);
vertex(carX + 191 * carScale, carY + 54 * carScale);
endShape();

beginShape();
vertex(carX + 175 * carScale, carY - 51 * carScale);
vertex(carX + 141 * carScale, carY - 66 * carScale);
vertex(carX + 181 * carScale, carY - 62 * carScale);
vertex(carX + 191 * carScale, carY - 54 * carScale);
endShape();

beginShape();
vertex(carX + 175 * carScale, carY - 51 * carScale);
bezierVertex(
    carX + 186 * carScale, carY - 20 * carScale,
    carX + 186 * carScale, carY + 20 * carScale, 
    carX + 175 * carScale, carY + 51 * carScale);
endShape();

//hood
beginShape();
noFill();
vertex(carX - 77* carScale, carY - 72 * carScale);
bezierVertex(
    carX - 205 * carScale, carY - 95 * carScale,
    carX - 205 * carScale, carY - 33 * carScale,
    carX - 205 * carScale, carY);
bezierVertex(
    carX - 205 * carScale, carY + 33 * carScale,
    carX - 205 * carScale, carY + 95 * carScale,
    carX - 77 * carScale, carY + 74 * carScale);
endShape();

beginShape();
vertex(carX - 104 * carScale, carY - 45 * carScale);
bezierVertex(
    carX - 122 * carScale, carY - 44 * carScale,
    carX - 170 * carScale, carY - 40 * carScale,
    carX - 182 * carScale, carY - 36 *carScale); 
endShape();

beginShape();
vertex(carX - 104 * carScale, carY + 45 * carScale);
bezierVertex(
    carX - 122 * carScale, carY + 44 * carScale,
    carX - 170 * carScale, carY + 40 * carScale,
    carX - 182 * carScale, carY + 36 * carScale);
endShape();

beginShape();
vertex(carX - 116 * carScale, carY - 18 * carScale);
vertex(carX - 116 * carScale, carY + 18 * carScale);
vertex(carX - 156 * carScale, carY + 21 * carScale);
vertex(carX - 156 * carScale, carY - 21 * carScale);
vertex(carX - 116 * carScale, carY - 18 * carScale);
endShape();

//headlights
 beginShape();
fill(255, 242, 215);
vertex(carX - 181 * carScale, carY - 68 * carScale);
bezierVertex(
    carX - 195 * carScale, carY - 58 * carScale,
    carX - 201 * carScale, carY - 48 * carScale,
    carX - 206 * carScale, carY - 36 * carScale);
bezierVertex(
    carX - 207 * carScale, carY - 33 * carScale, 
    carX - 207 * carScale, carY - 25 * carScale,
    carX - 189 * carScale, carY - 35 * carScale);
bezierVertex(
    carX - 184 * carScale, carY - 46 * carScale,
    carX - 181 * carScale, carY - 57 * carScale,
    carX - 179 * carScale, carY - 59 * carScale);
bezierVertex(
    carX - 177 * carScale, carY - 64 * carScale,
    carX - 178 * carScale, carY - 66 * carScale,
    carX - 181 * carScale, carY - 68 * carScale);
endShape();

beginShape();
vertex(carX - 181 * carScale, carY + 68 * carScale);
bezierVertex(
    carX - 195 * carScale, carY + 58 * carScale,
    carX - 201 * carScale, carY + 48 * carScale,
    carX - 206 * carScale, carY + 36 * carScale);
bezierVertex(
    carX - 207 * carScale, carY + 33 * carScale,
    carX - 203 * carScale, carY + 25 * carScale,
    carX - 189 * carScale, carY + 35 * carScale);
bezierVertex(
    carX - 184 * carScale, carY + 46 * carScale,
    carX - 181 * carScale, carY + 57 * carScale,
    carX - 179 * carScale, carY + 59 * carScale);
bezierVertex(
    carX - 177 * carScale, carY + 64 * carScale,
    carX - 178 * carScale, carY + 64 * carScale, 
    carX - 181 * carScale, carY + 68 * carScale);
endShape();

//side-mirrors
beginShape();
fill(0,255,0);
vertex(carX - 70 * carScale, carY - 81 *carScale);
bezierVertex(
    carX - 65 * carScale, carY - 78 * carScale,
    carX - 65 * carScale, carY - 78 * carScale,
    carX - 62 * carScale, carY - 81 * carScale);
vertex(carX - 56 * carScale, carY -81 * carScale);
vertex(carX - 48 * carScale, carY - 103 * carScale);
bezierVertex(
    carX - 54 * carScale, carY - 110 * carScale,
    carX - 65 * carScale, carY - 92 * carScale,
    carX - 70 * carScale, carY - 81 * carScale);
endShape();

beginShape();
vertex(carX - 70 * carScale, carY + 81 * carScale);
bezierVertex(
    carX - 65 * carScale, carY + 78 * carScale,
    carX - 65 * carScale, carY + 78 * carScale,
    carX - 62 * carScale, carY + 81 * carScale);
vertex(carX - 56 * carScale, carY + 81 * carScale);
vertex(carX - 48 * carScale, carY + 103 * carScale);
bezierVertex(
    carX - 54 * carScale, carY  + 110 * carScale,
    carX - 65 * carScale, carY + 92 * carScale,
    carX - 70 * carScale, carY + 81 * carScale);
endShape();

//backdetails
beginShape();
noFill();
vertex(carX + 79 * carScale, carY - 77 * carScale);
bezierVertex(
    carX + 101 * carScale, carY - 80 * carScale, 
    carX + 128 * carScale, carY - 78 * carScale,
    carX + 148 * carScale, carY - 71 * carScale);
endShape();

beginShape();
noFill();
vertex(
    carX + 79 * carScale, carY + 77 * carScale);
bezierVertex(
    carX + 101 * carScale, carY + 80 * carScale, 
    carX + 128 * carScale, carY + 78 * carScale,
    carX + 148 * carScale, carY + 71 * carScale);
endShape();