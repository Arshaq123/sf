const Engine = Matter.Engine;
const World = Matter.World ;
const Bodies = Matter.Bodies;
var engine,world,fairy, star;
var garden, bgImg;
var fairyy,star,star1;
var sound;
function preload()

{
  
  bgImg=loadImage("images/starnight.png");
  f1=loadImage("images/fairy1.png")
  star=loadImage("images/star.png")
  sound=loadsound("sound/.JoyMusic.mp3")
   //preload the images here
}

function setup() {
  createCanvas(800, 750);
  
  engine = Engine.create();//this is the physics engine for our game

  world = engine.world;// creating a world using the engine , why do we need - so that we have all the physics applied to our world

  fairyy=createSprite(400,400,10,10);
  fairyy.addImage(f1);
  fairyy.scale=0.3;

  var fairy_options= {

        isStatic : true
    }

  fairy=Bodies.rectangle(400,200,20,20, fairy_options);
  World.add(world,fairy);
    

  console.log(fairy);
  console.log(fairy.position.x);
 
  star1=createSprite(600,100,10,10);
  star1.addImage(star);
  star1.scale=0.1;

  starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	star1.x=starBody.position.x
	World.add(world, starBody);
  


}


function draw() {
  background(bgImg);

  Engine.update(engine);


  rectMode(CENTER)
  rect(fairy.position.x,fairy.position.y,20,20);

  


  drawSprites();
}

function keyPressed(){


  if (keyCode  === LEFT_ARROW){

    fairyy.velocityX=-2;
    
  }
//For moving and changing animation write code here


if (keyCode  === RIGHT_ARROW){

  fairyy.velocityX=2;

  
}


if (keyCode  === DOWN_ARROW){

  star1.velocityY=0.9;


  
}

}
 
if(starbody.position.y<470){

  var star_options= {

    isStatic : false
}


}

