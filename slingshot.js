class Slingshot {
  constructor(object1,point2){
    var options = {
        bodyA: object1,
        pointB: point2,
        length: 10,
        stiffness: 0.04
    }

    this.pointB = point2;
    
    this.slingshot = Constraint.create(options);
    World.add(world,this.slingshot);
  }

  fly(){
    this.slingshot.bodyA = null;

  }
  display(){
    if(this.slingshot.bodyA){
      var ptA = this.slingshot.bodyA.position;
      var ptB = this.pointB;
      strokeWeight(4);
      line(ptA.x,ptA.y,ptB.x,ptB.y);
    }
    
  }
}
