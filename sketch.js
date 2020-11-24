
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;

var centerX = 400 ,centerY = 400;
bobDia = 40;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(400,20,400,20);
	bob1 = new Bob(centerX,centerY,bobDia);
	rope1 = new Rope(bob1.body,roof.body,0,0);
	bob2 = new Bob(centerX+bobDia,centerY,bobDia);
	rope2 = new Rope(bob2.body,roof.body,bobDia,0);
	bob3 = new Bob(centerX+(bobDia*2),centerY,bobDia);
	rope3 = new Rope(bob3.body,roof.body,bobDia*2,0);
	bob4 = new Bob(centerX-bobDia,centerY,bobDia);
	rope4 = new Rope(bob4.body,roof.body,-bobDia,0);
	bob5 = new Bob(centerX-(bobDia*2),centerY,bobDia);
	rope5 = new Rope(bob5.body,roof.body,-bobDia*2,0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  roof.display();
  bob1.display();
  rope1.display();
  bob2.display();
  rope2.display();
  bob3.display();
  rope3.display();
  bob4.display();
  rope4.display();
  bob5.display();
  rope5.display();
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bob5.body,bob5.body.position,{x:-50,y:-40});

	}
	if (keyCode === DOWN_ARROW) {

		Matter.Body.applyForce(bob3.body,bob3.body.position,{x:50,y:-40});
  
	  }
	  if (keyCode === LEFT_ARROW) {

		Matter.Body.applyForce(bob4.body,bob4.body.position,{x:-50,y:-40});
  
	  }
	  if (keyCode === RIGHT_ARROW) {

		Matter.Body.applyForce(bob2.body,bob2.body.position,{x:50,y:-40});
  
	  }

}



