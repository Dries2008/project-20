
var Cat,CatImage
var Mouse,MouseImage
var Ground,GroundImage

function preload(){
    CatImage1 = loadAnimation("images/tomOne.png");
    CatImage2 = loadAnimation("images/tomTwo.png","images/tomThree.png");
    CatImage3 = loadAnimation("images/tomFour.png");
    MouseImage1 = loadAnimation("images/jerryOne.png");
    MouseImage2 = loadAnimation("images/jerryTwo.png","images/jerryThree.png");
    MouseImage3 = loadAnimation("images/jerryFour.png");
    GroundImage = loadAnimation("garden.png");
}

function setup() {
createCanvas(600, 200);

Cat = createSprite(50,160,20,50);
Cat.addImage("sleeping_cat",CatImage1) 
Mouse = createSprite(10,50,20,20)
Mouse.addImage("Rat1",MouseImage1)
Ground = ceateSprite(600,200)
Ground.addImage(GroundImage)
}

function draw() {
    background(180);
    
    drawSprites();
}

function keyPressed(){
if (KeyCode === LeftArrow){
    cat.velocityX = 5
    cat.addAnimation("catRunning",CatImage2)
    cat.changeAnimation("catRunning")
  }
 Text(mouseX +`,`+ mouseY,10,45)
if(cat.x - mouse.x < (cat.width - mouse.width)/2)
 cat.velocityX = 0
 cat.addAnimation("catLastImage",CatImage3)
 cat.changeAnimation("catLastImage")
}
  
    