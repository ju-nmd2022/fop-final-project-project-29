//https://p5js.org/examples/image-background-image.html
let bg = loadImage('opt3.jpeg');
let carStartImg = loadImage('bmw-45view/bmw-blue.png');
let logo = loadImage('logo.png');

function playButton() {
    let button;
    button = createButton("START");
    button.size(250, 120);
    button.style("borderRadius", "30px");
    button.position(900, 250);
    button.style("font-family", "Verdana");
    button.style("font-size", "42px");
    button.style("background-color", "#ec008c");
    button.style("border-width", "5px");
    button.style("border-color", "#ffffff");
    button.style("color", "#ffffff");
    button.style("border-style", "outset");
  }

function carCustomButton() {
    let button;
    button = createButton("Customize Car");
    button.size(250, 60);
    button.style("borderRadius", "20px");
    button.position(900, 450);
    button.style("font-family", "Verdana");
    button.style("font-size", "24px");
    button.style("background-color", "#00C5C5");
    button.style("border-width", "5px");
    button.style("border-color", "#ffffff");
    button.style("color", "#ffffff");
    button.style("border-style", "outset");
  }

  
function mapCustomButton() {
    let button;
    button = createButton("Change Map");
    button.size(250, 60);
    button.style("borderRadius", "20px");
    button.position(900, 520);
    button.style("font-family", "Verdana");
    button.style("font-size", "24px");
    button.style("background-color", "#00C5C5");
    button.style("border-width", "5px");
    button.style("border-color", "#ffffff");
    button.style("color", "#ffffff");
    button.style("border-style", "outset");
  }

createCanvas(1200,900);
function draw(){
    background(bg);
    image(carStartImg, 150, 500, 600, 248);
    image(logo, 100, 0, 700, 450);

    //play button

    playButton();
    carCustomButton();
    mapCustomButton();
}