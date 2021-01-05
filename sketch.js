// 3 things from matter.js 
// engine, world, bodies 
// namespacing - it is a concept which helps us in renaming certain terms from the library 

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, object; 
function setup() {
  createCanvas(400,400);

engine = Engine.create();
world = engine.world;

var properties ={

isStatic: true,

}

object = Bodies.rectangle(200, 100, 50,50, properties);
World.add(world, object);



}

function draw() {
  background("black");  

  Engine.update(engine);


  console.log(object.position);

  rect(object.position.x, object.position.y, 50,50 )
 
}