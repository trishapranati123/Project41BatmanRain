class Drops{
    constructor(x,y){
        var options = {
            friction : 1.0
        }
        this.drop = Bodies.circle(x,y,5,options);
        World.add(world,this.drop); 
    }
    display(){
        var pos = this.drop.position;

        fill("blue");
        ellipse(pos.x,pos.y,5,5);
    }

    update(){
        if(this.drop.position.y > height){
            Matter.Body.setPosition(this.drop,{x:random(0,400),y:0});  
        }
    }

}