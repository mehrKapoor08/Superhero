var canvas=new fabric.Canvas("myCanvas");
var blockImageWidth=30;
var blockImageHeight=30;
var playerX= 10;
var playerY=10;
var playerObject="";

function playerUpdate(){
    fabric.Image.fromURL("player.png" , function(Img){
        playerObject=Img;
        playerObject.scaleToWidth(150);
        playerObject.scaleToHeight(140);
        playerObject.set({
            top:playerY,
            left:playerX
        });
        canvas.add(playerObject);
    });
};
function newImage(getImage){
fabric.Image.fromURL(getImage,function(Img){

    blockImageObject=Img;
    blockImageObject.scaleToWidth(blockImageWidth);
    blockImageObject.scaleToHeight(blockImageHeight);
    blockImageObject.set({
        top:playerY,
        left:playerX
    });
    canvas.add(blockImageObject); 
});

}