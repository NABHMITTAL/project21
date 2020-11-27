var bullet,wall;
var speed = random(223,321)
var weight = random(30,52);
var thickness = random(22,83)


function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 50, 10);
  bullet.shapeColor = color(225,225,225)

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80)
}

function draw() {
  background(0);  
  

  speed = random(223,321)
  weight = random(30,52)
  bullet.velocityX = speed;
if (hasColided(bullet,wall)) {
  bullet.velocityX = 0
  var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
if (damage>10) {
  wall.shapeColor = "red"
}

if (damage<10) {
  wall.shapeColor = "green"
}

}
  drawSprites();
}