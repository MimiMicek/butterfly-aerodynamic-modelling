let butterfly;

function setup() {
  createCanvas(900, 650);
  rectMode(CENTER);
  //instantiating a butterfly with its position
  butterfly = new Butterly(200, 200);
}

function draw() {
  background(172, 216, 230);

  //applying gravity
  let gravity = createVector(0, 0.00001);
  butterfly.addForce(gravity);

  //when the mouse is clicked wind is applied
  if(mouseIsPressed){
    let wind = createVector(-0.01, 0);
    butterfly.addForce(wind);
  }

  butterfly.edges();
  butterfly.update();
  butterfly.show();
}
