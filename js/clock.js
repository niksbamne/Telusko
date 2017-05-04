// JavaScript Document
var counter = 0;
var timeLeft = 180;

var timer = document.getElementById("clock");
var audio = document.getElementById("ding");

function convertSeconds(sec){
	var min = Math.floor(sec/60);
	var seconds = sec % 60;
	if(min<10){
		min = "0"+min;
	}
	if(seconds<10){
		seconds = "0"+seconds;
	}
	return min + ":" + seconds;
}
var interval = setInterval(timeIt,1000);
function timeIt(){
	counter++;
	timer.innerHTML = (convertSeconds((timeLeft-counter)));
	
	if(counter == timeLeft){
		clearInterval(interval);
		counter = 0;
		audio.play();
		
	}
}

