class Butterly{

  constructor(x, y){

    this.position = createVector(x, y);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
    //butterfly mass in g
    this.mass = 0.03;
  }

  addForce(force){
    this.acceleration.add(force);
  }

  edges() {
    if (this.position.y >= height - 20) {
      this.position.y = height - 20;
      this.velocity.y *= -1;
    }

    if (this.position.x >= width - 20) {
      this.position.x = width - 20;
      this.velocity.x *= -1;
    } else if (this.position.x <= 20) {
      this.position.x = 20;
      this.velocity.x *= -1;
    }
  }

  update(){
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.set(0.001, 0.003);
  }

  show() {
    //butterfly container
    ellipse(this.position.x, this.position.y, 60, 120);
    rect(this.position.x, this.position.y, 80, 20);
  }
}

