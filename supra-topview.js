let carX = 200;
let carY = 200;

background (255);

line(300, 107, 300, 293);
line(65, 200, 535, 200); 

//outline

beginShape();

/* fill(0,255,0); */
stroke(0);
noFill();
strokeWeight(2);

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

//window