
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var plane;
var block1,block2,block3;


function preload()
{
	
}

function setup() {
	createCanvas(600, 600);


	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);
	//Crie os Corpos Aqui.

	var plane_options = {
		isStatic: true
	}

	var block1_Options = {
		restituction: 0.5,
		friction:0.02,
		frictionAir: 0,
	}

	var block2_Options = {
		restituction: 0.7,
		friction:0.01,
		frictionAir: 0.1,
	}


	var block3_Options = {
		restituction: 0.01,
		friction:1,
		frictionAir: 0.3,
	}



	plane = Bodies.rectangle(300,600,600,20,plane_options);
	World.add(world, plane);

	block1 = Bodies.circle(220,10,10,block1_Options);
	World.add(world, block1);
	
	block2 = Bodies.rectangle(110,50,10,10,block2_Options);
	World.add(world, block2);

	block3 = Bodies.rectangle(350,50,10,10,block3_Options);
	World.add(world, block3);

	fill(255,0,0);
	rectMode(CENTER);
	ellipseMode(RADIUS);
  
}

function draw() {

  background(150);
  
  ellipse(block1.position.x, block1.position.y,20);
  rect(block2.position.x, block2.position.y,50,50);
  rect(block3.position.x, block3.position.y,90,50);


  drawSprites();
 
  Engine.update(engine);
}




