/* NAMESPACE */
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Engine = Matter.Engine;

/* variáveis */
let motor;  // motor da fisica
let mundo;  // mundo
let bola;   // bola
let chao;   // chao


function setup() {
  createCanvas(400,400);
  
  // criar o motor e o mundo que segue as leis do motor da fisica
  motor = Engine.create();
  mundo = motor.world;
  
  // criar uma bola
  bolaOptions = {
    restitution: 0.95,
    frictionAir: 0.01
  };
  
  bola = Bodies.circle(200,20,20,bolaOptions);
  World.add(mundo, bola);

  // criar o chao
  chaoOptions = {
    isStatic: true
  };

  chao = Bodies.rectangle(200,390,200,10,chaoOptions);
  World.add(mundo, chao);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  // atualiza o motor
  Engine.update(motor);

  // desenhar os corpos criados
  ellipse(bola.position.x, bola.position.y,20);
  rect(chao.position.x, chao.position.y, 200, 10);
  
}

