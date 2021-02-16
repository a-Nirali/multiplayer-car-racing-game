class Form {
    constructor(){
this.input=createInput("enter you name");
this.button=createButton("start");
this.greeting=createElement("h4");
}
hide(){
    this.input.hide();
    this.button.hide();
    this.greeting.hide();
}


    display(){
        var heading = createElement ( "h4");
        heading.html("Car Racing Game")
        heading.position(150,20);

        var input = createInput ("enter your name")
        this.input.position(150,150)



        var button = createButton ("start")
         this.button.position(180,200)

       
         this.button.mousePressed(function ()=>){
             this.input.hide();
             this.button.hide();
             player.name=this.input.value();
             playercount=playercount+1;
             player.updateCount(playercount);


             var greeting = createElement("h2");
             this.greeting.html("hello "+ player.name )
             this.greeting.position(250,250)
         };
    }
}