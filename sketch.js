var apple;

function setup() {
  createCanvas(600,400);
  apple = createSprite(200,200,40,40)

}

function draw() 
{
  background(45);
  if(keyIsDown(RIGHT_ARROW)){
    apple.position.x = apple.position.x + 5
  }
  if(keyIsDown(UP_ARROW)){
    apple.position.y = apple.position.y - 5
  }



  drawSprites();
}




