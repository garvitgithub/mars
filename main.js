canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
roverwidth=100;
roverheight=90;
arraymars=["mars11.jpg","mars22.jpeg","mars33.jpeg","mars44.jpeg","mars55.jpeg","mars66.jpg"];
randomnumber=Math.floor(Math.random()*6);
console.log(randomnumber);

bgimage=arraymars[randomnumber];
console.log("bgimage= "+bgimage);

roverimage="rover (1).png";
roverx=10;
rovery=10;















function add()
{
bgimagetag=new Image();
bgimagetag.onload=uploadbackground;
bgimagetag.src=bgimage;

roverimagetag=new Image();
roverimagetag.onload=uploadrover;
roverimagetag.src=roverimage;
}
function uploadbackground()
{
ctx.drawImage(bgimagetag,0,0,canvas.width,canvas.height);
}
function uploadrover()
{
ctx.drawImage(roverimagetag,roverx,rovery,roverwidth,roverheight);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e)
{
keypressed=e.keyCode;console.log(keypressed);
if(keypressed=='38')
{
up();console.log("up");
}
if(keypressed=='40')
{
down();console.log("down");
}
if(keypressed=='37')
{
left();console.log("left");
}
if(keypressed=='39')
{
right();console.log("right");
}
}

function up()
{
if(rovery>=0)
{
rovery=rovery-10;
console.log("when up key is pressed,x= "+roverx+" y= "+rovery);
uploadbackground();
uploadrover();
}
}
function down()
{
if(rovery<=500)
{
rovery=rovery+10;
console.log("when down key is pressed,x= "+roverx+" y= "+rovery);
uploadbackground();
uploadrover();
}
}
function left()
{
if(roverx>=0)
{
roverx=roverx-10;
console.log("when left key is pressed,x= "+roverx+" y= "+rovery);
uploadbackground();
uploadrover();
}
}
function right()
{
if(roverx<=700)
{
roverx=roverx+10;
console.log("when right key is pressed,x= "+roverx+" y= "+rovery);
uploadbackground();
uploadrover();
}
}