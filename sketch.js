var car,wall;
var speed,weight;

function setup() {
  createCanvas(1200,400);
  car = createSprite(50, 200, 50, 50);
  car.shapeColor=color(100,100,0);
  
  wall = createSprite(1000, 200, 100, 200);
  wall.shapeColor=color(100,100,0);

  speed=random(30,100);
 //speed = 1;
  weight=random(1500,3000);


}

function draw() {
  
  background(0,0,0); 
  car.velocityX=speed;
  
  if((wall.x-car.x) <= (car.width/2 + wall.width/2))
{
  car.velocityX = 0;

  var deformation = 0.5 * weight * speed * speed/22500;

  if (deformation>180)
  {
    car.shapeColor=color(0,255,0);
  }
  if (deformation <180 && deformation >100)
  {
    car.shapeColor=color(230,230,0);
  }
  if (deformation < 100)
  {
    car.shapeColor=color(255,0,0);
  }
  }
  drawSprites();
}