
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var chao1,chao2,chao3,chao4,chao5,chao6,chao7,chao8,chao9,chao10;
var chao11,chao12,chao13,chao14,chao15,chao16,chao17,chao18,chao19,chao20;
var chao21,chao22,chao23,chao24,chao25,chao26;
var labirintoGp
var mistica,misticaImg;
var fogo,fogo2,fogo3,fogo4,fogo5,fogo6, fogoImg;
var fireGp
var gameOver,gameOverImg

function preload()
{
	misticaImg = loadImage("mistica.png")
  fogoImg=loadImage("fogo2.png")
  gameOverImg=loadImage("gameOver.png")
}

function setup() {
  createCanvas(1500, 700);
  engine = Engine.create();
  world = engine.world;

  //x, y, largura, altura
  //Crie os Corpos aqui.
//   chao1 = new Ground(10, 10, 3000, 20);
//   chao2 = new Ground(10, 100, 300, 20);
//   chao3 = new Ground(275, 175, 20, 155);
//   chao4 = new Ground(10, 390, 20, 600);
//   chao5 = new Ground(10, 689, 3000, 20);
//   chao6 = new Ground(1490, 10, 20, 1150);
//   chao7 = new Ground(201, 250, 170, 20);
//   chao8 = new Ground(400, 175, 20, 350);
//   chao9 = new Ground(310, 351, 200, 20);
//   chao10 = new Ground(110, 325, 20, 290);

//   chao11 = new Ground(380, 590, 555, 20);
//   chao12 = new Ground(320, 460, 400, 20);
//   chao13 = new Ground(510, 295, 20, 350);
//   chao14 = new Ground(650, 120, 300, 20);
//   //começei a alterar daqui
//   chao15 = new Ground(790, 395, 20, 568);
//   chao16 = new Ground(650, 400, 20, 400);
//   chao17 = new Ground(900, 250, 20, 500);
//   chao18 = new Ground(1000, 595, 220, 20);
//   chao19 = new Ground(1100, 350, 20, 510);
//   chao20 = new Ground(1000, 300, 20, 400);
  
//   chao21 = new Ground(1140, 100, 300, 20);
//   chao22 = new Ground(1390, 340, 20, 500);
//   chao23 = new Ground(1300, 290, 20, 400);
//   chao24 = new Ground(1200, 450, 20, 500);
//   chao25 = new Ground(1250, 300, 120, 20);
//   chao26 = new Ground(1395, 580, 210, 20);

// criando os sprites do labirinto
  chao1 = createSprite(10, 10, 3000, 20);
  chao1.shapeColor="#412369";
  chao2 =createSprite(10, 100, 300, 20);
  chao2.shapeColor="skyblue";
  chao3 = createSprite(275, 175, 20, 155);
  chao3.shapeColor="darkblue";
  chao4 = createSprite(10, 390, 20, 600);
  chao4.shapeColor="pink";
  chao5 = createSprite(10, 689, 3000, 20);
  chao5.shapeColor="fuchsia";
  chao6 = createSprite(1490, 10, 20, 1150);
  chao6.shapeColor="darkorange";
  chao7 = createSprite(201, 250, 170, 20);
  chao7.shapeColor="lightgreen";
  chao8 = createSprite(400, 175, 20, 350);
  chao8.shapeColor="hotpink";
  chao9 = createSprite(310, 351, 200, 20);
  chao9.shapeColor="#1eebd3";
  chao10 = createSprite(110, 325, 20, 290);
  chao10.shapeColor="red";
  chao11 = createSprite(380, 590, 555, 20);
  chao11.shapeColor="#1127b8";
  chao12 = createSprite(320, 460, 400, 20);
  chao12.shapeColor="#939ee6";
  chao13 = createSprite(510, 295, 20, 350);
  chao13.shapeColor="violet";
  chao14 = createSprite(650, 120, 300, 20);
  chao14.shapeColor="#78d91e";
  chao15 = createSprite(790, 394, 20, 568);
  chao15.shapeColor="#213310";
  chao16 = createSprite(650, 400, 20, 400);
  chao16.shapeColor="#0d6965";
  chao17 = createSprite(900, 250, 20, 500);
  chao17.shapeColor="#0dfcf4";
  chao18 = createSprite(1000, 595, 220, 20);
  chao18.shapeColor="#8e05f0";
  chao19 = createSprite(1100, 350, 20, 510);
  chao19.shapeColor="#b67ede";
  chao20 = createSprite(1000, 300, 20, 400);
  chao20.shapeColor="#cf0ea8";  
  chao21 = createSprite(1140, 100, 300, 20);
  chao21.shapeColor="#660452";
  chao22 = createSprite(1390, 340, 20, 500);
  chao22.shapeColor="#e85b56";
  chao23 = createSprite(1300, 290, 20, 400);
  chao23.shapeColor="#91060f";
  chao24 = createSprite(1200, 450, 20, 500);
  chao24.shapeColor="#e67009";
  chao25 = createSprite(1250, 300, 120, 20);
  chao25.visible=false
  chao26 = createSprite(1395, 580, 210, 20);
  chao26.shapeColor="#412369";   

// criando a mistica
  mistica = createSprite(40,55,50,50);
  mistica.addImage(misticaImg);
  mistica.scale=0.25
  //mostrar e alterar o raio colisor
  mistica.debug=false
  mistica.setCollider("rectangle",0,0,100,200) 
  //criando o grupo
  labirintoGp = new Group()
  fireGp= new Group();
  //adicionando os sprites da parede ao grupo
  labirintoGp.add(chao1)
  labirintoGp.add(chao2)
  labirintoGp.add(chao3)
  labirintoGp.add(chao4)
  labirintoGp.add(chao5)
  labirintoGp.add(chao6)
  labirintoGp.add(chao7)
  labirintoGp.add(chao8)
  labirintoGp.add(chao9)
  labirintoGp.add(chao10)
  labirintoGp.add(chao11)
  labirintoGp.add(chao12)
  labirintoGp.add(chao13)
  labirintoGp.add(chao14)
  labirintoGp.add(chao15)
  labirintoGp.add(chao16)
  labirintoGp.add(chao17)
  labirintoGp.add(chao18)
  labirintoGp.add(chao19)
  labirintoGp.add(chao20)
  labirintoGp.add(chao21)
  labirintoGp.add(chao22)
  labirintoGp.add(chao23)
  labirintoGp.add(chao14)
  labirintoGp.add(chao25)
  labirintoGp.add(chao26)

  //criando obstaculos

  fogo = createSprite(30,315,50,50);
  fogo.addImage(fogoImg);
  fogo.scale=0.1
  fogo.debug=false
  //fogo.setCollider("rectangle",0,0,10,20) 
  fogo.velocityX=0.8

  fogo2 = createSprite(433,160,50,50);
  fogo2.addImage(fogoImg);
  fogo2.scale=0.1
  fogo2.debug=false
  //fogo2.setCollider("rectangle",0,0,10,20) 
  fogo2.velocityX=0.8

  fogo3 = createSprite(930,160,50,50);
  fogo3.addImage(fogoImg);
  fogo3.scale=0.1
  fogo3.debug=false
 // fogo3.setCollider("rectangle",0,0,10,20) 
  fogo3.velocityX=0.8

  fogo4 = createSprite(1132,315,50,50);
  fogo4.addImage(fogoImg);
  fogo4.scale=0.1
  fogo4.debug=false
 // fogo4.setCollider("rectangle",0,0,10,20) 
  fogo4.velocityX=0.8

  fogo5 = createSprite(1335,430,50,50);
  fogo5.addImage(fogoImg);
  fogo5.scale=0.1
  fogo5.debug=false
  //fogo5.setCollider("rectangle",0,0,10,20) 
  fogo5.velocityX=0.8

  fogo6 = createSprite(670,395,50,50);
  fogo6.addImage(fogoImg);
  fogo6.scale=0.1
  fogo6.debug=false
  //fogo6.setCollider("rectangle",0,0,10,20) 
  fogo6.velocityX=0.8

  fireGp.add(fogo)
  fireGp.add(fogo2)
  fireGp.add(fogo3)
  fireGp.add(fogo4)
  fireGp.add(fogo5)
  fireGp.add(fogo6)  
  fireGp.setColliderEach("circle",0,0,10)

  gameOver=createSprite(650,50,100,10)
  gameOver.addImage(gameOverImg)
  gameOver.visible=false
  
  }

