var fixedrect, movingrect;

function setup() {
  createCanvas(800,400);
 
 
  fixedrect=  createSprite(400, 200, 70, 70);
  movingrect = createSprite(600,200,70,70);

  fixedrect.velocityX = 3;
  movingrect.velocityX = -3;

  fixedrect.shapeColor = "green";
  movingrect.shapeColor = "red";

}

function draw() {
  background(255,255,255);  

 // movingrect.x = mouseX;
 // movingrect.y = mouseY;


  if(movingrect.x - fixedrect.x < movingrect.width/2 + fixedrect.width/2 &&
    fixedrect.x - movingrect.x < movingrect.width/2 + fixedrect.width/2 ){

      fixedrect.velocityX =  fixedrect.velocityX  *(-1);
      movingrect.velocityX = movingrect.velocityX * (-1);

    }

   if( movingrect.y - fixedrect.y < movingrect.height/2 + fixedrect.height/2 &&
    fixedrect.y - movingrect.y < movingrect.height/2 + fixedrect.height/2)
  {
    //fixedrect.shapeColor = "red";
   // movingrect.shapeColor = "red";
  
  }
  else{

   // fixedrect.shapeColor = "green";
  //  movingrect.shapeColor = "green";
  
  }


  drawSprites();
}


//algorithm - code to solve some problem

// isTouching()
// our own algorithm to detect collision between two sprites