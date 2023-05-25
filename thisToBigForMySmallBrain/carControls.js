export default class Controls extends Bmw {
  constructor(carX, carY) {
    super(carX, carY);
    this.rotation = 0;
    this.speed = 0;
  }

  drive() {
    this.x = this.x + this.speed;

    if (keyIsDown(38)) {
        this.speed = 5;
    } else {
        this.speed = 0;
    }
  }
}


//this class as a subclass to the cars (they will also be classes)