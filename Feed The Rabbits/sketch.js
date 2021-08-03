var garden,rabbit;
var gardenImg,rabbitImg;
var greenLeaf,greenLeafImage
var redLeaf,redLeafImage
var OrangeLeaf,OrangeLeafImage

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png")
  greenLeafImage= loadImage("leaf.png")
  redLeafImage= loadImage ("redImage.png")
  OrangeLeafImage= loadImage("orangeLeaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
 //calling the function
 spawnGreenLeaf()
  drawSprites();
  spawnredLeaf()
  spawnOrangeLeaf()
}
// creating a function for green leaves 
function spawnGreenLeaf()
{
  //creating an if block to spawn the leaves at specific points or distance
  if(frameCount%60==0)
  {
    greenLeaf=createSprite(random(0,400),0,20,20)
    greenLeaf.addImage("greenLeaf",greenLeafImage)
    greenLeaf.velocityY=5
    greenLeaf.scale= 0.2
    // leaf behind the rabbit
    greenLeaf.depth=rabbit.depth 
    rabbit.depth=rabbit.depth+1

  }
  
}
 function spawnredLeaf()
 {
  if(frameCount%60==0)
  {

   redLeaf=createSprite(random(0,400),0,20,20)
  redLeaf.addImage("redLead",redLeafImage)
  redLeaf.velocityY=5
  redLeaf.scale=0.2
  redLeaf.depth=rabbit.depth
  rabbit.depth=rabbit.depth+1
  } 
 }

function spawnOrangeLeaf()
{
  if(frameCount%60==0)
  {
    OrangeLeaf=createSprite(random(0,400),0,20,20)
    OrangeLeaf.addImage("OrangeLeaf",OrangeLeafImage)
    OrangeLeaf.velocityY=5
    OrangeLeaf.scale=0.2
    OrangeLeaf.depth=rabbit.depth
    rabbit.depth=rabbit.depth+1
  }
}