//Egroup.setColorEach("cor")

function draw() {
  background(0);

//   chao1.display();
//   chao2.display();
//   chao3.display();
//   chao4.display();
//   chao5.display();
//   chao6.display();
//   chao7.display();
//   chao8.display();
//   chao9.display();
//   chao10.display();

//   chao11.display();
//   chao12.display();
//   chao13.display();
//   chao14.display();
//   chao15.display();
//   chao16.display();
//   chao17.display();
//   chao18.display();
//   chao19.display();
//   chao20.display();

//   chao21.display();
//   chao22.display();
//   chao23.display();
//   chao24.display();
//   chao25.display();
//   chao26.display();

  if(mistica.isTouching(labirintoGp)){
	mistica.x=40;
	mistica.y=55;
  }

  if (mistica.x >= 1500) {
	fill("red");
	textSize(60);
	textAlign(CENTER,TOP)
	text("you win", 650,50)
  fireGp.setVelocityXEach(0)
  }

  if (mistica.isTouching(fireGp)) {
   
    mistica.destroy()
    gameOver.visible=true
    // fill("red")
    // stroke(20)
    // textAlign(CENTER,TOP)
    // textSize(60)
    // text("GAME OVER!!!",650,50)
   
    //mistica.visible=false 
    fireGp.setVelocityXEach(0)
   
   }

  move()
  Obstacle()
 // labirintoCollision()

  drawSprites();
  fill ("fuchsia");
  textSize(40);
  text("X: "+mouseX+"/ Y: "+mouseY,mouseX,mouseY);
}

