class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h3');
    this.reset = createButton("reset")
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
  }

  display(){
    var title = createElement('h2')
    title.html("Running Game (WOMEN)");
    title.position(displayWidth/2 -50, 0);
    this.reset.position(displayWidth-180 , 30)
    this.input.position(displayWidth/2, displayHeight/2-70);
    this.button.position(displayWidth /2 + 40, displayHeight/2);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerC+=1;
      player.index = playerC;
      player.update();
      player.updateCount(playerC);
      this.greeting.html("HI " + player.name)
      this.greeting.position(displayWidth/2-40, displayHeight/4);
    });

  }
}
