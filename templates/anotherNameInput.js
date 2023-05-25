let input;

function createInputField() {
  // Create an input field
  input = createInput();
  input.position(20, 20);
  input.changed(handleEnter);
}

function handleEnter() {
  let inputText = this.value(); // Use this.value() to get the input value
  console.log("Input value:", inputText);

  // Prevent the default behavior of the enter key
  if (window.event) {
    window.event.preventDefault();
  }
}

function setup() {
  createCanvas(400, 200);
  createInputField();
}

function draw() {
  // Render your sketch here
}

// Add this line to start the sketch
function startSketch() {
  setup();
  draw();
}

startSketch();
