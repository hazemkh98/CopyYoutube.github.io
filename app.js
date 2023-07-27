var menuIcon=document.querySelector(".menu-icon");
var sidebar=document.querySelector(".sidebar");
var container=document.querySelector(".container");

menuIcon.onclick=function(){
	sidebar.classList.toggle("small-sidebar");
	container.classList.toggle("larg-container");
}

var vid=document.getElementById('myvideo');

window.addEventListener('load',function(){
	setTimeout(function()
	{ 
		vid.src="video2.mp4";}, 5000);
})


var vids=document.getElementById('myvideos');
var vids2=document.getElementById('myvideos2');

document.getElementById("myvideos").addEventListener("mouseover", mouseOver);
document.getElementById("myvideos").addEventListener("mouseout", mouseOut);

document.getElementById("myvideos2").addEventListener("mouseover", mouseOver2);
document.getElementById("myvideos2").addEventListener("mouseout", mouseOut2);

function mouseOver() {
  vids.play();
}

function mouseOut() {
  vids.load();

}

function mouseOver2() {
  vids2.play();
}

function mouseOut2() {
  vids2.load();

}




