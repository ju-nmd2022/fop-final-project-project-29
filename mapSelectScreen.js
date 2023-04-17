let bg = loadImage('asphalt.jpeg');
let tokyoCityImg = "url('logo.png')";

function preload() {
    bg = loadImage('asphalt.jpeg');
    logo = loadImage('logo.png');
  }

function cityMapButton() {
    let button;
    button = createButton("Tokyo City");
    button.size(400, 300);
    button.style("borderRadius", "30px");
    button.position(150, 250);
    button.style("font-family", "Verdana");
    button.style("font-size", "42px");
    button.style("background-color", "#ec008c");
    button.style("border-width", "5px");
    button.style("border-color", "#ffffff");
    button.style("color", "#ffffff");
    button.style("border-style", "outset");
    button.mouseOver(function() {
        button.style("background-color", "");
        button.style("background-img", "url('logo.png')");
        button.style("background-repeat", "no-repeat");
        button.style("background-size", "cover");
      });
    button.mouseOut(function() {
        button.style("background-color", "#ec008c");
      }); 
  }

  function suburbanMapButton() {
    let button;
    button = createButton("Suburbs");
    button.size(400, 300);
    button.style("borderRadius", "30px");
    button.position(680, 250);
    button.style("font-family", "Verdana");
    button.style("font-size", "42px");
    button.style("background-color", "#ec008c");
    button.style("width", "400px");
    button.style("height", "300px");
    button.style("border-width", "5px");
    button.style("border-color", "#ffffff");
    button.style("color", "#ffffff");
    button.style("border-style", "outset");

      button.mouseOver(function() {
        button.style("background-color", "");
        button.style("background-img", "url('logo.png')");
        button.style("background-repeat", "no-repeat");
        button.style("background-size", "cover");
      });
    button.mouseOut(function() {
        button.style("background-color", "#ec008c");
      }); 

  }

createCanvas(1200,900);
function draw(){
    background(bg);
    

    //selectButton();
    cityMapButton();
    suburbanMapButton();

}