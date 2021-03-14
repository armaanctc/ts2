const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine , world , platform;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16,block17,block18,block19,block20,block21,block22,block23,block24;
var ground,ground1,ground2;
var polygon,polygonImage;
var slingShot;

function preload(){
polygonImage = loadImage("polygon.png")


}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    
    var options={
        restitution:0.5,
        friction:1.0,
        density:20
    }
    polygon = Bodies.circle(50,300,20,options);
    World.add(world,polygon);
    
    ground = new Ground(600,height,1200,20);
    ground1 = new Ground(480,300,185,10);
    ground2 = new Ground(900,190,200,10);

    slingShot = new SlingShot(this.polygon,{x:50,y:300});

    block1 = new Box(395,275,30,40);
    block2 = new Box(425,275,30,40);
    block3 = new Box(455,275,30,40);
    block4 = new Box(485,275,30,40);
    block5 = new Box(515,275,30,40);
    block6 = new Box(545,275,30,40);
    block7 = new Box(425,235,30,40);
    block8= new Box(455,235,30,40);
    block9 = new Box(485,235,30,40);
    block10 = new Box(515,235,30,40);
    block11 = new Box(455,195,30,40);
    block12 = new Box(485,195,30,40);

    block13 = new Box(815,165,30,40);
    block14 = new Box(845,165,30,40);
    block15 = new Box(875,165,30,40);
   block16 = new Box(905,165,30,40);
   block17 = new Box(935,165,30,40);
   block18 = new Box(965,165,30,40);
   block19 = new Box(845,125,30,40);
   block20 = new Box(875,125,30,40);
   block21 = new Box(905,125,30,40);
   block22 = new Box(935,125,30,40);
   block23 = new Box(875,85,30,40);
   block24 = new Box(905,85,30,40);
}


function draw(){
    background("black");
    Engine.update(engine);
    imageMode(CENTER);
    image(polygonImage ,polygon.position.x,polygon.position.y,40,40);

  
    ground.display();
    ground2.display()
   ground1.display();
   slingShot.display();
   block1.display();
   block2.display();
   block3.display();
   block4.display();
   block5.display();
   block6.display();
   block7.display();
   block8.display();
   block9.display();
   block10.display();
   block11.display();
   block12.display();

   block13.display();
   block14.display();
   block15.display();
   block16.display();
   block17.display();
   block18.display();
   block19.display();
   block20.display();
   block21.display();
   block22.display();
   block23.display();
   block24.display();
    text("x:"+mouseX+",y:"+mouseY,mouseX,mouseY) 


}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingShot.fly();
}
function keyPressed(){
    if(keyCode === 32){
        slingShot.attach(this.polygon);
    }
  }
