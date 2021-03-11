const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var divisions = [];
var divisionHeight = 300;
var particles = [];
var plinkos = [];

function setup() {
  createCanvas(500,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240,790,480,20);
}

function draw() {
  background(0);  
  Engine.update(engine);

  ground.display();

  for(var i = 0; i <= width; i = i+80){
    divisions.push(new Division(i,height-divisionHeight/2,10,divisionHeight));
  }

  for(var j = 65; j <= width; j = j+50){
    plinkos.push(new Plinko(j,75));
  }

  for(var j = 40; j <= width; j = j+50){
    plinkos.push(new Plinko(j,175));
  }

  
  for(var j = 65; j <= width; j = j+50){
    plinkos.push(new Plinko(j,275));
  }
  
  for(var j = 40; j <= width; j = j+50){
    plinkos.push(new Plinko(j,375));
  }


  drawSprites();

  
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2-10),10,10))
  }

  for(var k = 0; k < divisions.length; k++){
    divisions[k].display();
  }

  for(var h = 0; h<particles.length; h++){
    particles[h].display();
  }
  
  for(var j = 0; j<plinkos.length; j++){
    plinkos[j].display();
  }
}