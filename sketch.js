
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var trackImage;

function preload()
{
hurdle = loadImage("hurdle.png");
trackImage = loadImage("track.jpg");
}

function setup() {
	createCanvas(1200, 600);
	
	ground = createSprite(200,180,2400,20);
	ground.addImage("ground",trackImage);
	ground.x = ground.width /2;
	ground.scale = 4.5;
	ground.velocityX = -2

	//engine = Engine.create();
	//world = engine.world;

	//Create the Bodies Here.

bob = new Bob(200,500,50,50,);
rob = new Rob(200,350,50,50);
	//Engine.run(engine);
  
}

function draw() {
  background(180);
  if (ground.x < 0){
	ground.x = ground.width/2;
  }
 
  obstacles();
  drawSprites();

  bob.display(); 
  rob.display();
}

function obstacles() {
if(frameCount%200===0){
	var obstacle = createSprite(1100,520,50,50);
	obstacle.addImage("hurdle",hurdle);
	obstacle.y = Math.round(random(350,550));
	obstacle.velocityX = -2 
	obstacle.lifetime = 150;
	obstacle.scale = 1;
}
}



