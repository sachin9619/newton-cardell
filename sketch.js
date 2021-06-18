const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;


var bob1,bob2,bob3,bob4,bob5,roof,chain,chain2,chain3,chain4,chain5;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
  
roof=Bodies.rectangle(40,90,100,10,{isStatic:true})
World.add(world,roof)
	//Create the Bodies Here.
bob1=new Bob(350,400,50)
bob2=new Bob(430,400,50)
bob3=new Bob(450,400,50)
bob4=new Bob(500,400,50)
bob5=new Bob(550,400,50)

chain=new Chain(roof,bob1,{x:350,y:100})
/* /chain2=new Chain(bob2.body,{x:400,y:100})
chain3=new Chain(bob3.body,{x:450,y:100})
chain4=new Chain(bob4.body,{x:500,y:100})
chain5=new Chain(bob5.body,{x:550,y:100})*/

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(rgb(240,128,128));
rect(roof.position.x,roof.position.y,100,10)

  chain.display()
  chain2.display()
  chain3.display()
  chain4.display()
  chain5.display()
  
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()

  
  drawSprites();
 
}



