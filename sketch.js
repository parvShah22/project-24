
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

  ground1 = new Ground(390,390,2000,20)
  wall1 = new Wall(1200,330,20,100)
  wall2 = new Wall(980,330,20,100)
  wall3 = new Wall(1090,370,200,20)

  ball1 = new Ball(200,350,21)
	Engine.run(engine);
  
}


function draw() {
  background("black");
  rectMode(CENTER);
 
 ground1.display();
  wall1.display();
  wall2.display();
  wall3.display();
  ball1.display();
  //drawSprites();
 
}




function keyPressed(){	
  if(keyCode === UP_ARROW){
	Matter.Body.applyForce(ball1.body,ball1.body.position,{x:85,y:-85})
	}
	
}

