
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball
function preload()
{
	
}

function setup() {
	createCanvas(1000, 1000);


	engine = Engine.create();
	world = engine.world;



	//Create the Bodies Here.
	
	Matter.Bodies.circle(x,y,ball_options)
var ball_options = {
	isStatic:false,
	restitution:0.5,
	density:1.5
}
groundobj = new Ground(width/2/670,width,20)
leftside = new Ground(1100,600,20,120)
	Engine.run(engine);

	funtion Keypressed()
  if keyCode ===[UPARROW]
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipseMode(RADIUS)
  ball.display()
  drawSprites();
 
}



