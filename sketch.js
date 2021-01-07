const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, box3, box4, box5;
var pig1, pig2;
var log1, log2, log3, log4;
var bird;

function setup(){
    var canvas = createCanvas(1000,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(600,400,70,70);
    pig1 = new Pig(700,400);
    box2 = new Box(800,400,70,70);
    log1 = new Log(700,350,250,PI/2);

    box3 = new Box(600,300,70,70);
    pig2 = new Pig(700,340);
    box4 = new Box(800,300,70,70);
    log2 = new Log(700,200,250,PI/2);
    
    box5 = new Box(700,180,70,70);
    log3 = new Log(700,160,150,PI/6);
    log4 = new Log(800,140,150,-PI/6);

    bird = new Bird(50,50);

    ground = new Ground(500,height,1000,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    fill("red");
    box1.display();
    fill("yellow");
    box2.display();
    fill("brown");
    ground.display();
    fill("pink");
    pig1.display();
    fill("orange");
    log1.display();
    fill("green");
    box3.display();
    fill("pink");
    pig2.display();
    fill("white")
    box4.display();
    fill("orange");
    log2.display();
    fill("cyan")
    box5.display();
    fill("orange");
    log3.display();
    fill("brown");
    log4.display();
    fill("red");
    bird.display();

}