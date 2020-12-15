// Defining nicknames 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;
var roof;

function setup(){
  createCanvas(800, 600);

  // Creating the engine and the world
  engine = Engine.create();
  world = engine.world;

  // Creating the roof
  roof = new Roof(400, 100, 200, 20);

  // Creating the bobs
  bob1 = new Bob(460, 200, 20);
  bob2 = new Bob(430, 200, 20);
  bob3 = new Bob(400, 200, 20);
  bob4 = new Bob(370, 200, 20);
  bob5 = new Bob(340, 200, 20);

  rope1 = new Rope(bob1.body, roof.body, 80, 0);
  rope2 = new Rope(bob2.body, roof.body, 40, 0);
  rope3 = new Rope(bob3.body, roof.body, 0, 0);
  rope4 = new Rope(bob4.body, roof.body, -40, 0);
  rope5 = new Rope(bob5.body, roof.body, -80, 0);
}

function draw(){

  background("grey");

  // Updating the engine
  Engine.update(engine);

  // Displaying the roof
  roof.display();

  // Displaying the rope
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display(); 

  // Displaying the bobs
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  

  keyPressed();

}

function keyPressed(){

  if (keyCode === UP_ARROW){

    Matter.Body.applyForce(bob1.body, bob1.body.position, {x: 10, y : -5});
  }

}
