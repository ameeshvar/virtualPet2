class Food{

    constructor(){
      this.Image=loadImage("images/Milk.png")
      this.foodStock=0
      this.lastFed;
    }
    updateFoodStock(food){
        this.foodStock=food
    }
    getFoodStock(){
        return this.foodStock
    }
    detectFood(){
        if(this.foodStock>0){
            this.foodStock=this.foodStock-1

        }
    }
    getFedTime(time){
        this.lastFed=time  
    }
    display(){
       var x=80
       var y=100
       imageMode(CENTER)
       image(this.Image,720,220,70,70)
       if(this.foodStock!= 0){
           for(var i=0;i<this.foodStock;i++){
               if(i%10==0){
                   x=80
                   y=y+50

               }
               image(this.Image,x,y,50,50)
               x=x+30
               
           }

       }
    }



}