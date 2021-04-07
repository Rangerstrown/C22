// Name Spacing 

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world, ground;
 var ballBody, b1;
function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;

var ground_options={

  isStatic:true,
 
}



  ground =Bodies.rectangle(200,390,40,20, ground_options);
  World.add(world,ground);
 
  console.log(ground);
  
 var ballBody_options={

 restitution:1.0
 
 }

 ballBody = Bodies.circle(200,100,20, ballBody_options);
 World.add(world,ballBody);


 var ball_options ={
  restitution: 1.0
}

ball = Bodies.circle(100,100,20, ball_options);
World.add(world,ball);




}

function draw() {
  background(0);
  Engine.update(engine);
  rectMode(CENTER);
 rect(ground.position.x,ground.position.y,400,20);
 ellipseMode(RADIUS);
 ellipse(ballBody.position.x,ballBody.position.y,20,20)
 




 ellipse(ball.position.x, ball.position.y, 20, 20);
}





