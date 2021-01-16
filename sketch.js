
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustbin1 = new Dustbin (700,540,20,230);
	dustbin2 = new Dustbin ( 550,540,20,230);
	dustbin3 = new Dustbin (625,665,200,15);
	paper = new Paper (200,500,50)
	ground = new Ground (400,680,800,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230,200,200);

  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paper.display();
  ground.display();

  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(paper.body,paper.body.position,{x:250,y:-600}
	  )
}
}


