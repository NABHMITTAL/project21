var bullet,wall;
var speed = random(223,321)
var weight = random(30,52);
var thikness = random(22,83)


function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 50, 10);

  wall = createSprite(1200,200,thikness,height/2);
  wall.shapeColor = color(80,80,80)
}

function draw() {
  background(0);  

  speed = random(55,90)
   weight = random(400,1500)
  bullet.velocityX = speed;
  if (wall.x - bullet.x<(bullet.width+wall.width)/2) {
    bullet.velocityX = 0
    var damage = 0.5*weight*speed*speed/22509;
    if(damage>180){
      wall.shapeColor = color(225,0,0);
    }

    if (damage<10) {
      wall.shapeColor = color(0,225,0)
    }
    

  }
  drawSprites();
}