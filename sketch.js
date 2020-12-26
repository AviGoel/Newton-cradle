var bob1,ob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;
var roof;


var engine,world;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	roof=new Roof(400,200,600,20);

	bob1=new Bob(300,550,50);
	bob2=new Bob(350,550,50);
	bob3=new Bob(400,550,50);
	bob4=new Bob(450,550,50);
	bob5=new Bob(500,550,50);
	
	rope1=new Rope(bob1.body,roof.body,50*-2,0)
	rope2=new Rope(bob2.body,roof.body,50*-1,0)
	rope3=new Rope(bob3.body,roof.body,50*0,0)
	rope4=new Rope(bob4.body,roof.body,50*1,0)
	rope5=new Rope(bob5.body,roof.body,50*2,0)

	


	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
rectMode(CENTER);
  background(255);
 
  roof.display();
 
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-85,y:85});
	}
}