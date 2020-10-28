class Slingshot {
  constructor(object1,object2){
    var options = {
        bodyA: object1,
        bodyB: object2,
        length: 10,
        stiffness: 0.04
    }
    
    this.chain = Constraint.create(options);
    World.add(world,this.chain);
  }
  display(){

    var pointA = this.chain.bodyA.position;
    var pointB = this.chain.bodyB.position;
    line(pointA.x,pointA.y,pointB.x,pointB.y)

  }
}
