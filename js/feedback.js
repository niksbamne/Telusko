
/*Calling the rateYo*/
$(document).ready(function() {
    $("#rateYo").rateYo();
});

/*Sliding code input element*/
$("#codeContainer").hide();
$("#yes").click(function() {
    $("#codeContainer").slideDown(500);
});
$("#no").click(function() {
    $("#codeContainer").slideUp(500);
});