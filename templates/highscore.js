function setup(){
    window.createCanvas(950, 712);
}

function highscore(){
    fill(240);
    stroke(0, 197, 197);
    strokeWeight(15);

    rect(200, 80, 550, 400, 50);

    fill(236, 0 ,140);
    stroke(236, 0 ,140);
    strokeWeight(2);
    textSize(40);
    text('HIGH SCORES', 340, 154);
    line(300,166,650, 166);

    fill(236, 0 ,140);
    stroke(236, 0 ,140);
    strokeWeight(0);
    textSize(30);
    text('1.', 225, 224);
    text('2.', 225, 274);
    text('3.', 225, 324);
    text('4.', 225, 374);
    text('5.', 225, 424);

    text('best', 300, 224);
    text('second best', 300, 274);
    text('third place', 300, 324);
    text('fourth..', 300, 374);
    text('atleast I made it', 300, 424);

    text('00:00:00', 600, 224);
    text('00:00:00', 600, 274);
    text('00:00:00', 600, 324);
    text('00:00:00', 600, 374);
    text('00:00:00', 600, 424);
}

function retryButton(){
    fill(240);
    stroke(0, 197, 197);
    strokeWeight(15);

    rect(200, 550, 250, 120, 40);

    fill(236, 0 ,140);
    stroke(236, 0 ,140);
    strokeWeight(1);
    textSize(40);
    text('RETRY', 257, 624);
}

function goBackToStartButton(){
    fill(240);
    stroke(0, 197, 197);
    strokeWeight(15);

    rect(500, 550, 250, 120, 40);

    fill(236, 0 ,140);
    stroke(236, 0 ,140);
    strokeWeight(1);
    textSize(40);
    text('GO BACK', 530, 624);
}

function draw(){
    highscore();
    retryButton();
    goBackToStartButton();
}