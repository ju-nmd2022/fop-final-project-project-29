background(255);

//Base Body
fill(217, 109, 37);
beginShape();
vertex(30, 94);
vertex(34, 90);
vertex(40, 68);
vertex(50, 61);
vertex(55, 55);
vertex(120, 56);
vertex(135, 60);
vertex(238, 60);
vertex(283, 53);
vertex(340, 53);
vertex(364, 63);
vertex(388, 66);
bezierVertex(392, 69, 395, 70, 395, 78);
vertex(395, 190);
bezierVertex(395, 198, 392, 201, 388, 201);
vertex(364, 204);
vertex(340, 213);
vertex(283, 213);
vertex(238, 207);
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
push();
fill(255, 242, 215);
beginShape();
vertex(52, 59);
vertex(40, 68);
vertex(36, 84);
vertex(50, 83);
vertex(52, 59);
endShape();

beginShape();
vertex(52, 209);
vertex(40, 200);
vertex(36, 185);
vertex(50, 185);
vertex(52, 209);
endShape();
pop();

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
push();
fill(255, 0, 0);
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
pop();

//Trunk
beginShape();
vertex(378, 82);
vertex(400, 83);
bezierVertex(406, 108, 406, 153, 400, 186);
vertex(378, 187);
endShape();

//Windshield
fill(35, 31, 32);
beginShape();
vertex(135, 76);
vertex(179, 86);
bezierVertex(174, 111, 174, 154, 179, 180);
vertex(135, 190);
bezierVertex(120, 170, 120, 89, 135, 76);
endShape();

//long window right
beginShape();
vertex(193, 84);
vertex(291, 86);
vertex(320, 75);
vertex(159, 71);
vertex(193, 84);
endShape();

//long window left
beginShape();
vertex(193, 182);
vertex(291, 180);
vertex(320, 191);
vertex(159, 195);
vertex(193, 182);
endShape();

//Backwindow
beginShape();
vertex(298, 98);
vertex(342, 85);
bezierVertex(356, 110, 356, 161, 342, 181);
vertex(298, 168);
bezierVertex(301, 158, 301, 107, 298, 98);
endShape();

//mirror right
fill(217, 109, 37);
beginShape();
vertex(159, 76);
vertex(160, 65);
vertex(165, 67);
vertex(167, 52);
bezierVertex(153, 53, 151, 65, 151, 72);
bezierVertex(151, 75, 155, 77, 159, 76);
endShape();

//mirror left
beginShape();
vertex(159, 190);
vertex(160, 201);
vertex(165, 199);
vertex(167, 214);
bezierVertex(153, 213, 151, 201, 151, 194);
bezierVertex(151, 191, 155, 189, 159, 190);
endShape();
