//https://p5js.org/examples/image-background-image.html
let bg = loadImage('opt3.jpeg');
let carStartImg = loadImage('bmw-45view/bmw-blue.png');
let logo = loadImage('logo.png');

createCanvas(1200,900);
function draw(){
    background(bg);
    image(carStartImg, 150, 500, 600, 248);
    image(logo, 100, 0, 700, 450);

    //play button
    
}