var canvas = document.querySelector("#myCanvas");
var ctx = canvas.getContext("2d");

ctx.save();			// save previous display state
//  set drawing properties for the sign
ctx.lineWidth = 32;	       // nice wide line		
ctx.lineJoin = "round";	   // rounded corners
ctx.strokeStyle = "red";
ctx.fillStyle = "red";

// create octagon linear path
ctx.beginPath();
ctx.moveTo(200, 100);
ctx.lineTo(350, 100);
ctx.lineTo(450, 200);
ctx.lineTo(450, 350);
ctx.lineTo(350, 450);
ctx.lineTo(200, 450);
ctx.lineTo(100, 350);
ctx.lineTo(100, 200);
ctx.closePath();

// fill the sign and draw wide red lines
ctx.fill();
ctx.stroke();	

// draw narrower white lines -- these will display on top of the wide red lines and make the red lines
// look like the outside edge -- a nice trick!
ctx.strokeStyle = "white";
ctx.lineWidth = 10;
ctx.stroke();

// draw STOP text
ctx.fillStyle  = "white";
ctx.font = "bold 100px Arial";
ctx.fillText( "STOP" ,140, 310);
ctx.restore();		// restore previous display state
   
     
//  set drawing properties for the sign
ctx.lineWidth = 32;	       // nice wide line		
ctx.lineJoin = "round";	   // rounded corners
ctx.strokeStyle = "#FF0000";
ctx.fillStyle = "#FF0000";

// create new circle
ctx.beginPath();
ctx.translate(440, -20);
            
ctx.arc(300, 300, 220, 0, 2 * Math.PI);  

// fill the sign 
ctx.fill();
//used white outline to narrow the circle radius further
ctx.strokeStyle = "white";

ctx.stroke();

// draw Do Not Enter text
ctx.fillStyle  = "white";
ctx.font = "bold 50px Arial";
ctx.fillText( "Do Not" ,210, 210);
ctx.fillText( "Enter" ,230, 400);
//clearRect is an option but I leared that the 
//background color will change the color of the cleared space.
ctx.clearRect(180, 270, 250, 50); 
ctx.restore();		// restore display   
            
            
var canvas2 = document.querySelector("#myCanvas2");
var context = canvas.getContext("2d");
            
 ctx.save();	// save previous display state
//  set drawing properties for the sign
ctx.lineWidth = 25;	       		
ctx.lineJoin = "round";	   // rounded corners
ctx.strokeStyle = "#0099ff";
ctx.fillStyle = "#0099ff";

// create square linear path
ctx.beginPath();
ctx.translate(-250, 450);

ctx.moveTo(190, 100);
ctx.lineTo(350, 100);
ctx.lineTo(450, 100)  
ctx.lineTo(450,450); 
ctx.lineTo(190,450);          

ctx.closePath();
            
 
//Draw White lines
ctx.fill();
ctx.stroke();	

// draw narrower white lines -- these will display on top of the wide red lines and make the red lines
// look like the outside edge -- a nice trick!
ctx.strokeStyle = "white";
ctx.lineWidth = 10;
            
ctx.stroke();
//Draw arrow shape
ctx.beginPath();     
ctx.moveTo(320, 150);
ctx.lineTo(420, 250);
ctx.lineTo(360, 250);
ctx.lineTo(360, 400);
ctx.lineTo(280, 400); 
ctx.lineTo(280, 250);
ctx.lineTo(220, 250);
ctx.closePath();

ctx.fillStyle = "white";
ctx.stroke();
ctx.fill();
// draw STOP text
ctx.fillStyle  = "#0099ff";
ctx.font = "bold 60px Arial";
ctx.fillText( "ONE WAY" ,175, 550);
ctx.restore();	
         
        