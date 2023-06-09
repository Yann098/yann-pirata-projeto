class CannonBall {
  constructor(x, y) {
    let options = { isStatic: true };
    this.r = 30;
    this.image = loadImage("./assets/cannonball.png");
    this.body = Bodies.circle(x, y, this.r, options);
    World.add(world, this.body);
  }

  shoot() {
    let newAngle = cannon.angle - 28;
    newAngle = newAngle * (3.14 / 180);

    let velocity = p5.Vector.fromAngle(newAngle);
    velocity.mult(0.5);
    Matter.Body.setStatic(this.body, false);
    Matter.Body.setVelocity(this.body, {
      x: velocity.x * (180 / 3.14),
      y: velocity.y * (180 / 3.14),
    });
  }

  display() {
    let pos = this.body.position;
    push();
    imageMode(CENTER);
    image(this.image, pos.x, pos.y, this.r, this.r);
    pop();
  }
}
