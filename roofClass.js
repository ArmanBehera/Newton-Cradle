class Roof{

    constructor(x, y, width, height){

        // Creating the body
        this.body = Bodies.rectangle(x, y, width, height, {isStatic : true});

        this.width = width;
        this.height = height;
        
        World.add(world, this.body);
    }

    display(){
        // Displaying the body
        rectMode(CENTER);
        fill("blue");
        rect(this.body.position.x, this.body.position.y, this.width, this.height);

    }
}