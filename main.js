var last_x,last_y,current_x,current_y;
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
var width1= screen.width-70;
var height1= screen.height-300;
if(width < 992) { document.getElementById("myCanvas").width = width1;
 document.getElementById("myCanvas").height = height1;
 }

var mouseEvent="empty";
canvas.addEventListener("touchstart", mytouchstart)
function mytouchstart(e) {
    last_x = e.touches[0].clientX - canvas.offsetLeft;
    last_y = e.touches[0].clientY - canvas.offsetTop;
} 

canvas.addEventListener("touchmove", mytouchmove)
function mytouchmove(e) {
current_x = e.touches[0].clientX - canvas.offsetLeft;
current_y = e.touches[0].clientY - canvas.offsetTop;
ctx.beginPath() ;
ctx.strokeStyle="red"
ctx.lineWidth=5;
ctx.moveTo(last_x,last_y);
ctx.lineTo(current_x, current_y);
ctx.stroke();
} 
