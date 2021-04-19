var car,wall;

function setup() {
  createCanvas(1200,800);
  wall = createSprite(1000, 200, 50, 80);
  wall.shapeColor = "green";
  wall.debug = true;
  car = createSprite(400,200,80,30);
  car.shapeColor = "green";
  car.debug = true;
  car.velocityX = 3
}



function draw( ) {
  background(0,0,0);  
 // movingRect.x = World.mouseX;
 // movingRect.y = World.mouseY;

  
   if(isTouching(car,wall)){
     textSize(20)
     text("touched",500,500);
     textFill("green")

   }

   collide(car,wall)
  

  drawSprites();
}

function isTouching(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
  return true
}
else {
 return false
}

}

function collide(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
  object1.setVelocity(0,0)
}
}