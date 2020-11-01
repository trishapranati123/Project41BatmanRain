class Umbrella{
    constructor(x,y){
        var options = {
            isStatic:true
        }
        this.body = Bodies.circle(x,y,40,options);
        World.add(world,this.body);

        this.image = loadImage("images/Walking Frame/walking_1.png");

    }
    display(){
        var pos = this.body.position;
        image(this.image,pos.x - 40,pos.y - 50,100,100);
    }
}