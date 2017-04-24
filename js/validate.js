// JavaScript Document

var name,email,regarding,code,message;

function validate(){
	name = $("#name").val();
	email = $("#email").val();
	regarding = $("#regarding").val();
	code = $("#code").val();
	message = $("#message").val();
	
	if(name == "your name.." || email == "your email.." || regarding == "Select --" || code == "your code.." || message == "your message .."){
		$("#feedbackForm p").text("Fields can't be empty");
	}
	
}

$("#submitBtn").click(function() {
	validate();
});