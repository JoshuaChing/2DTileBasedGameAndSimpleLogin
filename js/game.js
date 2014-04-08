(function()
{
	var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
	window.requestAnimationFrame = requestAnimationFrame;
})();

//declaring variables
var canvas = document.getElementById("canvas"),
	ctx = canvas.getContext("2d"),
	mwidth = 1000;
	mheight = 600;
	offsetx = 0;
	offsety = 0;
	width = 500;
	height = 500;
	player = {
		xx: 240,
		yy: 240,
		x : 240,
		y : 240,
		width: 20,
		height: 20,
		speed: 10,
		mhp : 100,
		hp : 100,
		mmp : 100,
	},
	keys =[];

//set canvas size
canvas.width = width;
canvas.height = height;


//player movement
function playerMovement(){
	if (keys[87]){ //up
		//player.y -= player.speed;
		if (!(player.yy <= 0 + player.height)){
			offsety += player.speed;
			player.yy -= player.speed;
		}	
	}
	else if (keys[68]){ //right
		//player.x += player.speed;
		if (!(player.xx >= mwidth - player.width - player.width)){
			offsetx -= player.speed;
			player.xx += player.speed;
		}
	}
	else if (keys[65]){ //left
		//player.x -= player.speed;
		if (!(player.xx <= 0 + player.width)){
			offsetx += player.speed;
			player.xx -= player.speed;
		}
	}
	else if (keys[83]){ //down
		//player.y += player.speed;
		if (!(player.yy >= mheight - player.height - player.height)){
			offsety -= player.speed;
			player.yy += player.speed;
		}
	}

	//testing purposes
	if (keys[38]){
		if (player.hp >= player.mhp) //set maximum hp
			player.hp = player.mhp;
		else
			player.hp++;
	}
	if (keys[40]){
		if (player.hp <= 0) //set minimum hp
			player.hp = 0;
		else
			player.hp--;
	}
}


//draw player
function playerDraw(){
	ctx.fillStyle = "maroon";
	ctx.fillRect(player.x,player.y,player.width,player.height);
	ctx.font ="20px Calibri";
	ctx.fillText("You",player.x - 5,player.y-(player.height/2));
	//draw health bars

	ctx.fillStyle ="black";
	ctx.fillRect(38,38,144, 24);
	ctx.fillStyle = "red";
	ctx.fillRect(40,40,player.hp/player.mhp*140,20);
}


//draw grid for testing purposes
function gridDraw(){
	ctx.strokeStyle = "gray";
	for (var i=0; i < 500; i += 20){
		for (var j=0; j < 500; j +=20){		
			ctx.strokeRect(i,j,20,20);
		}
	}
	ctx.strokeStyle = "red";
	ctx.strokeRect(140,140,220,220);
}

//draw one row of tiles
function rowDraw(row, column, width, height){
	for (var i = 0; i < column.length; i++){
		var xvalue = (i*width)+ offsetx;
		var yvalue = row + offsety;
		if (column.charAt(i) == 'b'){
			ctx.fillStyle = "black";
		}
		else if (column.charAt(i) =='g'){
			ctx.fillStyle = "green";
		}
		else if (column.charAt(i) =='w'){
			ctx.fillStyle = "blue";
		}
		else if (column.charAt(i) =='l'){
			ctx.fillStyle = "#A56A26";
		}
		else{
			ctx.fillStyle = "gray";
		}
		ctx.fillRect(xvalue,yvalue,width,height)
	}
}

//update canvas
function update(){
	ctx.clearRect(0,0,width,height);
	playerMovement();
	drawMap1();
	playerDraw();
	//gridDraw();
	requestAnimationFrame(update)
}

document.body.addEventListener("keydown", function(e) {
    keys[e.keyCode] = true;
});
 
document.body.addEventListener("keyup", function(e) {
    keys[e.keyCode] = false;
});

window.addEventListener("load", function(){
  update();
});


//draw map 1
function drawMap1(){
	//1000x600
	rowDraw(  0,"bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",20,20);
	rowDraw( 20,"bggggggggggggggggggggggggggggggggggggggggggggggggb",20,20);
	rowDraw( 40,"bggggggggggggggggggggggggggggggggggggggggggggggggb",20,20);
	rowDraw( 60,"bgggggwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwgggggggggggggb",20,20);
	rowDraw( 80,"bgggglllllllllllllllllllllllllllllwwgggggggggggggb",20,20);
	rowDraw(100,"bgggglllllllllllllllllllllllllllllwwgggggggggggggb",20,20);
	rowDraw(120,"bgggggwwwwwwwwwwwwwwwwwwwwwwwwwwllwwgggggggggggggb",20,20);
	rowDraw(140,"bggggggggggggggggggggggggggggggwllwwgggggggggggggb",20,20);
	rowDraw(160,"bggggggggggggggggggggggggggggggwllwwgggggggggggggb",20,20);
	rowDraw(180,"bggggggggggggggggggggggggggggggwllwwgggggggggggggb",20,20);
	rowDraw(200,"bggggggggggggggggggggggggggggggwllwwgggggggggggggb",20,20);
	rowDraw(220,"bggggggggggggggggggggggggggggggwllwwgggggggggggggb",20,20);
	rowDraw(240,"bggggggggggggggggggggggggggggggwllwwgggggggggggggb",20,20);
	rowDraw(260,"bggggggggggggggggggggggggggggggwllwwgggggggggggggb",20,20);
	rowDraw(280,"bggggggggggggggggggggggggggggggwllwwgggggggggggggb",20,20);
	rowDraw(300,"bggggggggggggggggggggggggggggggwllwwgggggggggggggb",20,20);
	rowDraw(320,"bggggggggggggggggggggggggggggggwllwwgggggggggggggb",20,20);
	rowDraw(340,"bggggggggggggggggggggggggggggggwllwwgggggggggggggb",20,20);
	rowDraw(360,"bggggggggggggggggggggggggggggggwllwwgggggggggggggb",20,20);
	rowDraw(380,"bggggggggggggggggggggggggggggggwllwwgggggggggggggb",20,20);
	rowDraw(400,"bggggggggggggggggggggggggggggggwllwwgggggggggggggb",20,20);
	rowDraw(420,"bggggggggggggggggggggggggggggglllllllggggggggggggb",20,20);
	rowDraw(440,"bggggggggggggggggggggggggggggglllllllggggggggggggb",20,20);
	rowDraw(460,"bggggggggggggggggggggggggggggggwwwwwgggggggggggggb",20,20);
	rowDraw(480,"bggggggggggggggggggggggggggggggggggggggggggggggggb",20,20);
	rowDraw(500,"bggggggggggggggggggggggggggggggggggggggggggggggggb",20,20);
	rowDraw(520,"bggggggggggggggggggggggggggggggggggggggggggggggggb",20,20);
	rowDraw(540,"bggggggggggggggggggggggggggggggggggggggggggggggggb",20,20);
	rowDraw(560,"bggggggggggggggggggggggggggggggggggggggggggggggggb",20,20);
	rowDraw(580,"bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",20,20);
}