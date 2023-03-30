let carX = 200;
let carY = 200;
let carScale = 1;

background (255);

//outline
beginShape();
stroke(0);
fill(0,255,0);
strokeWeight(1);
vertex(85,200);
bezierVertex(85, 170, 90, 150, 114, 130);
bezierVertex(115, 128, 122, 127, 125, 125);
bezierVertex(127, 122, 135, 119, 143, 114);
bezierVertex(143,113 ,149 ,113 ,152, 112);
bezierVertex(340 ,120 ,340 ,120 ,373, 118);
bezierVertex(373, 118, 403 ,113, 423, 113);
vertex(482, 135);
bezierVertex(482, 135, 485, 137, 490, 145);
bezierVertex(510, 160, 510, 200, 510, 200);
vertex(510, 200);
bezierVertex(510, 200, 510, 240, 490, 255);
bezierVertex(490, 255, 485, 263, 482, 265);
vertex(423, 287);
bezierVertex(403, 287, 373, 282, 373, 282);
bezierVertex(340, 280, 340, 280, 152, 290);
bezierVertex(152, 290, 141, 293, 129, 284);
bezierVertex(100, 270, 114, 270, 100, 260);
bezierVertex(90, 250, 85, 230, 85, 200);
endShape();

//front window
beginShape();
fill(35, 31, 32);
vertex(279,150);
bezierVertex(275, 160, 275, 240, 279, 250);
bezierVertex(281, 256, 274, 259, 274, 260);
bezierVertex(223, 274, 223, 274, 223, 274);
bezierVertex(202, 258, 197, 227, 197, 200);
bezierVertex(202, 142, 207, 142, 223, 125);
vertex(274, 140);
bezierVertex(274, 141, 281, 144, 279, 150);
endShape();

//back window
beginShape();
vertex(375, 200);
vertex(375, 242);
bezierVertex(376, 248, 382, 249, 391, 252); 
bezierVertex(429, 260, 429, 257, 429, 258);
bezierVertex(448, 252, 444, 227, 446, 200);
bezierVertex(444, 173, 448, 148, 429, 142);
bezierVertex(429, 143, 429, 140, 391, 148);
bezierVertex(382, 151, 376, 152, 375, 168);
vertex(375, 200);
endShape();

//side window right
beginShape();
vertex(234, 124);
bezierVertex(274, 138, 306, 140, 315, 142);
bezierVertex(352, 143, 354, 140, 375, 135);
bezierVertex(380, 133, 380, 131, 376, 128);
bezierVertex(350, 123, 288, 121, 234, 124); 
endShape();

//side window left
beginShape();
vertex(234, 276);
bezierVertex(274, 262, 306, 260, 315, 258);
bezierVertex(352, 257, 354, 260, 375, 265);
bezierVertex(380, 267, 380, 269, 376, 272);
bezierVertex(350, 277, 288, 279, 234, 276); 
endShape();

//wing
beginShape();
noFill();
vertex(475, 251);
vertex(441, 266);
vertex(481, 262);
vertex(491, 254);
endShape();

beginShape();
vertex(475, 149);
vertex(441, 134);
vertex(481, 138);
vertex(491, 146);
endShape();

beginShape();
vertex(475, 149);
bezierVertex(486, 180, 486, 220, 475, 251);
endShape();

//hood
beginShape();
noFill();
vertex(223, 126);
bezierVertex(100, 105, 95, 167, 95, 200);
bezierVertex(95, 233, 95, 295, 223, 274);
endShape();

beginShape();
vertex(196, 155);
bezierVertex(178, 156, 130, 160, 118, 164); 
endShape();

beginShape();
vertex(196, 245);
bezierVertex(178, 244, 130, 240, 118, 236);
endShape();

//headlights
beginShape();
fill(255, 242, 215);
vertex(119, 132);
bezierVertex(105, 142, 99, 152, 94, 164);
bezierVertex(93, 167, 93, 175, 111, 165);
bezierVertex(116, 154, 119, 143, 121, 141);
bezierVertex(123, 136, 122, 134, 119, 132);
endShape();

beginShape();
vertex(119, 268);
bezierVertex(105, 258, 99, 248, 94, 236);
bezierVertex(93, 233, 93, 225, 111, 235);
bezierVertex(116, 246, 119, 257, 121, 259);
bezierVertex(123, 264, 122, 264, 119, 268);
endShape();

//side-mirrors
beginShape();
fill(0,255,0);
vertex(230, 119);
bezierVertex(235, 122, 235, 122,238,119);
vertex(244, 119);
vertex(252, 97);
bezierVertex(246,90, 235, 108, 230, 119);
endShape();

beginShape();
vertex(230, 281);
bezierVertex(235, 278, 235, 278, 238, 281);
vertex(244, 281);
vertex(252, 303);
bezierVertex(246, 310, 235, 292, 230, 281);
endShape();

//backdetails
beginShape();
noFill();
vertex(379, 123);
bezierVertex(401, 120, 428, 122, 448, 129);
endShape();

beginShape();
noFill();
vertex(379, 277);
bezierVertex(401, 280, 428, 278, 448, 271);
endShape();