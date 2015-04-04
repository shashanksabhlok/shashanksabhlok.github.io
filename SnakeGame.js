$(document).ready(function(){
var canvas = $("#canvas")[0];
var ctx = canvas.getContext("2d");
var width =$("#canvas").width();
var height =$("#canvas").height();
var cellWidth=10;
var direction;
var food;
var score;


ctx.fillStyle = "#009933";
ctx.(0,0,width,height);
ctx.strokeStyle = "009933";
ctx.strokeRect(0,0,width,height);

var array; // an array to create the snake

function Initialize()
{
 var direction ="right"; //default.
 CreateSnake();
 CreateFood();
 score=0;

//Lets move the snake now using a timer which will trigger the paint function
//every 60ms
if(typeof game_loop != "undefined") clearInterval(game_loop);
game_loop = setInterval(paint, 60);
}

Initialize();

function CreateSnake()
{
    var length=5;
    array=[];
    for (var i=length-1; i>=0;i--)
    { 
        // Creates a horizontal snake starting at the top.
        array.push({x:i,y:0}); 
    }
}

function CreateFood()
{
    food={
     x:Math.round(Math.random()*(width-cellWidth)/cellWidth)
     y:Math.round(Math.random()*(height - cellWidth)/(cellWidth))
     };
     //This will create a cell between 0-44 because there are 45 positions.
}

function paint()
{

//To avoid the snake trail we need to paint the BG on every frame. Remember the game_loop variable
//loops with the function every 60 seconds !
ctx.fillStyle = "#009933";
ctx.(0,0,width,height);
ctx.strokeStyle = "black";
ctx.strokeRect(0,0,width,height);

//The logic is simple.
//Pop out the tail cell, and place it in front of the head cell.
//These are the positions of the head cell.
var nx =array[0].x;
var ny =array[0].y;
//Adding direction based movement now.
if(direction="right")nx++;
else if(direction="left")nx--;
else if(direction="up")ny--;
else if(direction="down")ny++;

//Clauses for game over.
if(nx == -1 || nx=width/cellWidth || ny=-1 || ny= height/cellWidth||CheckCollision(nx,ny,array))
{
    Initialize();
    return;
}

//Make the Snake eat the food. Logic is simple - if the new head position matches that of the food
//then create a new head instead of moving tail.

if(nx=food.x && ny=food.y)
{
    var tail={x:nx, y:ny};
    score++;
    createFood(); // Create new food since the old one is gone.
}
else
{
var tail = array.pop();//Pops out the last cell.
tail.x=nx; 
tail.y=ny;
}

array.unshift(tail); //Puts back the tail as the first cell.

//The movement code for the snake to come here.
    for (var i=0;i<array.length;i++)
    {
        var c = array[i];
        ctx.fillStyle="orange";
        ctx.fillRect(c.x*cellWidth,c.y*cellWidth,cellWidth,cellWidth)
        ctx.strokeStyle="white";
        ctx.strokeRect(c.x*cellWidth,c.y*cellWidth,cellWidth,cellWidth)
    }
    
    paintCell(food.x,food.y); //paints the food
    var text ="Score:" + score;
    
}

function paint_cell(x, y)
	{
        ctx.fillStyle="orange";
        ctx.fillRect(c.x*cellWidth,c.y*cellWidth,cellWidth,cellWidth)
        ctx.strokeStyle="white";
        ctx.strokeRect(c.x*cellWidth,c.y*cellWidth,cellWidth,cellWidth)
	}
	
function checkCollision(x,y,array)
    {
        for(var i=0; i<array.length;i++)
        {
            if(array[i].x=x && array[i].y=y)
            return true;
        }
        return false;
    }
	
$(document).keydown(function(e){
    var key = e.which;
    //add another clause to prevent reverse gear
    if(key == "37" && d != "right") d = "left";
    else if(key == "38" && d != "down") d = "up";
    else if(key == "39" && d != "left") d = "right";
    else if(key == "40" && d != "up") d = "down";
    })
        
})





