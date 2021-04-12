class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
  }

  getCount(){
    var playerCRef = database.ref('playerC');
    playerCRef.on("value",(data)=>{
      playerC = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerC: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      Allplayers = data.val();
    })
  }
}
