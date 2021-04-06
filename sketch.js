const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var particles = [];
var plinkos = [];
var division = [];
var divisionHeight = 200;
var score = 0;


function setup() 
{
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(400, 790, 800, 20)

 // division1 = new Division(240, 600, 15, 60)

 for (var k = 0; k <=800;k = k + 80) 
  {
    division.push(new Division(k, 800-divisionHeight/2, 10, divisionHeight));
  }

 for (var j = 75; j <=width; j=j+50)
  {
    plinkos.push(new Plinko(j,75));
  }

 for (var j = 50; j <=width-10; j=j+50)
  {
    plinkos.push(new Plinko(j,175));
  }

  for (var j = 75; j <=width; j=j+50)
  {
    plinkos.push(new Plinko(j,275));
  }

 for (var j = 50; j <=width-10; j=j+50)
  {
    plinkos.push(new Plinko(j,375));
  }

}
//console.log(division);
  
function draw() 
{
  background(0);  
  Engine.update(engine);

  ground.display();
  //division1.display();

  for (var k = 0; k < division.length; k++) 
  {
     division[k].display();
  }

  for (var i = 0; i < plinkos.length; i++)
  {
     plinkos[i].display();
  }

  if(frameCount%60 === 0)
  {
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
  }
  
  for (j = 0; j < particles.length; j++)
  {
     particles[j].display();
  }
 
}