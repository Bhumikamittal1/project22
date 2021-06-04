var starImg,bgImg;
var star, starBody;
//create variable for fairy sprite and fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	//load animation for fairy here
	fairyimage=loadanimation("images/fairyimage1.png","images/fairyimage2,png");
	fairysound = loadsound("sound/joymusic.mp3")
}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound
	fairysound.play();
	//create fairy sprite and add animation for fairy

	fairy = createsprite(130,520);
	fairy.addAnimation("flyingfairy",fairyimage)
	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  //write code to stop star in the hand of fairy

  if(star.y>470 && starBody.position.y>470){
	  matter.body.setstatic(starbody,true);
  }

  drawSprites();

}

function keyPressed() {

	if(keycode === right_arrow){
		fairy.x=fairy.x + 20;
	}

	if(keycode === left_arrow){
		fairy.x=fiary.x + 20;
	}

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//writw code to move fairy left and right
	
}
