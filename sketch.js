
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy,stone1,mango1,mango2,mango3,tree1,ground1,launcher;

function preload()
{


	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

   
  stone1 = new Stone(150,500,60,60);
 
	ground1= new Ground (400,600,800,20)
  tree1=new Tree(700,355,500,500);

  
  boy=new Boy(200,500,200,200);

	mango1=new Mango(700,400,25,25);
	mango2=new Mango(650,260,25,25);
	mango3=new Mango(750,250,25,25);
	launcher=new Launcher(stone1.body,{x:200,y:500});
    
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(42,214,51);


  stone1.display();
  boy.display();
  ground1.display();
  tree1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  launcher.display(); 
  
  drawSprites();
  detectcollison(stone1,mango1);
  detectcollison(stone1,mango2);
  detectcollison(stone1,mango3);
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    launcher.fly();
}

function keyPressed(){
    if(keyCode===32){
        Matter.Body.setPosition(stone1.body,{x:150,y:500})
        launcher.attach(stone1.body);
    }

}

function  detectcollison(lstone,lmango){
  mangoBodyPosition =  lmango.body.position;
  stoneBodyPosition  =  lstone.body.position;

  var distance= dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
  if (distance<=lmango.r+lstone.r)
  {
    matter.body.setStatic(lmango.body,false)
  }
}
