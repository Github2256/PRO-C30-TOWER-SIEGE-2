const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);

  fill("black");
    textSize(50);
    textFont("signPainter");
    text("drag Hexagonal stone and release it, to launch it towards the blocks",20,550);
 
  //level one
  block1 = new Block(300,275,30,40);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);

  // stand2 blocks;
  // level one
  block1a = new Block(630,170,30,40);
  block2a = new Block(660,170,30,40);
  block3a = new Block(690,170,30,40);
  block4a = new Block(720,170,30,40);
  block5a = new Block(750,170,30,40);
  block6a = new Block(780,170,30,40);
  // level two
  block7a = new Block(660,140,30,40);
  block8a = new Block(690,140,30,40);
  block9a = new Block(720,140,30,40);
  block10a = new Block(750,140,30,40);
  // level three
  block11a = new Block(690,100,30,40);
  block12a = new Block(720,100,30,40);
  //level four
  block13a = new Block(705,60,30,40);

  polygon = Bodies.circle(100,200,40);
  World.add(world,polygon);

  slingShot = new SlingShot(this.polygon,{x:100,y:200});


  

}
function draw() {
  background(56,44,44); 

  fill("white");
  textStyle(BOLD);
 // textFont("futura");
  textSize(20);
  text("Drag Hexagonal stone and release it, to launch it towards the blocks!!!!",20,30);

  fill("white");
  textStyle(BOLD);
 // textFont("futura");
  textSize(20);
  text("you can click space which will give you chances to play again!!!",20,70);
  

  ground.display();
  stand1.display();
  stand2.display();
  
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();

  //blocks on stand2
  fill("red");
  block1a.display();
  block2a.display();
  block3a.display();
  block4a.display();
  block5a.display();
  block6a.display();
  // level 2
  fill("blue");
  block7a.display();
  block8a.display();
  block9a.display();
  block10a.display();
  fill("green");
  block11a.display();
  block12a.display();
  fill("yellow");
  block13a.display();

  imageMode(CENTER);
  image(polygon_img,polygon.position.x,polygon.position.y,60,60);

   slingShot.display();
}

 function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
  }
  
  function mouseReleased(){
  slingShot.fly();
  }

  function keyPressed(){
    if (keyCode === 32){
      Matter.Body.setPosition(this.polygon,{x:100,y:200});
      slingShot.attach(this.polygon)
    }
  }