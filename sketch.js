
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var block1, block2, block3;
var block1_options, block2_options,
	block3_options;

function preload()
{
	
}

function setup() {
  createCanvas(700, 700);

  engine = Engine.create();
  world = engine.world;


  //Crie os Corpos Aqui.
  var solo_options={
	isStatic : true
  }

  block1 = Bodies.circle(220,10,10,block1_options);
  World.add(world,block1);
  
  block2 = Bodies.retangle(110,50,10,10,block2_options);
  World.add(world,block2);

  block3 = Bodies.retangle(350,50,10,10,block3_options);
  World.add(world,block3);

  fill("red");
  rectMode(CENTER);
  ellipseMode(RADIUS);

  block1_options = {
    restitution: 0.5,
	friction: 0.02,
	frictionAir: 0 
  }
  	
  block2_options = {
    restitution: 0.7,
	friction: 0.01,
	frictionAir: 0.1
  }

  block3_options = {
    restitution: 0.1,
	friction: 1,
	frictionAir: 0.3
  }


  Engine.run(engine);
  
}


function draw() {
  background(100);
  

  ellipse(block1.x,block1.y,block1.width,block1.height,block1_options);
  

  drawSprites();
  Engine.update(engine);
}



