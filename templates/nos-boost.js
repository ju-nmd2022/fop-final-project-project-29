let boostX = 100;
let boostY = 300;
let boostScale = 3;
//tanslate for the correct postition of the pulse

//metal neck
noStroke();
fill(250);

rect(boostX - 3 * boostScale, boostY - 85 * boostScale,
    6 * boostScale, 10 * boostScale);

//bottle
fill(0, 40, 200);

rect(boostX - 20 * boostScale, boostY - 50 * boostScale, 
    40 * boostScale, 80 * boostScale, 5 * boostScale);

ellipse(boostX, boostY - 47 * boostScale, 
    40 * boostScale);

//reflection
fill(0, 80, 220);
rect(boostX - 11 * boostScale, boostY - 60 * boostScale,
    6 * boostScale, 80 * boostScale, 2 * boostScale);

//bottle neck
fill(0, 40, 200);

rect(boostX - 5 * boostScale, boostY - 75 * boostScale, 
    10 * boostScale, 10 * boostScale);

// knob
fill(20/* 0, 70, 200 */);

ellipse(boostX, boostY - 94 * boostScale,    
    8 * boostScale);

ellipse(boostX - 4 * boostScale, boostY - 90 * boostScale,    
    8 * boostScale);

ellipse(boostX - 2 * boostScale, boostY - 84 * boostScale,    
    8 * boostScale);

ellipse(boostX + 2 * boostScale, boostY - 84 * boostScale,    
    8 * boostScale);

ellipse(boostX + 4 * boostScale, boostY - 90 * boostScale,    
    8 * boostScale);

fill(10/* 0, 40, 180 */);
ellipse(boostX, boostY - 89 * boostScale,
    8 * boostScale);

// Label
fill(255, 120, 30);
stroke(255);
rect(boostX - 15 * boostScale, boostY - 53 * boostScale,
    30 * boostScale, 40 * boostScale, 5 * boostScale);

//Power symbol
beginShape();
stroke(250, 195, 42);
strokeWeight(0.5 * boostScale);
fill(255, 203, 59);

vertex(boostX + 2 * boostScale, boostY - 47 * boostScale);
vertex(boostX - 8 * boostScale, boostY - 32 * boostScale);
vertex(boostX, boostY - 32 * boostScale);
vertex(boostX - 2 * boostScale, boostY - 19 * boostScale);
vertex(boostX + 8 * boostScale, boostY - 37 * boostScale);
vertex(boostX, boostY - 37 * boostScale);
vertex(boostX + 2 * boostScale, boostY - 47 * boostScale);
vertex(boostX - 8 * boostScale, boostY - 32 * boostScale);
endShape();