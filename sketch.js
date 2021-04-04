
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var treeObj, stoneObj,groundObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;
var world,boy;
var signBoardimg;
var signBoard;



function preload(){
	girlimg=loadImage("images/girl.png");
  signBoardimg=loadImage("images/signBoard.png");
  backimg=loadImage("images/b.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	stoneObj=new stone(585,450,15); 
  chain1 = new Chain(stoneObj.body,{x:580,y:450});
	mango1=new mango(1100,100,20);
	mango3=new mango(1010,140,20);
	mango4=new mango(1000,70,20);
	mango5=new mango(1100,70,20);
	mango6=new mango(1000,230,20);
	mango7=new mango(900,230,30);
	mango8=new mango(1140,150,30);
	mango9=new mango(1100,230,30);
	mango10=new mango(1200,200,30);
	mango11=new mango(1120,50,30);
	mango12=new mango(900,160,30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
  
	Engine.run(engine);
}

function draw() {
  background(backimg);
  //text("X"+mouseX+","+"Y"+mouseY,500,100);
  image(girlimg ,540,320,200,300);
  imageMode(CENTER);
  image(signBoardimg ,280,418,720,450);

  treeObj.display();
  stoneObj.display();
  mango1.display();
  mango3.display();
  mango4.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  stoneObj.display();
  groundObject.display();
  // display launcher object here
    


  detectcollision(stoneObj,mango1);
  detectcollision(stoneObj,mango3);
  detectcollision(stoneObj,mango4);
  detectcollision(stoneObj,mango5);
  detectcollision(stoneObj,mango6);
  detectcollision(stoneObj,mango7);
  detectcollision(stoneObj,mango8);
  detectcollision(stoneObj,mango9);
  detectcollision(stoneObj,mango10);
  detectcollision(stoneObj,mango11);
  detectcollision(stoneObj,mango12);
}
function mouseDragged(){
  Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY})
  
}
function mouseReleased(){
  chain1.fly()
}
  function detectcollision(lstone,lmango){

  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  	if(distance<=lmango.r+lstone.r)
    {
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }
  function keyPressed(){
    if(keyCode===32){
        Matter.Body.setPosition(stoneObj.body,{x:580,y:440})
        var options = {
          bodyA: bodyA,
          pointB: pointB,
          stiffness: 0.004,
          length: 10
      }
        chain1.attach(stoneObj.body)
    }
    }