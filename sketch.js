
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

  ground1 = new Ground(400,500,800,20)
  wall1 = new Wall(600,550,800,20)
  wall2 = new Wall(400,500,800,20)
  wall3 = new Wall(500,500,800,20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  ground1.display();
  wall1.display();
  wall2.display();
  wall3.display();

  //drawSprites();
 
}




function keyPressed(){
	if(keycode === UP_ARROW){
		Matter.Body.applyForce(paperobject.body,paperobject.body.position,{x:85,y:-85})
	}
	
}






