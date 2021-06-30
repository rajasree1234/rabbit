var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleImage;
var leaf,leafImage;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImage =loadImage("apple.png");
  leafImage = loadImage("orangeLeaf.png");

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

var rand =  Math.round(random(1,2))
  console.log(rand);


}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
 rabbit.x=World.mouseX
 createApples()
 console.log(frameCount)
createLeaves()
console.log(frameCount)
  drawSprites();
}

function createApples(){
  if(frameCount%80==0){
  apple=createSprite(random(50,350),40,10,10);
  apple.addImage("apple",appleImage);
  apple.scale=0.07;
  apple.velocityY=4;
  apple.lifetime=150;
  }
  }
  function createLeaves(){
 if(frameCount%80==0){
    leaf=createSprite(random(50,350),40,10,10);
    leaf.addImage("leaf",leafImage);
    leaf.scale=0.06;
    leaf.velocityY=3;
    leaf.lifetime=150;
    }
  }
    
   
  
  
  
  