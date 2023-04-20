let bg = loadImage('asphalt.jpeg');
let tokyoCityImg = "url('logo.png')";

let mapIsChosen = false;
let doneGoBack = false;

function preload() {
    bg = loadImage('asphalt.jpeg');
    logo = loadImage('logo.png');
  }

// button City map

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
    if(mouseIsPressed &&
      mouseX > 130 &&
      mouseX < 527 &&
      mouseY > 230 &&
      mouseY < 525 ){
      mapIsChosen = true;
      console.log("ok");
    }
     button.mouseOver(function() {
        button.style("background-color", "transparent");
        //button.style.backgroundImage = "url('logo.png')";
        button.style("background-image", "url('logo.png')");
        button.style("background-repeat", "no-repeat");
        button.style("background-size", "cover");
      });
    button.mouseOut(function() {
        button.style("background-color", "#ec008c");
      });
  }

  //button Suburban map
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
    if(mouseIsPressed &&
      mouseX > 660 &&
      mouseX < 1080 &&
      mouseY > 230 &&
      mouseY < 525 ){
      mapIsChosen = true;
      console.log("ok");
    }
      /* button.mouseOver(function() {
        button.style("background-color", "");
        button.style("background-img", "url('logo.png')");
        button.style("background-repeat", "no-repeat");
        button.style("background-size", "cover");
      });
    button.mouseOut(function() {
        button.style("background-color", "#ec008c");
      });  */

  }

//Button done
function selectButton(){
  let button;
    button = createButton("Done");
    button.style("borderRadius", "30px");
    button.position(420, 680);
    button.style("font-family", "Verdana");
    button.style("font-size", "42px");
    button.style("background-color", "#ec008c");
    button.style("width", "400px");
    button.style("height", "100px");
    button.style("border-width", "5px");
    button.style("border-color", "#ffffff");
    button.style("color", "#ffffff");
    button.style("border-style", "outset");
    if(mouseIsPressed &&
      mouseX > 420 &&
      mouseX < 820 &&
      mouseY > 680 &&
      mouseY < 780 ){
      doneGoBack = true;
      console.log("done");
      }
}

let currentMap = "";

//canvas
function setup(){
  createCanvas(1200,900);
  cityMapButton();
}

function draw(){
  background(bg);
    
 
  suburbanMapButton();
  
  function selectMap(){
  if(mapIsChosen === true){
    selectButton();
  } }
  selectMap();

  if(doneGoBack === true){
    //switch screen
  }

}