class Player{

    constructor(){

    }
     
    getCount(){
var playercountref=database.ref("playercount");
playercountref.on("value",(data)=>{
    playercount=data.val();
})

updateCount(count){

    database.ref("/").update({
        playercount:count
    });
}

    }
