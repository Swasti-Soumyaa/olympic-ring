canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");




canvas.addEventListener("mousedown",myMousedown);

function myMousedown(e){
    console.log(e);
    mouse_x=e.clientX-canvas.offsetLeft;
    mouse_y=e.clientY-canvas.offsetTop;

    circle(mouse_x,mouse_y);

    

}

function circle(x,y){

    ctx.beginPath();
    ctx.strokeStyle=colour;
    ctx.lineWidth=5;
    ctx.arc(x,y,15,0,2*Math.PI);
    ctx.rect(80,130,430,200);
    ctx.stroke();   
}




colour="blue";
ctx.beginPath();
ctx.strokeStyle=colour;
ctx.lineWidth=5;
ctx.arc(160,200,50,0,2*Math.PI);
ctx.stroke();

colour="black";
ctx.beginPath();
ctx.strokeStyle=colour;
ctx.lineWidth=5;
ctx.arc(280,200,50,0,2*Math.PI);
ctx.stroke();


colour="red";
ctx.beginPath();
ctx.strokeStyle=colour;
ctx.lineWidth=5;
ctx.arc(400,200,50,0,2*Math.PI);
ctx.stroke();

colour="yellow";
ctx.beginPath();
ctx.strokeStyle=colour;
ctx.lineWidth=5;
ctx.arc(222,260,50,0,2*Math.PI);
ctx.stroke();

colour="green";
ctx.beginPath();
ctx.strokeStyle=colour;
ctx.lineWidth=5;
ctx.arc(343,260,50,0,2*Math.PI);
ctx.stroke();

colour="black";
ctx.beginPath();
ctx.lineWidth=5;
ctx.rect(80,130,430,200);
ctx.stroke();


