var fixed,moving;
var car,wall;

function setup() {
  createCanvas(800,400);
  
  fixed=createSprite(300,200,50,80);
  fixed.shapeColor="green";

  moving=createSprite(600,200,80,50);
  moving.shapeColor="green";
  car=createSprite(300,300,50,50);
  car.shapeColor="blue";
  car.velocityX=3;

  wall=createSprite(700,300,50,80);
  wall.shapeColor="yellow";
  wall.velocityX=-3;

}

function draw() {
  background(0);  

  console.log(moving.x-fixed.x);

  moving.x=World.mouseX;
  moving.y=mouseY;
  
  
 if(isTouching(moving,fixed)){
  fixed.shapeColor="red";
  moving.shapeColor="red";

 }
 else{
  fixed.shapeColor="green";
  moving.shapeColor="green";
 }
 


  bounceoff(car,wall);



  drawSprites();
}

function bounceoff(car,wall){

  if(car.x-wall.x < wall.width/2 + car.width/2
    && wall.x - car.x < wall.width/2 + car.width/2){
      car.velocityX = car.velocityX * (-1);
      wall.velocityX = wall.velocityX * (-1);
  }

  if(car.y - wall.y < wall.height/2 + car.height/2
    && wall.y - car.y < wall.height/2 + car.height/2){
      car.velocityY = car.velocityY * (-1);
      wall.velocityY = wall.velocityY * (-1); 
  }


}