var mario;
var cenario;
var goomba;
var play;
var chao;


function preload(){
mario=loadImage("./img/mario.png");
cenario=loadImage("./img/cenario.png");
goomba=loadImage("./img/goomba.png");
}


function setup() {
  createCanvas(800,400);
  chao=createSprite(400,405,800,40);
  chao.visible=false;
  play=createSprite(50, 325, 50, 50);
  play.addImage(mario);
  play.scale=0.2
}

function draw() {
  background("black"); 
  image(cenario,0,0,800,400);
  if(keyDown("w")&&play.y>=300){
    play.velocityY=-10;
  }
  play.velocityY+=1
  play.collide(chao);
  drawSprites();
}