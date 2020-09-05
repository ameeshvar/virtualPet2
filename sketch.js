var dog, happyDog, database, food, foodStock
var dogHappyImg,dogSadImg,feed,addFood,foodObject,fedTime






function preload()
{
  dogHappyImg=loadImage("images/dogImg.png")
  dogSadImg=loadImage("images/dogImg1.png")
}

	
  function setup() {
    database = firebase.database();
    foodStock= database.ref("food");
    foodStock.on("value", readStock, showError);
    createCanvas(1000, 1000);
  foodObject=new Food()
  fedTime=0
   dog = createSprite(800, 200, 10, 10);
  dog.addImage("dogSadImg",dogSadImg)
  dog.addImage("dogHappyImg",dogHappyImg);
  dog.scale=0.15
  feed=createButton("feed Dog")
  feed.position(700,95)
  feed.mousePressed(feedDog)
  addFood =createButton("addFood")
  addFood.position(800,95)
  addFood.mousePressed(addFoodStock)
   
}




function draw() {  
  background(46,139,87);
 foodObject.display()
 database.ref("feedTime").on("value",function(data){
   fedTime=data.val()
 })

  
  drawSprites();
  fill(255,255,254)
  textSize(15)
    if(fedTime>=12){
      text("last feed :"+fedTime%12 + "PM",400,30)
    }else if(fedTime==0){
      text("last feed : 12AM",400,30)
    }else{
      text("last fedd :"+fedTime +"AM",400,30)
    }
fill("white")
 
 text(mouseX+","+mouseY,mouseX,mouseY);

 //add styles here
 

}


function showError() {
  console.log("There is a mismatch"); 
}

function readStock(data){
food= data.val();
foodObject.updateFoodStock(food)

}




function feedDog(){
  dog.changeImage("dogHappyImg",dogHappyImg)
foodObject.updateFoodStock(foodObject.getFoodStock()-1)
database.ref("/").update({
  food:foodObject.getFoodStock(),feedTime:hour()
})
}
function addFoodStock(){
  food++
  database.ref("/").update({
    food:food
  })
}