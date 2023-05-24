

function nameInput() {
  fill(240);
  stroke(0, 197, 197);
  strokeWeight(15);

  rect(200, 180, 550, 300, 50);

  fill(236, 0, 140);
  stroke(236, 0, 140);
  strokeWeight(2);
  textSize(55);
  text("What's your name?", 237, 300);

  let inp = createInput("");
  inp.position(380, 400);
  inp.size(200);
  inp.input(myInputEvent);
}

function myInputEvent() {
    // add here the saving for the name, I think
  console.log("you are typing: ", this.value());
}

/* function enterButton() {
  fill(240);
  stroke(0, 197, 197);
  strokeWeight(15);

  rect(340, 550, 250, 120, 40);

  fill(236, 0, 140);
  stroke(236, 0, 140);
  strokeWeight(1);
  textSize(50);
  text("Done", 404, 628);

  if (
    mouseX >= 340 &&
    mouseX <= 340 + 250 &&
    mouseY >= 550 &&
    mouseY <= 550 + 120
  ) {
    if (mapSelected === "suburban") {
      currentScreen = "suburbanMap";
    } else if (mapSelected === "city") {
      currentScreen = "cityMap";
    }
  }
} */

/* function draw() {
  nameInput();
  enterButton();
} 


let input;
let inputValue = "";

function setup() {
  createCanvas(400, 200);
  
  // Create an input field
  input = createInput();
  input.position(20, 20);
  
  // Set a callback function to handle input changes
  input.input(handleInput);
  
  // Set a callback function to handle key presses
  input.changed(handleEnter);
}

function draw() {
  background(220);
  
  // Display the input value
  textSize(24);
  text(inputValue, 20, 60);
}

function handleInput() {
  // Update the inputValue variable with the current input value
  inputValue = this.value();
}

function handleEnter() {
  // Handle the input value when the enter key is pressed
  console.log("Input entered:", inputValue);
  // Additional logic for processing the input value can be added here
}

 */


let input;
let inputValue = "";

function setup() {
  createCanvas(400, 200);
  
  // Create an input field
  input = createInput();
  input.position(20, 20);
  input.changed(handleEnter);
}

function draw() {
  background(220);
  
  // Display the input value
  textSize(24);
  text(inputValue, 20, 60);
}

function handleEnter() {
  // Handle the input value when the enter key is pressed
  inputValue = this.value();
  console.log("Input entered:", inputValue);
  // Additional logic for processing the input value can be added here
}