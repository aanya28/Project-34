//Create variables here
var dog, happyDog, dogImage ,database, foodS, foodStock;

function preload()
{
  //load images here
  dogImage.loadImage("Dog.png");
  happyDog.loadImage("happydog.png");
}

function setup() {
  createCanvas(500, 500);
  dog.addImage("dog.png");

  foodStock = database.ref('Food');
  foodStock.on("value", readStock);
  
}


function draw() {  
  background(46, 139, 87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog);
  }

  drawSprites();
  //add styles here

}



