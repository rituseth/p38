class Game {
  constructor(){}

  get(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  Update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async Start(){
    if(gameState === 0){
      player = new Player();
      var playerCRef = await database.ref('playerC').once("value");
      if(playerCRef.exists()){
        playerC= playerCRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

w1 = createSprite (100,200,30,30);
w1.addImage("w1",wo1);
w1.scale = 0.5
w2 = createSprite(300,200,30,30)
w2.addImage("w2" , wo2)
w2.scale = 0.5
w3= createSprite(500,200,30,30)
w3.addImage("w3"  ,wo3)
w3.scale = 0.5
women=[w1,w2,w3];
  }

  play(){

    form.hide();
    textSize(30);
    text("Game Start", 120, 100)
    Player.getPlayerInfo();

    if(Allplayers !== undefined){
      background("white");
      image(track, 0,-displayHeight*4,displayWidth, displayHeight*5);
 
    var index = 0;
     var x=175;
     var y;


   
      for(var plr in Allplayers){
     
        index = index+1;  
        x= x+300;
        y= displayHeight - Allplayers[plr].distance;

        women[index-1].x = x;
        women[index-1].y = y;
     

        if(index === player.index){
          women[index-1].shapeColor = "green";

          camera.position.x= displayWidth/2;
          camera.position.y= women[index-1].y;
        }
        

 

        if (plr === "player" + player.index)
          fill("blue")
        else
          fill("red");

        display_position+=20;
        textSize(20);
        text(Allplayers[plr].name + ": " + Allplayers[plr].distance, 120,display_position)
      }
    }
    drawSprites();
    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=50
      player.Update();
    }

  }
  
}
