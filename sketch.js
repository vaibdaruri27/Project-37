//Global Functions
//Constants(Engine,World,Bodies,Body)
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//Variables
var groundSprite;
var engine, world;
// var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
/*var packageBody,*/
// var bottom, bottomSprite, right, rightSprite, leftSprite, left;


function preload()
{   //Preloading helicopter and package images
	// helicopterIMG=loadImage("helicopter.png");
	// packageIMG=loadImage("package.png");

	backgroundImg
}

function setup() {
	//Canvas(800,700)
	createCanvas(500,700);
	
	rectMode(CENTER);
	
	ground = createSprite(200,200,20,20);
	ground.shapeColor = "yellow";
	
  
}


function draw() {
  //Making the packagebody center
  rectMode(CENTER);

  //Making the bottom center
  rectMode(CENTER);


  

  //Making Background Black
  background("aqua");
  
  

  //drawSprites();
  drawSprites();
 
}

