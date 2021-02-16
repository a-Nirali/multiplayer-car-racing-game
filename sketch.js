var database;
var gamestate;

var game, form ;
function setup(){
  database = firebase.database();
  
  createCanvas(500,500);

game= new game ();
game.getState()

form = new form ();
form.display()
}

function draw(){
  background("white");

  if (playercount === 4){
    game.update(1);
  }


  if (gameState === 1){
clear()
game.play();
  }

  

  
}


