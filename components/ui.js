<script>  
var canvas = document.getElementById('timeline');
if (canvas.getContext) 
 {
  var context = canvas.getContext('2d');
  // Reset the current path
  context.beginPath(); 
  // Staring point (10,45)
   context.moveTo(10,45);
  // End point (180,47)
  context.lineTo(580,47);
  // Make the line visible
  context.stroke();
  
  //Draw some text
  context.fillText("Lorem ipsum dolor", 40, 20);
  //Draw a node
  context.beginPath();
  context.arc(40, 45, 10, 0, 2 * Math.PI);
  context.fill();
  
  //Draw some text
  context.fillText("Lorem ipsum dolor", 240, 60);
  //Draw a node
  context.beginPath();
  context.arc(240, 45, 10, 0, 2 * Math.PI);
  context.fill();
  
  //Draw some text
  context.fillText("Lorem ipsum dolor", 440, 20);
  //Draw a node
  context.beginPath();
  context.arc(440, 45, 10, 0, 2 * Math.PI);
  context.fill();
   }
	 
	 function addDates() {
	 	 
		
	 }
</script>