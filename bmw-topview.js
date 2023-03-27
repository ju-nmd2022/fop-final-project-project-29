background(255);

//Base Body
beginShape();
vertex(30, 94);
vertex(34, 90);
vertex(40, 68);
vertex(50, 61);
vertex(55, 55);
vertex(120, 56);
vertex(135, 60);
vertex(230, 60);
vertex(280, 53);
vertex(340, 51);
vertex(364, 63);
vertex(388, 66);
bezierVertex(392, 69, 395, 70, 395, 78);
vertex(395, 190);
bezierVertex(395, 198, 392, 201, 388, 201);
vertex(364, 204);
vertex(340, 216);
vertex(280, 213);
vertex(230, 207);
vertex(135, 207);
vertex(120, 211);
vertex(55, 212);
vertex(50, 207);
vertex(40, 200);
vertex(34, 180);
vertex(30, 176);
bezierVertex(25, 155, 25, 116, 30, 94);
endShape();

//Headlights
beginShape();
vertex(50, 61);
vertex(40, 68);
vertex(36, 84);
vertex(50, 83);
vertex(50, 61);
endShape();

beginShape();
vertex(50, 207);
vertex(40, 200);
vertex(36, 185);
vertex(50, 185);
vertex(50, 207);
endShape();

//Hood
beginShape();
vertex(339, 68);
bezierVertex(243, 65, 131, 65, 59, 68);
bezierVertex(49, 68, 46, 69, 45, 79);
vertex(40, 103);
vertex(35, 107);
bezierVertex(33, 121, 33, 141, 35, 159);
vertex(40, 163);
vertex(45, 191);
bezierVertex(46, 197, 49, 198, 59, 198);
bezierVertex(131, 201, 243, 201, 339, 201);
endShape();

//Detail of Hood
line(40, 103, 125, 93);
line(40, 163, 125, 173);

//Backlights
beginShape();
vertex(391, 68);
vertex(391, 90);
vertex(395, 90);
vertex(395, 75);
bezierVertex(395, 69, 393, 69, 391, 68);
endShape();

beginShape();
vertex(391, 201);
vertex(391, 179);
vertex(395, 179);
vertex(395, 194);
bezierVertex(395, 200, 393, 200, 391, 201);
endShape();

//Trunk
beginShape();
vertex(378, 82);
vertex(400, 83);
bezierVertex(406, 108, 406, 153, 400, 186);
vertex(378, 187);
endShape();
