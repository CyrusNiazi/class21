var mR,fR;
function setup() {
  createCanvas(800,400);
 fR= createSprite(600, 200, 100, 150);
 fR.shapeColor="green"
 fR.debug=true;
 fR.velocityX=-2;

 mR=createSprite(200,200,50,100);
 mR.shapeColor="green"
 mR.debug=true;

obj=createSprite(100,200,25,25);
 obj.shapeColor="green"
 obj.velocityX=2;
obj.debug=true;

}

function draw() {
  background(0);  
  mR.x=mouseX;
  mR.y=mouseY;

 /* if(isTouching(obj,mR)) 
   {
    obj.shapeColor="red";
    mR.shapeColor="red";
  }
  else {
    obj.shapeColor="green"
    mR.shapeColor="green"
  }
  if(isTouching(obj,fR))
  {
  obj.shapeColor="red"
  fR.shapeColor="red"
  }
  else {
obj.shapeColor="green"
fR.shapeColor="green"
}
 */
bounceOff(obj,fR);
  console.log("Distance between the centers :"+(mR.x-fR.x));
  console.log("sum of their widths/2 :"+(mR.width+fR.width)/2);
  
  drawSprites();
}

