const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var drops = [];
var maxDrops = 100;

var rand;

function preload(){
    thunder1 = loadImage("images/thunderbolt/1.png");
    thunder2 = loadImage("images/thunderbolt/2.png");
    thunder3 = loadImage("images/thunderbolt/3.png");
    thunder4 = loadImage("images/thunderbolt/4.png");
}

function setup(){
    createCanvas(400,600);
        
    engine = Engine.create();
    world = engine.world;

    batman = new Umbrella(145,550);

    for(var i  = 0; i < maxDrops; i++){
        drops.push(new Drops(random(0,400),random(0,600)));
    }      
}

function draw(){
    background(0);  
    Engine.update(engine);
    batman.display();

    for(var drp in drops){
        drops[drp].display();
        drops[drp].update();
    }

    if(frameCount % 100 === 0){
        thunder = createSprite(random(20,380),0);

        rand = Math.round(random(1,4));
        switch(rand){
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break;
            case 3: thunder.addImage(thunder3);
            break;
            case 4: thunder.addImage(thunder4);
            break;
            default : break;
        }
        thunder.lifetime = 50;
        thunder.scale = 0.7;
    }

    drawSprites();
}   

