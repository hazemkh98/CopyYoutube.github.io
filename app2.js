var vid=document.getElementById('myvideo');

window.addEventListener('load',function(){
	setTimeout(function()
	{ 
		vid.src="video2.mp4";}, 5000);
})


var coment=document.getElementById("show");

document.getElementById("show-btn").onclick = function() {
  document.getElementById("show").style.display = "block";
  document.getElementById("show-btn").style.display = "none";
 }



