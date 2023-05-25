function setup(){
    window.createCanvas(950, 712);
}

function crashBox(){
    fill(240);
    stroke(0, 197, 197);
    strokeWeight(15);

    rect(200, 180, 550, 300, 50);

    fill(236, 0 ,140);
    stroke(236, 0 ,140);
    strokeWeight(2);
    textSize(60);
    text('YOU CRASHED', 255, 344);
}

function retryButton(){
    fill(240);
    stroke(0, 197, 197);
    strokeWeight(15);

    rect(200, 550, 250, 120, 40);

    fill(236, 0 ,140);
    stroke(236, 0 ,140);
    strokeWeight(1);
    textSize(30);
    text('RETRY', 273, 624);
}

function goBackToStartButton(){
    fill(240);
    stroke(0, 197, 197);
    strokeWeight(15);

    rect(500, 550, 250, 120, 40);

    fill(236, 0 ,140);
    stroke(236, 0 ,140);
    strokeWeight(1);
    textSize(30);
    text('GO BACK', 555, 624);
}

function draw(){
    crashBox();
    retryButton();
    goBackToStartButton();
}