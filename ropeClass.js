class Rope{

    constructor(body1, body2, offsetX, offsetY){

        this.offsetX = offsetX;
        this.offsetY = offsetY;

        var options = {
            bodyA : body1,
            bodyB : body2,
            pointB : {x : this.offsetX, y : this.offsetY},
            stiffness : 1
        }

        this.rope = Constraint.create(options);

        World.add(world, this.rope);
  
    }

    display(){

        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;

        var anchorA = pointB.x + this.offsetX;
        var anchorB = pointB.y + this.offsetY;
        // Displaying a chain
        fill("green");
        line(pointA.x, pointA.y, anchorA, anchorB);
    }
}