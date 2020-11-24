
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstaceGroup
var ground,invisibleGround;
var score
var survivalTime=0;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
}
function setup() {
  createCanvas(500,500);
// CREATING THE MONKEY 
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;
  
 
}


function draw() {
  background("white");
 ground=createSprite(490,360,40,10);
  ground.velocityX=-40;
  if(ground <0 ){
    ground.x=ground.width/2;
  }
  
  
  stroke("white");
  textSize(20);
  fill("white");
  text ("score:",score,500,50)
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survivalTime:",+survivalTime,100,50);
  
  
  FoodGroup= new (Group);
   obstacleGroup =new (Group) ;

  
  invisibleGround = createSprite(490,360,1000,10);
  invisibleGround.visible = false;
  
  
    //jump when the space key is pressed
    if(keyDown("space")&& monkey .y >= 100) {
        monkey.velocityY = -12;
    }
      monkey.velocityY = monkey.velocityY + 0.8;
monkey.collide(invisibleGround); 


  
  spawnBanana();
  spawnObstacle();
  drawSprites();
}

function spawnBanana(){
  if(frameCount % 80 ===0 ){
    banana=createSprite(400,200,20,20);
 banana.addImage("banana.png",bananaImage);
    banana.y = Math.round(random(120,200));
  banana.scale=0.1;
    banana.velocityX = -4;
    
    banana.depth = monkey.depth;
    monkey.depth = banana.depth + 1;
    
   
    FoodGroup.add(banana);
  }
  }
function spawnObstacle(){
  if(frameCount % 300===0){
    obstacle =createSprite(290,330,20,20);
obstacle.addImage("obstacle.png",obstaceImage);
    obstacle.velocityX=-4;
    obstacle.scale=0.2;
    
    obstacle.depth = monkey.depth;
    monkey.depth = obstacle.depth + 1;
    
  //  obstacle.setLifetime=200;
obstacleGroup.add(obstacle);
    
  }
}