function move(){
	if (keyIsDown(UP_ARROW) || keyDown("w")) {
		mistica.y-=3
	}

	if (keyIsDown(DOWN_ARROW)|| keyDown("s")) {
		mistica.y+=3
	}

	if (keyIsDown(LEFT_ARROW)|| keyDown("a")) {
		mistica.x-=3
	}

	if (keyIsDown(RIGHT_ARROW)|| keyDown("d")) {
		mistica.x+=3
	}

	
}

//function labirintoCollision(){

	// labirintoGp.add(chao1)
	// labirintoGp.add(chao2)
	// labirintoGp.add(chao3)
	// labirintoGp.add(chao4)
	// labirintoGp.add(chao5)
	// labirintoGp.add(chao6)
	// labirintoGp.add(chao7)
	// labirintoGp.add(chao8)
	// labirintoGp.add(chao9)
	// labirintoGp.add(chao10)
	// labirintoGp.add(chao11)
	// labirintoGp.add(chao12)
	// labirintoGp.add(chao13)
	// labirintoGp.add(chao14)
	// labirintoGp.add(chao15)
	// labirintoGp.add(chao16)
	// labirintoGp.add(chao17)
	// labirintoGp.add(chao18)
	// labirintoGp.add(chao19)
	// labirintoGp.add(chao20)
	// labirintoGp.add(chao21)
	// labirintoGp.add(chao22)
	// labirintoGp.add(chao23)
	// labirintoGp.add(chao14)
	// labirintoGp.add(chao25)
	// labirintoGp.add(chao26)

//}

function Obstacle(){
//   fogo = createSprite(30,315,50,50);
//   fogo.addImage(fogoImg);
//   fogo.scale=0.1
//   fogo.debug=false
//   //fogo.setCollider("rectangle",0,0,10,20) 
//   fogo.velocityX=0.3

//   fogo2 = createSprite(433,160,50,50);
//   fogo2.addImage(fogoImg);
//   fogo2.scale=0.1
//   fogo2.debug=false
//   //fogo2.setCollider("rectangle",0,0,10,20) 
//   fogo2.velocityX=0.3

//   fogo3 = createSprite(330,520,50,50);
//   fogo3.addImage(fogoImg);
//   fogo3.scale=0.1
//   fogo3.debug=false
//  // fogo3.setCollider("rectangle",0,0,10,20) 
//   fogo3.velocityY=0.3

//   fogo4 = createSprite(1132,315,50,50);
//   fogo4.addImage(fogoImg);
//   fogo4.scale=0.1
//   fogo4.debug=false
//  // fogo4.setCollider("rectangle",0,0,10,20) 
//   fogo4.velocityX=0.3

//   fogo5 = createSprite(1335,430,50,50);
//   fogo5.addImage(fogoImg);
//   fogo5.scale=0.1
//   fogo5.debug=false
//   //fogo5.setCollider("rectangle",0,0,10,20) 
//   fogo5.velocityX=0.3

//   fogo6 = createSprite(670,395,50,50);
//   fogo6.addImage(fogoImg);
//   fogo6.scale=0.1
//   fogo6.debug=false
//   //fogo6.setCollider("rectangle",0,0,10,20) 
//   fogo6.velocityX=0.3

//   fireGp.add(fogo)
//   fireGp.add(fogo2)
//   fireGp.add(fogo3)
//   fireGp.add(fogo4)
//   fireGp.add(fogo5)
//   fireGp.add(fogo6)  
//   fireGp.setColliderEach("circle",0,0,10)

fogo.bounceOff(chao10);
fogo.bounceOff(chao4);

fogo2.bounceOff(chao8);
fogo2.bounceOff(chao13);

fogo3.bounceOff(chao17);
fogo3.bounceOff(chao20);

fogo4.bounceOff(chao24);
fogo4.bounceOff(chao19);

fogo5.bounceOff(chao23);
fogo5.bounceOff(chao22);

fogo6.bounceOff(chao15);
fogo6.bounceOff(chao16);

}

// fogo1 tem que colider com a parede 10,4
// fogo2 tem que colider com a parede 8,13
// fogo3 tem que colider com a parede 17,20
// fogo4 tem que colider com a parede 24,19
// fogo5 tem que colider com a parede 22,23
// fogo6 tem que colider com a parede 15,16

// function gameOver(){
//   mistica.destroy()
//   fill("red")
//   stroke(20)
//   textAlign(CENTER,TOP)
//   textSize(60)
//   text("GAME OVER, YOU LOSER!!!",650,50)
// }