
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground = new Ground(900,650,1800,100)
	paper = new Paper(100,200,30)
	boxleft = new Box(width -500,525,40,150)
	boxright = new Box(width -200,525,40,150)
    boxbottom = new Box(width -350,600,300,40)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
  ground.display();
  paper.display();
  boxleft.display();
  boxright.display();
  boxbottom.display();

}

function keyPressed() {
	if(keyCode === UP_ARROW){
		
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-95})

	}
}

