
let carX = 260;
let carY = 180;
let carScale = 1;

class Bmw {
  constructor(carX, carY) {
    this.x = carX;
    this.y = this.y;
    this.scale = 1;
  }

  draw() {
    background(255);

    strokeWeight(1 * this.scale);
    //Base Body
    fill(217, 109, 37);
    beginShape();
    vertex(this.x - 184 * this.scale, this.y - 37 * this.scale);
    vertex(this.x - 180 * this.scale, this.y - 41 * this.scale);
    vertex(this.x - 174 * this.scale, this.y - 63 * this.scale);
    vertex(this.x - 164 * this.scale, this.y - 70 * this.scale);
    vertex(this.x - 159 * this.scale, this.y - 76 * this.scale);
    vertex(this.x - 94 * this.scale, this.y - 75 * this.scale);
    vertex(this.x - 79 * this.scale, this.y - 71 * this.scale);
    vertex(this.x + 24 * this.scale, this.y - 71 * this.scale);
    vertex(this.x + 69 * this.scale, this.y - 78 * this.scale);
    vertex(this.x + 126 * this.scale, this.y - 78 * this.scale);
    vertex(this.x + 150 * this.scale, this.y - 68 * this.scale);
    vertex(this.x + 174 * this.scale, this.y - 65 * this.scale);
    bezierVertex(
      this.x + 178 * this.scale,
      this.y - 62 * this.scale,
      this.x + 182 * this.scale,
      this.y - 61 * this.scale,
      this.x + 181 * this.scale,
      this.y - 53 * this.scale
    );
    vertex(this.x + 181 * this.scale, this.y + 59 * this.scale);
    bezierVertex(
      this.x + 181 * this.scale,
      this.y + 67 * this.scale,
      this.x + 178 * this.scale,
      this.y + 70 * this.scale,
      this.x + 174 * this.scale,
      this.y + 70 * this.scale
    );
    vertex(this.x + 150 * this.scale, this.y + 73 * this.scale);
    vertex(this.x + 126 * this.scale, this.y + 82 * this.scale);
    vertex(this.x + 69 * this.scale, this.y + 82 * this.scale);
    vertex(this.x + 24 * this.scale, this.y + 76 * this.scale);
    vertex(this.x - 79 * this.scale, this.y + 76 * this.scale);
    vertex(this.x - 94 * this.scale, this.y + 80 * this.scale);
    vertex(this.x - 159 * this.scale, this.y + 81 * this.scale);
    vertex(this.x - 164 * this.scale, this.y + 76 * this.scale);
    vertex(this.x - 174 * this.scale, this.y + 69 * this.scale);
    vertex(this.x - 180 * this.scale, this.y + 49 * this.scale);
    vertex(this.x - 184 * this.scale, this.y + 45 * this.scale);
    bezierVertex(
      this.x - 189 * this.scale,
      this.y + 24 * this.scale,
      this.x - 189 * this.scale,
      this.y - 15 * this.scale,
      this.x - 184 * this.scale,
      this.y - 37 * this.scale
    );
    endShape();

    //Headlights
    push();
    fill(255, 242, 215);
    beginShape();
    vertex(this.x - 162 * this.scale, this.y - 72 * this.scale);
    vertex(this.x - 174 * this.scale, this.y - 63 * this.scale);
    vertex(this.x - 178 * this.scale, this.y - 47 * this.scale);
    vertex(this.x - 164 * this.scale, this.y - 48 * this.scale);
    vertex(this.x - 162 * this.scale, this.y - 72 * this.scale);
    endShape();

    beginShape();
    vertex(this.x - 162 * this.scale, this.y + 78 * this.scale);
    vertex(this.x - 174 * this.scale, this.y + 69 * this.scale);
    vertex(this.x - 178 * this.scale, this.y + 54 * this.scale);
    vertex(this.x - 164 * this.scale, this.y + 54 * this.scale);
    vertex(this.x - 162 * this.scale, this.y + 78 * this.scale);
    endShape();
    pop();

    //Hood
    beginShape();
    vertex(this.x + 125 * this.scale, this.y - 63 * this.scale);
    bezierVertex(
      this.x - 29 * this.scale,
      this.y - 66 * this.scale,
      this.x - 83 * this.scale,
      this.y - 66 * this.scale,
      this.x - 155 * this.scale,
      this.y - 63 * this.scale
    );
    bezierVertex(
      this.x - 165 * this.scale,
      this.y - 63 * this.scale,
      this.x - 168 * this.scale,
      this.y - 62 * this.scale,
      this.x - 169 * this.scale,
      this.y - 52 * this.scale
    );
    vertex(this.x - 174 * this.scale, this.y - 28 * this.scale);
    vertex(this.x - 179 * this.scale, this.y - 24 * this.scale);
    bezierVertex(
      this.x - 181 * this.scale,
      this.y - 10 * this.scale,
      this.x - 181 * this.scale,
      this.y + 10 * this.scale,
      this.x - 179 * this.scale,
      this.y + 29 * this.scale
    );
    vertex(this.x - 174 * this.scale, this.y + 32 * this.scale);
    vertex(this.x - 169 * this.scale, this.y + 60 * this.scale);
    bezierVertex(
      this.x - 168 * this.scale,
      this.y + 66 * this.scale,
      this.x - 165 * this.scale,
      this.y + 67 * this.scale,
      this.x - 155 * this.scale,
      this.y + 67 * this.scale
    );
    bezierVertex(
      this.x - 83 * this.scale,
      this.y + 70 * this.scale,
      this.x + 29 * this.scale,
      this.y + 70 * this.scale,
      this.x + 125 * this.scale,
      this.y + 70 * this.scale
    );
    endShape();

    //Detail of Hood
    line(
      this.x - 174 * this.scale,
      this.y - 28 * this.scale,
      this.x - 89 * this.scale,
      this.y - 38 * this.scale
    );
    line(
      this.x - 174 * this.scale,
      this.y + 32 * this.scale,
      this.x - 89 * this.scale,
      this.y + 42 * this.scale
    );

    //Backlights
    push();
    fill(255, 0, 0);
    beginShape();
    vertex(this.x + 177 * this.scale, this.y - 63 * this.scale);
    vertex(this.x + 177 * this.scale, this.y - 41 * this.scale);
    vertex(this.x + 181 * this.scale, this.y - 41 * this.scale);
    vertex(this.x + 181 * this.scale, this.y - 56 * this.scale);
    bezierVertex(
      this.x + 181 * this.scale,
      this.y - 62 * this.scale,
      this.x + 179 * this.scale,
      this.y - 62 * this.scale,
      this.x + 177 * this.scale,
      this.y - 63 * this.scale
    );
    endShape();

    beginShape();
    vertex(this.x + 177 * this.scale, this.y + 70 * this.scale);
    vertex(this.x + 177 * this.scale, this.y + 48 * this.scale);
    vertex(this.x + 181 * this.scale, this.y + 48 * this.scale);
    vertex(this.x + 181 * this.scale, this.y + 63 * this.scale);
    bezierVertex(
      this.x + 181 * this.scale,
      this.y + 69 * this.scale,
      this.x + 179 * this.scale,
      this.y + 69 * this.scale,
      this.x + 177 * this.scale,
      this.y + 70 * this.scale
    );
    endShape();
    pop();

    //Trunk
    beginShape();
    vertex(this.x + 164 * this.scale, this.y - 49 * this.scale);
    vertex(this.x + 186 * this.scale, this.y - 48 * this.scale);
    bezierVertex(
      this.x + 192 * this.scale,
      this.y - 23 * this.scale,
      this.x + 192 * this.scale,
      this.y + 22 * this.scale,
      this.x + 186 * this.scale,
      this.y + 55 * this.scale
    );
    vertex(this.x + 164 * this.scale, this.y + 56 * this.scale);
    endShape();

    //Windshield
    push();
    fill(35, 31, 32);
    beginShape();
    vertex(this.x - 79 * this.scale, this.y - 55 * this.scale);
    vertex(this.x - 35 * this.scale, this.y - 45 * this.scale);
    bezierVertex(
      this.x - 40 * this.scale,
      this.y - 20 * this.scale,
      this.x - 40 * this.scale,
      this.y + 23 * this.scale,
      this.x - 35 * this.scale,
      this.y + 49 * this.scale
    );
    vertex(this.x - 79 * this.scale, this.y + 59 * this.scale);
    bezierVertex(
      this.x - 94 * this.scale,
      this.y + 39 * this.scale,
      this.x - 94 * this.scale,
      this.y - 42 * this.scale,
      this.x - 79 * this.scale,
      this.y - 55 * this.scale
    );
    endShape();

    //long window right
    beginShape();
    vertex(this.x - 21 * this.scale, this.y - 47 * this.scale);
    vertex(this.x + 77 * this.scale, this.y - 45 * this.scale);
    vertex(this.x + 106 * this.scale, this.y - 56 * this.scale);
    vertex(this.x - 55 * this.scale, this.y - 60 * this.scale);
    vertex(this.x - 21 * this.scale, this.y - 47 * this.scale);
    endShape();

    //long window left
    beginShape();
    vertex(this.x - 21 * this.scale, this.y + 51 * this.scale);
    vertex(this.x + 77 * this.scale, this.y + 49 * this.scale);
    vertex(this.x + 106 * this.scale, this.y + 60 * this.scale);
    vertex(this.x - 55 * this.scale, this.y + 64 * this.scale);
    vertex(this.x - 21 * this.scale, this.y + 51 * this.scale);
    endShape();

    //Backwindow
    beginShape();
    vertex(this.x + 84 * this.scale, this.y - 33 * this.scale);
    vertex(this.x + 128 * this.scale, this.y - 46 * this.scale);
    bezierVertex(
      this.x + 142 * this.scale,
      this.y - 21 * this.scale,
      this.x + 142 * this.scale,
      this.y + 30 * this.scale,
      this.x + 128 * this.scale,
      this.y + 50 * this.scale
    );
    vertex(this.x + 84 * this.scale, this.y + 37 * this.scale);
    bezierVertex(
      this.x + 87 * this.scale,
      this.y + 27 * this.scale,
      this.x + 87 * this.scale,
      this.y - 24 * this.scale,
      this.x + 84 * this.scale,
      this.y - 33 * this.scale
    );
    endShape();
    pop();

    //mirror right
    beginShape();
    vertex(this.x - 55 * this.scale, this.y - 55 * this.scale);
    vertex(this.x - 54 * this.scale, this.y - 66 * this.scale);
    vertex(this.x - 49 * this.scale, this.y - 64 * this.scale);
    vertex(this.x - 47 * this.scale, this.y - 79 * this.scale);
    bezierVertex(
      this.x - 61 * this.scale,
      this.y - 78 * this.scale,
      this.x - 63 * this.scale,
      this.y - 66 * this.scale,
      this.x - 63 * this.scale,
      this.y - 59 * this.scale
    );
    bezierVertex(
      this.x - 63 * this.scale,
      this.y - 56 * this.scale,
      this.x - 59 * this.scale,
      this.y - 54 * this.scale,
      this.x - 55 * this.scale,
      this.y - 55 * this.scale
    );
    endShape();

    //mirror left
    beginShape();
    vertex(this.x - 55 * this.scale, this.y + 59 * this.scale);
    vertex(this.x - 54 * this.scale, this.y + 70 * this.scale);
    vertex(this.x - 49 * this.scale, this.y + 68 * this.scale);
    vertex(this.x - 47 * this.scale, this.y + 83 * this.scale);
    bezierVertex(
      this.x - 61 * this.scale,
      this.y + 82 * this.scale,
      this.x - 63 * this.scale,
      this.y + 70 * this.scale,
      this.x - 63 * this.scale,
      this.y + 63 * this.scale
    );
    bezierVertex(
      this.x - 63 * this.scale,
      this.y + 60 * this.scale,
      this.x - 59 * this.scale,
      this.y + 58 * this.scale,
      this.x - 55 * this.scale,
      this.y + 59 * this.scale
    );
    endShape();
  }
}

let bmw = new Bmw(200,200);

