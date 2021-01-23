var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(740,600);

    //create 4 different surfaces
    surface1=createSprite(70,590,140,20);
    surface1.shapeColor="blue";

    surface2=createSprite(220,590,140,20);
    surface2.shapeColor="purple";

    surface3=createSprite(370,590,140,20);
    surface3.shapeColor="green";

    surface4=createSprite(520,590,140,20);
    surface4.shapeColor="orange";

    surface5=createSprite(670,590,140,20);
    surface5.shapeColor="red";

    box=createSprite(random(20,750),100,20,20);
    box.shapeColor="white";
    box.velocityX=5;
    box.velocityY=7;

    edges=createEdgeSprites();



    //create box sprite and give velocity

}

function draw() {
    background(rgb(0,0,0));
    //create edgeSprite
    

    if(surface1.isTouching(box)){
        box.shapeColor="blue";
    }

    if(surface2.isTouching(box)){
        box.shapeColor="purple";
        music.play();
    }

    if(surface4.isTouching(box)){
        box.shapeColor="orange";
    }

    if(surface5.isTouching(box)){
        box.shapeColor="red";
    }

    if(surface3.isTouching(box)){
        box.shapeColor="green";
        box.velocityX=0;
        box.velocityY=0;
        music.stop();
    }

    //add condition to check if box touching surface and make it box
    box.bounceOff(edges[0]);
    box.bounceOff(edges[1]);
    box.bounceOff(edges[2]);
    box.bounceOff(surface1);
    box.bounceOff(surface2);
    box.bounceOff(surface3);
    box.bounceOff(surface4);
    box.bounceOff(surface5);
    drawSprites();
}
