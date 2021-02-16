class Game {
    constructor(){
      }
//anonymus function 
    getState(){
    database.ref("gamestate").on("value", function (data){
        gamestate=data.val()
    })

    }
    
    updateState(state){
     
    database.ref("/").set({gamestate : state})
    }
    
    async start(){

       if (gameState === 0){
       player=new Player();
       var playercountref=database.ref("playercount").once("value");

       if (playercountref=exists()){
         playercount=playercountref.val();
         player.getCount();
}

       form=new Form()
       form.display();
    }

    }
    play(){
   form.hide();

   textSize("22")
   text("Game Start",200,300);
    }
}