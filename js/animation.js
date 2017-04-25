// JavaScript Document
$(".carousel").carousel();

var navHeader,Ypos;

function YScroll(){
	navHeader = $("#navbarHeader");
	Ypos = window.pageYOffset;
	
	if(Ypos > 100){
		navHeader.css("height","70px");
	}else{
		navHeader.css("height","80px");
	}
}

window.addEventListener("scroll",YScroll);