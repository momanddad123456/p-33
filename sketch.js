
const Engine = Matter.Engine;
const world = Matter.World;
const bodies = Matter.Bodies;

var engine = world;

var particle;
var divisions = []; 
var particles = [particle];
var plinkos = [];
var line;

var divisionHeight = 300;

var gameState = "PLAY";

var count = 0;
var score = 0;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
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
 


function draw() {
  background("black");
  Engine.update(engine);
  textSize(35)
  text("Score : "+score,20,30);
  fill(255);

 textSize(35)
 text(" 500 ", 5, 550);
 text(" 500 ", 80, 550);
 text(" 500 ", 160, 550);
 text(" 500 ", 240, 550);
 text(" 100 ", 320, 550);
 text(" 100 ", 320, 550);
 text(" 100 ", 480, 550);
 text(" 200 ", 560, 550);
 text(" 200 ", 640, 500);
 text(" 200 ", 720, 550);




  ground.display();
  if( gameState =="END") {
    background("black");
    fill("red");
    textSize(100);
    text("game Over", 200, 400);

  }
   for (var i = 0; i < plinkos.length; k++) {
     plinkos[k].display();
   }

   if(particle = null)
 { 
   particle.display();

   if (particle.body.position.y>700)
{

   if(particle.body.position.x > 300)
       {
         score = score+500;
         particle = null;
         if ( count>= 5) gameState ="END";
       }
        
       else if (particle.body.position.x > 600 && particle.body.position > 301) 
         {
           score = score + 100;
           particle=null;
           if ( count>= 5) gameState ="END;"

         }

      }
}








for (var i = 0; i< divisions.length; i++) {

  divisions[i].display();
}

function mousepressed() {
  if(gameState !=="END") {
    count++;
    particle = new particle(mouseX, 50, 10, 10);
  }
}
}