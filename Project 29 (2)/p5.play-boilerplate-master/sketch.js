const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var ground1,ground2;
var box1,box2,box3,box4,box5,box6,box7,box8,box9;
var box10;
var slingshot;

function setup(){
 canvas = createCanvas(1200,400);
 engine = Engine.create();
 world = engine.world;

 ground1 = new Ground(600,390,1200,10);
 ground2 = new Ground(400,250,300,20);

 box1 = new Box(330,235,30,40);
 box2 = new Box(360,235,30,40);
 box3 = new Box(390,235,30,40);
 box4 = new Box(420,235,30,40);
 box5 = new Box(450,235,30,40);
 box6 = new Box(360,195,30,40);
 box7 = new Box(390,235,30,40);
 box8 = new Box(420,235,30,40);
 box9 = new Box(390,155,30,40);
box10 = new Box(100,50,30,30);
slingshot = new Slingshot(box10.body,{x:100,y:50});
}

function draw(){
 background(255);
 Engine.update(engine);
 text("press space to get another chance",600,30);

 ground1.display();
 ground2.display();
 box1.display();
 box2.display();
 box3.display();
 box4.display();
 box5.display();
 box6.display();
 box7.display();
 box8.display();
 box9.display();
 box10.display();
slingshot.display();
}


function mouseDragged(){
    Matter.Body.setPosition(box10.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(box10.body);
    }
}
