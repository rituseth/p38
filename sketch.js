var canvas, backgroundImage;

var gameState = 0;
var playerC;
var Allplayers;
var distance = 0
var database;
var track
var form, player, game;
var w1,w2,w3,women

function preload (){
  wo1 = loadImage ("input-onlinepngtools.png")
  wo2 = loadImage ("input-onlinepngtools.png")
  wo3 = loadImage ("input-onlinepngtools.png")
  track = loadImage("track.png");
}
function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight -30);
  database = firebase.database();
  game = new Game();
  game.get();
  game.Start();
}


function draw(){
  
  if(playerC === 3){
    game.Update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}
